import React, { ReactNode, useCallback, useMemo } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { Route } from '../../react-router';
import { Platform, StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '@bma98/fractal-ui';
import { useInitialRenderDone } from './hooks/useInitialRenderDone';
import { StackScreenWebModalContainer } from '../stackNavigation/StackScreenWebModalContainer';
import { StackScreenWebContainer } from '../stackNavigation/StackScreenWebContainer';
import { StackPresentationTypeProvider } from '../../context';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | ReactNode;
    stackPresentation?: StackPresentationTypes;
    isTabScreen?: boolean;
    isRootRoute?: boolean;
}

export function NavigationRoute({
    path = '/',
    style,
    children,
    isTabScreen,
    stackPresentation = 'push',
    isRootRoute = false,
    ...others
}: NavigationRouteProps): JSX.Element | null {
    const theme = useTheme<FractalTheme>();
    const renderChildren = useCallback(() => children, [children]);
    const activityState = useScreenActivityState(path, isTabScreen ?? false);
    const [initialRenderDone] = useInitialRenderDone(activityState);

    const contentStyle = useMemo(() => [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background, width: '100%' }, style], [
        style,
        theme.colors.background
    ]);

    const content = (
        <Screen
            {...others}
            activityState={activityState} // This prop only works on native.
            active={activityState as 0 | 1}
            stackPresentation={stackPresentation}
            style={contentStyle as any}
        >
            <StackPresentationTypeProvider stackPresentation={stackPresentation}>
                <Route path={path}>{initialRenderDone ? renderChildren : null}</Route>
            </StackPresentationTypeProvider>
        </Screen>
    );

    if (Platform.OS === 'web' && stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return <StackScreenWebContainer>{content}</StackScreenWebContainer>;
    } else if (Platform.OS === 'web' && stackPresentation === 'modal') {
        return activityState > 0 ? <StackScreenWebModalContainer>{content}</StackScreenWebModalContainer> : null;
    } else {
        return content;
    }
}

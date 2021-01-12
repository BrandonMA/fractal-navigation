import React, { useCallback, useMemo } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { Route } from '../../react-router';
import { StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '@bma98/fractal-ui';
import { useInitialRenderDone } from './hooks/useInitialRenderDone';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | React.ReactNode;
    stackPresentation?: StackPresentationTypes;
    isTabScreen?: boolean;
}

export function NavigationRoute({
    path,
    style,
    children,
    isTabScreen,
    stackPresentation = 'push',
    ...others
}: NavigationRouteProps): JSX.Element {
    const theme = useTheme<FractalTheme>();
    const basePath = path ?? '/';
    const renderChildren = useCallback(() => children, [children]);
    const activityState = useScreenActivityState(basePath, isTabScreen ?? false);
    const initialRenderDone = useInitialRenderDone(activityState);
    const styles = useMemo(() => [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background }, style], [
        style,
        theme.colors.background
    ]);

    return (
        <Screen
            {...others}
            activityState={activityState} // This prop only works on native.
            active={activityState as never}
            stackPresentation={stackPresentation}
            style={styles}
        >
            <Route path={basePath}>{initialRenderDone ? renderChildren : null}</Route>
        </Screen>
    );
}

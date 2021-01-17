import React, { useCallback, useMemo } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { Route } from '../../react-router';
import { StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '@bma98/fractal-ui';
import { useInitialRenderDone } from './hooks/useInitialRenderDone';
import { useAnimatedStyles } from './hooks/useAnimatedStyles';

export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | React.ReactNode;
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
}: NavigationRouteProps): JSX.Element {
    const theme = useTheme<FractalTheme>();
    const renderChildren = useCallback(() => children, [children]);
    const activityState = useScreenActivityState(path, isTabScreen ?? false);
    const initialRenderDone = useInitialRenderDone(activityState);

    const disableOffset = isTabScreen || isRootRoute;
    const animatedStyles = useAnimatedStyles(initialRenderDone, stackPresentation, disableOffset, activityState);

    const styles = useMemo(() => [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background }, style, animatedStyles], [
        style,
        theme.colors.background,
        animatedStyles
    ]);

    return (
        <Screen
            {...others}
            activityState={activityState} // This prop only works on native.
            active={activityState as 0 | 1}
            stackPresentation={stackPresentation}
            style={styles as any}
        >
            <Route path={path}>{initialRenderDone ? renderChildren : null}</Route>
        </Screen>
    );
}

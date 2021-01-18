import React, { ReactNode, useCallback, useMemo } from 'react';
import { Screen, ScreenProps, StackPresentationTypes } from 'react-native-screens';
import { Route, useLocation } from '../../react-router';
import { Platform, StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useTheme } from '@shopify/restyle';
import { AnimatedPresence, FractalTheme, RightSlideAnimation } from '@bma98/fractal-ui';
import { useInitialRenderDone } from './hooks/useInitialRenderDone';
import { StackScreenModal } from '../stackNavigation/StackScreenModal';
import { useStackNavigatorRootPath } from '../../hooks/useStackNavigatorRootPath';

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
    const [initialRenderDone, disableInitialRender] = useInitialRenderDone(activityState);

    const { pathname } = useLocation();
    const stackRootPath = useStackNavigatorRootPath();
    const isRootPath = pathname === stackRootPath;

    const contentStyle = useMemo(() => [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background }, style], [
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
            <Route path={path}>{initialRenderDone ? renderChildren : null}</Route>
        </Screen>
    );

    if (Platform.OS === 'web' && stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        const isSubRouteVisible = activityState > 0 || initialRenderDone;
        return (
            <AnimatedPresence>
                {isSubRouteVisible && !isRootPath ? (
                    <RightSlideAnimation
                        onHide={disableInitialRender}
                        backgroundColor={'background'}
                        position={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                    >
                        {content}
                    </RightSlideAnimation>
                ) : null}
            </AnimatedPresence>
        );
    } else if (Platform.OS === 'web' && stackPresentation === 'modal') {
        return activityState > 0 ? <StackScreenModal>{content}</StackScreenModal> : null;
    } else {
        return content;
    }
}

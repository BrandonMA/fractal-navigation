import React, { useCallback } from 'react';
import { Route, RouteProps } from '../../react-router';
import { FadeRouteAnimator } from './FadeRouteAnimator';

interface FadeRouteProps extends Omit<RouteProps, 'children'> {
    children: JSX.Element;
}

export function FadeRoute({ children, ...others }: FadeRouteProps): JSX.Element {
    const render = useCallback(
        (routeProps) => {
            return <FadeRouteAnimator {...routeProps}>{children}</FadeRouteAnimator>;
        },
        [children]
    );

    return <Route {...others}>{render}</Route>;
}

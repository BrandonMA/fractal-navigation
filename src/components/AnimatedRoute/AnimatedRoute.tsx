import React, { useCallback } from 'react';
import { Route, RouteProps } from '../../react-router';
import { AnimatedRouteContainer } from './AnimatedRouteContainer';

interface AnimatedRouteProps extends Omit<RouteProps, 'children'> {
    children: JSX.Element;
}

export function AnimatedRoute({ children, ...others }: AnimatedRouteProps): JSX.Element {
    const render = useCallback(
        (routeProps) => {
            return <AnimatedRouteContainer {...routeProps}>{children}</AnimatedRouteContainer>;
        },
        [children]
    );

    return <Route {...others}>{render}</Route>;
}

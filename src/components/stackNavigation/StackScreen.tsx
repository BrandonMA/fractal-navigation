import React from 'react';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute/NavigationRoute';
import { NavigationBar } from './NavigationBar';
import { Platform, StatusBar } from 'react-native';
import { PlatformBar } from './PlatformBar';
import { usePlatformBarStyles } from './PlatformBar/hooks/usePlatformBarStyles';
import { useHistory } from '../../react-router';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: JSX.Element;
}

export function StackScreen({ children, navBarConfig, stackPresentation, path, ...others }: StackScreenProps): JSX.Element {
    const { goBack } = useHistory();
    const styleProps = usePlatformBarStyles();
    const isNavigationBarForNativeModal =
        stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android');

    return (
        <NavigationRoute {...others} onDismissed={goBack} stackPresentation={stackPresentation} path={path}>
            {stackPresentation === 'modal' ? <StatusBar barStyle='light-content' /> : null}
            {isNavigationBarForNativeModal ? (
                <NavigationBar {...navBarConfig?.props} path={path} stackPresentation={stackPresentation} />
            ) : navBarConfig != null ? (
                <PlatformBar {...navBarConfig?.props} {...styleProps} path={path} stackPresentation={stackPresentation} />
            ) : null}
            {children}
        </NavigationRoute>
    );
}

import React from 'react';
import { useHistory } from '../../react-router';
import { NavigationRoute, NavigationRouteProps } from '../NavigationRoute/NavigationRoute';
import { NavigationBar } from './NavigationBar';
import { Platform, StatusBar } from 'react-native';
import { PlatformBar } from './PlatformBar';
import { usePlatformBarStyles } from './PlatformBar/hooks/usePlatformBarStyles';

interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: JSX.Element;
}

export function StackScreen(props: StackScreenProps): JSX.Element {
    const { children, navBarConfig, stackPresentation, path, ...others } = props;
    const { goBack } = useHistory();
    const styleProps = usePlatformBarStyles();
    const isNavigationBarForNativeModal =
        stackPresentation === 'modal' && navBarConfig != null && (Platform.OS === 'ios' || Platform.OS === 'android');

    return (
        <NavigationRoute {...others} onDismissed={goBack} stackPresentation={stackPresentation} path={path}>
            {stackPresentation === 'modal' ? <StatusBar barStyle='light-content' /> : null}
            {isNavigationBarForNativeModal ? (
                <NavigationBar {...navBarConfig?.props} path={path} />
            ) : navBarConfig != null ? (
                <PlatformBar {...navBarConfig?.props} {...styleProps} path={path} />
            ) : null}
            {children}
        </NavigationRoute>
    );
}

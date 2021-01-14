import React from 'react';
import { View, ViewProps } from 'react-native';

interface Props extends Omit<ViewProps, 'children'> {
    children?: JSX.Element | Array<JSX.Element>;
}

export function NavigationBarLeftView(props: Props): JSX.Element {
    return <View {...props} />;
}

export function NavigationBarCenterView(props: Props): JSX.Element {
    return <View {...props} />;
}

export function NavigationBarRightView(props: Props): JSX.Element {
    return <View {...props} />;
}

import React from 'react';
import { ViewProps } from 'react-native';

interface Props extends Omit<ViewProps, 'children'> {
    children?: JSX.Element | Array<JSX.Element>;
}

export function NavigationBarLeftView(props: Props): JSX.Element {
    return <React.Fragment {...props} />;
}

export function NavigationBarCenterView(props: Props): JSX.Element {
    return <React.Fragment {...props} />;
}

export function NavigationBarRightView(props: Props): JSX.Element {
    return <React.Fragment {...props} />;
}

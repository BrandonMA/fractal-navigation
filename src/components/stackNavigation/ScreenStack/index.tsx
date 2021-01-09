import React from 'react';
import { View } from 'react-native';
import { ScreenStackProps as Props } from 'react-native-screens';

export interface ScreenStackProps extends Props {
    children: Array<JSX.Element> | JSX.Element;
}

export function ScreenStack(props: ScreenStackProps): JSX.Element {
    return <View {...props} />;
}

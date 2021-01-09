import React from 'react';
import { ViewProps } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

interface StackScreenContentProps extends Omit<ViewProps, 'children'> {
    children: JSX.Element;
}

export function StackScreenContent(props: StackScreenContentProps): JSX.Element {
    return <SafeAreaProvider {...props} />;
}

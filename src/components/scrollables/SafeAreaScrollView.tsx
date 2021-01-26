import React from 'react';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';
import { KeyboardAwareScrollView, KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';

export interface SafeAreaScrollViewProps extends Omit<KeyboardAwareScrollViewProps, 'children'> {
    children: React.ReactNode;
}

export function SafeAreaScrollView(props: SafeAreaScrollViewProps): JSX.Element {
    const scrollViewProps = useSafeAreaScrollViewProps(props);
    return <KeyboardAwareScrollView enableOnAndroid {...scrollViewProps} />;
}

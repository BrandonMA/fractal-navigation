import React from 'react';
import { KeyboardAwareScrollViewProps } from 'react-native-keyboard-aware-scroll-view';
export interface SafeAreaScrollViewProps extends Omit<KeyboardAwareScrollViewProps, 'children'> {
    children: React.ReactNode;
}
export declare function SafeAreaScrollView(props: SafeAreaScrollViewProps): JSX.Element;

import React from 'react';
import { Animated, ScrollViewProps } from 'react-native';
export interface SafeAreaScrollViewProps extends Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    children: React.ReactNode;
}
export declare function SafeAreaScrollView(props: SafeAreaScrollViewProps): JSX.Element;

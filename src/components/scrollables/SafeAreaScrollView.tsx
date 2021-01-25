import React from 'react';
import { Animated, ScrollViewProps } from 'react-native';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';

export interface SafeAreaScrollViewProps extends Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'> {
    children: React.ReactNode;
}

export function SafeAreaScrollView(props: SafeAreaScrollViewProps): JSX.Element {
    const scrollViewProps = useSafeAreaScrollViewProps(props);
    return <Animated.ScrollView {...scrollViewProps} />;
}

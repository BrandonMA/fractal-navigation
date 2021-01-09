import React from 'react';
import { Animated, FlatListProps } from 'react-native';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';

export function SafeAreaFlatList<T>(props: Animated.AnimatedProps<FlatListProps<T>>): JSX.Element {
    const scrollViewProps = useSafeAreaScrollViewProps();
    return <Animated.FlatList {...props} {...scrollViewProps} />;
}

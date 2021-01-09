import React from 'react';
import { Animated, SectionListProps } from 'react-native';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';

export function SafeAreaSectionsList<T>(props: Animated.AnimatedProps<SectionListProps<T>>): JSX.Element {
    const scrollViewProps = useSafeAreaScrollViewProps();
    return <Animated.SectionList {...props} {...scrollViewProps} />;
}

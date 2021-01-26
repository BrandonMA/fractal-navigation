import React from 'react';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';
import { KeyboardAwareFlatList, KeyboardAwareFlatListProps } from 'react-native-keyboard-aware-scroll-view';

export function SafeAreaFlatList<T>(props: KeyboardAwareFlatListProps<T>): JSX.Element {
    const scrollViewProps = useSafeAreaScrollViewProps(props);
    return <KeyboardAwareFlatList enableOnAndroid {...props} {...scrollViewProps} />;
}

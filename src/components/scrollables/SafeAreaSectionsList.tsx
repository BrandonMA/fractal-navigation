import React from 'react';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';
import { KeyboardAwareSectionList, KeyboardAwareSectionListProps } from 'react-native-keyboard-aware-scroll-view';

export function SafeAreaSectionsList<T>(props: KeyboardAwareSectionListProps<T>): JSX.Element {
    const scrollViewProps = useSafeAreaScrollViewProps(props);
    return <KeyboardAwareSectionList enableOnAndroid {...props} {...scrollViewProps} />;
}

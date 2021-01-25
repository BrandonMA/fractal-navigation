import { Animated, ScrollViewProps } from 'react-native';
declare type SafeAreaScrollViewProps = Animated.AnimatedProps<ScrollViewProps>;
export declare function useSafeAreaScrollViewProps({ contentInset, scrollIndicatorInsets, contentContainerStyle, ...others }: SafeAreaScrollViewProps): SafeAreaScrollViewProps;
export {};

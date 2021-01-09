import { Animated, ScrollViewProps } from 'react-native';
export declare function useSafeAreaScrollViewProps(): Omit<Animated.AnimatedProps<ScrollViewProps>, 'children'>;

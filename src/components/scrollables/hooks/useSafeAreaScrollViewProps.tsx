import { Animated, Platform, ScrollViewProps } from 'react-native';
import { useMemo } from 'react';
import { useNavigationInsets } from '../../../hooks/useNavigationInsets';

type SafeAreaScrollViewProps = Animated.AnimatedProps<ScrollViewProps>;

export function useSafeAreaScrollViewProps({
    contentInset,
    scrollIndicatorInsets,
    contentContainerStyle,
    ...others
}: SafeAreaScrollViewProps): SafeAreaScrollViewProps {
    const { totalInsets, tabBarInsets } = useNavigationInsets();
    const containerStyle = contentContainerStyle as any;

    return useMemo(() => {
        return {
            automaticallyAdjustContentInsets: false,
            removeClippedSubviews: true,
            contentInsetAdjustmentBehavior: 'scrollableAxes',
            contentInset: { bottom: tabBarInsets.bottom, ...contentInset },
            scrollIndicatorInsets: { bottom: tabBarInsets.bottom, scrollIndicatorInsets },
            contentContainerStyle:
                Platform.OS === 'ios'
                    ? containerStyle
                    : {
                          paddingTop: 0,
                          paddingBottom: totalInsets.bottom,
                          paddingRight: 0,
                          paddingLeft: 0,
                          ...containerStyle
                      },
            ...others
        };
    }, [totalInsets, tabBarInsets, others, containerStyle, contentInset, scrollIndicatorInsets]);
}

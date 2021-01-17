import { useSpringAnimation } from '@bma98/fractal-ui';
import { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Platform, ViewStyle } from 'react-native';
import { StackPresentationTypes } from 'react-native-screens';

export function useAnimatedStyles(
    initialRenderDone: boolean,
    stackPresentation: StackPresentationTypes,
    disableOffset: boolean,
    activityState: 0 | 1 | 2
): Animated.AnimatedProps<ViewStyle> {
    const screenWidth = Dimensions.get('screen').width;
    const isOffsetActive = !initialRenderDone && stackPresentation === 'push' && !disableOffset;
    const animatedValue = useRef(new Animated.Value(isOffsetActive ? screenWidth : 0)).current;
    const showAnimation = useSpringAnimation(animatedValue, 0, 10, 3);

    useEffect(() => {
        if (Platform.OS === 'web' && stackPresentation === 'push') {
            if (activityState > 0) {
                showAnimation();
            }
        }
    }, [showAnimation, activityState, stackPresentation]);

    return useMemo(() => {
        return { transform: [{ translateX: Platform.OS === 'web' ? animatedValue : 0 }] };
    }, [animatedValue]);
}

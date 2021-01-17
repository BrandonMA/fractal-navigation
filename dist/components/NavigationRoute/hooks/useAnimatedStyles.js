import { useSpringAnimation } from '@bma98/fractal-ui';
import { useEffect, useMemo, useRef } from 'react';
import { Animated, Dimensions, Platform } from 'react-native';
export function useAnimatedStyles(initialRenderDone, stackPresentation, disableOffset, activityState) {
    var screenWidth = Dimensions.get('screen').width;
    var isOffsetActive = !initialRenderDone && stackPresentation === 'push' && !disableOffset;
    var animatedValue = useRef(new Animated.Value(isOffsetActive ? screenWidth : 0)).current;
    var showAnimation = useSpringAnimation(animatedValue, 0, 10, 3);
    useEffect(function () {
        if (Platform.OS === 'web' && stackPresentation === 'push') {
            if (activityState > 0) {
                showAnimation();
            }
        }
    }, [showAnimation, activityState, stackPresentation]);
    return useMemo(function () {
        return { transform: [{ translateX: Platform.OS === 'web' ? animatedValue : 0 }] };
    }, [animatedValue]);
}
//# sourceMappingURL=useAnimatedStyles.js.map
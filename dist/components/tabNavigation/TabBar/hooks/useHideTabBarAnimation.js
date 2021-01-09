import { useLayoutEffect, useMemo, useRef } from 'react';
import { Animated } from 'react-native';
import { useTabBarIsHidden } from '../../../../hooks/useTabBarIsHidden';
import { useTabBarSafeAreaForPosition } from './useTabBarSafeAreaForPosition';
import { useSpringAnimation } from '@bma98/fractal-ui';
// The TabBar should never be hidden by default.
// Therefore, we do not allow this config property to be passed as props to TabBar itself.
// So if you wanna hide the tab bar you must set the recoil value and this hook will update the animated value for the animation.
export function useHideTabBarAnimation(tabBarPosition, variant, style) {
    var safeArea = useTabBarSafeAreaForPosition(tabBarPosition);
    var finalSize = variant === 'basic' ? safeArea : safeArea + 24;
    var animatedValue = useRef(new Animated.Value(safeArea)).current;
    var tabBarHidden = useTabBarIsHidden();
    var animateHiddenChange = useSpringAnimation(animatedValue, tabBarHidden ? (tabBarPosition === 'left' ? -finalSize : finalSize) : 0);
    useLayoutEffect(function () {
        animateHiddenChange();
    }, [animateHiddenChange]);
    var animatedStyle = useMemo(function () {
        return [
            style,
            {
                transform: [
                    tabBarPosition === 'bottom'
                        ? {
                            translateY: animatedValue
                        }
                        : {
                            translateX: animatedValue
                        }
                ]
            }
        ];
    }, [style, animatedValue, tabBarPosition]);
    return animatedStyle;
}
//# sourceMappingURL=useHideTabBarAnimation.js.map
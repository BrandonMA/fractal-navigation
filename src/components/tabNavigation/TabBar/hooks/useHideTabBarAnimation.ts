import { useLayoutEffect, useMemo, useRef } from 'react';
import { Animated, ViewStyle } from 'react-native';
import { useTabBarIsHidden } from '../../../../hooks/useTabBarIsHidden';
import { useTabBarSafeAreaForPosition } from './useTabBarSafeAreaForPosition';
import { TabBarPosition, TabBarVariant } from '../types';
import { useSpringAnimation } from '@bma98/fractal-ui';

// The TabBar should never be hidden by default.
// Therefore, we do not allow this config property to be passed as props to TabBar itself.
// So if you wanna hide the tab bar you must set the recoil value and this hook will update the animated value for the animation.
export function useHideTabBarAnimation(tabBarPosition: TabBarPosition, variant: TabBarVariant, style: unknown): ViewStyle {
    const safeArea = useTabBarSafeAreaForPosition(tabBarPosition);
    const finalSize = variant === 'basic' ? safeArea : safeArea + 24;
    const animatedValue = useRef(new Animated.Value(safeArea)).current;
    const tabBarHidden = useTabBarIsHidden();
    const animateHiddenChange = useSpringAnimation(animatedValue, tabBarHidden ? (tabBarPosition === 'left' ? -finalSize : finalSize) : 0);

    useLayoutEffect(() => {
        animateHiddenChange();
    }, [animateHiddenChange]);

    const animatedStyle = useMemo(() => {
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

    return animatedStyle as ViewStyle;
}

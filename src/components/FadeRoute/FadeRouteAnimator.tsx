import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { match } from '../../react-router';
import { Animated, StyleSheet, ViewStyle } from 'react-native';
import { useHideAnimation, useShowAnimation } from '@bma98/fractal-ui';

interface FadeRouteAnimator {
    match: match | null;
    children: JSX.Element;
    style?: Animated.AnimatedProps<ViewStyle>;
}

interface MemoizedContainerProps {
    style: Animated.AnimatedProps<ViewStyle>;
    children: JSX.Element;
}

const MemoizedContainer = memo(({ style, children }: MemoizedContainerProps) => {
    return <Animated.View style={style}>{children}</Animated.View>;
});

export function FadeRouteAnimator({ match, children, style }: FadeRouteAnimator): JSX.Element | null {
    const isRouteActive = match != null;
    const opacityValue = useRef(new Animated.Value(isRouteActive ? 1 : 0)).current;
    const [visible, setVisible] = useState(isRouteActive);
    const setVisibleToFalse = useCallback(() => setVisible(false), [setVisible]);
    const hide = useHideAnimation(opacityValue, setVisibleToFalse);
    const show = useShowAnimation(opacityValue);

    const finalStyle = useMemo(() => {
        return [
            StyleSheet.absoluteFill,
            style,
            { opacity: opacityValue, overflow: 'hidden', zIndex: isRouteActive ? 1000 : 0 }
        ] as Animated.AnimatedProps<ViewStyle>;
    }, [opacityValue, isRouteActive, style]);

    useEffect(() => {
        if (isRouteActive) {
            setVisible(true);
            show();
        }
    }, [setVisible, isRouteActive, show]);

    useEffect(() => {
        if (!isRouteActive && visible) {
            hide();
        }
    }, [isRouteActive, visible, hide]);

    return visible ? <MemoizedContainer style={finalStyle}>{children}</MemoizedContainer> : null;
}

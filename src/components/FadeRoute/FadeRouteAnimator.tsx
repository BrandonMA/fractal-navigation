import React, { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { match } from '../../react-router';
import { Animated, StyleSheet } from 'react-native';
import { useHideAnimation, useShowAnimation } from '@bma98/fractal-ui';

interface FadeRouteAnimator {
    match: match | null;
    children: JSX.Element;
}

interface MemoizedContainerProps {
    style: any;
    children: JSX.Element;
}

const MemoizedContainer = memo(({ style, children }: MemoizedContainerProps) => {
    return <Animated.View style={style}>{children}</Animated.View>;
});

export function FadeRouteAnimator({ match, children }: FadeRouteAnimator): JSX.Element | null {
    const isRouteActive = match != null;
    const opacityValue = useRef(new Animated.Value(isRouteActive ? 1 : 0)).current;
    const [visible, setVisible] = useState(isRouteActive);
    const setVisibleToFalse = useCallback(() => setVisible(false), [setVisible]);
    const hide = useHideAnimation(opacityValue, setVisibleToFalse);
    const show = useShowAnimation(opacityValue);

    const finalStyle = useMemo(() => {
        return [StyleSheet.absoluteFill, { opacity: opacityValue, zIndex: isRouteActive ? 1000 : 0 }];
    }, [opacityValue, isRouteActive]);

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

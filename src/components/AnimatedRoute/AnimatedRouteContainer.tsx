import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { match } from '../../react-router';
import { Animated, StyleSheet } from 'react-native';
import { useHideAnimation, useShowAnimation } from '@bma98/fractal-ui';

export interface AnimatedRouteContainerProps {
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

export function AnimatedRouteContainer({ match, children }: AnimatedRouteContainerProps): JSX.Element | null {
    const isRouteActive = match != null;
    const opacityValue = useRef(new Animated.Value(isRouteActive ? 1 : 0)).current;
    const [visible, setVisible] = useState(isRouteActive);
    const [initialShowDone, setInitialShowDone] = useState(false);
    const setVisibleToFalse = useCallback(() => setVisible(false), [setVisible]);
    const hide = useHideAnimation(opacityValue, setVisibleToFalse);
    const show = useShowAnimation(opacityValue);

    const finalStyle = useMemo(() => {
        return [StyleSheet.absoluteFill, { opacity: opacityValue, zIndex: isRouteActive ? 1000 : 0 }];
    }, [opacityValue, isRouteActive]);

    useLayoutEffect(() => {
        if (isRouteActive) {
            setVisible(true);
            setInitialShowDone(true);
        }
    }, [setVisible, isRouteActive, setInitialShowDone]);

    useEffect(() => {
        if (isRouteActive) {
            show();
        }
    }, [isRouteActive, visible, show]);

    useEffect(() => {
        if (!isRouteActive && initialShowDone) {
            hide();
        }
    }, [isRouteActive, initialShowDone, hide]);

    return visible ? <MemoizedContainer style={finalStyle}>{children}</MemoizedContainer> : null;
}

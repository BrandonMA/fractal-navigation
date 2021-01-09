import React, { memo, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { useHideAnimation, useShowAnimation } from '@bma98/fractal-ui';
var MemoizedContainer = memo(function (_a) {
    var style = _a.style, children = _a.children;
    return React.createElement(Animated.View, { style: style }, children);
});
export function AnimatedRouteContainer(_a) {
    var match = _a.match, children = _a.children;
    var isRouteActive = match != null;
    var opacityValue = useRef(new Animated.Value(isRouteActive ? 1 : 0)).current;
    var _b = useState(isRouteActive), visible = _b[0], setVisible = _b[1];
    var _c = useState(false), initialShowDone = _c[0], setInitialShowDone = _c[1];
    var setVisibleToFalse = useCallback(function () { return setVisible(false); }, [setVisible]);
    var hide = useHideAnimation(opacityValue, setVisibleToFalse);
    var show = useShowAnimation(opacityValue);
    var finalStyle = useMemo(function () {
        return [StyleSheet.absoluteFill, { opacity: opacityValue, zIndex: isRouteActive ? 1000 : 0 }];
    }, [opacityValue, isRouteActive]);
    useLayoutEffect(function () {
        if (isRouteActive) {
            setVisible(true);
            setInitialShowDone(true);
        }
    }, [setVisible, isRouteActive, setInitialShowDone]);
    useEffect(function () {
        if (isRouteActive) {
            show();
        }
    }, [isRouteActive, visible, show]);
    useEffect(function () {
        if (!isRouteActive && initialShowDone) {
            hide();
        }
    }, [isRouteActive, initialShowDone, hide]);
    return visible ? React.createElement(MemoizedContainer, { style: finalStyle }, children) : null;
}
//# sourceMappingURL=AnimatedRouteContainer.js.map
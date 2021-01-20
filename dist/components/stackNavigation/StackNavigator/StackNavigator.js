var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { Children, useEffect, useMemo, useRef } from 'react';
import { useLocation } from '../../../react-router';
import { ScreenStack } from '../ScreenStack';
import { filterMatchingChildren } from './util/filterMatchingChildren';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
import { getMarginInsets } from '../../../util/getMarginInsets';
import { useTabBarInsets } from '../../../hooks/useTabBarInsets';
import { StackNavigatorRootPathProvider } from '../../../context/StackNavigatorRootPathProvider';
export function StackNavigator(_a) {
    var _b = _a.path, path = _b === void 0 ? '' : _b, children = _a.children, style = _a.style, others = __rest(_a, ["path", "children", "style"]);
    var pathname = useLocation().pathname;
    var isRouteActive = useIsRouteActive(path, false);
    var prevChildrenRef = useRef([]);
    var tabBarInsets = useTabBarInsets();
    var marginInsets = getMarginInsets(tabBarInsets, false, true);
    var childrenToRender = Children.toArray(children);
    childrenToRender = filterMatchingChildren(childrenToRender, pathname);
    var finalStyle = useMemo(function () {
        return [
            style,
            __assign({ flex: 1 }, marginInsets)
        ];
    }, [style, marginInsets]);
    useEffect(function () {
        if (isRouteActive) {
            prevChildrenRef.current = childrenToRender;
        }
    }, [childrenToRender, isRouteActive]);
    return (React.createElement(StackNavigatorRootPathProvider, { initialValue: path },
        React.createElement(ScreenStack, __assign({ style: finalStyle }, others), isRouteActive ? childrenToRender : prevChildrenRef.current)));
}
//# sourceMappingURL=StackNavigator.js.map
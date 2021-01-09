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
import React, { useCallback, useMemo } from 'react';
import { Screen } from 'react-native-screens';
import { Route } from '../../react-router';
import { StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useTheme } from '@shopify/restyle';
import { useInitialRenderDone } from './hooks/useInitialRenderDone';
export function NavigationRoute(_a) {
    var path = _a.path, style = _a.style, children = _a.children, isTabScreen = _a.isTabScreen, stackPresentation = _a.stackPresentation, others = __rest(_a, ["path", "style", "children", "isTabScreen", "stackPresentation"]);
    var theme = useTheme();
    var basePath = path !== null && path !== void 0 ? path : '/';
    var renderChildren = useCallback(function () { return children; }, [children]);
    var activityState = useScreenActivityState(basePath, isTabScreen !== null && isTabScreen !== void 0 ? isTabScreen : false);
    var initialRenderDone = useInitialRenderDone(activityState);
    var styles = useMemo(function () { return [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background }, style]; }, [
        style,
        theme.colors.background
    ]);
    return (React.createElement(Screen, __assign({}, others, { activityState: activityState, active: activityState, stackPresentation: stackPresentation !== null && stackPresentation !== void 0 ? stackPresentation : 'push', style: styles }),
        React.createElement(Route, { path: basePath }, initialRenderDone ? renderChildren : null)));
}
//# sourceMappingURL=NavigationRoute.js.map
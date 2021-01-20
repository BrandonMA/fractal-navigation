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
import { Platform, StyleSheet } from 'react-native';
import { useScreenActivityState } from './hooks/useScreenActivityState';
import { useTheme } from '@shopify/restyle';
import { useInitialRenderDone } from './hooks/useInitialRenderDone';
import { StackScreenWebModalContainer } from '../stackNavigation/StackScreenWebModalContainer';
import { StackScreenWebContainer } from '../stackNavigation/StackScreenWebContainer/StackScreenWebContainer';
export function NavigationRoute(_a) {
    var _b = _a.path, path = _b === void 0 ? '/' : _b, style = _a.style, children = _a.children, isTabScreen = _a.isTabScreen, _c = _a.stackPresentation, stackPresentation = _c === void 0 ? 'push' : _c, _d = _a.isRootRoute, isRootRoute = _d === void 0 ? false : _d, others = __rest(_a, ["path", "style", "children", "isTabScreen", "stackPresentation", "isRootRoute"]);
    var theme = useTheme();
    var renderChildren = useCallback(function () { return children; }, [children]);
    var activityState = useScreenActivityState(path, isTabScreen !== null && isTabScreen !== void 0 ? isTabScreen : false);
    var initialRenderDone = useInitialRenderDone(activityState)[0];
    var contentStyle = useMemo(function () { return [StyleSheet.absoluteFill, { backgroundColor: theme.colors.background }, style]; }, [
        style,
        theme.colors.background
    ]);
    var content = (React.createElement(Screen, __assign({}, others, { activityState: activityState, active: activityState, stackPresentation: stackPresentation, style: contentStyle }),
        React.createElement(Route, { path: path }, initialRenderDone ? renderChildren : null)));
    if (Platform.OS === 'web' && stackPresentation === 'push' && !isTabScreen && !isRootRoute) {
        return React.createElement(StackScreenWebContainer, null, content);
    }
    else if (Platform.OS === 'web' && stackPresentation === 'modal') {
        return activityState > 0 ? React.createElement(StackScreenWebModalContainer, null, content) : null;
    }
    else {
        return content;
    }
}
//# sourceMappingURL=NavigationRoute.js.map
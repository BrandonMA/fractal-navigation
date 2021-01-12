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
import React, { useContext, useLayoutEffect } from 'react';
import { useHideTabBarAnimation } from './hooks/useHideTabBarAnimation';
import { getTabBarComponent } from './util/getTabBarComponent';
import { useTabBarInsetsForPosition } from './hooks/useTabBarInsetsForPosition';
import { TabBarPositionContext } from '../../../context/TabBarPositionProvider';
export function TabBar(_a) {
    var style = _a.style, tabBarVariant = _a.tabBarVariant, tabBarPosition = _a.tabBarPosition, others = __rest(_a, ["style", "tabBarVariant", "tabBarPosition"]);
    var TabBar = getTabBarComponent(tabBarVariant);
    var animatedStyle = useHideTabBarAnimation(tabBarPosition, tabBarVariant, style);
    var _b = useContext(TabBarPositionContext), setTabBarPosition = _b[1];
    // Allow the tabBarPosition to be passed as a prop as the value is probably never going to change on run time.
    // So, we use an useLayoutEffect hook to update the UI before the first render.
    useLayoutEffect(function () {
        setTabBarPosition(tabBarPosition);
    }, [tabBarPosition, setTabBarPosition]);
    useTabBarInsetsForPosition();
    return React.createElement(TabBar, __assign({}, others, { tabBarPosition: tabBarPosition, tabBarVariant: tabBarVariant, style: animatedStyle }));
}
//# sourceMappingURL=TabBar.js.map
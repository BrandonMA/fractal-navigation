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
import React, { useMemo } from 'react';
import { ScreenContainer } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BaseBox } from '@bma98/fractal-ui';
import { TabBarItemsHistoryProvider } from '../../context/TabBarItemsHistoryProvider';
export function TabNavigator(_a) {
    var tabBar = _a.tabBar, children = _a.children, style = _a.style, others = __rest(_a, ["tabBar", "children", "style"]);
    var finalStyle = useMemo(function () {
        return [
            style,
            {
                flex: 1
            }
        ];
    }, [style]);
    return (React.createElement(TabBarItemsHistoryProvider, null,
        React.createElement(SafeAreaProvider, null,
            React.createElement(BaseBox, { flex: 1, overflow: 'hidden' },
                React.createElement(ScreenContainer, __assign({}, others, { style: finalStyle }), children),
                tabBar))));
}
//# sourceMappingURL=TabNavigator.js.map
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
import { Platform } from 'react-native';
import { useMemo } from 'react';
import { useNavigationInsets } from '../../../hooks/useNavigationInsets';
export function useSafeAreaScrollViewProps(_a) {
    var contentInset = _a.contentInset, scrollIndicatorInsets = _a.scrollIndicatorInsets, contentContainerStyle = _a.contentContainerStyle, others = __rest(_a, ["contentInset", "scrollIndicatorInsets", "contentContainerStyle"]);
    var _b = useNavigationInsets(), totalInsets = _b.totalInsets, tabBarInsets = _b.tabBarInsets;
    var containerStyle = contentContainerStyle;
    return useMemo(function () {
        return __assign({ automaticallyAdjustContentInsets: false, removeClippedSubviews: true, contentInsetAdjustmentBehavior: 'scrollableAxes', contentInset: __assign({ bottom: tabBarInsets.bottom }, contentInset), scrollIndicatorInsets: { bottom: tabBarInsets.bottom, scrollIndicatorInsets: scrollIndicatorInsets }, contentContainerStyle: Platform.OS === 'ios'
                ? containerStyle
                : __assign({ paddingTop: 0, paddingBottom: totalInsets.bottom, paddingRight: 0, paddingLeft: 0 }, containerStyle) }, others);
    }, [totalInsets, tabBarInsets, others, containerStyle, contentInset, scrollIndicatorInsets]);
}
//# sourceMappingURL=useSafeAreaScrollViewProps.js.map
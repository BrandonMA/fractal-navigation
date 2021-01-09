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
import React, { memo, useCallback, useMemo } from 'react';
import { Pressable } from 'react-native';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
export var CircularTabBarItem = memo(function (props) {
    var highlightColor = props.highlightColor, bg = props.bg, others = __rest(props, ["highlightColor", "bg"]);
    var sharedStyles = useMemo(function () {
        return __assign(__assign({}, sharedTabBarItemStyles), { backgroundColor: bg, borderRadius: 24 });
    }, [bg]);
    var handleHighlightPress = useCallback(function (state) {
        if (state.pressed && highlightColor != null) {
            return __assign(__assign({}, sharedStyles), { backgroundColor: highlightColor });
        }
        return sharedStyles;
    }, [highlightColor, sharedStyles]);
    return React.createElement(Pressable, __assign({}, others, { style: handleHighlightPress }));
});
//# sourceMappingURL=CircularTabBarItem.js.map
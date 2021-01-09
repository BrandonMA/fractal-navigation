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
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from '@shopify/restyle';
var LeftShape = memo(function (props) {
    return (React.createElement(Svg, __assign({ width: 61, height: 75, viewBox: '0 0 61 75' }, props),
        React.createElement(Path, { d: 'M61 75H0V0h61c0 4.1-3 6.5-7 7-14.6 2.1-26 15.3-26 30.5S39.4 66 54 68c4 .5 7 3 7 7z' })));
});
var BottomShape = memo(function (props) {
    return (React.createElement(Svg, __assign({ width: 74, height: 61, viewBox: '0 0 74 61' }, props),
        React.createElement(Path, { d: 'M74 0v61H0V0c4.1 0 6.5 3 7 7 2.1 14.6 14.8 26 30 26S65 21.6 67 7c.5-4 3-7 7-7z' })));
});
var RightShape = memo(function (props) {
    return (React.createElement(Svg, __assign({ width: 61, height: 75, viewBox: '0 0 61 75' }, props),
        React.createElement(Path, { d: 'M0 0h61v75H0c0-4.1 3-6.5 7-7 14.6-2.1 26-15.3 26-30.5S21.6 9 7 7c-4-.5-7-3-7-7z' })));
});
export var MiddleTabBarShape = memo(function (props) {
    var theme = useTheme();
    var tabBarPosition = props.tabBarPosition, others = __rest(props, ["tabBarPosition"]);
    switch (tabBarPosition) {
        case 'right':
            return React.createElement(RightShape, __assign({ fill: theme.colors.tabBarBackground }, others));
        case 'left':
            return React.createElement(LeftShape, __assign({ fill: theme.colors.tabBarBackground }, others));
        case 'bottom':
            return React.createElement(BottomShape, __assign({ fill: theme.colors.tabBarBackground }, others));
    }
});
//# sourceMappingURL=MiddleTabBarShape.js.map
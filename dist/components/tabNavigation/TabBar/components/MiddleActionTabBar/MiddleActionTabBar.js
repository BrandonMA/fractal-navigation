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
import React, { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './components/MiddleTabBarShape';
import { useTabBarPositionValues } from '../../hooks/useTabBarPositionValues';
import { getValueForTabBarPosition } from '../../util/getValueForTabBarPosition';
import { getBottomOffsetForCircularTabBarButton } from './util/getBottomOffsetForCircularTabBarButton';
import { BaseBox } from '@bma98/fractal-ui';
import { useTabBarSafeAreaPadding } from '../../hooks/useTabBarSafeAreaPadding';
import { SideView } from './components/SideView';
export function MiddleActionTabBar(_a) {
    var children = _a.children, style = _a.style, tabBarPosition = _a.tabBarPosition;
    var safeAreaInsets = useSafeAreaInsets();
    var _b = useTabBarPositionValues(tabBarPosition), flexDirection = _b.flexDirection, width = _b.width, height = _b.height, bottom = _b.bottom, left = _b.left, right = _b.right;
    var tabBarSafeAreaPadding = useTabBarSafeAreaPadding(safeAreaInsets, tabBarPosition);
    var _c = useMiddleActionTabBarChildren(children), leftChildren = _c[0], middleChild = _c[1], rightChildren = _c[2];
    var constantOffset = getBottomOffsetForCircularTabBarButton(tabBarPosition);
    var floatingOffset = getValueForTabBarPosition(tabBarPosition, { bottom: constantOffset }, { left: constantOffset }, { right: constantOffset });
    var constantDimension = 'auto';
    var floatingWidth = getValueForTabBarPosition(tabBarPosition, '100%', constantDimension, constantDimension);
    var floatingHeight = getValueForTabBarPosition(tabBarPosition, constantDimension, '100%', '100%');
    var floatingStyle = useMemo(function () { return [tabBarSafeAreaPadding, style]; }, [tabBarSafeAreaPadding, style]);
    return (React.createElement(React.Fragment, null,
        React.createElement(BaseBox, { width: width, height: height, bottom: bottom, left: left, right: right, position: 'absolute', style: style },
            React.createElement(BaseBox, { width: width, height: height, flexDirection: flexDirection, position: 'relative' },
                React.createElement(SideView, { tabBarSafeAreaPadding: tabBarSafeAreaPadding, flexDirection: flexDirection }, leftChildren),
                React.createElement(BaseBox, { zIndex: 1000, flexDirection: 'column', backgroundColor: 'transparent' },
                    React.createElement(MiddleTabBarShape, { tabBarPosition: tabBarPosition }),
                    React.createElement(BaseBox, { backgroundColor: 'tabBarBackground', flexGrow: 1, width: '100%' })),
                React.createElement(SideView, { tabBarSafeAreaPadding: tabBarSafeAreaPadding, flexDirection: flexDirection }, rightChildren))),
        React.createElement(BaseBox, __assign({}, floatingOffset, { style: floatingStyle, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent', flexDirection: 'column', position: 'absolute', pointerEvents: 'box-none', width: floatingWidth, height: floatingHeight }), middleChild)));
}
//# sourceMappingURL=MiddleActionTabBar.js.map
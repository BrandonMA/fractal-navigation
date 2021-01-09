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
import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTabBarPositionValues } from '../hooks/useTabBarPositionValues';
import { BaseBox } from '@bma98/fractal-ui';
import { useTheme } from '@shopify/restyle';
import { useTabBarSafeAreaPadding } from '../hooks/useTabBarSafeAreaPadding';
export function BasicTabBar(props) {
    var tabBarPosition = props.tabBarPosition;
    var safeAreaInsets = useSafeAreaInsets();
    var positionValues = useTabBarPositionValues(tabBarPosition);
    var tabBarSafeAreaPadding = useTabBarSafeAreaPadding(safeAreaInsets, tabBarPosition);
    var theme = useTheme();
    return (React.createElement(BaseBox, __assign({}, props, positionValues, { style: tabBarSafeAreaPadding, backgroundColor: 'tabBarBackground', shadowColor: 'shadowColor', shadowOffset: theme.shadowProperties.offset, shadowOpacity: theme.shadowProperties.opacity, shadowRadius: theme.shadowProperties.radius, justifyContent: 'center', position: 'absolute' })));
}
//# sourceMappingURL=BasicTabBar.js.map
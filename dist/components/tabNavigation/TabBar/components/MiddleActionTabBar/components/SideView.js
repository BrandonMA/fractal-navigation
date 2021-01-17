import { useTheme } from '@shopify/restyle';
import { BaseBox } from '@bma98/fractal-ui';
import React from 'react';
export function SideView(_a) {
    var tabBarSafeAreaPadding = _a.tabBarSafeAreaPadding, flexDirection = _a.flexDirection, children = _a.children;
    var shadowProperties = useTheme().shadowProperties;
    return (React.createElement(BaseBox, { style: tabBarSafeAreaPadding, flexDirection: flexDirection, backgroundColor: 'tabBarBackground', flex: 1, shadowColor: 'shadowColor', shadowOffset: shadowProperties.offset, shadowOpacity: shadowProperties.opacity, shadowRadius: shadowProperties.radius }, children));
}
//# sourceMappingURL=SideView.js.map
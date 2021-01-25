import React, { memo } from 'react';
import { useTheme } from '@shopify/restyle';
import { BaseBox } from '@bma98/fractal-ui';
export var NavigationBarBackground = memo(function (_a) {
    var children = _a.children;
    var _b = useTheme(), navigationBar = _b.navigationBar, shadowProperties = _b.shadowProperties;
    return (React.createElement(BaseBox, { backgroundColor: 'navigationBarBackground', flexDirection: 'row', height: navigationBar.navigationBarHeight, shadowOffset: shadowProperties.navigationBarOffset, shadowColor: 'shadowColor', shadowOpacity: shadowProperties.navigationBarOpacity, shadowRadius: shadowProperties.navigationBarRadius, width: '100%', zIndex: 2000, paddingHorizontal: 'm', elevation: 1 }, children));
});
//# sourceMappingURL=NavigationBarBackground.js.map
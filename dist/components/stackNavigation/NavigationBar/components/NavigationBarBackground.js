import React, { memo } from 'react';
import { useTheme } from '@shopify/restyle';
import { BaseBox } from '@bma98/fractal-ui';
export var NavigationBarBackground = memo(function (props) {
    var children = props.children;
    var theme = useTheme();
    return (React.createElement(BaseBox, { backgroundColor: 'navigationBarBackground', flexDirection: 'row', height: theme.navigationBar.navigationBarHeight, shadowOffset: theme.shadowProperties.offset, shadowColor: 'shadowColor', shadowOpacity: theme.shadowProperties.opacity, shadowRadius: theme.shadowProperties.radius, width: '100%', zIndex: 2000, paddingHorizontal: 'm', elevation: 1 }, children));
});
//# sourceMappingURL=NavigationBarBackground.js.map
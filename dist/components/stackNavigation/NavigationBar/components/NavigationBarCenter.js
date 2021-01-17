import React, { memo } from 'react';
import { BaseBox, Text } from '@bma98/fractal-ui';
import { Platform } from 'react-native';
var titleStyle = {
    display: Platform.OS === 'web' ? 'block' : 'flex'
};
export var NavigationBarCenter = memo(function (_a) {
    var children = _a.children, title = _a.title;
    return (React.createElement(BaseBox, { justifyContent: 'center', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 }, children ? (children) : title ? (React.createElement(Text, { textAlign: 'center', variant: 'navigationBarTitle', numberOfLines: 1, style: titleStyle }, title)) : null));
});
//# sourceMappingURL=NavigationBarCenter.js.map
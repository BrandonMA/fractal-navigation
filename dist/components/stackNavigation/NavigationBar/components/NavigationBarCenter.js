import React, { memo } from 'react';
import { BaseBox, Text } from '@bma98/fractal-ui';
export var NavigationBarCenter = memo(function (props) {
    var children = props.children, title = props.title;
    return (React.createElement(BaseBox, { justifyContent: 'center', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 }, children ? (children) : title ? (React.createElement(Text, { textAlign: 'center', variant: 'navigationBarTitle' }, title)) : null));
});
//# sourceMappingURL=NavigationBarCenter.js.map
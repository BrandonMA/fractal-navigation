import React, { memo } from 'react';
import { BaseBox } from '@bma98/fractal-ui';
export var NavigationBarRight = memo(function (props) {
    var children = props.children;
    return (React.createElement(BaseBox, { justifyContent: 'flex-end', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 }, children));
});
//# sourceMappingURL=NavigationBarRight.js.map
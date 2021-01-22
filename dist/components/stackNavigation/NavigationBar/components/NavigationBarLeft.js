import React, { memo, useCallback } from 'react';
import { BaseBox } from '@bma98/fractal-ui';
import { NavigationBarButton } from '../../NavigationBarButton';
import { ChevronLeft } from '../../../assets/ChevronLeft';
export var NavigationBarLeft = memo(function (_a) {
    var children = _a.children, showBackButton = _a.showBackButton, backTitle = _a.backTitle, goBack = _a.goBack;
    var renderChevronLeft = useCallback(function (color) { return (React.createElement(BaseBox, { style: { marginRight: 2 } },
        React.createElement(ChevronLeft, { height: 20, width: 20, fill: color }))); }, []);
    return (React.createElement(BaseBox, { justifyContent: 'flex-start', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 },
        showBackButton ? (React.createElement(NavigationBarButton, { leftIcon: renderChevronLeft, onPress: goBack }, backTitle)) : null,
        children));
});
//# sourceMappingURL=NavigationBarLeft.js.map
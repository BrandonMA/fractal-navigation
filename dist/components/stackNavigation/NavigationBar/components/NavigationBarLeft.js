import React, { memo, useCallback } from 'react';
import { BaseBox } from '@bma98/fractal-ui';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { NavigationBarButton } from '../../NavigationBarButton';
var Entypo = memo(BaseEntypo);
export var NavigationBarLeft = memo(function (props) {
    var children = props.children, showBackButton = props.showBackButton, backTitle = props.backTitle, goBack = props.goBack;
    var renderChevronLeft = useCallback(function (color) { return React.createElement(Entypo, { name: 'chevron-left', size: 22, style: { marginLeft: -6 }, color: color }); }, []);
    return (React.createElement(BaseBox, { justifyContent: 'flex-start', flex: 1, flexDirection: 'row', alignItems: 'center', flexBasis: 0 },
        showBackButton ? (React.createElement(NavigationBarButton, { text: backTitle, onPress: goBack }, renderChevronLeft)) : null,
        children));
});
//# sourceMappingURL=NavigationBarLeft.js.map
import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useWidthSizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { useHistory } from '../../react-router';
import { useShowAnimation, DimmedModal, Cell } from '@bma98/fractal-ui';
function WhiteContentDesktop(_a) {
    var children = _a.children;
    return (React.createElement(Cell, { overflow: 'hidden', borderRadius: 'm', maxWidth: 550, maxHeight: 550, width: '60%', height: '60%' }, children));
}
function WhiteContentPhone(_a) {
    var children = _a.children;
    return (React.createElement(Cell, { overflow: 'hidden', borderRadius: 'm', marginTop: 'm', width: '90%', height: '95%' }, children));
}
export function StackScreenModal(_a) {
    var children = _a.children;
    var opacityValue = useRef(new Animated.Value(0)).current;
    var goBack = useHistory().goBack;
    var show = useShowAnimation(opacityValue);
    var widthSize = useWidthSizeGroup()[0];
    var Wrapper = getValueForLargeSize(widthSize, WhiteContentDesktop, WhiteContentPhone);
    var justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');
    useEffect(function () {
        show();
    }, [show]);
    return (React.createElement(DimmedModal, { visible: true, justifyContent: justifyContent, alignItems: 'center', onDismiss: goBack },
        React.createElement(Wrapper, null, children)));
}
//# sourceMappingURL=StackScreenModal.js.map
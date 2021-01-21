import { AnimatedPresence, RightSlideAnimation } from '@bma98/fractal-ui';
import React, { useCallback, useState } from 'react';
import { useHistory } from '../../react-router';
import { HideStackScreenWebContainerProvider } from '../../context/HideStackScreenWebContainerProvider';
export function StackScreenWebContainer(_a) {
    var children = _a.children;
    var goBack = useHistory().goBack;
    var _b = useState(true), visible = _b[0], setVisible = _b[1];
    var hideAnimated = useCallback(function () {
        setVisible(false);
    }, [setVisible]);
    return (React.createElement(HideStackScreenWebContainerProvider, { hideAnimated: hideAnimated },
        React.createElement(AnimatedPresence, null, visible ? (React.createElement(RightSlideAnimation, { onHide: goBack, backgroundColor: 'background', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }, children)) : null)));
}
//# sourceMappingURL=StackScreenWebContainer.js.map
import { AnimatedPresence, RightSlideAnimation, useAnimatedPresenceState } from '@bma98/fractal-ui';
import React from 'react';
import { useHistory } from '../../../react-router';
import { HideStackScreenWebContainerProvider } from './context/HideStackScreenWebContainerProvider';
export function StackScreenWebContainer(_a) {
    var children = _a.children;
    var goBack = useHistory().goBack;
    var _b = useAnimatedPresenceState(goBack, 350, true), visible = _b[0], hideAnimated = _b[1];
    return (React.createElement(HideStackScreenWebContainerProvider, { hideAnimated: hideAnimated },
        React.createElement(AnimatedPresence, null, visible ? (React.createElement(RightSlideAnimation, { backgroundColor: 'background', position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }, children)) : null)));
}
//# sourceMappingURL=StackScreenWebContainer.js.map
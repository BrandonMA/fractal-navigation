import React from 'react';
import { useHistory } from '../../react-router';
import { MiddleCellModal } from '@bma98/fractal-ui';
export function StackScreenWebModalContainer(_a) {
    var children = _a.children;
    var goBack = useHistory().goBack;
    return (React.createElement(MiddleCellModal, { disableStateResetOnDismiss: true, visible: true, onDismiss: goBack }, children));
}
//# sourceMappingURL=StackScreenWebModalContainer.js.map
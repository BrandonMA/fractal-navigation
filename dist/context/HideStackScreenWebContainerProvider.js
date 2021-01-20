import React, { createContext } from 'react';
export var HideStackScreenWebContainerContext = createContext(function () {
    return;
});
export function HideStackScreenWebContainerProvider(_a) {
    var children = _a.children, hideAnimated = _a.hideAnimated;
    return React.createElement(HideStackScreenWebContainerContext.Provider, { value: hideAnimated }, children);
}
//# sourceMappingURL=HideStackScreenWebContainerProvider.js.map
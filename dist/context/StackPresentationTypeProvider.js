import React, { createContext } from 'react';
export var StackPresentationTypeContext = createContext(undefined);
export function StackPresentationTypeProvider(_a) {
    var children = _a.children, stackPresentation = _a.stackPresentation;
    return React.createElement(StackPresentationTypeContext.Provider, { value: stackPresentation }, children);
}
//# sourceMappingURL=StackPresentationTypeProvider.js.map
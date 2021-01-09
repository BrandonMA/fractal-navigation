import React, { createContext } from 'react';
export var StackNavigatorRootPathContext = createContext('/');
export function StackNavigatorRootPathProvider(_a) {
    var children = _a.children, initialValue = _a.initialValue;
    return React.createElement(StackNavigatorRootPathContext.Provider, { value: initialValue }, children);
}
//# sourceMappingURL=StackNavigatorRootPathProvider.js.map
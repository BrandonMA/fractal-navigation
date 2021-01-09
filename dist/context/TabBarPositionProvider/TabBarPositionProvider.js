import React, { createContext, useState } from 'react';
export var TabBarPositionContext = createContext([
    'bottom',
    function () {
        return;
    }
]);
export function TabBarPositionProvider(_a) {
    var children = _a.children;
    var handleState = useState('bottom');
    return React.createElement(TabBarPositionContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarPositionProvider.js.map
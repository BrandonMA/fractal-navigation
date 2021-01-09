import React, { createContext, useState } from 'react';
var cleanEdgeInsets = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
};
export var TabBarInsetsContext = createContext([
    cleanEdgeInsets,
    function () {
        return;
    }
]);
export function TabBarInsetsProvider(_a) {
    var children = _a.children;
    var handleState = useState(cleanEdgeInsets);
    return React.createElement(TabBarInsetsContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarInsetsProvider.js.map
import React, { createContext, useState } from 'react';
export var TabBarHiddenContext = createContext([
    false,
    function () {
        return;
    }
]);
export function TabBarHiddenProvider(_a) {
    var children = _a.children;
    var handleState = useState(false);
    return React.createElement(TabBarHiddenContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarHiddenProvider.js.map
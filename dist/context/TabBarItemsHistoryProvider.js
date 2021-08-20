import React, { createContext, useState } from 'react';
export var TabBarItemsHistoryContext = createContext([
    new Map(),
    function () {
        return;
    }
]);
export function TabBarItemsHistoryProvider(_a) {
    var children = _a.children;
    var handleState = useState(new Map());
    return React.createElement(TabBarItemsHistoryContext.Provider, { value: handleState }, children);
}
//# sourceMappingURL=TabBarItemsHistoryProvider.js.map
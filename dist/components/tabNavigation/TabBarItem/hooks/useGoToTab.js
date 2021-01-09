import { useCallback, useEffect, useRef } from 'react';
import { useHistory, useLocation } from '../../../../react-router';
// This function will try to preserve the tab state when jumping between multiple ones.
// Whenever the currentPathname changes, and we can consider the tab item as active
// It will update the previous value so when we try to come back it doensn't go to the root path.
// We use a reference as there is no need to re render if the value changes.
export function useGoToTab(rootTabItemPath, active) {
    var history = useHistory();
    var previouslyActiveTabItemPath = useRef(null);
    var currentPathname = useLocation().pathname;
    var goToTab = useCallback(function () {
        var _a;
        if (rootTabItemPath != null) {
            if (previouslyActiveTabItemPath.current === currentPathname) {
                history.replace(rootTabItemPath);
            }
            else {
                history.replace((_a = previouslyActiveTabItemPath.current) !== null && _a !== void 0 ? _a : rootTabItemPath);
            }
        }
    }, [rootTabItemPath, history, previouslyActiveTabItemPath, currentPathname]);
    useEffect(function () {
        if (rootTabItemPath != null && currentPathname.includes(rootTabItemPath) && active) {
            previouslyActiveTabItemPath.current = currentPathname;
        }
    }, [rootTabItemPath, active, currentPathname, previouslyActiveTabItemPath]);
    return goToTab;
}
//# sourceMappingURL=useGoToTab.js.map
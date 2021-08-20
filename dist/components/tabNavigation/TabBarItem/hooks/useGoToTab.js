import { useEffect } from 'react';
import { useTabBarItemHistory } from '../../../../hooks';
import { useHistory, useLocation } from '../../../../react-router';
// This function will try to preserve the tab state when jumping between multiple ones.
// Whenever the currentPathname changes, and we can consider the tab item as active
// It will update the previous value so when we try to come back it doensn't go to the root path.
// We use a reference as there is no need to re render if the value changes.
export function useGoToTab(rootTabItemPath, active) {
    var history = useHistory();
    var _a = useTabBarItemHistory(), tabBarHistory = _a[0], setTabBarHistory = _a[1];
    var previouslyActiveTabItemPath = tabBarHistory.get(rootTabItemPath);
    var currentPathname = useLocation().pathname;
    var goToTab = function () {
        if (previouslyActiveTabItemPath === currentPathname) {
            history.replace(rootTabItemPath);
        }
        else {
            history.replace(previouslyActiveTabItemPath !== null && previouslyActiveTabItemPath !== void 0 ? previouslyActiveTabItemPath : rootTabItemPath);
        }
    };
    useEffect(function () {
        if (rootTabItemPath != null && currentPathname.includes(rootTabItemPath) && active) {
            setTabBarHistory(function (tabBarHistory) {
                var newHistory = new Map(tabBarHistory);
                newHistory.set(rootTabItemPath, currentPathname);
                return newHistory;
            });
        }
    }, [rootTabItemPath, active, currentPathname, setTabBarHistory]);
    return goToTab;
}
//# sourceMappingURL=useGoToTab.js.map
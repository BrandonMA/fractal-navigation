import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTabBarInsets } from './useTabBarInsets';
export function useNavigationInsets() {
    var insets = useSafeAreaInsets();
    var tabBarInsets = useTabBarInsets();
    var totalInsets = useMemo(function () {
        return {
            top: insets.top + tabBarInsets.top,
            right: insets.right + tabBarInsets.right,
            bottom: insets.bottom + tabBarInsets.bottom,
            left: insets.left + tabBarInsets.left
        };
    }, [insets, tabBarInsets]);
    return useMemo(function () {
        return {
            totalInsets: totalInsets,
            tabBarInsets: tabBarInsets
        };
    }, [totalInsets, tabBarInsets]);
}
//# sourceMappingURL=useNavigationInsets.js.map
import { useMemo } from 'react';
export function useTabBarSafeAreaPadding(safeAreaInsets, tabBarPosition) {
    return useMemo(function () {
        switch (tabBarPosition) {
            case 'bottom':
                return { paddingBottom: safeAreaInsets.bottom };
            case 'left':
                return { paddingLeft: safeAreaInsets.left };
            case 'right':
                return { paddingRight: safeAreaInsets.right };
        }
    }, [safeAreaInsets, tabBarPosition]);
}
//# sourceMappingURL=useTabBarSafeAreaPadding.js.map
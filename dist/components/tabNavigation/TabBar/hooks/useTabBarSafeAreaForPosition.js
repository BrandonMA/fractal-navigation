import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';
export function useTabBarSafeAreaForPosition(tabBarPosition) {
    var safeAreaInsets = useSafeAreaInsets();
    var size = getTabBarSizeForPosition(tabBarPosition);
    switch (tabBarPosition) {
        case 'right':
            return safeAreaInsets.right + size;
        case 'left':
            return safeAreaInsets.left + size;
        case 'bottom':
            return safeAreaInsets.bottom + size;
    }
}
//# sourceMappingURL=useTabBarSafeAreaForPosition.js.map
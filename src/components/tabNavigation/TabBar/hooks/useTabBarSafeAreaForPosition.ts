import { TabBarPosition } from '../../../../context/TabBarPositionProvider/types/TabBarPosition';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';

export function useTabBarSafeAreaForPosition(tabBarPosition: TabBarPosition): number {
    const safeAreaInsets = useSafeAreaInsets();
    const size = getTabBarSizeForPosition(tabBarPosition);
    switch (tabBarPosition) {
        case 'right':
            return safeAreaInsets.right + size;
        case 'left':
            return safeAreaInsets.left + size;
        case 'bottom':
            return safeAreaInsets.bottom + size;
    }
}

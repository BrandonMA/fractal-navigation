import { EdgeInsets } from 'react-native-safe-area-context';
import { useMemo } from 'react';
import { TabBarPosition } from '../../../../context/TabBarPositionProvider/types/TabBarPosition';

export type TabBarPaddingStyles = { paddingBottom: number } | { paddingLeft: number } | { paddingRight: number };

export function useTabBarSafeAreaPadding(safeAreaInsets: EdgeInsets, tabBarPosition: TabBarPosition): TabBarPaddingStyles {
    return useMemo(() => {
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

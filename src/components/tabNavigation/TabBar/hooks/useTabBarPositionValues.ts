import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
import { useTabBarSafeAreaForPosition } from './useTabBarSafeAreaForPosition';
import { TabBarPosition } from '../../../../context/TabBarPositionProvider';

interface PositionValue {
    width: string | number;
    height: string | number;
    flexDirection: 'row' | 'column';
    bottom?: number;
    left?: number;
    right?: number;
}

export function useTabBarPositionValues(tabBarPosition: TabBarPosition): PositionValue {
    const safeArea = useTabBarSafeAreaForPosition(tabBarPosition);
    const width = getValueForTabBarPosition<string | number>(tabBarPosition, '100%', safeArea, safeArea);
    const height = getValueForTabBarPosition<string | number>(tabBarPosition, safeArea, '100%', '100%');
    const flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    const side = getValueForTabBarPosition(tabBarPosition, { bottom: 0 }, { left: 0 }, { right: 0 });

    return useMemo(() => {
        return { width, height, flexDirection, ...side };
    }, [width, height, flexDirection, side]);
}

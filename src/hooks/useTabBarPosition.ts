import { TabBarPosition } from '../context/TabBarPositionProvider/types/TabBarPosition';
import { useContext } from 'react';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';

export function useTabBarPosition(): TabBarPosition {
    const [position] = useContext(TabBarPositionContext);
    return position;
}

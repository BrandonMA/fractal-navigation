import { useContext, useLayoutEffect } from 'react';
import { useTabBarIsHidden } from '../../../../hooks/useTabBarIsHidden';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';
import { useTabBarPosition } from '../../../../hooks/useTabBarPosition';
import { TabBarInsetsContext } from '../../../../context';

export function useTabBarInsetsForPosition(): void {
    const tabBarPosition = useTabBarPosition();
    const tabBarHidden = useTabBarIsHidden();
    const size = getTabBarSizeForPosition(tabBarPosition, tabBarHidden);
    const [, setTabBarInsets] = useContext(TabBarInsetsContext);

    useLayoutEffect(() => {
        setTabBarInsets({
            top: 0,
            right: tabBarPosition === 'right' ? size : 0,
            bottom: tabBarPosition === 'bottom' ? size : 0,
            left: tabBarPosition === 'left' ? size : 0
        });
    }, [tabBarPosition, setTabBarInsets, size]);
}

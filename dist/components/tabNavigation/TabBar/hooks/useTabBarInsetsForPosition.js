import { useContext, useLayoutEffect } from 'react';
import { useTabBarIsHidden } from '../../../../hooks/useTabBarIsHidden';
import { getTabBarSizeForPosition } from '../util/getTabBarSizeForPosition';
import { useTabBarPosition } from '../../../../hooks/useTabBarPosition';
import { TabBarInsetsContext } from '../../../../context';
export function useTabBarInsetsForPosition() {
    var tabBarPosition = useTabBarPosition();
    var tabBarHidden = useTabBarIsHidden();
    var size = getTabBarSizeForPosition(tabBarPosition, tabBarHidden);
    var _a = useContext(TabBarInsetsContext), setTabBarInsets = _a[1];
    useLayoutEffect(function () {
        setTabBarInsets({
            top: 0,
            right: tabBarPosition === 'right' ? size : 0,
            bottom: tabBarPosition === 'bottom' ? size : 0,
            left: tabBarPosition === 'left' ? size : 0
        });
    }, [tabBarPosition, setTabBarInsets, size]);
}
//# sourceMappingURL=useTabBarInsetsForPosition.js.map
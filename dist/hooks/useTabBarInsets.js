import { useContext } from 'react';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';
export function useTabBarInsets() {
    var insets = useContext(TabBarInsetsContext)[0];
    return insets;
}
//# sourceMappingURL=useTabBarInsets.js.map
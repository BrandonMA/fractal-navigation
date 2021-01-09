import { useContext } from 'react';
import { TabBarHiddenContext } from '../context';
export function useTabBarIsHidden() {
    var hidden = useContext(TabBarHiddenContext)[0];
    return hidden;
}
//# sourceMappingURL=useTabBarIsHidden.js.map
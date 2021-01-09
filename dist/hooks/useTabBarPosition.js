import { useContext } from 'react';
import { TabBarPositionContext } from '../context/TabBarPositionProvider';
export function useTabBarPosition() {
    var position = useContext(TabBarPositionContext)[0];
    return position;
}
//# sourceMappingURL=useTabBarPosition.js.map
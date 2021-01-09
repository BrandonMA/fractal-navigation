import { BasicTabBarItem } from '../components/BasicTabBarItem';
import { CircularTabBarItem } from '../components/CircularTabBarItem';
export function getTabBarItemComponent(variant) {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}
//# sourceMappingURL=getTabBarItemComponent.js.map
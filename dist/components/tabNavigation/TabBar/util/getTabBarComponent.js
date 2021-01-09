import { BasicTabBar } from '../components/BasicTabBar';
import { MiddleActionTabBar } from '../components/MiddleActionTabBar';
export function getTabBarComponent(variant) {
    if (variant === 'middle-action') {
        return MiddleActionTabBar;
    }
    else {
        return BasicTabBar;
    }
}
//# sourceMappingURL=getTabBarComponent.js.map
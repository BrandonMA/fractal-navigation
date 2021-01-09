import { BasicTabBar } from '../components/BasicTabBar';
import { MiddleActionTabBar } from '../components/MiddleActionTabBar';
import { TabBarVariant } from '../types/TabBarVariant';

export function getTabBarComponent(variant?: TabBarVariant): typeof BasicTabBar | typeof MiddleActionTabBar {
    if (variant === 'middle-action') {
        return MiddleActionTabBar;
    } else {
        return BasicTabBar;
    }
}

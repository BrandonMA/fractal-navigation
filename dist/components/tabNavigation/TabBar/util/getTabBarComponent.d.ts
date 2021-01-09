import { BasicTabBar } from '../components/BasicTabBar';
import { MiddleActionTabBar } from '../components/MiddleActionTabBar';
import { TabBarVariant } from '../types/TabBarVariant';
export declare function getTabBarComponent(variant?: TabBarVariant): typeof BasicTabBar | typeof MiddleActionTabBar;

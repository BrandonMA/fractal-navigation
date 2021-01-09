import { TabBarPosition } from '../../../../context/TabBarPositionProvider';
interface PositionValue {
    width: string | number;
    height: string | number;
    flexDirection: 'row' | 'column';
    bottom?: number;
    left?: number;
    right?: number;
}
export declare function useTabBarPositionValues(tabBarPosition: TabBarPosition): PositionValue;
export {};

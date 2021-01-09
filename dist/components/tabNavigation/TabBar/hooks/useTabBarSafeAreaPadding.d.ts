import { EdgeInsets } from 'react-native-safe-area-context';
import { TabBarPosition } from '../../../../context/TabBarPositionProvider/types/TabBarPosition';
declare type TabBarPaddingStyles = {
    paddingBottom: number;
} | {
    paddingLeft: number;
} | {
    paddingRight: number;
};
export declare function useTabBarSafeAreaPadding(safeAreaInsets: EdgeInsets, tabBarPosition: TabBarPosition): TabBarPaddingStyles;
export {};

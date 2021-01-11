import { ReactNode } from 'react';
import { TabBarPaddingStyles } from '../../../hooks/useTabBarSafeAreaPadding';
interface SideViewProps {
    tabBarSafeAreaPadding: TabBarPaddingStyles;
    flexDirection: 'column' | 'row';
    children: Array<ReactNode> | ReactNode;
}
export declare function SideView({ tabBarSafeAreaPadding, flexDirection, children }: SideViewProps): JSX.Element;
export {};

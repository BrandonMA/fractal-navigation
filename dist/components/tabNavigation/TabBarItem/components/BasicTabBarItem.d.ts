import React from 'react';
import { SizeGroup } from '@bma98/size-class';
export interface BasicTabBarItemProps {
    widthSizeGroup: SizeGroup;
    highlightColor?: string;
    children: React.ReactNode;
}
export declare const BasicTabBarItem: React.MemoExoticComponent<(props: BasicTabBarItemProps) => JSX.Element>;

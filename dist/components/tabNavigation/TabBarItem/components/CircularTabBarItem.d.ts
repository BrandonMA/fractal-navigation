import React from 'react';
export interface CircularTabBarItemProps {
    bg?: string;
    highlightColor?: string;
    children: React.ReactNode;
}
export declare const CircularTabBarItem: React.MemoExoticComponent<(props: CircularTabBarItemProps) => JSX.Element>;

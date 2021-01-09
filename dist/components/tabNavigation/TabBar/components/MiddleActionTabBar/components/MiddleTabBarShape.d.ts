import React from 'react';
import { SvgProps } from 'react-native-svg';
import { TabBarPosition } from '../../../../../../context/TabBarPositionProvider/types/TabBarPosition';
interface MiddleTabBarShapeProps extends SvgProps {
    tabBarPosition: TabBarPosition;
}
export declare const MiddleTabBarShape: React.MemoExoticComponent<(props: MiddleTabBarShapeProps) => JSX.Element>;
export {};

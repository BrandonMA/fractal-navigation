import { Animated, ViewProps } from 'react-native';
import { TabBarVariant } from './TabBarVariant';
import { TabBarPosition } from '../../../../context/TabBarPositionProvider/types/TabBarPosition';
export interface TabBarProps extends Omit<Animated.AnimatedProps<ViewProps>, 'children'> {
    children?: Array<JSX.Element> | JSX.Element;
    tabBarVariant: TabBarVariant;
    tabBarPosition: TabBarPosition;
}

import { PressableProps } from 'react-native';
import { BasicTabBarItem, BasicTabBarItemProps } from '../components/BasicTabBarItem';
import { CircularTabBarItem, CircularTabBarItemProps } from '../components/CircularTabBarItem';
import { TabBarItemVariant } from '../types/TabBarItemVariant';

interface Props extends Omit<PressableProps, 'children'>, CircularTabBarItemProps, BasicTabBarItemProps {}

export function getTabBarItemComponent(variant?: TabBarItemVariant): (props: Props) => JSX.Element | null {
    return variant === 'circular' ? CircularTabBarItem : BasicTabBarItem;
}

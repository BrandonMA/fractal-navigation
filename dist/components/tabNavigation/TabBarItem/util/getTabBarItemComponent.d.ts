import { PressableProps } from 'react-native';
import { BasicTabBarItemProps } from '../components/BasicTabBarItem';
import { CircularTabBarItemProps } from '../components/CircularTabBarItem';
import { TabBarItemVariant } from '../types/TabBarItemVariant';
interface Props extends Omit<PressableProps, 'children'>, CircularTabBarItemProps, BasicTabBarItemProps {
}
export declare function getTabBarItemComponent(variant?: TabBarItemVariant): (props: Props) => JSX.Element | null;
export {};

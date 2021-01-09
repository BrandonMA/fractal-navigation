import { PressableProps } from 'react-native';
import { TabBarItemVariant } from './TabBarItemVariant';

export interface TabBarItemProps extends PressableProps {
    title?: string;
    path: string;
    children: (color: string, size: number) => JSX.Element;
    variant?: TabBarItemVariant;
}

import { ScreenContainerProps } from 'react-native-screens';
export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
}
export declare function TabNavigator({ tabBar, children, style, ...others }: TabNavigatorProps): JSX.Element;

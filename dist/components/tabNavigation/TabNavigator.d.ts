/// <reference types="react" />
import { ScreenContainerProps } from 'react-native-screens';
export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute: string;
    tabBar: JSX.Element;
}
export declare function TabNavigator(props: TabNavigatorProps): JSX.Element;

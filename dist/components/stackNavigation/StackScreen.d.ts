/// <reference types="react" />
import { NavigationRouteProps } from '../NavigationRoute/NavigationRoute';
interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: JSX.Element;
}
export declare function StackScreen(props: StackScreenProps): JSX.Element;
export {};

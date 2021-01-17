/// <reference types="react" />
import { NavigationRouteProps } from '../NavigationRoute/NavigationRoute';
interface StackScreenProps extends NavigationRouteProps {
    navBarConfig?: JSX.Element;
    rootScreen?: boolean;
}
export declare function StackScreen({ children, navBarConfig, stackPresentation, path, ...others }: StackScreenProps): JSX.Element;
export {};

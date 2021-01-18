import { ReactNode } from 'react';
import { ScreenProps, StackPresentationTypes } from 'react-native-screens';
export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | ReactNode;
    stackPresentation?: StackPresentationTypes;
    isTabScreen?: boolean;
    isRootRoute?: boolean;
}
export declare function NavigationRoute({ path, style, children, isTabScreen, stackPresentation, isRootRoute, ...others }: NavigationRouteProps): JSX.Element | null;

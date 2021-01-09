import React from 'react';
import { ScreenProps, StackPresentationTypes } from 'react-native-screens';
export interface NavigationRouteProps extends Omit<ScreenProps, 'stackPresentation' | 'active'> {
    path?: string;
    children?: Array<JSX.Element> | JSX.Element | React.ReactNode;
    stackPresentation?: StackPresentationTypes;
    isTabScreen?: boolean;
}
export declare function NavigationRoute({ path, style, children, isTabScreen, stackPresentation, ...others }: NavigationRouteProps): JSX.Element;

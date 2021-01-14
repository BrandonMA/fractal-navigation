import React, { useMemo } from 'react';
import { NavigationBarCenterView, NavigationBarLeftView, NavigationBarRightView } from '../../NavigationBarViews';
import { ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from 'react-native-screens';

export function useNavigationBarChildren(
    children: Array<JSX.Element> | JSX.Element | undefined
): [JSX.Element | null, JSX.Element | null, JSX.Element | null] {
    return useMemo(() => {
        let leftChild: JSX.Element | null = null;
        let centerChild: JSX.Element | null = null;
        let rightChild: JSX.Element | null = null;

        React.Children.forEach(children, (child) => {
            if (child?.type === NavigationBarLeftView) {
                leftChild = child;
            } else if (child?.type === NavigationBarCenterView) {
                centerChild = child;
            } else if (child?.type === NavigationBarRightView) {
                rightChild = child;
            } else if (child?.type === ScreenStackHeaderRightView) {
                rightChild = <NavigationBarRightView {...child.props} />;
            } else if (child?.type === ScreenStackHeaderCenterView) {
                centerChild = <NavigationBarCenterView {...child.props} />;
            } else if (child?.type === ScreenStackHeaderLeftView) {
                leftChild = <NavigationBarLeftView {...child.props} />;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}

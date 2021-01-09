import React, { useMemo } from 'react';
import { NavigationBarCenterView, NavigationBarLeftView, NavigationBarRightView } from '../../NavigationBarViews';

export function useNavigationBarChildren(
    children: Array<JSX.Element> | JSX.Element | undefined
): [JSX.Element | null, JSX.Element | null, JSX.Element | null] {
    return useMemo(() => {
        let leftChild: JSX.Element | null = null;
        let centerChild: JSX.Element | null = null;
        let rightChild: JSX.Element | null = null;

        React.Children.forEach(children, (child) => {
            if (child?.type.name === 'NavigationBarLeftView') {
                leftChild = child;
            } else if (child?.type.name === 'NavigationBarCenterView') {
                centerChild = child;
            } else if (child?.type.name === 'NavigationBarRightView') {
                rightChild = child;
            } else if (child?.type.name === 'ScreenStackHeaderRightView') {
                rightChild = <NavigationBarRightView {...child.props} />;
            } else if (child?.type.name === 'ScreenStackHeaderCenterView') {
                centerChild = <NavigationBarCenterView {...child.props} />;
            } else if (child?.type.name === 'ScreenStackHeaderLeftView') {
                leftChild = <NavigationBarLeftView {...child.props} />;
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}

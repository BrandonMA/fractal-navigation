import React from 'react';
import { NavigationBarProps } from './types/NavigationBarProps';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { useActiveRoutesAmount } from './hooks/useActiveRoutesAmount';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
import { NavigationBarLeft } from './components/NavigationBarLeft';
import { NavigationBarRight } from './components/NavigationBarRight';
import { NavigationBarCenter } from './components/NavigationBarCenter';
import { NavigationBarBackground } from './components/NavigationBarBackground';
import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';
import { useGoBackAnimated } from '../../../hooks/useGoBackAnimated';

// Render might be called multiple times because of useLocation and useRouteMatch.
// But as long as we keep diving components and using memo, the performance hit is actually nothing to worry about.
export function NavigationBar({
    hidden,
    title,
    hideBackButton,
    stackPresentation = 'push',
    backTitle,
    path = '',
    children
}: NavigationBarProps): JSX.Element | null {
    const isRouteActiveAndExact = useIsRouteActive(path, true);
    const activeRoutesAmount = useActiveRoutesAmount(path);
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    const isRootNavigationBar = stackNavigatorRootPath === path;
    const goBack = useGoBackAnimated(stackPresentation);

    return hidden ? null : (
        <NavigationBarBackground>
            <NavigationBarLeft
                showBackButton={activeRoutesAmount > 1 && isRouteActiveAndExact && !hideBackButton && !isRootNavigationBar}
                goBack={goBack}
                backTitle={backTitle}
            >
                {leftChild}
            </NavigationBarLeft>
            <NavigationBarCenter title={title}>{centerChild}</NavigationBarCenter>
            <NavigationBarRight>{rightChild}</NavigationBarRight>
        </NavigationBarBackground>
    );
}

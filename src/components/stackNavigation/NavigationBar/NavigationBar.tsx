import React from 'react';
import { useHistory } from '../../../react-router';
import { NavigationBarProps } from './types/NavigationBarProps';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { useActiveRouteSections } from './hooks/useActiveRouteSections';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
import { NavigationBarLeft } from './components/NavigationBarLeft';
import { NavigationBarRight } from './components/NavigationBarRight';
import { NavigationBarCenter } from './components/NavigationBarCenter';
import { NavigationBarBackground } from './components/NavigationBarBackground';
import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';

// Render might be called multiple times because of useLocation and useRouteMatch.
// But as long as we keep diving components and using memo, the performance hit is actually nothing to worry about.
export function NavigationBar(props: NavigationBarProps): JSX.Element | null {
    const { hidden, title, hideBackButton, backTitle, path, children } = props;
    const { goBack } = useHistory();
    const isRouteActiveAndExact = useIsRouteActive(path ?? '', true);
    const activeRouteSections = useActiveRouteSections(path ?? '');
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    const isRootNavigationBar = stackNavigatorRootPath === path;

    return hidden ? null : (
        <NavigationBarBackground>
            <NavigationBarLeft
                showBackButton={activeRouteSections > 1 && isRouteActiveAndExact && !hideBackButton && !isRootNavigationBar}
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

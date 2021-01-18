import React, { useCallback } from 'react';
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
import { useHideModalAnimated } from '@bma98/fractal-ui/dist/components/modals/hooks/useHideModalAnimated';
import { Platform } from 'react-native';

// Render might be called multiple times because of useLocation and useRouteMatch.
// But as long as we keep diving components and using memo, the performance hit is actually nothing to worry about.
export function NavigationBar({
    hidden,
    title,
    hideBackButton,
    stackPresentation,
    backTitle,
    path = '',
    children
}: NavigationBarProps): JSX.Element | null {
    const isRouteActiveAndExact = useIsRouteActive(path, true);
    const activeRouteSections = useActiveRouteSections(path);
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    const isRootNavigationBar = stackNavigatorRootPath === path;

    const { goBack } = useHistory();
    const hideModalAnimated = useHideModalAnimated();
    const handleGoBack = useCallback(() => {
        if (stackPresentation === 'modal' && Platform.OS === 'web') {
            hideModalAnimated();
        } else {
            goBack();
        }
    }, [goBack, stackPresentation, hideModalAnimated]);

    return hidden ? null : (
        <NavigationBarBackground>
            <NavigationBarLeft
                showBackButton={activeRouteSections > 1 && isRouteActiveAndExact && !hideBackButton && !isRootNavigationBar}
                goBack={handleGoBack}
                backTitle={backTitle}
            >
                {leftChild}
            </NavigationBarLeft>
            <NavigationBarCenter title={title}>{centerChild}</NavigationBarCenter>
            <NavigationBarRight>{rightChild}</NavigationBarRight>
        </NavigationBarBackground>
    );
}

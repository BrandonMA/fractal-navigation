import React, { useCallback } from 'react';
import { useHistory } from '../../../react-router';
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
export function NavigationBar(_a) {
    var hidden = _a.hidden, title = _a.title, hideBackButton = _a.hideBackButton, stackPresentation = _a.stackPresentation, backTitle = _a.backTitle, _b = _a.path, path = _b === void 0 ? '' : _b, children = _a.children;
    var isRouteActiveAndExact = useIsRouteActive(path, true);
    var activeRouteSections = useActiveRouteSections(path);
    var _c = useNavigationBarChildren(children), leftChild = _c[0], centerChild = _c[1], rightChild = _c[2];
    var stackNavigatorRootPath = useStackNavigatorRootPath();
    var isRootNavigationBar = stackNavigatorRootPath === path;
    var goBack = useHistory().goBack;
    var hideModalAnimated = useHideModalAnimated();
    var handleGoBack = useCallback(function () {
        if (stackPresentation === 'modal' && Platform.OS === 'web') {
            hideModalAnimated();
        }
        else {
            goBack();
        }
    }, [goBack, stackPresentation, hideModalAnimated]);
    return hidden ? null : (React.createElement(NavigationBarBackground, null,
        React.createElement(NavigationBarLeft, { showBackButton: activeRouteSections > 1 && isRouteActiveAndExact && !hideBackButton && !isRootNavigationBar, goBack: handleGoBack, backTitle: backTitle }, leftChild),
        React.createElement(NavigationBarCenter, { title: title }, centerChild),
        React.createElement(NavigationBarRight, null, rightChild)));
}
//# sourceMappingURL=NavigationBar.js.map
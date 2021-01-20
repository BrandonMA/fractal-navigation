import React from 'react';
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
export function NavigationBar(_a) {
    var hidden = _a.hidden, title = _a.title, hideBackButton = _a.hideBackButton, backTitle = _a.backTitle, _b = _a.path, path = _b === void 0 ? '' : _b, children = _a.children;
    var isRouteActiveAndExact = useIsRouteActive(path, true);
    var activeRoutesAmount = useActiveRoutesAmount(path);
    var _c = useNavigationBarChildren(children), leftChild = _c[0], centerChild = _c[1], rightChild = _c[2];
    var stackNavigatorRootPath = useStackNavigatorRootPath();
    var isRootNavigationBar = stackNavigatorRootPath === path;
    var goBack = useGoBackAnimated();
    return hidden ? null : (React.createElement(NavigationBarBackground, null,
        React.createElement(NavigationBarLeft, { showBackButton: activeRoutesAmount > 1 && isRouteActiveAndExact && !hideBackButton && !isRootNavigationBar, goBack: goBack, backTitle: backTitle }, leftChild),
        React.createElement(NavigationBarCenter, { title: title }, centerChild),
        React.createElement(NavigationBarRight, null, rightChild)));
}
//# sourceMappingURL=NavigationBar.js.map
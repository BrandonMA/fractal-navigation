import React from 'react';
import { useHistory } from '../../../react-router';
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
export function NavigationBar(props) {
    var hidden = props.hidden, title = props.title, hideBackButton = props.hideBackButton, backTitle = props.backTitle, path = props.path, children = props.children;
    var goBack = useHistory().goBack;
    var isRouteActiveAndExact = useIsRouteActive(path !== null && path !== void 0 ? path : '', true);
    var activeRouteSections = useActiveRouteSections(path !== null && path !== void 0 ? path : '');
    var _a = useNavigationBarChildren(children), leftChild = _a[0], centerChild = _a[1], rightChild = _a[2];
    var stackNavigatorRootPath = useStackNavigatorRootPath();
    var isRootNavigationBar = stackNavigatorRootPath === path;
    return hidden ? null : (React.createElement(NavigationBarBackground, null,
        React.createElement(NavigationBarLeft, { showBackButton: activeRouteSections > 1 && isRouteActiveAndExact && !hideBackButton && !isRootNavigationBar, goBack: goBack, backTitle: backTitle }, leftChild),
        React.createElement(NavigationBarCenter, { title: title }, centerChild),
        React.createElement(NavigationBarRight, null, rightChild)));
}
//# sourceMappingURL=NavigationBar.js.map
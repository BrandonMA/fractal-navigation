import React from 'react';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { NavigationBarLeft } from './components/NavigationBarLeft';
import { NavigationBarRight } from './components/NavigationBarRight';
import { NavigationBarCenter } from './components/NavigationBarCenter';
import { NavigationBarBackground } from './components/NavigationBarBackground';
import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';
import { useGoBackAnimated } from '../../../hooks/useGoBackAnimated';
export function NavigationBar(_a) {
    var hidden = _a.hidden, title = _a.title, hideBackButton = _a.hideBackButton, backTitle = _a.backTitle, _b = _a.path, path = _b === void 0 ? '' : _b, children = _a.children;
    var _c = useNavigationBarChildren(children), leftChild = _c[0], centerChild = _c[1], rightChild = _c[2];
    var stackNavigatorRootPath = useStackNavigatorRootPath();
    var isRootNavigationBar = stackNavigatorRootPath === path;
    var goBack = useGoBackAnimated();
    return hidden ? null : (React.createElement(NavigationBarBackground, null,
        React.createElement(NavigationBarLeft, { showBackButton: !isRootNavigationBar && !hideBackButton, goBack: goBack, backTitle: backTitle }, leftChild),
        React.createElement(NavigationBarCenter, { title: title }, centerChild),
        React.createElement(NavigationBarRight, null, rightChild)));
}
//# sourceMappingURL=NavigationBar.js.map
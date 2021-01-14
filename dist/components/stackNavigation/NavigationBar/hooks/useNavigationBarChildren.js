var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useMemo } from 'react';
import { NavigationBarCenterView, NavigationBarLeftView, NavigationBarRightView } from '../../NavigationBarViews';
import { ScreenStackHeaderCenterView, ScreenStackHeaderLeftView, ScreenStackHeaderRightView } from 'react-native-screens';
export function useNavigationBarChildren(children) {
    return useMemo(function () {
        var leftChild = null;
        var centerChild = null;
        var rightChild = null;
        React.Children.forEach(children, function (child) {
            if ((child === null || child === void 0 ? void 0 : child.type) === NavigationBarLeftView) {
                leftChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === NavigationBarCenterView) {
                centerChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === NavigationBarRightView) {
                rightChild = child;
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderRightView) {
                rightChild = React.createElement(NavigationBarRightView, __assign({}, child.props));
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderCenterView) {
                centerChild = React.createElement(NavigationBarCenterView, __assign({}, child.props));
            }
            else if ((child === null || child === void 0 ? void 0 : child.type) === ScreenStackHeaderLeftView) {
                leftChild = React.createElement(NavigationBarLeftView, __assign({}, child.props));
            }
        });
        return [leftChild, centerChild, rightChild];
    }, [children]);
}
//# sourceMappingURL=useNavigationBarChildren.js.map
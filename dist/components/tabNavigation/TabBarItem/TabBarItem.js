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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { memo } from 'react';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { useWidthSizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { useGoToTab } from './hooks/useGoToTab';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
import { BaseBox, Text } from '@bma98/fractal-ui';
import { useTheme } from '@shopify/restyle';
import { useTabBarPosition } from '../../../hooks/useTabBarPosition';
var tabBarItemCompactSpacerSize = { width: 0, height: 0 };
var tabBarItemLargeSpacerSize = { width: 8, height: 1 };
var Spacer = memo(BaseBox);
export var TabBarItem = memo(function (props) {
    var path = props.path, variant = props.variant, title = props.title, children = props.children, others = __rest(props, ["path", "variant", "title", "children"]);
    var isRouteActive = useIsRouteActive(path, false);
    var TabBarItemContainer = getTabBarItemComponent(variant);
    var iconSize = getTabIconSize(variant);
    var widthSizeGroup = useWidthSizeGroup();
    var tabBarPosition = useTabBarPosition();
    var spacerSize = tabBarPosition !== 'bottom'
        ? tabBarItemCompactSpacerSize
        : getValueForLargeSize(widthSizeGroup[0], tabBarItemLargeSpacerSize, tabBarItemCompactSpacerSize);
    var goToTab = useGoToTab(path, isRouteActive);
    var colors = useTheme().colors;
    var tabBarItemColorIdentifier = isRouteActive ? 'tabBarItemActive' : 'tabBarItemInactive';
    return (React.createElement(TabBarItemContainer, __assign({}, others, { onPress: goToTab, bg: colors.mainInteractiveColor, widthSizeGroup: widthSizeGroup, highlightColor: colors.mainInteractiveColor600 }),
        children(colors[variant === 'circular' ? 'white' : tabBarItemColorIdentifier], iconSize),
        React.createElement(Spacer, __assign({}, spacerSize)),
        variant === 'circular' && title != null ? null : React.createElement(Text, { variant: tabBarItemColorIdentifier }, title)));
});
//# sourceMappingURL=TabBarItem.js.map
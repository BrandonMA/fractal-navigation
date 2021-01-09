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
import { getValueForTabBarPosition } from '../util/getValueForTabBarPosition';
import { useMemo } from 'react';
import { useTabBarSafeAreaForPosition } from './useTabBarSafeAreaForPosition';
export function useTabBarPositionValues(tabBarPosition) {
    var safeArea = useTabBarSafeAreaForPosition(tabBarPosition);
    var width = getValueForTabBarPosition(tabBarPosition, '100%', safeArea, safeArea);
    var height = getValueForTabBarPosition(tabBarPosition, safeArea, '100%', '100%');
    var flexDirection = getValueForTabBarPosition(tabBarPosition, 'row', 'column', 'column');
    var side = getValueForTabBarPosition(tabBarPosition, { bottom: 0 }, { left: 0 }, { right: 0 });
    return useMemo(function () {
        return __assign({ width: width, height: height, flexDirection: flexDirection }, side);
    }, [width, height, flexDirection, side]);
}
//# sourceMappingURL=useTabBarPositionValues.js.map
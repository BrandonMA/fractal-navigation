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
import React from 'react';
import { Animated } from 'react-native';
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';
export function SafeAreaSectionsList(props) {
    var scrollViewProps = useSafeAreaScrollViewProps();
    return React.createElement(Animated.SectionList, __assign({}, props, scrollViewProps));
}
//# sourceMappingURL=SafeAreaSectionsList.js.map
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
import { useSafeAreaScrollViewProps } from './hooks/useSafeAreaScrollViewProps';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
export function SafeAreaScrollView(props) {
    var scrollViewProps = useSafeAreaScrollViewProps(props);
    return React.createElement(KeyboardAwareScrollView, __assign({ enableOnAndroid: true }, scrollViewProps));
}
//# sourceMappingURL=SafeAreaScrollView.js.map
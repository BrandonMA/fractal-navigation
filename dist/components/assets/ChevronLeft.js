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
import React, { memo } from 'react';
import Svg, { Path } from 'react-native-svg';
export var ChevronLeft = memo(function (props) {
    return (React.createElement(Svg, __assign({ viewBox: '0 0 30 30', width: 30, height: 30 }, props),
        React.createElement(Path, { d: 'M17 3h2a1.002 1.002 0 01.774 1.634L11.292 15l8.482 10.367A1.001 1.001 0 0119 27h-2a1 1 0 01-.774-.367l-9-11a1.002 1.002 0 010-1.267l9-11C16.416 3.135 16.7 3 17 3z' })));
});
//# sourceMappingURL=ChevronLeft.js.map
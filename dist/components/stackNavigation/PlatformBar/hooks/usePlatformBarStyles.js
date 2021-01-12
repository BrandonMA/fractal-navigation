/* eslint-disable react-hooks/rules-of-hooks */
import { Platform } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
var emptyConfig = {};
export function usePlatformBarStyles() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        var _a = useTheme(), colors_1 = _a.colors, textVariants_1 = _a.textVariants;
        return useMemo(function () {
            return {
                backgroundColor: colors_1.navigationBarBackground,
                titleColor: colors_1.navigationBarTitleColor,
                color: colors_1.navigationBarButtonColor,
                titleFontSize: textVariants_1.navigationBarTitle.fontSize,
                titleFontWeight: textVariants_1.navigationBarTitle.fontWeight
            };
        }, [colors_1, textVariants_1]);
    }
    else {
        return emptyConfig;
    }
}
//# sourceMappingURL=usePlatformBarStyles.js.map
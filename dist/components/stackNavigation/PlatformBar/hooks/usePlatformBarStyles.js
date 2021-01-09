/* eslint-disable react-hooks/rules-of-hooks */
import { Platform } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
var emptyConfig = {};
export function usePlatformBarStyles() {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        var theme_1 = useTheme();
        return useMemo(function () {
            return {
                backgroundColor: theme_1.colors.navigationBarBackground,
                titleColor: theme_1.colors.navigationBarTitleColor,
                color: theme_1.colors.navigationBarButtonColor,
                titleFontSize: theme_1.textVariants.navigationBarTitle.fontSize,
                titleFontWeight: theme_1.textVariants.navigationBarTitle.fontWeight
            };
        }, [theme_1.colors, theme_1.textVariants]);
    }
    else {
        return emptyConfig;
    }
}
//# sourceMappingURL=usePlatformBarStyles.js.map
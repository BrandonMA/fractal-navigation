/* eslint-disable react-hooks/rules-of-hooks */
import { Platform } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '@bma98/fractal-ui';

const emptyConfig = {};

export function usePlatformBarStyles(): unknown {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const theme = useTheme<FractalTheme>();
        return useMemo(() => {
            return {
                backgroundColor: theme.colors.navigationBarBackground,
                titleColor: theme.colors.navigationBarTitleColor,
                color: theme.colors.navigationBarButtonColor,
                titleFontSize: theme.textVariants.navigationBarTitle.fontSize,
                titleFontWeight: theme.textVariants.navigationBarTitle.fontWeight
            };
        }, [theme.colors, theme.textVariants]);
    } else {
        return emptyConfig;
    }
}

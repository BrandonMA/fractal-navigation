/* eslint-disable react-hooks/rules-of-hooks */
import { Platform } from 'react-native';
import { useMemo } from 'react';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '@bma98/fractal-ui';

const emptyConfig = {};

export function usePlatformBarStyles(): unknown {
    if (Platform.OS === 'ios' || Platform.OS === 'android') {
        const { colors, textVariants } = useTheme<FractalTheme>();
        return useMemo(() => {
            return {
                backgroundColor: colors.navigationBarBackground,
                titleColor: colors.navigationBarTitleColor,
                color: colors.navigationBarButtonColor,
                titleFontSize: textVariants.navigationBarTitle.fontSize,
                titleFontWeight: textVariants.navigationBarTitle.fontWeight
            };
        }, [colors, textVariants]);
    } else {
        return emptyConfig;
    }
}

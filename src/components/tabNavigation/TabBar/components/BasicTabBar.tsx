import React from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { TabBarProps } from '../types';
import { useTabBarPositionValues } from '../hooks/useTabBarPositionValues';
import { BaseBox, FractalTheme } from '@bma98/fractal-ui';
import { useTheme } from '@shopify/restyle';
import { useTabBarSafeAreaPadding } from '../hooks/useTabBarSafeAreaPadding';

export function BasicTabBar(props: TabBarProps): JSX.Element {
    const { tabBarPosition } = props;
    const safeAreaInsets = useSafeAreaInsets();
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(safeAreaInsets, tabBarPosition);
    const theme = useTheme<FractalTheme>();

    return (
        <BaseBox
            {...props}
            {...positionValues}
            style={tabBarSafeAreaPadding}
            backgroundColor={'tabBarBackground'}
            shadowColor={'shadowColor'}
            shadowOffset={theme.shadowProperties.offset}
            shadowOpacity={theme.shadowProperties.opacity}
            shadowRadius={theme.shadowProperties.radius}
            justifyContent={'center'}
            position={'absolute'}
        />
    );
}

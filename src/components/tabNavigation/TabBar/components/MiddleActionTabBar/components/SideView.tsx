import { useTheme } from '@shopify/restyle';
import { BaseBox, FractalTheme } from '@bma98/fractal-ui';
import React, { ReactNode } from 'react';
import { TabBarPaddingStyles } from '../../../hooks/useTabBarSafeAreaPadding';

interface SideViewProps {
    tabBarSafeAreaPadding: TabBarPaddingStyles;
    flexDirection: 'column' | 'row';
    children: Array<ReactNode> | ReactNode;
}

export function SideView({ tabBarSafeAreaPadding, flexDirection, children }: SideViewProps): JSX.Element {
    const { shadowProperties } = useTheme<FractalTheme>();
    return (
        <BaseBox
            style={tabBarSafeAreaPadding}
            flexDirection={flexDirection}
            backgroundColor={'tabBarBackground'}
            flex={1}
            shadowColor={'shadowColor'}
            shadowOffset={shadowProperties.offset}
            shadowOpacity={shadowProperties.opacity}
            shadowRadius={shadowProperties.radius}
        >
            {children}
        </BaseBox>
    );
}

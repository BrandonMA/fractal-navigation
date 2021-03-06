import React, { memo, ReactNode } from 'react';
import { useTheme } from '@shopify/restyle';
import { BaseBox, FractalTheme } from '@bma98/fractal-ui';

interface NavigationBarBackgroundProps {
    children: ReactNode;
}

export const NavigationBarBackground = memo(
    ({ children }: NavigationBarBackgroundProps): JSX.Element => {
        const { navigationBar, shadowProperties } = useTheme<FractalTheme>();

        return (
            <BaseBox
                backgroundColor='navigationBarBackground'
                flexDirection='row'
                height={navigationBar.navigationBarHeight}
                shadowOffset={shadowProperties.navigationBarOffset}
                shadowColor='shadowColor'
                shadowOpacity={shadowProperties.navigationBarOpacity}
                shadowRadius={shadowProperties.navigationBarRadius}
                width={'100%'}
                zIndex={2000}
                paddingHorizontal='m'
                elevation={1}
            >
                {children}
            </BaseBox>
        );
    }
);

import React, { memo, ReactNode } from 'react';
import { useTheme } from '@shopify/restyle';
import { BaseBox, FractalTheme } from '@bma98/fractal-ui';

interface NavigationBarBackgroundProps {
    children: ReactNode;
}

export const NavigationBarBackground = memo(
    (props: NavigationBarBackgroundProps): JSX.Element => {
        const { children } = props;
        const theme = useTheme<FractalTheme>();

        return (
            <BaseBox
                backgroundColor='navigationBarBackground'
                flexDirection='row'
                height={theme.navigationBar.navigationBarHeight}
                shadowOffset={theme.shadowProperties.offset}
                shadowColor='shadowColor'
                shadowOpacity={theme.shadowProperties.opacity}
                shadowRadius={theme.shadowProperties.radius}
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

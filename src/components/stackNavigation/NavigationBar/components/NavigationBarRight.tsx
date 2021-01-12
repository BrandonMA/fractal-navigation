import React, { memo, ReactNode } from 'react';
import { BaseBox } from '@bma98/fractal-ui';

interface NavigationBarRightProps {
    children?: ReactNode;
}

export const NavigationBarRight = memo(
    ({ children }: NavigationBarRightProps): JSX.Element => {
        return (
            <BaseBox justifyContent='flex-end' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
                {children}
            </BaseBox>
        );
    }
);

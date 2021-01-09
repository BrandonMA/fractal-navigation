import React, { memo, ReactNode } from 'react';
import { BaseBox } from '@bma98/fractal-ui';

interface NavigationBarRightProps {
    children?: ReactNode;
}

export const NavigationBarRight = memo(
    (props: NavigationBarRightProps): JSX.Element => {
        const { children } = props;

        return (
            <BaseBox justifyContent='flex-end' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
                {children}
            </BaseBox>
        );
    }
);

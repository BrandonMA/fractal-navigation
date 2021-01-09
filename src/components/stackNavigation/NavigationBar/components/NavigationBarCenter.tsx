import React, { memo, ReactNode } from 'react';
import { BaseBox, Text } from '@bma98/fractal-ui';

interface NavigationBarCenterProps {
    children?: ReactNode;
    title?: string;
}

export const NavigationBarCenter = memo(
    (props: NavigationBarCenterProps): JSX.Element => {
        const { children, title } = props;

        return (
            <BaseBox justifyContent='center' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
                {children ?? (
                    <Text textAlign='center' variant='navigationBarTitle'>
                        {title}
                    </Text>
                )}
            </BaseBox>
        );
    }
);

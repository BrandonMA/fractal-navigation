import React, { memo, ReactNode } from 'react';
import { BaseBox, Text } from '@bma98/fractal-ui';
import { Platform } from 'react-native';

interface NavigationBarCenterProps {
    children?: ReactNode;
    title?: string;
}

const titleStyle: any = {
    display: Platform.OS === 'web' ? 'block' : 'flex'
};

export const NavigationBarCenter = memo(
    ({ children, title }: NavigationBarCenterProps): JSX.Element => {
        return (
            <BaseBox justifyContent='center' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
                {children ? (
                    children
                ) : title ? (
                    <Text textAlign='center' variant='navigationBarTitle' numberOfLines={1} style={titleStyle}>
                        {title}
                    </Text>
                ) : null}
            </BaseBox>
        );
    }
);

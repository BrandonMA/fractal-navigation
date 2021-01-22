import React, { memo, ReactNode, useCallback } from 'react';
import { BaseBox } from '@bma98/fractal-ui';
import { NavigationBarButton } from '../../NavigationBarButton';
import { ChevronLeft } from '../../../assets/ChevronLeft';

interface NavigationBarLeftProps {
    children?: ReactNode;
    showBackButton: boolean;
    backTitle?: string;
    goBack: () => void;
}

export const NavigationBarLeft = memo(
    ({ children, showBackButton, backTitle, goBack }: NavigationBarLeftProps): JSX.Element => {
        const renderChevronLeft = useCallback(
            (color) => (
                <BaseBox style={{ marginRight: 2 }}>
                    <ChevronLeft height={20} width={20} fill={color} />
                </BaseBox>
            ),
            []
        );

        return (
            <BaseBox justifyContent='flex-start' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
                {showBackButton ? (
                    <NavigationBarButton leftIcon={renderChevronLeft} onPress={goBack}>
                        {backTitle}
                    </NavigationBarButton>
                ) : null}
                {children}
            </BaseBox>
        );
    }
);

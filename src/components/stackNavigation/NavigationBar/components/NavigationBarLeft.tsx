import React, { memo, ReactNode, useCallback } from 'react';
import { BaseBox } from '@bma98/fractal-ui';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { NavigationBarButton } from '../../NavigationBarButton';

const Entypo = memo(BaseEntypo);

interface NavigationBarLeftProps {
    children?: ReactNode;
    showBackButton: boolean;
    backTitle?: string;
    goBack: () => void;
}

export const NavigationBarLeft = memo(
    (props: NavigationBarLeftProps): JSX.Element => {
        const { children, showBackButton, backTitle, goBack } = props;
        const renderChevronLeft = useCallback(
            (color) => <Entypo name='chevron-left' size={22} style={{ marginLeft: -6 }} color={color} />,
            []
        );

        return (
            <BaseBox justifyContent='flex-start' flex={1} flexDirection='row' alignItems='center' flexBasis={0}>
                {showBackButton ? (
                    <NavigationBarButton text={backTitle} onPress={goBack}>
                        {renderChevronLeft}
                    </NavigationBarButton>
                ) : null}
                {children}
            </BaseBox>
        );
    }
);

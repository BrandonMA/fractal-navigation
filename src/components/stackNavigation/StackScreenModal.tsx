import React, { useEffect, useRef } from 'react';
import { Animated } from 'react-native';
import { useWidthSizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { useHistory } from '../../react-router';
import { useShowAnimation, DimmedModal, Cell } from '@bma98/fractal-ui';

interface StackScreenModalProps {
    children: JSX.Element;
}

function WhiteContentDesktop({ children }: StackScreenModalProps): JSX.Element {
    return (
        <Cell overflow={'hidden'} borderRadius={'m'} maxWidth={550} maxHeight={550} width={'60%'} height={'60%'}>
            {children}
        </Cell>
    );
}

function WhiteContentPhone({ children }: StackScreenModalProps): JSX.Element {
    return (
        <Cell overflow={'hidden'} borderRadius={'m'} marginTop={'m'} width={'90%'} height={'85%'}>
            {children}
        </Cell>
    );
}

export function StackScreenModal({ children }: StackScreenModalProps): JSX.Element {
    const opacityValue = useRef(new Animated.Value(0)).current;
    const { goBack } = useHistory();
    const show = useShowAnimation(opacityValue);
    const [widthSize] = useWidthSizeGroup();
    const Wrapper = getValueForLargeSize(widthSize, WhiteContentDesktop, WhiteContentPhone);
    const justifyContent = getValueForLargeSize(widthSize, 'center', 'flex-start');

    useEffect(() => {
        show();
    }, [show]);

    return (
        <DimmedModal visible justifyContent={justifyContent} alignItems={'center'} onDismiss={goBack}>
            <Wrapper>{children}</Wrapper>
        </DimmedModal>
    );
}

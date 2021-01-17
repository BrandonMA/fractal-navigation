import React from 'react';
import { useHistory } from '../../react-router';
import { MiddleCellModal } from '@bma98/fractal-ui';

interface StackScreenModalProps {
    children: JSX.Element;
}

export function StackScreenModal({ children }: StackScreenModalProps): JSX.Element {
    const { goBack } = useHistory();

    return (
        <MiddleCellModal visible onDismiss={goBack}>
            {children}
        </MiddleCellModal>
    );
}

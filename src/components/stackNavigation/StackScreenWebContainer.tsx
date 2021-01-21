import { AnimatedPresence, RightSlideAnimation } from '@bma98/fractal-ui';
import React, { ReactNode, useCallback, useState } from 'react';
import { useHistory } from '../../react-router';
import { HideStackScreenWebContainerProvider } from '../../context/HideStackScreenWebContainerProvider';

export interface StackScreenWebContainerProps {
    children: ReactNode | JSX.Element;
}

export function StackScreenWebContainer({ children }: StackScreenWebContainerProps): JSX.Element {
    const { goBack } = useHistory();
    const [visible, setVisible] = useState(true);

    const hideAnimated = useCallback(() => {
        setVisible(false);
    }, [setVisible]);

    return (
        <HideStackScreenWebContainerProvider hideAnimated={hideAnimated}>
            <AnimatedPresence>
                {visible ? (
                    <RightSlideAnimation
                        onHide={goBack}
                        backgroundColor={'background'}
                        position={'absolute'}
                        top={0}
                        right={0}
                        bottom={0}
                        left={0}
                    >
                        {children}
                    </RightSlideAnimation>
                ) : null}
            </AnimatedPresence>
        </HideStackScreenWebContainerProvider>
    );
}

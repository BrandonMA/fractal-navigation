import React, { createContext } from 'react';

type HideStackScreenWebContainerContextType = () => void;

export const HideStackScreenWebContainerContext = createContext<HideStackScreenWebContainerContextType>(() => {
    return;
});

export interface HideStackScreenWebContainerProviderProps {
    children: JSX.Element;
    hideAnimated: () => void;
}

export function HideStackScreenWebContainerProvider({ children, hideAnimated }: HideStackScreenWebContainerProviderProps): JSX.Element {
    return <HideStackScreenWebContainerContext.Provider value={hideAnimated}>{children}</HideStackScreenWebContainerContext.Provider>;
}

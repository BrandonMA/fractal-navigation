import React from 'react';
declare type HideStackScreenWebContainerContextType = () => void;
export declare const HideStackScreenWebContainerContext: React.Context<HideStackScreenWebContainerContextType>;
export interface HideStackScreenWebContainerProviderProps {
    children: JSX.Element;
    hideAnimated: () => void;
}
export declare function HideStackScreenWebContainerProvider({ children, hideAnimated }: HideStackScreenWebContainerProviderProps): JSX.Element;
export {};

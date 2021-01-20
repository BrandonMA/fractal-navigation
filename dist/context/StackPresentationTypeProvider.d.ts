import React from 'react';
import { StackPresentationTypes } from 'react-native-screens';
export declare const StackPresentationTypeContext: React.Context<"push" | "modal" | "transparentModal" | "containedModal" | "containedTransparentModal" | "fullScreenModal" | "formSheet" | undefined>;
export interface StackPresentationTypeProviderProps {
    children: JSX.Element;
    stackPresentation: StackPresentationTypes | undefined;
}
export declare function StackPresentationTypeProvider({ children, stackPresentation }: StackPresentationTypeProviderProps): JSX.Element;

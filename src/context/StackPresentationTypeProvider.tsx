import React, { createContext } from 'react';
import { StackPresentationTypes } from 'react-native-screens';

export const StackPresentationTypeContext = createContext<StackPresentationTypes | undefined>(undefined);

export interface StackPresentationTypeProviderProps {
    children: JSX.Element;
    stackPresentation: StackPresentationTypes | undefined;
}

export function StackPresentationTypeProvider({ children, stackPresentation }: StackPresentationTypeProviderProps): JSX.Element {
    return <StackPresentationTypeContext.Provider value={stackPresentation}>{children}</StackPresentationTypeContext.Provider>;
}

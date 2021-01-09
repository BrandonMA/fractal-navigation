import React, { Dispatch, ReactNode, SetStateAction } from 'react';
export declare type TabBarHiddenContextType = [boolean, Dispatch<SetStateAction<boolean>>];
export declare const TabBarHiddenContext: React.Context<TabBarHiddenContextType>;
interface TabBarHiddenProviderProps {
    children: ReactNode;
}
export declare function TabBarHiddenProvider({ children }: TabBarHiddenProviderProps): JSX.Element;
export {};

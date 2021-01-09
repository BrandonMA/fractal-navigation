import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

export type TabBarHiddenContextType = [boolean, Dispatch<SetStateAction<boolean>>];

export const TabBarHiddenContext = createContext<TabBarHiddenContextType>([
    false,
    () => {
        return;
    }
]);

interface TabBarHiddenProviderProps {
    children: ReactNode;
}

export function TabBarHiddenProvider({ children }: TabBarHiddenProviderProps): JSX.Element {
    const handleState = useState(false);
    return <TabBarHiddenContext.Provider value={handleState}>{children}</TabBarHiddenContext.Provider>;
}

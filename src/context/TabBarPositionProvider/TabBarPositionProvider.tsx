import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { TabBarPosition } from './types/TabBarPosition';

export type TabBarPositionContextType = [TabBarPosition, Dispatch<SetStateAction<TabBarPosition>>];

export const TabBarPositionContext = createContext<TabBarPositionContextType>([
    'bottom',
    () => {
        return;
    }
]);

interface TabBarPositionProviderProps {
    children: ReactNode;
}

export function TabBarPositionProvider({ children }: TabBarPositionProviderProps): JSX.Element {
    const handleState = useState<TabBarPosition>('bottom');
    return <TabBarPositionContext.Provider value={handleState}>{children}</TabBarPositionContext.Provider>;
}

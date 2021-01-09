import { useContext } from 'react';
import { StackNavigatorRootPathContext } from '../context';

export function useStackNavigatorRootPath(): string {
    return useContext(StackNavigatorRootPathContext);
}

import { useContext } from 'react';
import { TabBarHiddenContext } from '../context';

export function useTabBarIsHidden(): boolean {
    const [hidden] = useContext(TabBarHiddenContext);
    return hidden;
}

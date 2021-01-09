import { EdgeInsets } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { TabBarInsetsContext } from '../context/TabBarInsetsProvider';

export function useTabBarInsets(): EdgeInsets {
    const [insets] = useContext(TabBarInsetsContext);
    return insets;
}

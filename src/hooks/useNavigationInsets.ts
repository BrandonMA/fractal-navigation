import { useMemo } from 'react';
import { EdgeInsets, useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTabBarInsets } from './useTabBarInsets';

interface NavigationInsets {
    totalInsets: EdgeInsets;
    tabBarInsets: EdgeInsets;
}

export function useNavigationInsets(): NavigationInsets {
    const insets = useSafeAreaInsets();
    const tabBarInsets = useTabBarInsets();

    const totalInsets = useMemo(() => {
        return {
            top: insets.top + tabBarInsets.top,
            right: insets.right + tabBarInsets.right,
            bottom: insets.bottom + tabBarInsets.bottom,
            left: insets.left + tabBarInsets.left
        };
    }, [insets, tabBarInsets]);

    return useMemo(() => {
        return {
            totalInsets,
            tabBarInsets
        };
    }, [totalInsets, tabBarInsets]);
}

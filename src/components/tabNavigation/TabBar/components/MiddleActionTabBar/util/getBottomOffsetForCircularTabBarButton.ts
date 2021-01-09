import { Platform } from 'react-native';
import { TabBarPosition } from '../../../types';

export function getBottomOffsetForCircularTabBarButton(tabBarPosition: TabBarPosition): number {
    if (Platform.OS === 'ios' && tabBarPosition === 'bottom') {
        return 20;
    } else {
        return 32;
    }
}

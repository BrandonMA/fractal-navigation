import { Platform } from 'react-native';
export function getBottomOffsetForCircularTabBarButton(tabBarPosition) {
    if (Platform.OS === 'ios' && tabBarPosition === 'bottom') {
        return 20;
    }
    else {
        return 32;
    }
}
//# sourceMappingURL=getBottomOffsetForCircularTabBarButton.js.map
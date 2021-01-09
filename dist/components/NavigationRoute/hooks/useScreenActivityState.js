import { Platform } from 'react-native';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
// Return 1 for an active state and 0 for the contrary for web.
// On native platforms, 2 means is the screen on top of the stack, 1 means is behind but visible, 0 is not visible.
export function useScreenActivityState(path, isTabScreen) {
    var isRouteActive = useIsRouteActive(path, false);
    var isRouteActiveAndExact = useIsRouteActive(path, true);
    if (isRouteActive) {
        if (Platform.OS === 'web') {
            return 1;
        }
        else {
            return isRouteActiveAndExact || isTabScreen ? 2 : 1;
        }
    }
    else {
        return 0;
    }
}
//# sourceMappingURL=useScreenActivityState.js.map
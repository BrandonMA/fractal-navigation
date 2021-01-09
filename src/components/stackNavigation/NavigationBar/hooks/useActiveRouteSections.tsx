import { useLocation } from '../../../../react-router';
import { useIsRouteActive } from '../../../../hooks/useIsRouteActive';

export function useActiveRouteSections(path: string): number {
    const { pathname } = useLocation();
    const isRouteActive = useIsRouteActive(path, false);

    if (isRouteActive) {
        return pathname.substring(1).split('/').length;
    } else {
        return 0;
    }
}

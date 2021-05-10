import { useRouteMatch } from '../react-router';
import { removeSearchParameters } from '../util/removeSearchParameters';

export function useIsRouteActive(path: string, exact: boolean): boolean {
    const match = useRouteMatch({
        path: removeSearchParameters(path),
        exact,
        strict: exact
    });

    return match != null;
}

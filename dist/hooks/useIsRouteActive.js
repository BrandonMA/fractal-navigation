import { useRouteMatch } from '../react-router';
export function useIsRouteActive(path, exact) {
    var match = useRouteMatch({
        path: path,
        exact: exact,
        strict: exact
    });
    return match != null;
}
//# sourceMappingURL=useIsRouteActive.js.map
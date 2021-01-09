import { matchPath } from '../../../../react-router';
export function filterMatchingChildren(children, pathname) {
    return children.filter(function (child) {
        var _a;
        var props = child.props;
        var path = (_a = props.path) !== null && _a !== void 0 ? _a : '/';
        var match = matchPath(pathname, {
            path: path
        });
        return match != null;
    });
}
//# sourceMappingURL=filterMatchingChildren.js.map
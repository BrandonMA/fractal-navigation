import React, { useMemo } from 'react';
export function useMiddleActionTabBarChildren(children) {
    return useMemo(function () {
        var allChildren = React.Children.toArray(children);
        var leftChildren = [];
        var rightChildren = [];
        var middleChild = null;
        if (allChildren.length === 1) {
            middleChild = allChildren[0];
        }
        else if (allChildren.length === 3) {
            leftChildren.push(allChildren[0]);
            middleChild = allChildren[1];
            rightChildren.push(allChildren[2]);
        }
        else if (allChildren.length === 5) {
            leftChildren.push(allChildren[0]);
            leftChildren.push(allChildren[1]);
            middleChild = allChildren[2];
            rightChildren.push(allChildren[3]);
            rightChildren.push(allChildren[4]);
        }
        else {
            throw Error('The amount of items in a MiddleActionTabBar must be 1, 3 or 5');
        }
        return [leftChildren, middleChild, rightChildren];
    }, [children]);
}
//# sourceMappingURL=useMiddleActionTabBarChildren.js.map
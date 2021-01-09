import React, { useMemo, ReactNode } from 'react';

export function useMiddleActionTabBarChildren(
    children: JSX.Element | Array<JSX.Element> | undefined
): [Array<ReactNode>, ReactNode, Array<ReactNode>] {
    return useMemo(() => {
        const allChildren = React.Children.toArray(children);
        const leftChildren: Array<ReactNode> = [];
        const rightChildren: Array<ReactNode> = [];
        let middleChild: ReactNode = null;

        if (allChildren.length === 1) {
            middleChild = allChildren[0];
        } else if (allChildren.length === 3) {
            leftChildren.push(allChildren[0]);
            middleChild = allChildren[1];
            rightChildren.push(allChildren[2]);
        } else if (allChildren.length === 5) {
            leftChildren.push(allChildren[0]);
            leftChildren.push(allChildren[1]);
            middleChild = allChildren[2];
            rightChildren.push(allChildren[3]);
            rightChildren.push(allChildren[4]);
        } else {
            throw Error('The amount of items in a MiddleActionTabBar must be 1, 3 or 5');
        }
        return [leftChildren, middleChild, rightChildren];
    }, [children]);
}

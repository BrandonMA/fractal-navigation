import { NavigationRouteProps } from '../../../NavigationRoute/NavigationRoute';
import { StackScreenModal } from '../../StackScreenModal';
import React from 'react';
import { Platform } from 'react-native';

export function injectModalContainers(children: Array<JSX.Element>): Array<JSX.Element> {
    if (Platform.OS === 'web') {
        return children.map((child) => {
            const props = child.props as NavigationRouteProps;
            if (props.stackPresentation === 'modal') {
                return <StackScreenModal key={props.path}>{child}</StackScreenModal>;
            }
            return child;
        });
    }
    return children;
}

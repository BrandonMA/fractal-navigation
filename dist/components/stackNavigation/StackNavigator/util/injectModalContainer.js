import { StackScreenModal } from '../../StackScreenModal';
import React from 'react';
import { Platform } from 'react-native';
export function injectModalContainers(children) {
    if (Platform.OS === 'web') {
        return children.map(function (child) {
            var props = child.props;
            if (props.stackPresentation === 'modal') {
                return React.createElement(StackScreenModal, { key: props.path }, child);
            }
            return child;
        });
    }
    return children;
}
//# sourceMappingURL=injectModalContainer.js.map
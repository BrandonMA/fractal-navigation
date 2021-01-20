import { useHistory } from '../react-router';
import { useCallback, useContext } from 'react';
import { HideStackScreenWebContainerContext } from '../components/stackNavigation/StackScreenWebContainer/context/HideStackScreenWebContainerProvider';
import { useHideModalAnimated } from '@bma98/fractal-ui/dist/components/modals/hooks/useHideModalAnimated';
import { Platform } from 'react-native';
export function useGoBackAnimated(stackPresentation) {
    var goBack = useHistory().goBack;
    var hideScreenAnimated = useContext(HideStackScreenWebContainerContext);
    var hideModalAnimated = useHideModalAnimated();
    return useCallback(function () {
        if (stackPresentation === 'modal' && Platform.OS === 'web') {
            hideModalAnimated();
        }
        else if (stackPresentation === 'push' && Platform.OS === 'web') {
            hideScreenAnimated();
        }
        else {
            goBack();
        }
    }, [goBack, stackPresentation, hideModalAnimated, hideScreenAnimated]);
}
//# sourceMappingURL=useGoBackAnimated.js.map
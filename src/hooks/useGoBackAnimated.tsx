import { useHistory } from '../react-router';
import { useCallback, useContext } from 'react';
import { HideStackScreenWebContainerContext } from '../components/stackNavigation/StackScreenWebContainer/context/HideStackScreenWebContainerProvider';
import { useHideModalAnimated } from '@bma98/fractal-ui/dist/components/modals/hooks/useHideModalAnimated';
import { Platform } from 'react-native';
import { StackPresentationTypes } from 'react-native-screens';

export function useGoBackAnimated(stackPresentation: StackPresentationTypes): () => void {
    const { goBack } = useHistory();
    const hideScreenAnimated = useContext(HideStackScreenWebContainerContext);
    const hideModalAnimated = useHideModalAnimated();

    return useCallback(() => {
        if (stackPresentation === 'modal' && Platform.OS === 'web') {
            hideModalAnimated();
        } else if (stackPresentation === 'push' && Platform.OS === 'web') {
            hideScreenAnimated();
        } else {
            goBack();
        }
    }, [goBack, stackPresentation, hideModalAnimated, hideScreenAnimated]);
}

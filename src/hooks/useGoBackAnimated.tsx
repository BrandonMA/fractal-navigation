import { useHistory } from '../react-router';
import { useCallback } from 'react';
import { useHideModalAnimated } from '@bma98/fractal-ui/dist/components/modals/hooks/useHideModalAnimated';
import { Platform } from 'react-native';
import { useStackPresentationType } from './useStackPresentationType';
import { useHideScreenAnimated } from './useHideScreenAnimated';

export function useGoBackAnimated(): () => void {
    const { goBack } = useHistory();
    const hideScreenAnimated = useHideScreenAnimated();
    const hideModalAnimated = useHideModalAnimated();
    const stackPresentation = useStackPresentationType();

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

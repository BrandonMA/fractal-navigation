import { useContext } from 'react';
import { HideStackScreenWebContainerContext } from '../context/HideStackScreenWebContainerProvider';

export function useHideScreenAnimated(): () => void {
    return useContext(HideStackScreenWebContainerContext);
}

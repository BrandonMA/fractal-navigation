import { StackPresentationTypes } from 'react-native-screens';
import { useContext } from 'react';
import { StackPresentationTypeContext } from '../context';

export function useStackPresentationType(): StackPresentationTypes | undefined {
    return useContext(StackPresentationTypeContext);
}

import React from 'react';
import { NavigationBarProps } from './types/NavigationBarProps';
import { useNavigationBarChildren } from './hooks/useNavigationBarChildren';
import { NavigationBarLeft } from './components/NavigationBarLeft';
import { NavigationBarRight } from './components/NavigationBarRight';
import { NavigationBarCenter } from './components/NavigationBarCenter';
import { NavigationBarBackground } from './components/NavigationBarBackground';
import { useStackNavigatorRootPath } from '../../../hooks/useStackNavigatorRootPath';
import { useGoBackAnimated } from '../../../hooks/useGoBackAnimated';

export function NavigationBar({ hidden, title, hideBackButton, backTitle, path = '', children }: NavigationBarProps): JSX.Element | null {
    const [leftChild, centerChild, rightChild] = useNavigationBarChildren(children);
    const stackNavigatorRootPath = useStackNavigatorRootPath();
    const isRootNavigationBar = stackNavigatorRootPath === path;
    const goBack = useGoBackAnimated();

    return hidden ? null : (
        <NavigationBarBackground>
            <NavigationBarLeft showBackButton={!isRootNavigationBar && !hideBackButton} goBack={goBack} backTitle={backTitle}>
                {leftChild}
            </NavigationBarLeft>
            <NavigationBarCenter title={title}>{centerChild}</NavigationBarCenter>
            <NavigationBarRight>{rightChild}</NavigationBarRight>
        </NavigationBarBackground>
    );
}

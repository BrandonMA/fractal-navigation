import React, { useMemo } from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BaseBox } from '@bma98/fractal-ui';

export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    tabBar: JSX.Element;
}

export function TabNavigator({ tabBar, children, style, ...others }: TabNavigatorProps): JSX.Element {
    const finalStyle = useMemo(() => {
        return [
            style,
            {
                flex: 1
            }
        ];
    }, [style]);

    return (
        <SafeAreaProvider>
            <BaseBox flex={1} overflow={'hidden'}>
                <ScreenContainer {...others} style={finalStyle}>
                    {children}
                </ScreenContainer>
                {tabBar}
            </BaseBox>
        </SafeAreaProvider>
    );
}

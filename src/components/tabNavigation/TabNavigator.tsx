import React, { useMemo } from 'react';
import { ScreenContainer, ScreenContainerProps } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Redirect } from '../../react-router';
import { BaseBox } from '@bma98/fractal-ui';

export interface TabNavigatorProps extends ScreenContainerProps {
    children: Array<JSX.Element> | JSX.Element;
    defaultRoute: string;
    path?: string;
    tabBar: JSX.Element;
}

export function TabNavigator(props: TabNavigatorProps): JSX.Element {
    const { defaultRoute, path = '/', tabBar, children, style, ...others } = props;

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
                <Redirect exact from={path} to={defaultRoute} />
                {tabBar}
            </BaseBox>
        </SafeAreaProvider>
    );
}

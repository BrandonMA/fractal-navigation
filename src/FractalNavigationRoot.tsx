import React from 'react';
import { enableScreens } from 'react-native-screens';
import { FractalAppRootProps, FractalAppRoot, Background } from '@bma98/fractal-ui';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationRouter } from './react-router';
import { TabBarPositionProvider } from './context/TabBarPositionProvider';
import { TabBarHiddenProvider, TabBarInsetsProvider } from './context';

enableScreens();

export function FractalNavigationRoot(props: FractalAppRootProps): JSX.Element {
    const { children, ...others } = props;

    return (
        <FractalAppRoot {...others}>
            <NavigationRouter>
                <SafeAreaProvider>
                    <TabBarPositionProvider>
                        <TabBarHiddenProvider>
                            <TabBarInsetsProvider>
                                <Background>{children}</Background>
                            </TabBarInsetsProvider>
                        </TabBarHiddenProvider>
                    </TabBarPositionProvider>
                </SafeAreaProvider>
            </NavigationRouter>
        </FractalAppRoot>
    );
}

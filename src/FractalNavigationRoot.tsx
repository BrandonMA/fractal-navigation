import React from 'react';
import { enableScreens } from 'react-native-screens';
import { FractalAppRootProps, FractalAppRoot } from '@bma98/fractal-ui';
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
                            <TabBarInsetsProvider>{children}</TabBarInsetsProvider>
                        </TabBarHiddenProvider>
                    </TabBarPositionProvider>
                </SafeAreaProvider>
            </NavigationRouter>
        </FractalAppRoot>
    );
}

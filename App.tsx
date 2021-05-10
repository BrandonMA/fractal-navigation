import React, { memo, useCallback, useContext, useState } from 'react';
import { registerRootComponent } from 'expo';
import {
    FractalNavigationRoot,
    StackNavigator,
    StackScreen,
    PlatformBarConfig,
    PlatformBarRightView,
    StackScreenContent,
    useHistory,
    NavigationBarButton,
    FadeRoute,
    Redirect,
    PlatformBarCenterView,
    TabBarHiddenContext,
    TabBar,
    TabBarItem,
    TabNavigator,
    TabScreen,
    SafeAreaScrollView
} from './src';
import { Entypo as BaseEntypo } from '@expo/vector-icons';
import { BaseBox, Button, FractalThemeIdentifierContext, PaddedContainer, Text } from '@bma98/fractal-ui';
import { SafeAreaView } from 'react-native-safe-area-context';

const Entypo = memo(BaseEntypo);

// Routes

const authenticationRoute = '/authentication';
const baseRoute = '/app';
const homeRoute = '/app/home';
const homeProfileRoute = '/app/home/profile?name=brandon';
const homeProfileSettingsRoute = '/app/home/profile/settings';
const computersRoute = '/app/computers';
const feedRoute = '/app/feed';

// Navigation Example

function StackPush(): JSX.Element {
    const history = useHistory();
    return <Button variant='mainInteractiveColor' text='Stack push' onPress={() => history.push(homeProfileRoute)} />;
}

function ModalPush(): JSX.Element {
    const history = useHistory();
    return <Button variant='mainInteractiveColor' text='Show modal' onPress={() => history.push(homeProfileSettingsRoute)} />;
}

function MainTabBar(): JSX.Element {
    const renderHome = useCallback((color, size) => {
        return <Entypo selectable={false} name={'home'} color={color} size={size} />;
    }, []);

    const renderLaptop = useCallback((color, size) => {
        return <Entypo selectable={false} name={'laptop'} color={color} size={size} />;
    }, []);

    const renderNews = useCallback((color, size) => {
        return <Entypo selectable={false} name={'news'} color={color} size={size} />;
    }, []);

    return (
        <TabBar tabBarVariant={'middle-action'} tabBarPosition='bottom'>
            <TabBarItem path={homeRoute} title={'Home'}>
                {renderHome}
            </TabBarItem>
            <TabBarItem path={computersRoute} title={'Computers'} variant={'circular'}>
                {renderLaptop}
            </TabBarItem>
            <TabBarItem path={feedRoute} title={'Feed'}>
                {renderNews}
            </TabBarItem>
        </TabBar>
    );
}

function ComputersScreen(): JSX.Element {
    const [, setCurrentThemeIdentifier] = useContext(FractalThemeIdentifierContext);
    const [, setTabBarHidden] = useContext(TabBarHiddenContext);

    const toggleTheme = useCallback(() => setCurrentThemeIdentifier((currentValue) => (currentValue === 'light' ? 'dark' : 'light')), [
        setCurrentThemeIdentifier
    ]);

    const toggleTabBar = useCallback(() => setTabBarHidden((currentValue) => !currentValue), [setTabBarHidden]);

    return (
        <SafeAreaView>
            <PaddedContainer>
                <Text marginBottom={'m'}>Computers Screen!</Text>
                <Button variant={'mainInteractiveColor'} onPress={toggleTheme} text={'Toggle Theme'} marginBottom={'m'} />
                <Button variant={'alternativeInteractiveColor'} onPress={toggleTabBar} text={'Toggle Tab Bar'} />
            </PaddedContainer>
        </SafeAreaView>
    );
}

function NavigationCode(): JSX.Element {
    const renderSearchIcon = useCallback((color: string): JSX.Element => <Entypo name='magnifying-glass' size={20} color={color} />, []);

    return (
        <TabNavigator tabBar={<MainTabBar />}>
            <TabScreen path={homeRoute}>
                <StackNavigator path={homeRoute}>
                    <StackScreen
                        isRootRoute
                        path={homeRoute}
                        navBarConfig={
                            <PlatformBarConfig title='Home' largeTitle>
                                <PlatformBarRightView>
                                    <NavigationBarButton leftIcon={renderSearchIcon} />
                                </PlatformBarRightView>
                            </PlatformBarConfig>
                        }
                    >
                        <StackScreenContent>
                            <SafeAreaScrollView>
                                <PaddedContainer>
                                    <BaseBox height={600} backgroundColor='black' marginBottom='m' />
                                    <StackPush />
                                    <BaseBox height={600} backgroundColor='black' marginBottom='m' />
                                </PaddedContainer>
                            </SafeAreaScrollView>
                        </StackScreenContent>
                    </StackScreen>
                    <StackScreen
                        path={homeProfileRoute}
                        navBarConfig={
                            <PlatformBarConfig>
                                <PlatformBarCenterView>
                                    <BaseBox backgroundColor={'textColor'} width={24} height={24} borderRadius={'m'} />
                                </PlatformBarCenterView>
                            </PlatformBarConfig>
                        }
                    >
                        <StackScreenContent>
                            <SafeAreaView>
                                <PaddedContainer>
                                    <ModalPush />
                                </PaddedContainer>
                            </SafeAreaView>
                        </StackScreenContent>
                    </StackScreen>
                    <StackScreen
                        path={homeProfileSettingsRoute}
                        stackPresentation='modal'
                        navBarConfig={
                            <PlatformBarConfig title='Modal'>
                                <PlatformBarRightView>
                                    <NavigationBarButton>Right</NavigationBarButton>
                                </PlatformBarRightView>
                            </PlatformBarConfig>
                        }
                    >
                        <StackScreenContent>
                            <PaddedContainer>
                                <Text>Modal!</Text>
                            </PaddedContainer>
                        </StackScreenContent>
                    </StackScreen>
                </StackNavigator>
            </TabScreen>
            <TabScreen path={computersRoute}>
                <ComputersScreen />
            </TabScreen>
            <TabScreen path={feedRoute}>
                <SafeAreaView>
                    <PaddedContainer>
                        <Text>News feed!</Text>
                    </PaddedContainer>
                </SafeAreaView>
            </TabScreen>
        </TabNavigator>
    );
}

export function App(): JSX.Element {
    const [authenticated, setAuthenticated] = useState(false);
    const authenticate = useCallback(() => setAuthenticated(true), [setAuthenticated]);

    return (
        <FractalNavigationRoot>
            <FadeRoute path={authenticationRoute}>
                <SafeAreaView>
                    <PaddedContainer>
                        <Text variant={'title'} marginBottom={'m'}>
                            Fake authentication!
                        </Text>
                        <Button onPress={authenticate} variant={'mainInteractiveColor'} text={'Authenticate'} />
                    </PaddedContainer>
                </SafeAreaView>
            </FadeRoute>
            {authenticated ? (
                <FadeRoute path={baseRoute}>
                    <NavigationCode />
                </FadeRoute>
            ) : null}
            {authenticated ? <Redirect from={authenticationRoute} to={homeRoute} /> : <Redirect from={'/'} to={authenticationRoute} />}
        </FractalNavigationRoot>
    );
}

export default registerRootComponent(App);

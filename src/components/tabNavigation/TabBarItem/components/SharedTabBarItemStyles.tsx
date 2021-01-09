import { Platform } from 'react-native';

const sharedTabBarItemStyles: any = {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    minHeight: 48,
    minWidth: 48
};

if (Platform.OS === 'web') {
    sharedTabBarItemStyles['cursor'] = 'pointer';
}

export { sharedTabBarItemStyles };

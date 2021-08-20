import React, { memo, useMemo } from 'react';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';
import { SizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { Dimensions, Pressable } from 'react-native';
import { useTabBarPosition } from '../../../../hooks/useTabBarPosition';

export interface BasicTabBarItemProps {
    widthSizeGroup: SizeGroup;
    highlightColor?: string;
    children: React.ReactNode;
}

export const BasicTabBarItem = memo(
    (props: BasicTabBarItemProps): JSX.Element => {
        const { widthSizeGroup, highlightColor } = props;
        const [size] = widthSizeGroup;
        const tabBarPosition = useTabBarPosition();

        const ripple = useMemo(() => {
            return {
                color: highlightColor,
                borderless: true,
                radius: Dimensions.get('window').width / 10
            };
        }, [highlightColor]);

        const style = useMemo(() => {
            return {
                ...sharedTabBarItemStyles,
                flexGrow: 1,
                flexDirection: tabBarPosition !== 'bottom' ? 'column' : getValueForLargeSize(size, 'row', 'column')
            };
        }, [size, tabBarPosition]);

        return <Pressable {...props} style={style} android_ripple={ripple} />;
    }
);

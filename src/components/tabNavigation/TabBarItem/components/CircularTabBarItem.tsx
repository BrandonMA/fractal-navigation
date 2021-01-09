import React, { memo, useCallback, useMemo } from 'react';
import { Pressable, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native';
import { sharedTabBarItemStyles } from './SharedTabBarItemStyles';

export interface CircularTabBarItemProps {
    bg?: string;
    highlightColor?: string;
    children: React.ReactNode;
}

export const CircularTabBarItem = memo(
    (props: CircularTabBarItemProps): JSX.Element => {
        const { highlightColor, bg, ...others } = props;

        const sharedStyles = useMemo(() => {
            return {
                ...sharedTabBarItemStyles,
                backgroundColor: bg,
                borderRadius: 24
            };
        }, [bg]);

        const handleHighlightPress = useCallback(
            (state: PressableStateCallbackType): StyleProp<ViewStyle> => {
                if (state.pressed && highlightColor != null) {
                    return { ...sharedStyles, backgroundColor: highlightColor };
                }
                return sharedStyles;
            },
            [highlightColor, sharedStyles]
        );

        return <Pressable {...others} style={handleHighlightPress} />;
    }
);

import React, { memo } from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
import { TabBarPosition } from '../../../../../../context/TabBarPositionProvider/types/TabBarPosition';
import { useTheme } from '@shopify/restyle';
import { FractalTheme } from '@bma98/fractal-ui';

const LeftShape = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg width={61} height={75} viewBox='0 0 61 75' fill='none' {...props}>
                <Path d='M61 75H0V0h61c0 4.1-3 6.5-7 7-14.6 2.1-27 15.5-27 30.5S39.4 66 54 68c4 .5 7 3 7 7z' />
            </Svg>
        );
    }
);

const BottomShape = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg width={74} height={61} viewBox='0 0 74 61' fill='none' {...props}>
                <Path d='M74 0v61H0V0c4.1 0 6.5 3 7 7 2.1 14.6 15 27 30 27S65 21.6 67 7c.5-4 3-7 7-7z' />
            </Svg>
        );
    }
);

const RightShape = memo(
    (props: SvgProps): JSX.Element => {
        return (
            <Svg width={61} height={75} viewBox='0 0 61 75' fill='none' {...props}>
                <Path d='M0 0h61v75H0c0-4.1 3-6.5 7-7 14.6-2.1 27-15.5 27-30.5S21.6 9 7 7c-4-.5-7-3-7-7z' />
            </Svg>
        );
    }
);

interface MiddleTabBarShapeProps extends SvgProps {
    tabBarPosition: TabBarPosition;
}

export const MiddleTabBarShape = memo(
    (props: MiddleTabBarShapeProps): JSX.Element => {
        const theme = useTheme<FractalTheme>();
        const { tabBarPosition, ...others } = props;
        switch (tabBarPosition) {
            case 'right':
                return <RightShape fill={theme.colors.tabBarBackground} {...others} />;
            case 'left':
                return <LeftShape fill={theme.colors.tabBarBackground} {...others} />;
            case 'bottom':
                return <BottomShape fill={theme.colors.tabBarBackground} {...others} />;
        }
    }
);

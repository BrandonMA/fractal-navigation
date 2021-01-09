import React from 'react';
import { TabBarProps } from '../../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './components/MiddleTabBarShape';
import { useTabBarPositionValues } from '../../hooks/useTabBarPositionValues';
import { getValueForTabBarPosition } from '../../util/getValueForTabBarPosition';
import { getBottomOffsetForCircularTabBarButton } from './util/getBottomOffsetForCircularTabBarButton';
import { BaseBox, FractalTheme } from '@bma98/fractal-ui';
import { useTabBarSafeAreaPadding } from '../../hooks/useTabBarSafeAreaPadding';
import { useTheme } from '@shopify/restyle';

export function MiddleActionTabBar(props: TabBarProps): JSX.Element {
    const { children, style, tabBarPosition } = props;
    const theme = useTheme<FractalTheme>();
    const safeAreaInsets = useSafeAreaInsets();
    const positionValues = useTabBarPositionValues(tabBarPosition);
    const { flexDirection, width, height, bottom, left, right } = positionValues;
    const tabBarSafeAreaPadding = useTabBarSafeAreaPadding(safeAreaInsets, tabBarPosition);

    const [leftChildren, middleChild, rightChildren] = useMiddleActionTabBarChildren(children);

    const constantOffset = getBottomOffsetForCircularTabBarButton(tabBarPosition);
    const floatingOffset = getValueForTabBarPosition(
        tabBarPosition,
        { bottom: constantOffset },
        { left: constantOffset },
        { right: constantOffset }
    );
    const constantDimension = 'auto';
    const floatingWidth = getValueForTabBarPosition(tabBarPosition, '100%', constantDimension, constantDimension);
    const floatingHeight = getValueForTabBarPosition(tabBarPosition, constantDimension, '100%', '100%');

    return (
        <>
            <BaseBox width={width} height={height} bottom={bottom} left={left} right={right} position={'absolute'} style={style}>
                <BaseBox width={width} height={height} flexDirection={flexDirection} position={'relative'}>
                    <BaseBox
                        style={tabBarSafeAreaPadding}
                        flexDirection={flexDirection}
                        backgroundColor={'tabBarBackground'}
                        flexGrow={1}
                        flexBasis={0}
                        shadowColor={'shadowColor'}
                        shadowOffset={theme.shadowProperties.offset}
                        shadowOpacity={theme.shadowProperties.opacity}
                        shadowRadius={theme.shadowProperties.radius}
                    >
                        {leftChildren}
                    </BaseBox>
                    <BaseBox zIndex={1000} flexDirection={'column'} backgroundColor={'transparent'}>
                        <MiddleTabBarShape tabBarPosition={tabBarPosition} />
                        <BaseBox backgroundColor={'tabBarBackground'} flexGrow={1} width={'100%'} />
                    </BaseBox>
                    <BaseBox
                        style={tabBarSafeAreaPadding}
                        flexDirection={flexDirection}
                        backgroundColor={'tabBarBackground'}
                        flexGrow={1}
                        flexBasis={0}
                        shadowColor={'shadowColor'}
                        shadowOffset={theme.shadowProperties.offset}
                        shadowOpacity={theme.shadowProperties.opacity}
                        shadowRadius={theme.shadowProperties.radius}
                    >
                        {rightChildren}
                    </BaseBox>
                </BaseBox>
            </BaseBox>
            <BaseBox
                {...floatingOffset}
                style={tabBarSafeAreaPadding}
                alignItems={'center'}
                justifyContent={'center'}
                backgroundColor={'transparent'}
                flexDirection={'column'}
                position={'absolute'}
                pointerEvents='box-none'
                width={floatingWidth}
                height={floatingHeight}
            >
                {middleChild}
            </BaseBox>
        </>
    );
}

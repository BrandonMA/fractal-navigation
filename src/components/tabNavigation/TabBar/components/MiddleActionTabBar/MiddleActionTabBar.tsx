import React, { useMemo } from 'react';
import { TabBarProps } from '../../types/TabBarProps';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useMiddleActionTabBarChildren } from './hooks/useMiddleActionTabBarChildren';
import { MiddleTabBarShape } from './components/MiddleTabBarShape';
import { useTabBarPositionValues } from '../../hooks/useTabBarPositionValues';
import { getValueForTabBarPosition } from '../../util/getValueForTabBarPosition';
import { getBottomOffsetForCircularTabBarButton } from './util/getBottomOffsetForCircularTabBarButton';
import { BaseBox } from '@bma98/fractal-ui';
import { useTabBarSafeAreaPadding } from '../../hooks/useTabBarSafeAreaPadding';
import { SideView } from './components/SideView';

export function MiddleActionTabBar({ children, style, tabBarPosition }: TabBarProps): JSX.Element {
    const safeAreaInsets = useSafeAreaInsets();
    const { flexDirection, width, height, bottom, left, right } = useTabBarPositionValues(tabBarPosition);
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
    const floatingStyle = useMemo(() => [tabBarSafeAreaPadding, style], [tabBarSafeAreaPadding, style]);

    return (
        <>
            <BaseBox width={width} height={height} bottom={bottom} left={left} right={right} position={'absolute'} style={style}>
                <BaseBox width={width} height={height} flexDirection={flexDirection} position={'relative'}>
                    <SideView tabBarSafeAreaPadding={tabBarSafeAreaPadding} flexDirection={flexDirection}>
                        {leftChildren}
                    </SideView>
                    <BaseBox zIndex={1000} flexDirection={'column'} backgroundColor={'transparent'}>
                        <MiddleTabBarShape tabBarPosition={tabBarPosition} />
                        <BaseBox backgroundColor={'tabBarBackground'} flexGrow={1} width={'100%'} />
                    </BaseBox>
                    <SideView tabBarSafeAreaPadding={tabBarSafeAreaPadding} flexDirection={flexDirection}>
                        {rightChildren}
                    </SideView>
                </BaseBox>
            </BaseBox>
            <BaseBox
                {...floatingOffset}
                style={floatingStyle}
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

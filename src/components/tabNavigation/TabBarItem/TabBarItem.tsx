import React, { memo } from 'react';
import { getTabBarItemComponent } from './util/getTabBarItemComponent';
import { getTabIconSize } from './util/getTabIconSize';
import { useWidthSizeGroup, getValueForLargeSize } from '@bma98/size-class';
import { useGoToTab } from './hooks/useGoToTab';
import { TabBarItemProps } from './types/TabBarItemProps';
import { useIsRouteActive } from '../../../hooks/useIsRouteActive';
import { BaseBox, FractalTheme, Text } from '@bma98/fractal-ui';
import { useTheme } from '@shopify/restyle';
import { useTabBarPosition } from '../../../hooks/useTabBarPosition';

const tabBarItemCompactSpacerSize = { width: 0, height: 0 };
const tabBarItemLargeSpacerSize = { width: 8, height: 1 };
const Spacer = memo(BaseBox);

export const TabBarItem = memo(
    (props: TabBarItemProps): JSX.Element => {
        const { path, variant, title, children, ...others } = props;
        const isRouteActive = useIsRouteActive(path, false);
        const TabBarItemContainer = getTabBarItemComponent(variant);
        const iconSize = getTabIconSize(variant);
        const widthSizeGroup = useWidthSizeGroup();
        const tabBarPosition = useTabBarPosition();
        const spacerSize =
            tabBarPosition !== 'bottom'
                ? tabBarItemCompactSpacerSize
                : getValueForLargeSize(widthSizeGroup[0], tabBarItemLargeSpacerSize, tabBarItemCompactSpacerSize);
        const goToTab = useGoToTab(path, isRouteActive);
        const { colors } = useTheme<FractalTheme>();
        const tabBarItemColorIdentifier = isRouteActive ? 'tabBarItemActive' : 'tabBarItemInactive';

        return (
            <TabBarItemContainer
                {...others}
                onPress={goToTab}
                bg={colors.mainInteractiveColor}
                widthSizeGroup={widthSizeGroup}
                highlightColor={colors.mainInteractiveColor600}
            >
                {children(colors[variant === 'circular' ? 'white' : tabBarItemColorIdentifier], iconSize)}
                <Spacer {...spacerSize} />
                {variant === 'circular' && title != null ? null : <Text variant={tabBarItemColorIdentifier}>{title}</Text>}
            </TabBarItemContainer>
        );
    }
);

import { match } from '../../react-router';
import { Animated, ViewStyle } from 'react-native';
interface FadeRouteAnimator {
    match: match | null;
    children: JSX.Element;
    style?: Animated.AnimatedProps<ViewStyle>;
}
export declare function FadeRouteAnimator({ match, children, style }: FadeRouteAnimator): JSX.Element | null;
export {};

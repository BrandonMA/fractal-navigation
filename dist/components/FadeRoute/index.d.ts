/// <reference types="react" />
import { RouteProps } from '../../react-router';
interface FadeRouteProps extends Omit<RouteProps, 'children'> {
    children: JSX.Element;
}
export declare function FadeRoute({ children, ...others }: FadeRouteProps): JSX.Element;
export {};

/// <reference types="react" />
import { RouteProps } from '../../react-router';
interface AnimatedRouteProps extends Omit<RouteProps, 'children'> {
    children: JSX.Element;
}
export declare function AnimatedRoute({ children, ...others }: AnimatedRouteProps): JSX.Element;
export {};

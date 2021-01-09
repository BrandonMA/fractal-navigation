/// <reference types="react" />
import { match } from '../../react-router';
export interface AnimatedRouteContainerProps {
    match: match | null;
    children: JSX.Element;
}
export declare function AnimatedRouteContainer({ match, children }: AnimatedRouteContainerProps): JSX.Element | null;

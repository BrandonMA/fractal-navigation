/// <reference types="react" />
import { match } from '../../react-router';
interface FadeRouteAnimator {
    match: match | null;
    children: JSX.Element;
}
export declare function FadeRouteAnimator({ match, children }: FadeRouteAnimator): JSX.Element | null;
export {};

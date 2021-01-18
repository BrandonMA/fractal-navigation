/// <reference types="react" />
import { StackPresentationTypes } from "react-native-screens";
export interface NavigationBarProps {
    children?: JSX.Element | Array<JSX.Element>;
    hidden?: boolean;
    hideBackButton?: boolean;
    backTitle?: string;
    title?: string;
    path?: string;
    largeTitle?: boolean;
    stackPresentation?: StackPresentationTypes;
}

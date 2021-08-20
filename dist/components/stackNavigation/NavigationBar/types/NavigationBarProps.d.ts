export interface NavigationBarProps {
    children?: JSX.Element | Array<JSX.Element>;
    hidden?: boolean;
    hideBackButton?: boolean;
    backTitle?: string;
    title?: string;
    path?: string;
    largeTitle?: boolean;
}

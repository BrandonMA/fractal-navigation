import { ViewProps } from 'react-native';
interface StackScreenContentProps extends Omit<ViewProps, 'children'> {
    children: JSX.Element | Array<JSX.Element>;
}
export declare function StackScreenContent(props: StackScreenContentProps): JSX.Element;
export {};

import { EdgeInsets } from 'react-native-safe-area-context';
interface MarginInsets {
    marginTop: number;
    marginBottom: number;
    marginLeft: number;
    marginRight: number;
}
export declare function getMarginInsets(insets: EdgeInsets, removeHorizontal?: boolean, removeVertical?: boolean): MarginInsets;
export {};

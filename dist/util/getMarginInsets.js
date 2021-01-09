export function getMarginInsets(insets, removeHorizontal, removeVertical) {
    var marginTop = removeVertical ? 0 : insets.top;
    var marginRight = removeHorizontal ? 0 : insets.right;
    var marginBottom = removeVertical ? 0 : insets.bottom;
    var marginLeft = removeHorizontal ? 0 : insets.left;
    return {
        marginTop: marginTop,
        marginRight: marginRight,
        marginBottom: marginBottom,
        marginLeft: marginLeft
    };
}
//# sourceMappingURL=getMarginInsets.js.map
import { useEffect, useRef } from 'react';
export function usePrevValue(value) {
    var ref = useRef(value);
    useEffect(function () {
        ref.current = value;
    });
    return ref.current;
}
//# sourceMappingURL=usePrevValue.js.map
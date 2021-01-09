import { useEffect, useRef } from 'react';

export function usePrevValue<T>(value: T): T {
    const ref = useRef<T>(value);
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}

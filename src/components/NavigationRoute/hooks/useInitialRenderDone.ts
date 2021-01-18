import { useCallback, useLayoutEffect, useMemo, useState } from 'react';

export function useInitialRenderDone(activityState: 0 | 1 | 2): [boolean, () => void] {
    const [initialRenderDone, setInitialRenderDone] = useState(false);
    const disableInitialRender = useCallback(() => setInitialRenderDone(false), [setInitialRenderDone]);

    // Basically, we only render if the route is active, or was active before.
    // This prevents render calls from tabs the user never opened before.
    useLayoutEffect(() => {
        if (activityState >= 1) {
            setInitialRenderDone(true);
        }
    }, [activityState, setInitialRenderDone]);

    return useMemo(() => [initialRenderDone, disableInitialRender], [initialRenderDone, disableInitialRender]);
}

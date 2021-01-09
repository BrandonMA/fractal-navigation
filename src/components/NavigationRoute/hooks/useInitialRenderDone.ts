import { useLayoutEffect, useState } from 'react';

export function useInitialRenderDone(activityState: 0 | 1 | 2): boolean {
    const [initialRenderDone, setInitialRenderDone] = useState(false);

    // Basically, we only render if the route is active, or was active before.
    // This prevents render calls from tabs the user never opened before.
    useLayoutEffect(() => {
        if (activityState >= 1) {
            setInitialRenderDone(true);
        }
    }, [activityState, setInitialRenderDone]);

    return initialRenderDone;
}

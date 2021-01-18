import { useCallback, useLayoutEffect, useMemo, useState } from 'react';
export function useInitialRenderDone(activityState) {
    var _a = useState(false), initialRenderDone = _a[0], setInitialRenderDone = _a[1];
    var disableInitialRender = useCallback(function () { return setInitialRenderDone(false); }, [setInitialRenderDone]);
    // Basically, we only render if the route is active, or was active before.
    // This prevents render calls from tabs the user never opened before.
    useLayoutEffect(function () {
        if (activityState >= 1) {
            setInitialRenderDone(true);
        }
    }, [activityState, setInitialRenderDone]);
    return useMemo(function () { return [initialRenderDone, disableInitialRender]; }, [initialRenderDone, disableInitialRender]);
}
//# sourceMappingURL=useInitialRenderDone.js.map
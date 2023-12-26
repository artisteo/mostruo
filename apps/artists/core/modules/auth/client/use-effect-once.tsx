import type { EffectCallback } from "react";
import { useEffect  } from "react";


export const useEffectOnce = (effect: EffectCallback) => {
    // eslint-disable-next-line react-hooks/exhaustive-deps -- we want no dependencies
    useEffect(effect, []);
};

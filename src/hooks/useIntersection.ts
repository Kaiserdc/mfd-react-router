import React, {useEffect} from "react";

export function useIntersection<T extends HTMLElement>(
    ref: React.RefObject<T|null>,
    callback: () => void,
    options?: IntersectionObserverInit
) {
    useEffect(() => {
        const el = ref.current
        if (!el) return;

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) callback();
        }, options);

        observer.observe(el);

        return () => observer.disconnect();
    }, [ref, callback, options]);
}
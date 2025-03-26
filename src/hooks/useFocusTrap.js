import { useEffect } from "react";
export const useFocusTrap = (ref) => {
    useEffect(() => {
        const node = ref.current;
        if (!node)
            return;
        const handleKeyDown = (e) => {
            if (e.key !== "Tab")
                return;
            const focusable = node.querySelectorAll('input, button, select, textarea, a[href], [tabindex]:not([tabindex="-1"])');
            if (!focusable.length)
                return;
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            if (e.shiftKey && document.activeElement === first) {
                e.preventDefault();
                last.focus();
            }
            else if (!e.shiftKey && document.activeElement === last) {
                e.preventDefault();
                first.focus();
            }
        };
        node.addEventListener("keydown", handleKeyDown);
        return () => node.removeEventListener("keydown", handleKeyDown);
    }, [ref]);
};

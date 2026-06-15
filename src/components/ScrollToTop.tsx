import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { hash, pathname } = useLocation();

    useEffect(() => {
        if (!hash) {
            window.scrollTo(0, 0);
            return;
        }

        window.setTimeout(() => {
            const target = document.querySelector(hash);
            if (target) {
                target.scrollIntoView({ block: "start" });
            }
        }, 0);
    }, [hash, pathname]);

    return null;
};

export default ScrollToTop;

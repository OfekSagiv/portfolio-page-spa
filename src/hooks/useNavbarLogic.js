import { useEffect, useRef } from "react";
import { scroller } from "react-scroll";

const useNavbarLogic = (onSelect) => {
    const navLinksRef = useRef(null);

    const handleSelect = (tab) => {
        onSelect(tab);
        scroller.scrollTo(tab, {
            duration: 500,
            smooth: true,
            offset: -70 ,
        });
    };

    useEffect(() => {
        if (navLinksRef.current) {
            navLinksRef.current.scrollLeft = navLinksRef.current.scrollWidth;
        }
    }, []);

    return { navLinksRef, handleSelect };
};

export default useNavbarLogic;

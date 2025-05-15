import { useEffect, useRef } from "react";

const useNavbarLogic = (onSelect) => {
    const navLinksRef = useRef(null);

    const handleSelect = (tab) => {
        onSelect(tab);
    };

    useEffect(() => {
        if (navLinksRef.current) {
            navLinksRef.current.scrollLeft = navLinksRef.current.scrollWidth;
        }
    }, []);

    return { navLinksRef, handleSelect };
};

export default useNavbarLogic;

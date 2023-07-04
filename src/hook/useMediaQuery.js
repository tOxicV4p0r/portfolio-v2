import { useEffect, useMemo, useState } from "react";

function useMediaQuery(query) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query]);
    const [isMatch, setIsMatch] = useState(mediaQuery.matches);

    // console.count("useMediaQuery:");
    useEffect(() => {
        const handleChange = () => setIsMatch(mediaQuery.matches)
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, []); // eslint-disable-line

    return isMatch;
}

export default useMediaQuery;
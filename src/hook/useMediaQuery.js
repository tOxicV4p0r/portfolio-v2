import { useEffect, useMemo, useState } from "react";

function useMediaQuery(query) {
    const mediaQuery = useMemo(() => window.matchMedia(query), [query])
    const [isMatch, setIsMatch] = useState(mediaQuery.matches)

    useEffect(() => {
        const handleChange = () => setIsMatch(mediaQuery.matches)
        mediaQuery.addEventListener("change", handleChange)

        return () => mediaQuery.removeEventListener("change", handleChange)
    }, [mediaQuery]);

    return isMatch;
}

export default useMediaQuery;
import { useEffect, useState } from "react";

const useRSSQuery = () => {
    const [rssFeed, setRSSFeed] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40KDeelert', {
                    headers: { Accept: "application/ json" }
                });
                setRSSFeed(await data.json());

            } catch (e) {
                console.log(e);
            }
        }
        
        fetchData();
        // eslint-disable-next-line
    }, []);

    return rssFeed;
}

export default useRSSQuery;
import { useEffect, useState } from "react";

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const useRSSQuery = (rssFeedUrl) => {
    const [rssFeed, setRSSFeed] = useState([]);

    const formattedDate = (date) => {
        const tmp = new Date(date);
        return (`${monthNames[tmp.getMonth()]} ${tmp.getFullYear()}`);
    }

    const getDescription = (content) => {
        if (!content) {
            return "";
        }

        const tmp = content.split(/(?<=<p>)(.*?)(?=<\/p>)/i, 2);

        return tmp[1];
    }

    const fetchData = async () => {
        if (rssFeedUrl) {
            try {
                const data = await fetch(rssFeedUrl, {
                    headers: { Accept: "application/ json" }
                });

                const dataJson = await data.json();
                const tmp = dataJson.items.map(({ title, thumbnail, pubDate, link, content }) => {
                    return {
                        date: formattedDate(pubDate),
                        title: title,
                        link: link,
                        picture: thumbnail,
                        descriptions: [getDescription(content)],
                    };
                });

                setRSSFeed(tmp);

            } catch (e) {
                console.warn(e);
            }
        }
    }

    useEffect(() => {

        fetchData();

    }, [rssFeedUrl]); // eslint-disable-line

    return rssFeed;
}

export default useRSSQuery;
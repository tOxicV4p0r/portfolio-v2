import { useEffect, useState } from "react";

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const useRSSQuery = () => {
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


    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40KDeelert', {
                    headers: { Accept: "application/ json" }
                });

                const dataJson = await data.json()
                const tmp = dataJson.items.map(({ title, thumbnail, pubDate, link, content }) => {
                    return {
                        date: formattedDate(pubDate),
                        title: title,
                        link: link,
                        picture: thumbnail,
                        descriptions: [getDescription(content)],
                    };
                })

                setRSSFeed(tmp);

            } catch (e) {
                console.log(e);
            }
        }

        fetchData();
        
    }, []); // eslint-disable-line

    return rssFeed;
}

export default useRSSQuery;
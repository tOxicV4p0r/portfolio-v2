import { useEffect, useState } from "react";

import Description from "../../components/Description";
import TitleLink from "../../components/TitleLink";
import Year from "../../components/Year";
import useMediaQuery from "../../hook/useMediaQuery";
import useRSSQuery from "../../hook/useRSSQuery";

const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function Article({ section, addSection, detail }) {
    const feed = useRSSQuery();
    const isNonMobile = useMediaQuery("(min-width:1024px)");
    const [isMouseEnter, setMouseEnter] = useState({});

    const { sectionId: id, title: sectionTitle } = detail;

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
        const tmp = [...document.getElementById(id).querySelectorAll('[id]')].map(e => e.id);
        addSection(tmp);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="space-y-5" id={id}>
            <span className="text-primaryHeader pl-3">{sectionTitle}</span>
            <div className="grid">
                {
                    feed?.items?.map(({ title, thumbnail: picture, pubDate, link, content }) => (
                        <div
                            id={`${id}-${title.split(' ').join('')}`}
                            key={title}
                            className={`grid grid-cols-8 p-2 py-7 mx-1 ${isNonMobile ? "hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" : `${id}-${title.split(' ').join('')}` === section ? "bg-primarySubContent2 bg-opacity-10 rounded-xl" : ""}`}
                            onMouseEnter={() => setMouseEnter({ [title]: true })}
                            onMouseLeave={() => setMouseEnter({ [title]: false })}
                        >
                            <div className="col-span-2 text-primarySubContent1 space-y-4">
                                <Year isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section}>{formattedDate(pubDate)}</Year>
                                {picture ? <div className="w-5/6 p-1 bg-primarySubContent2 rounded-lg"><img src={picture} className="object-scale-down" alt={title} /></div> : null}
                            </div>
                            <div className="col-span-6 pl-2">
                                <div className="flex flex-col space-y-4">
                                    <TitleLink link={link} title={title} isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section} />
                                    <Description data={getDescription(content)} truncate />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Article;
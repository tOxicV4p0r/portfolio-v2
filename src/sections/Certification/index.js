import { useEffect, useState } from "react";

import Description from "../../components/Description";
import Picture from "../../components/Picture";
import Tech from "../../components/Tech";
import TitleLink from "../../components/TitleLink";
import Year from "../../components/Year";
import { data } from "../../contents/certification";
import useMediaQuery from "../../hook/useMediaQuery";

function Certification({ section, addSection, detail }) {
    const isNonMobile = useMediaQuery("(min-width:1024px)");
    const [isMouseEnter, setMouseEnter] = useState({});

    const { sectionId: id, title: sectionTitle } = detail;

    useEffect(() => {
        const tmp = [...document.getElementById(id).querySelectorAll('[id]')].map(e => e.id);
        addSection(tmp);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="space-y-5 scroll-mt-14" id={id} >
            <span className="text-primaryHeader pl-3">{sectionTitle}</span>
            <div className="grid">
                {
                    data.map(({ year, link, title, descriptions, skills, picture }) => (
                        <div
                            id={`${id}-${title.split(' ').join('')}`}
                            key={title}
                            className={`grid grid-cols-8 p-2 py-7 mx-1 ${isNonMobile ? "hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" : `${id}-${title.split(' ').join('')}` === section ? "bg-primarySubContent2 bg-opacity-10 rounded-xl" : ""}`}
                            onMouseEnter={() => setMouseEnter({ [title]: true })}
                            onMouseLeave={() => setMouseEnter({ [title]: false })}
                        >
                            <div className="col-span-2 text-primarySubContent1 space-y-4">
                                <Year isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section}>{year}</Year>
                                {picture ? <Picture title={title} picture={picture} className="w-3/6 bg-primaryContent" /> : null}
                            </div>
                            <div className="col-span-6 pl-2">
                                <div className="flex flex-col space-y-4">
                                    <TitleLink link={link} title={title} isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section} />
                                    {
                                        descriptions.map((e, i) => (
                                            <Description key={`${id}-descriptions-${i}`} data={e} />
                                        ))
                                    }
                                    {
                                        skills.map((e, i) => (
                                            <Tech key={`${id}-skill-${i}`} data={e} isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Certification;
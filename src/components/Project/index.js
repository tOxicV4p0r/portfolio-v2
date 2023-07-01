import { useEffect, useState } from "react";

import { data } from "../../contents/project"
import useMediaQuery from "../../hook/useMediaQuery";
import Description from "../Description";
import Material from "../Material";
import Tech from "../Tech";
import TitleLink from "../TitleLink";
import Year from "../Year";

function Project({ section, addSection, detail }) {
    const isNonMobile = useMediaQuery("(min-width:1024px)");
    const [isMouseEnter, setMouseEnter] = useState({});

    const { sectionId: id, title: sectionTitle } = detail;

    useEffect(() => {
        const tmp = [...document.getElementById(id).querySelectorAll('[id]')].map(e => e.id)
        addSection(tmp)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <section className="space-y-5 scroll-mt-14" id={id} >
            <span className="text-primaryHeader pl-3">{sectionTitle}</span>
            <div className="grid">
                {
                    data.map(({ year, link, materials, title, descriptions, skills, picture }) => (
                        <div
                            id={`${id}-${title.split(' ').join('')}`}
                            key={title}
                            className={`grid grid-cols-8 p-2 py-7 mx-1 ${isNonMobile ? "hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" : `${id}-${title.split(' ').join('')}` === section ? "bg-primarySubContent2 bg-opacity-10 rounded-xl" : ""}`}
                            onMouseEnter={() => setMouseEnter({ [title]: true })}
                            onMouseLeave={() => setMouseEnter({ [title]: false })}
                        >
                            <div className="col-span-2 text-primarySubContent1 space-y-4">
                                <Year isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section}>{year}</Year>
                                {picture ? <div className="w-5/6 p-1 bg-primarySubContent2 rounded-lg"><img src={picture} className="object-scale-down" alt={title} /></div> : null}
                            </div>
                            <div className="col-span-6 pl-2">
                                <div className="flex flex-col space-y-4">
                                    <TitleLink link={link} title={title} isHighlight={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section} />
                                    {
                                        materials.length > 0 ?
                                            <div>
                                                {
                                                    materials.map((e, i) => (
                                                        <Material key={`${id}-material-${i}`} isHighlight={isMouseEnter[title]} data={e} index={i} />
                                                    ))
                                                }
                                            </div> : null
                                    }
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
                {
                    /*
                    data.length > 4 ?
                        <div className="py-7 mx-1">
                            <span
                                className="p-2 cursor-pointer hover:text-primaryTitle"
                                onMouseEnter={() => setMouseEnter({ 'allproject': true })}
                                onMouseLeave={() => setMouseEnter({ 'allproject': false })}
                            >
                                view all projects
                                <FontAwesomeIcon icon={faArrowRight} className={`${isMouseEnter['allproject'] ? "translate-x-2" : ""} text-sm ease-out duration-500 pl-1`} />
                            </span>
                        </div>
                        : null
                    */
                }
            </div>
        </section>
    );
}

export default Project;
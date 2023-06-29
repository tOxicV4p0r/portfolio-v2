import { useEffect, useState } from "react";

import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <section className="space-y-5" id={id} >
            <span className="text-primaryHeader pl-3">{sectionTitle}</span>
            <div className="grid">
                {
                    data.map(({ year, cerlink, title, descriptions, skills, picture }) => (
                        <div
                            id={`${id}-${title.split(' ').join('')}`}
                            key={title}
                            className={`grid grid-cols-8 p-2 py-7 mx-1 ${isNonMobile ? "hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" : `${id}-${title.split(' ').join('')}` === section ? "bg-primarySubContent2 bg-opacity-10 rounded-xl" : ""}`}
                            onMouseEnter={() => setMouseEnter({ [title]: true })}
                            onMouseLeave={() => setMouseEnter({ [title]: false })}
                        >
                            <div className="col-span-2 text-primarySubContent1 space-y-4">
                                <div><span className={`${isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section ? "text-primaryContent" : ""} text-sm`} >{year}</span></div>
                                {picture ? <div className="w-3/6 p-1 bg-primaryContent rounded-lg"><img src={picture} className="object-scale-down" alt={title} /></div> : null}
                            </div>
                            <div className="col-span-6 pl-2">
                                <div className="flex flex-col space-y-4">
                                    {
                                        cerlink ?
                                            <a
                                                className={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section ? 'text-primaryTitle' : 'text-primaryHeader'}
                                                href={cerlink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                <span className="pr-1">{title}</span>
                                                <FontAwesomeIcon
                                                    icon={faArrowUp}
                                                    className={`${isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section ? "-translate-y-1 translate-x-1" : "translate-y-0.5"} rotate-45 text-sm ease-out duration-500`}
                                                />
                                            </a>
                                            :
                                            <span className={isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section ? "text-primaryTitle" : "text-primaryHeader"}>{title}</span>
                                    }
                                    {
                                        descriptions.map((e, i) => (
                                            <div key={i} className="text-sm text-primaryContent">{e}</div>
                                        ))
                                    }
                                    {
                                        skills.map((e, i) => (
                                            <div key={i} className="flex flex-wrap gap-2">
                                                {
                                                    e.map((el, j) => (
                                                        <div
                                                            key={el + j}
                                                            className={`${isMouseEnter[title] || `${id}-${title.split(' ').join('')}` === section ? "text-primarySubTitle" : "text-primarySubContent1"} text-sm rounded-md bg-primarySubContent2 bg-opacity-20 px-2 py-1`}
                                                        >
                                                            {el}
                                                        </div>
                                                    ))
                                                }
                                            </div>
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
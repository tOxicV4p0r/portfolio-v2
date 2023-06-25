import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import picMeta from "../../asset/meta.png"

const data = [
    {
        year: "June 2023",
        cerlink: "https://coursera.org/share/ec72454c71270ede2c47fd23e720be2d",
        title: "Meta Front-End Developer by Meta",
        descriptions: [],
        skills: [
            ["UI/UX design", "JavaScript", "React", "HTML", "CSS"],
        ],
        picture: picMeta,
    },
    {
        year: "June 2023",
        cerlink: "https://coursera.org/share/b8791cd3bc48f7e518b8d96aa8daca40",
        title: "Meta Back-End Developer by Meta",
        descriptions: [],
        skills: [
            ["API Design", "Python", "Django", "DBMS"],
        ],
        picture: picMeta,
    },
]

function Certificate() {
    const [isMouseEnter, setMouseEnter] = useState({})

    return (
        <section className="space-y-5" id="certification-section">
            <span className="text-primaryHeader px-2">Certification</span>
            <div className="grid">
                {
                    data.map(({ year, cerlink, title, descriptions, skills, picture }) => (
                        <div key={title} className="grid grid-cols-8 p-2 py-7 hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" onMouseEnter={() => setMouseEnter({ [title]: true })} onMouseLeave={() => setMouseEnter({ [title]: false })}>
                            <div className="col-span-2 text-primarySubContent1 space-y-4">
                                <div>{year}</div>
                                {picture ? <div className="w-3/6 p-1 bg-primaryContent rounded-lg"><img src={picture} className="object-scale-down" /></div> : null}
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-4">
                                    {
                                        cerlink ?
                                            <a className={`${isMouseEnter[title] ? 'text-primaryTitle' : 'text-primaryHeader'}`} href={cerlink} target="_blank" rel="noopener noreferrer">{title} <FontAwesomeIcon icon={faArrowUp} className={`${isMouseEnter[title] ? "-translate-y-1 translate-x-0.5": "translate-y-0.5"} rotate-45 text-sm transition-all`} /></a>
                                            :
                                            <span className={isMouseEnter[title] ? "text-primaryTitle" : "text-primaryHeader"}>{title}</span>
                                    }
                                    {
                                        descriptions.map((e, i) => (
                                            <div key={i} className="text-primaryContent">{e}</div>
                                        ))
                                    }
                                    {
                                        skills.map((e, i) => (
                                            <div key={i} className="flex flex-wrap gap-2">
                                                {
                                                    e.map((el, j) => (
                                                        <div key={el + j} className="text-primarySubContent1 rounded-md bg-primarySubContent2 bg-opacity-20 px-2 py-1">{el}</div>
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
    )
};

export default Certificate;
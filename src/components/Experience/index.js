import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const data = [
    {
        year: "2021-2022",
        link: "",
        title: "Fullstack · Sport Analysis System",
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
            "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7."
        ],
        skills: [
            ["React", "Redux-Saga", "Antd"],
            ["Playwright", "Nginx", "NodeJS", "MongoDB"]
        ],
    },
    {
        year: "2013-2018",
        link: "",
        title: "Police Officer",
        descriptions: [],
        skills: [],
    },
    {
        year: "2012-2012",
        link: "",
        title: "Middleware System Engineer · IBM",
        descriptions: [
            "Implemented and on-going support Middleware infrastructure for internal project.",
        ],
        skills: [
            ["IBM Websphere", "Linux"],
        ],
    },
]

function Experience() {
    const [isMouseEnter, setMouseEnter] = useState({})

    return (
        <section className="space-y-5">
            <span className="text-primaryHeader px-2">Work Experience</span>
            <div className="grid gap-10">
                {
                    data.map(({ year, link, title, descriptions, skills }) => (
                        <div key={title} className="grid grid-cols-8 p-2 hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" onMouseEnter={() => setMouseEnter({ [title]: true })} onMouseLeave={() => setMouseEnter({ [title]: false })}>
                            <div className="col-span-2 text-primarySubContent1">{year}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-4">
                                    {
                                        link ?
                                            <a className={`${isMouseEnter[title] ? 'text-primaryTitle' : 'text-primaryHeader'}`} href={link} target="_blank" rel="noopener noreferrer">{title} <FontAwesomeIcon icon={faArrowUp} className={`${isMouseEnter[title] ? "-translate-y-1 translate-x-0.5" : "translate-y-0.5"} rotate-45 text-sm transition-transform`} /></a>
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
    );
};

export default Experience;
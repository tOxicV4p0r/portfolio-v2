import React from "react";

const data = [
    {
        year: "2021-2022",
        link: "",
        title: "Fullstack - Sport Analysis System",
        descriptions: [
            "Designing and developing a sports data analysis system that scrapes data from various sports websites, processes it, and presents different profit-making possibilities in real-time for customers.",
            "Create tools for monitoring the backend and implementing self-recovery mechanisms, ensuring their seamless operation 24/7."
        ],
        skills: [
            "Front : React • Redux-Saga • Antd",
            "Back : Playwright • Nginx • NodeJS • MongoDB"
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
        title: "Middleware System Engineer - IBM",
        descriptions: [
            "Implemented and on-going support Middleware infrastructure for internal project.",
        ],
        skills: [
            "IBM Websphere • Linux",
        ],
    },
]

function Experience() {
    return (
        <div className="space-y-3">
            <span>Work Experience</span>
            <div className="grid grid-cols-8 gap-y-5">
                {
                    data.map(({ year, link, title, descriptions, skills }) => (
                        <React.Fragment key={title}>
                            <div className="col-span-2 text-gray-500">{year}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    {
                                        link ?
                                            <div className="underline underline-offset-4 after:content-['_↗']"><a className="" href={link} target="_blank" rel="noopener noreferrer">{title}</a></div>
                                            :
                                            <div>{title}</div>
                                    }
                                    {
                                        descriptions.map((e, i) => (
                                            <div key={i} className="text-gray-400 hover:text-gray-300">{e}</div>
                                        ))
                                    }
                                    {
                                        skills.map((e, i) => (
                                            <div key={i} className="text-gray-500 hover:text-gray-400 rounded-md bg-gray-700 bg-opacity-20 px-2 py-1">{e}</div>
                                        ))
                                    }
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};

export default Experience;
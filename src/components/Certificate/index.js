import React from "react";

const data = [
    {
        year: "June 2023",
        cerlink: "https://coursera.org/share/ec72454c71270ede2c47fd23e720be2d",
        title: "Meta Front-End Developer by Meta",
        descriptions: [],
        skills: ["Skills : UI/UX design • JavaScript • React • HTML • CSS"],
    },
    {
        year: "June 2023",
        cerlink: "https://coursera.org/share/b8791cd3bc48f7e518b8d96aa8daca40",
        title: "Meta Back-End Developer by Meta",
        descriptions: [],
        skills: ["Skills : Cloud Hosting • REST API • Python • Django • DBMS"],
    },
]

function Certificate() {
    return (
        <div className="space-y-3">
            <span>Certification </span>
            <div className="grid grid-cols-8 gap-y-5">
                {
                    data.map(({ year, cerlink, title, descriptions, skills }) => (
                        <React.Fragment key={title}>
                            <div className="col-span-2 text-gray-500">{year}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    <div>
                                        {
                                            cerlink ?
                                                <a className="underline underline-offset-4 after:content-['_↗']" href={cerlink} target="_blank" rel="noopener noreferrer">{title}</a>
                                                :
                                                <span>{title}</span>
                                        }

                                    </div>
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
    )
};

export default Certificate;
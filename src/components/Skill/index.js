import React from "react";

const data = [
    {
        section: "Languages",
        description: "JavaScript",
    },
    {
        section: "Technologies",
        description: "Web3 · React · Redux · Puppeteer · Nginx · NodeJS · Express · MongoDB",
    },
    {
        section: "Knowledge",
        description: "Blockchain · Ethereum",
    },
    {
        section: "Proficiency",
        description: "Thai-Native · English-Upper Intermediate",
    },
]

function Skill() {
    return (
        <section className="space-y-5" id="skill-section">
            <span className="text-primaryHeader px-2">Skill</span>
            <div className="grid">
                {
                    data.map(({ section, description }) => (
                        <div key={section} className="grid grid-cols-8 p-2" >
                            <div className="col-span-2 text-primarySubContent1 truncate">{section}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="text-primaryContent">{description}</div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default Skill;
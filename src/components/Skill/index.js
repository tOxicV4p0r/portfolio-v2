import React from "react";

const data = [
    {
        section: "Languages",
        description: "JavaScript",
    },
    {
        section: "Technologies",
        description: "Web3 • React • Redux • Puppeteer • Nginx • NodeJS • Express • MongoDB",
    },
    {
        section: "Knowledge",
        description: "Blockchain • Ethereum",
    },
    {
        section: "Proficiency",
        description: "Thai-Native • English-Upper Intermediate",
    },
]

function Skill() {
    return (
        <section className="space-y-5">
            <span className="text-primaryHeader px-2">Skill</span>
            <div className="grid grid-cols-8 gap-y-2 gap-x-1">
                {
                    data.map(({ section, description }) => (
                        <React.Fragment key={section}>
                            <div className="col-span-2 text-primarySubContent1 truncate">{section}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="text-primaryContent">{description}</div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </section>
    )
};

export default Skill;
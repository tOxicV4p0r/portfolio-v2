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
        <div className="space-y-3">
            <span>Skill</span>
            <div className="grid grid-cols-8 gap-y-2 gap-x-1">
                {
                    data.map(({ section, description }) => (
                        <React.Fragment key={section}>
                            <div className="col-span-2 text-gray-500 truncate">{section}</div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    <div className="text-gray-400 hover:text-gray-300">{description}</div>
                                </div>
                            </div>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
};

export default Skill;
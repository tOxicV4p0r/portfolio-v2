import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import picLittleLemon from "../../asset/littlelemon.png"
import picSocialMern from "../../asset/social_mern.png"
import picAxieBot from "../../asset/axiebot.png"

const data = [
    {
        year: "June 2023",
        link: "https://little-lemon-image-nhvl2sce2q-uc.a.run.app/",
        code: "https://github.com/tOxicV4p0r/little-lemon/",
        title: "Little Lemon restaurant",
        descriptions: ["This project is part of the Meta Front-End Developer Capstone final project assessment and focuses solely on reservation functionality."],
        skills: [
            ["React"],
        ],
        picture: picLittleLemon,
    },
    {
        year: "May 2023",
        link: "https://social-mern-image-nhvl2sce2q-as.a.run.app/",
        code: "https://github.com/tOxicV4p0r/social_mern_edroh/",
        title: "Social MERN stack",
        descriptions: ["This demo project is based on EdRoh's tutorial video on Youtube. I have fixed some bugs and added several features."],
        skills: [
            ["React", "Redux", "MUI"],
            ["NodeJS", "MongoDB"],
        ],
        picture: picSocialMern,
    },
    {
        year: "Feb 2022",
        link: "https://app.axieinfinity.com/marketplace/",
        code: "",
        title: "Automated Trading Bot - Axie",
        descriptions: ["The bot collects daily trading data and utilizes it to analyze buying and selling prices to identify profitable opportunities. It executes automated buying and selling Axie that can generate a profit of 10% or more on the Ronin blockchain."],
        skills: [
            ["Web3", "Puppeteer", "Nginx", "NodeJS", "MongoDB"],
        ],
        picture: picAxieBot,
    }
]

function SideProject() {
    const [isMouseEnter, setMouseEnter] = useState({})

    return (
        <section className="space-y-3">
            <span className="text-primaryHeader">Side Project</span>
            <div className="grid gap-10">
                {
                    data.map(({ year, link, code, title, descriptions, skills, picture }) => (
                        <div key={title} className="grid grid-cols-8 p-2 hover:bg-primarySubContent2 hover:bg-opacity-10 hover:rounded-xl" onMouseEnter={() => setMouseEnter({ [title]: true })} onMouseLeave={() => setMouseEnter({ [title]: false })}>
                            <div className="col-span-2 text-primarySubContent1">
                                <div>{year}</div>
                                {picture ? <div className="w-5/6 p-1 bg-primarySubContent2 rounded-lg"><img src={picture} className="object-scale-down" /></div> : null}
                            </div>
                            <div className="col-span-6">
                                <div className="flex flex-col space-y-2">
                                    {
                                        link ?
                                            <a className={`${isMouseEnter[title] ? 'text-primaryTitle' : 'text-primaryHeader'}`} href={link} target="_blank" rel="noopener noreferrer">{title} <FontAwesomeIcon icon={faArrowUp} className={`${isMouseEnter[title] ? "-translate-y-1 translate-x-0.5" : "translate-y-0.5"} rotate-45 text-sm transition-all`} /></a>
                                            :
                                            <span className={isMouseEnter[title] ? "text-primaryTitle" : "text-primaryHeader"}>{title}</span>
                                    }
                                    {
                                        code ?
                                            <div>
                                                <a className={`${isMouseEnter[title] ? 'text-primarySubTitle' : 'text-primaryContent underline underline-offset-4'}`} href={code} target="_blank" rel="noopener noreferrer">[Code] <FontAwesomeIcon icon={faArrowUp} className={`${isMouseEnter[title] ? "-translate-y-1 translate-x-0.5" : "translate-y-0.5"} rotate-45 text-sm transition-all`} /></a>
                                            </div>
                                            :
                                            null
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

export default SideProject;
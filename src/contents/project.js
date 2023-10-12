/*
*   date - string
*   title - string
*   link - URL string
*   materials - [{ 
*       type - icon
*       link - URL string
*   }]
*   descriptions - [string]
*   skills - [
*       [string] - 1 array/line
*   ]
*   picture - file path
*/

import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import picAxieBot from "../asset/axiebot.png";
import picLittleLemon from "../asset/littlelemon.png";
import picSocialMern from "../asset/social_mern.png";

export const data = [
    {
        date: "Oct 2021-hightlight",
        title: "Automated Trading Bot - Axie",
        link: "https://medium.com/@KDeelert/how-i-made-100k-in-a-month-with-axie-infinity-77cca8e9b29f",
        materials: [
            { type: faBook, link: "https://medium.com/@KDeelert/how-i-made-100k-in-a-month-with-axie-infinity-77cca8e9b29f" }
        ],
        descriptions: [
            "· Designed and developed a trading bot for Axie Infinity, a popular NFT game, to automate the buying and selling process of in-game assets.",
            "· Designed and Implemented a user-friendly interface for monitoring data.",
            "· Utilized web3 technology to connect to the Ronin blockchain and retrieve real-time trading data.",
            "· Implemented data analysis algorithms to identify profitable opportunities by analyzing sales data, average selling prices, and market trends.",
            "· Pre-defined trading strategies based on Axie models' sales frequency, aiming for profit margins ranging from 10% to 50%",
        ],
        skills: [
            ["Web3", "Puppeteer", "Nginx", "NodeJS", "MongoDB"],
        ],
        picture: picAxieBot,
    },
    {
        date: "Jun 2023",
        title: "Portfolio V2",
        link: "https://blackboy96.xyz/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/portfolio-v2" },
            { type: faYoutube, link: "https://youtu.be/DOUP5gwk2jI" },
            { type: faBook, link: "https://medium.com/@KDeelert/how-i-built-portfolio-website-945508dd9637" },
        ],
        descriptions: ["· A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast."],
        skills: [
            ["React", "TailwindCSS"],
        ],
        picture: "https://github.com/tOxicV4p0r/portfolio-v2/raw/main/static/demo.gif?raw=true",
    },
    {
        date: "Jun 2023",
        title: "Fashion Ecommerce",
        link: "https://clientecommer-nhvl2sce2q-as.a.run.app/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/FULLSTACK-React-Ecommerce" },
        ],
        descriptions: ["· The project serves as an opportunity for me to deepen my understanding of React, Starpi CMS backend, and setting up a payment system with Stripe."],
        skills: [
            ["React", "MUI", "Starpi", "Stripe"],
        ],
        picture: 'https://github.com/tOxicV4p0r/FULLSTACK-React-Ecommerce/blob/main/static/ecommergif.gif?raw=true',
    },
    {
        date: "Jun 2023",
        title: "Little Lemon restaurant",
        link: "https://little-lemon-image-nhvl2sce2q-uc.a.run.app/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/little-lemon/" },
        ],
        descriptions: ["· This project is part of the Meta Front-End Developer Capstone final project assessment and focuses solely on reservation functionality."],
        skills: [
            ["React"],
        ],
        picture: picLittleLemon,
    },
    {
        date: "May 2023",
        title: "Social Platform Demo",
        link: "https://social-mern-image-nhvl2sce2q-as.a.run.app/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/social_mern_edroh/" },
            { type: faYoutube, link: "https://youtu.be/BdgSbmS4_qg" },
        ],
        descriptions: ["· This demo project is based on EdRoh's tutorial video on Youtube. I have fixed some bugs and added several features."],
        skills: [
            ["React", "Redux", "MUI"],
            ["NodeJS", "MongoDB"],
        ],
        picture: picSocialMern,
    }
];

import { faGithub, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import picAxieBot from "../asset/axiebot.png";
import picLittleLemon from "../asset/littlelemon.png";
import picSocialMern from "../asset/social_mern.png";

export const data = [
    {
        date: "Jun 2023",
        link: "https://blackboy96.xyz/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/portfolio-v2" },
            { type: faBook, link: "https://medium.com/@KDeelert/how-i-built-portfolio-website-945508dd9637" },
        ],
        title: "Portfolio V2",
        descriptions: ["A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast."],
        skills: [
            ["React", "TailwindCSS"],
        ],
        picture: "https://github.com/tOxicV4p0r/portfolio-v2/raw/main/static/demo.gif?raw=true",
    },
    {
        date: "Jun 2023",
        link: "https://clientecommer-nhvl2sce2q-as.a.run.app/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/FULLSTACK-React-Ecommerce" },
        ],
        title: "Fashion Ecommerce",
        descriptions: ["The project serves as an opportunity for me to deepen my understanding of React, Starpi CMS backend, and setting up a payment system with Stripe."],
        skills: [
            ["React", "MUI", "Starpi", "Stripe"],
        ],
        picture: 'https://github.com/tOxicV4p0r/FULLSTACK-React-Ecommerce/blob/main/static/ecommergif.gif?raw=true',
    },
    {
        date: "Jun 2023",
        link: "https://little-lemon-image-nhvl2sce2q-uc.a.run.app/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/little-lemon/" },
        ],
        title: "Little Lemon restaurant",
        descriptions: ["This project is part of the Meta Front-End Developer Capstone final project assessment and focuses solely on reservation functionality."],
        skills: [
            ["React"],
        ],
        picture: picLittleLemon,
    },
    {
        date: "May 2023",
        link: "https://social-mern-image-nhvl2sce2q-as.a.run.app/",
        materials: [
            { type: faGithub, link: "https://github.com/tOxicV4p0r/social_mern_edroh/" },
            { type: faYoutube, link: "https://youtu.be/BdgSbmS4_qg" },
        ],
        title: "Social Platform Demo",
        descriptions: ["This demo project is based on EdRoh's tutorial video on Youtube. I have fixed some bugs and added several features."],
        skills: [
            ["React", "Redux", "MUI"],
            ["NodeJS", "MongoDB"],
        ],
        picture: picSocialMern,
    },
    {
        date: "Oct 2021",
        link: "https://medium.com/@KDeelert/how-i-made-100k-in-a-month-with-axie-infinity-77cca8e9b29f",
        materials: [
            { type: faBook, link: "https://medium.com/@KDeelert/how-i-made-100k-in-a-month-with-axie-infinity-77cca8e9b29f" }
        ],
        title: "Automated Trading Bot - Axie",
        descriptions: ["The bot collects daily trading data and utilizes it to analyze buying and selling prices to identify profitable opportunities. It executes automated buying and selling Axie that can generate a profit of 10% or more on the Ronin blockchain."],
        skills: [
            ["Web3", "Puppeteer", "Nginx", "NodeJS", "MongoDB"],
        ],
        picture: picAxieBot,
    }
];

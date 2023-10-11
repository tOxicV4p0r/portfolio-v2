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

// import { faBook } from "@fortawesome/free-solid-svg-icons";

import sportAnalyzer from "./../asset/sportanalyzer.webp"

export const data = [
    {
        date: "2019-2022",
        title: "Fullstack · Sport Analysis System",
        link: "https://medium.com/@KDeelert/how-i-built-soccer-analyzer-tool-eng-55bf8a473248",
        materials: [
            // { type: faBook, link: "https://medium.com/@KDeelert/how-i-built-soccer-analyzer-tool-eng-55bf8a473248" },
        ],
        descriptions: [
            "Developed a bot for web scraping to extract various statistics and real-time odds.",
            "Developed a real-time statistical analysis system for football betting and investing, which conducted extensive data analysis over four years, showing consistent positive returns on selected matches that were placed by selected conditions.",
            "Designed and implemented a customizable condition system to identify betting opportunities that are capable of generating 3,000% of the average annual profit.",
            "Designed and implemented an automated betting system.",
            "Designed and Implemented a responsive web application for displaying real-time statistics and configuring the automated betting system.",
            "Utilized load balancing and reverse proxy to ensure smooth system performance and handle increased user traffic.",
            "Developed a notification system to send alerts to the Line application when there are matches that meet the specified conditions.",
        ],
        skills: [
            ["React", "Redux-Saga", "Antd"],
            ["Playwright", "Nginx", "NodeJS", "MongoDB"]
        ],
        picture: sportAnalyzer,
    },
    {
        date: "2013-2018",
        title: "Police Officer",
        link: "",
        materials: [
        ],
        descriptions: [],
        skills: [],
        picture: "",
    },
    {
        date: "2012-2012",
        title: "Middleware System Engineer · IBM",
        link: "",
        materials: [
        ],
        descriptions: [
            "Implemented and on-going support Middleware infrastructure for internal project.",
        ],
        skills: [
            ["IBM Websphere", "Linux"],
        ],
        picture: "",
    },
];
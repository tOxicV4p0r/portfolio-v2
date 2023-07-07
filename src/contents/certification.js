// import picMeta from "../asset/meta.png";
import picGoogleCyberSecure from "../asset/Google-Cybersecurity-Certificate.png";
import picMetaBackend from "../asset/Meta-Back-End-Developer-Certificate.png";
import picMetaFrontend from "../asset/Meta-Front-End-Developer-Certificate.png";

export const data = [
    {
        date: "July 2023 - present",
        link: "https://www.coursera.org/professional-certificates/google-cybersecurity",
        title: "Google Cybersecurity [in progress (3/8)]",
        descriptions: [
            "Understand the importance of cybersecurity practices and their impact for organizations.",
            "Identify common risks, threats, and vulnerabilities, as well as techniques to mitigate them.",
            "Protect networks, devices, people, and data from unauthorized access and cyberattacks using Security Information and Event Management (SIEM) tools.",
        ],
        skills: [
            ["SIEM tools", "IDS", "Linux", "Python", "SQL"],
        ],
        picture: picGoogleCyberSecure,
    },
    {
        date: "Jun 2023",
        link: "https://coursera.org/share/ec72454c71270ede2c47fd23e720be2d",
        title: "Meta Front-End Developer by Meta",
        descriptions: [
            "Create a responsive website using HTML to structure content, CSS to handle visual style, and JavaScript to develop interactive experiences.",
            "Learn how to use more advanced React concepts and features.",
            "Learn the fundamentals of User Experience (UX) research and design.",
        ],
        skills: [
            ["UI/UX design", "JavaScript", "React", "HTML", "CSS"],
        ],
        picture: picMetaFrontend,
    },
    {
        date: "Jun 2023",
        link: "https://coursera.org/share/b8791cd3bc48f7e518b8d96aa8daca40",
        title: "Meta Back-End Developer by Meta",
        descriptions: [
            "Learn to use programming systems including Python, Linux, Git, SQL, Version Control, Cloud, APIs Design, Django web framework JSON, XML and more.",
            "Learn the processes and concepts behind APIs and their infrastructure.",
        ],
        skills: [
            ["API Design", "Python", "Django", "DBMS"],
        ],
        picture: picMetaBackend,
    },
];
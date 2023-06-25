import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ProfilePic from "../../asset/profilepixel.png"
import fileResume from "../../asset/resume.pdf"

const data = {
    name: "Kraisorn Deelert",
    title: "Software Developer · between jobs",
    degree: "CPE · Mahanakorn University",
    btnText: "Download Résumé",
    link: fileResume,
}

function Header() {
    const [isMouseEnter, setMouseEnter] = useState(false)
    return (
        <section>
            <div className="text-2xl md:text-3xl font-medium text-primaryTitle">{data.name}</div>
            <div className="space-x-2 font-medium text-primaryHeader">
                <span className="truncate">{data.title}</span>
            </div>
            <div className="text-primaryContent font-bold text-sm">{data.degree}</div>
            <div className="mt-5" onMouseEnter={()=>setMouseEnter(true)} onMouseLeave={()=>setMouseEnter(false)}><a className="px-4 py-2 text-sm font-semibold rounded-md bg-primaryTitle text-primaryHeader hover:bg-primarySubTitle" href={data.link} target="_blank" rel="noopener noreferrer">{data.btnText} <FontAwesomeIcon icon={faArrowDown} className={`${isMouseEnter?"translate-x-2":""} text-xs -rotate-90 transition-all`} /></a></div>
        </section>
    );
};

export default Header;
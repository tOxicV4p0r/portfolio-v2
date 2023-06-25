import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import fileResume from "../../asset/resume.pdf"

const data = {
    name: "Kraisorn Deelert",
    title: "Software Developer · between jobs",
    caption: "From concept to reality, bridging the gap with code, transforming ideas into tangible digital solutions.",
    btnText: "Download Resume",
    link: fileResume,
}

function Header() {
    const [isMouseEnter, setMouseEnter] = useState(false)
    
    return (
        <section>
            <div className="text-2xl md:text-3xl font-medium text-primaryTitle pb-3">{data.name}</div>
            <div className="space-x-2 text-primaryHeader pb-3">
                <span className="truncate">{data.title}</span>
            </div>
            <div className="text-primaryContent text-sm w-5/6 pb-3">{data.caption}</div>
            <div
                className="mt-5"
                onMouseEnter={() => setMouseEnter(true)}
                onMouseLeave={() => setMouseEnter(false)}>
                <a
                    className="px-5 py-2 rounded-md bg-primaryTitle text-primaryHeader hover:bg-primarySubTitle"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="pr-2 text-sm">{data.btnText}</span>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className={`${isMouseEnter ? "rotate-180" : ""} text-xs motion-safe:animate-bounce transition-all`}
                    />
                </a>
            </div>
        </section>
    );
};

export default Header;
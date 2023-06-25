import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function NavContent({ data, section }) {
    const [isMouseEnter, setIsMouseEnter] = useState(false)

    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <section className="space-y-5">
            <div className="">
                {
                    data.sections.map((e, i) => (
                        <div
                            key={i}
                            onClick={() => handleClick(e.sectionId)}
                            onMouseEnter={() => setIsMouseEnter({ [e.sectionId]: true })}
                            onMouseLeave={() => setIsMouseEnter({ [e.sectionId]: false })}
                            className={`${section == e.sectionId ? "text-white" : ""} cursor-pointer pt-5`}
                        >
                            <FontAwesomeIcon icon={faArrowRight} className={`${section == e.sectionId ? "text-primaryTitle" : !isMouseEnter[e.sectionId] ? "hidden" : ""} new-arrow mt-1 fixed`} />
                            <div className={`${section == e.sectionId || isMouseEnter[e.sectionId] ? "translate-x-6" : ""} ease-out duration-200`}>{e.title}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default NavContent;
import { useState } from "react";

import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDataContext } from "../../context/dataContext";
import { scrollSmooth } from "../../service/scroll";

function NavContent({ sections, currentSection }) {
    const { isNonMobile } = useDataContext();
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const handleClick = (anchor) => {
        const element = document.getElementById(anchor);
        if (element) {
            // offset mt-14 = 56px
            scrollSmooth(anchor, 500, 56);

            // default scroll style
            // element.scrollIntoView({ behavior: "smooth", block: "start", });
        }
    };

    if (!isNonMobile) {
        return null;
    }

    return (
        <section>
            <div>
                {
                    sections.map((e, i) => (
                        <div
                            key={`${e.sectionId}-${i}`}
                            onClick={() => handleClick(e.sectionId)}
                            onMouseEnter={() => setIsMouseEnter({ [e.sectionId]: true })}
                            onMouseLeave={() => setIsMouseEnter({ [e.sectionId]: false })}
                            className={`${currentSection === e.sectionId ? "text-white" : ""} cursor-pointer pt-5 flex`}
                        >
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={`${currentSection === e.sectionId ? "text-primaryTitle" : !isMouseEnter[e.sectionId] ? "hidden" : ""} new-arrow mt-1`}
                            />
                            <div className={`${currentSection === e.sectionId || isMouseEnter[e.sectionId] ? "translate-x-4" : ""} ease-out duration-200`}>{e.title}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default NavContent;
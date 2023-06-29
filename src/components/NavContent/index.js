import { useState } from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { scrollSmooth } from "../../service/scroll";

function NavContent({ data, section, scrollSectionId, fisrtSectionOfScroll }) {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const handleClick = (anchor) => {
        const element = document.getElementById(anchor);
        if (element) {
            scrollSmooth(scrollSectionId, fisrtSectionOfScroll, anchor, 700);

            // default scroll style
            // element.scrollIntoView({ behavior: "smooth", block: "start", });
        }
    }

    return (
        <section>
            <div>
                {
                    data.sections.map((e, i) => (
                        <div
                            key={`${e.sectionId}-${i}`}
                            onClick={() => handleClick(e.sectionId)}
                            onMouseEnter={() => setIsMouseEnter({ [e.sectionId]: true })}
                            onMouseLeave={() => setIsMouseEnter({ [e.sectionId]: false })}
                            className={`${section === e.sectionId ? "text-white" : ""} cursor-pointer pt-5 flex`}
                        >
                            <FontAwesomeIcon
                                icon={faArrowRight}
                                className={`${section === e.sectionId ? "text-primaryTitle" : !isMouseEnter[e.sectionId] ? "hidden" : ""} new-arrow mt-1`}
                            />
                            <div className={`${section === e.sectionId || isMouseEnter[e.sectionId] ? "translate-x-4" : ""} ease-out duration-200`}>{e.title}</div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default NavContent;
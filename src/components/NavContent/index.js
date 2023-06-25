import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavContent({ data, section }) {
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
            <div className="space-y-2">
                {
                    data.sections.map((e, i) => (
                        <div
                            key={i}
                            onClick={() => handleClick(e.sectionId)}
                            className={`${section == e.sectionId ? "text-white" : ""} cursor-pointer`}
                        >
                            <FontAwesomeIcon icon={faArrowRight} className={`${section == e.sectionId ? "" : "hidden"} new-arrow`} /> <span className="ease-in duration-300">{e.title}</span>
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default NavContent;
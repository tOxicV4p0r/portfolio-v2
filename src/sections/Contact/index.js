import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { data } from "../../contents/contact";
import { useDataContext } from "../../context/dataContext";

function Contact() {
    const { isNonMobile } = useDataContext();
    const [isMouseEnter, setMouseEnter] = useState({});

    return (
        <section className={`${!isNonMobile ? "pl-3" : ""} flex items-end pb-10 mb-10 lg:pb-0`}>
            <div className="flex -translate-x-3">
                {
                    data.map(({ section, link, icon }) => (
                        <div key={section} className="px-3" onMouseEnter={() => setMouseEnter({ [section]: true })} onMouseLeave={() => setMouseEnter({ [section]: false })}>
                            <a className="text-gray-500" href={link} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={icon} className={`${isMouseEnter[section] ? "text-primaryTitle scale-110" : "scale-90"} text-3xl transition-all`} />
                            </a>
                        </div>
                    ))
                }
            </div>
        </section>
    );
}

export default Contact;
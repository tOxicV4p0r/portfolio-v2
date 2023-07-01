import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { data } from "../../contents/contact";
import useMediaQuery from "../../hook/useMediaQuery";

function Contact() {
    const isNonMobile = useMediaQuery("(min-width:1024px)");
    const [isMouseEnter, setMouseEnter] = useState({});

    return (
        <section className={`${!isNonMobile?"pl-3":""} flex items-end pb-10 mb-10 lg:pb-0`}>
            <div className="flex">
                {
                    data.map(({ section, title, link, icon }) => (
                        <div key={section} className="px-3 -translate-x-3" onMouseEnter={() => setMouseEnter({ [section]: true })} onMouseLeave={() => setMouseEnter({ [section]: false })}>
                            <a className="underline underline-offset-4 text-gray-500" href={link} alt={title} target="_blank" rel="noopener noreferrer">
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
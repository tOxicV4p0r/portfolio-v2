import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data"

function Header({ isNonMobile = true }) {
    const [isMouseEnter, setMouseEnter] = useState(false)

    return (
        <section className={`${!isNonMobile ? "pl-3" : ""}`}>
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
                    className="px-5 py-3 text-sm rounded-md bg-primaryTitle text-primaryHeader hover:bg-primarySubTitle"
                    href={data.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="pr-2">{data.btnText}</span>
                    <FontAwesomeIcon
                        icon={faArrowDown}
                        className="motion-safe:animate-bounce"
                    />
                </a>
            </div>
        </section>
    );
};

export default Header;
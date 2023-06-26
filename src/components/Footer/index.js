import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "./data"

function Footer() {

    return (
        <section className="space-y-5 mb-10">
            <div className="flex justify-end text-sm">
                <span className="text-primarySubContent1">{data.descriptions} {data.title} </span>
                <a href={data.link} className="px-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </section>
    )
};

export default Footer;
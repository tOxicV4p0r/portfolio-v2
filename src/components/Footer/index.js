import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const data = {
    title: "",
    descriptions: "Powered by React.js and Tailwind",
    link: "https://github.com/tOxicV4p0r/portfolio-v2",
}

function Footer() {

    return (
        <section className="space-y-5 mb-10">
            <div className="flex justify-end">
                <span className="text-primarySubContent1">{data.descriptions} {data.title} </span>
                <a href={data.link} className="px-3" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
            </div>
        </section>
    )
};

export default Footer;
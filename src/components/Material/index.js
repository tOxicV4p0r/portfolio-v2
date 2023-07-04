import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Material = ({ data, isHighlight, index }) => {

    return (
        <a
            className={`${isHighlight ? 'text-primarySubTitle' : 'text-primaryContent'}`}
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <FontAwesomeIcon
                icon={data.type}
                className={`${index > 0 ? "px-4" : "pr-2"} text-lg hover:scale-125 transition-all`}
            />
        </a>
    )
}

export default Material;
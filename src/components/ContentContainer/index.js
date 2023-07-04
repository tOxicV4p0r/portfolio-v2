import { useEffect, useState } from "react";

// import useMediaQuery from "../../hook/useMediaQuery";
import Description from "../Description";
import FormattedDate from "../FormattedDate";
import Material from "../Material";
import Picture from "../Picture";
import Tech from "../Tech";
import TitleLink from "../TitleLink";

const ContentContainer = ({
    onInitial,
    title: sectionTitle = "",
    data = [],
    stateWatchOnHover,
    pictureClassName,
}) => {
    const [isMouseEnter, setMouseEnter] = useState({});

    const id = `${sectionTitle.split(' ').join('')}-section`;

    useEffect(() => {
        onInitial(id);

    }, []); // eslint-disable-line

    return (
        <section className="space-y-5 scroll-mt-14" id={id} >
            <span className="text-primaryHeader pl-3" id={`${id}-title`}>{sectionTitle}</span>
            <div className="grid">
                {
                    data.map(({
                        date = "",
                        title = "",
                        link = "",
                        picture = "",
                        materials = [],
                        descriptions = [],
                        skills = [],
                    }, index) => (
                        <div
                            id={`${id}-${title.split(' ').join('')}-${index}`}
                            key={`${id}-${title.split(' ').join('')}-${index}`}
                            className={`${`${id}-${title.split(' ').join('')}-${index}` === stateWatchOnHover ? "bg-primarySubContent2/[0.2] rounded-xl" : ""} grid grid-cols-[25%_75%] p-2 py-7 mx-1 hover:bg-primarySubContent2/[0.2] hover:rounded-xl`}
                            onMouseEnter={() => setMouseEnter({ [`${title}-${index}`]: true })}
                            onMouseLeave={() => setMouseEnter({ [`${title}-${index}`]: false })}
                        >
                            <div className="text-primarySubContent1 space-y-4">
                                <FormattedDate isHighlight={isMouseEnter[`${title}-${index}`] || `${id}-${title.split(' ').join('')}-${index}` === stateWatchOnHover}>{date}</FormattedDate>
                                {picture ? <Picture title={title} picture={picture} className={pictureClassName} /> : null}
                            </div>
                            <div className="pl-2">
                                <div className="flex flex-col space-y-4">
                                    <TitleLink
                                        link={link}
                                        title={title}
                                        isHighlight={isMouseEnter[`${title}-${index}`] || `${id}-${title.split(' ').join('')}-${index}` === stateWatchOnHover}
                                    />
                                    {
                                        materials.length > 0 ?
                                            <div>
                                                {
                                                    materials.map((e, i) => (
                                                        <Material
                                                            key={`${id}-material-${i}`}
                                                            index={i}
                                                            isHighlight={isMouseEnter[`${title}-${index}`]} data={e}
                                                        />
                                                    ))
                                                }
                                            </div> : null
                                    }
                                    {
                                        descriptions.map((e, i) => (
                                            <Description
                                                key={`${id}-descriptions-${i}`}
                                                data={e}
                                                truncate
                                            />
                                        ))
                                    }
                                    {
                                        skills.map((e, i) => (
                                            <Tech
                                                key={`${id}-skill-${i}`}
                                                data={e}
                                                isHighlight={isMouseEnter[`${title}-${index}`] || `${id}-${title.split(' ').join('')}-${index}` === stateWatchOnHover}
                                            />
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section >
    )
}

export default ContentContainer;
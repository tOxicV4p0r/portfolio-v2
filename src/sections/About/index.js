import { useEffect } from "react";

function About({
    onInitial,
    title: sectionTitle = "",
    description = "",
    stateWatchOnHover
}) {
    const id = `${sectionTitle.split(' ').join('')}-section`;

    useEffect(() => {
        onInitial(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="space-y-5 scroll-mt-14" id={id}>
            <div className="flex items-center mx-3 text-primarySubTitle">
                <span className={`bg-white h-[1px] inline-block duration-500 ease-out ${stateWatchOnHover.indexOf(id) > -1 ? "pr-10 mr-2" : "pr-0"}`}></span>
                <span className={`${stateWatchOnHover.indexOf(id) > -1 ? "text-primaryHeader":"text-primarySubContent1"}`} id={`${id}-title`}>{sectionTitle}</span>
            </div>
            <div className="text-primaryContent pl-3">
                <span>{description}</span>
            </div>
        </section>
    );
}

export default About;
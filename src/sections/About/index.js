import { useEffect } from "react";

function About({
    onInitial,
    title: sectionTitle = "",
    description = "",
}) {
    const id = `${sectionTitle.split(' ').join('')}-section`;

    useEffect(() => {
        onInitial(id);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <section className="space-y-5 scroll-mt-14" id={id}>
            <span className="text-primaryHeader pl-3" id={`${id}-title`}>{sectionTitle}</span>
            <div className="text-primaryContent pl-3">
                <span>{description}</span>
            </div>
        </section>
    );
}

export default About;
import { data } from "../../contents/about";

function About({ detail }) {
    const { sectionId: id, title } = detail;

    return (
        <section className="space-y-5 scroll-mt-14" id={id}>
            <span className="text-primaryHeader pl-3">{title}</span>
            <div className="text-primaryContent pl-3">
                <span>{data.txt}</span>
            </div>
        </section>
    );
}

export default About;
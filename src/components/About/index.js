import { data } from "./data"

function About({ detail }) {
    const { sectionId: id, title } = detail;

    return (
        <section className="space-y-5" id={id}>
            <span className="text-primaryHeader pl-3">{title}</span>
            <div className="text-primaryContent pl-3">
                <span>{data.txt}</span>
            </div>
        </section>
    );
};

export default About;
import { data } from "./data"

function About() {

    return (
        <section className="space-y-5" id="about-section">
            <span className="text-primaryHeader pl-3">About</span>
            <div className="text-primaryContent pl-3">
                <span>{data.txt}</span>
            </div>
        </section>
    );
};

export default About;
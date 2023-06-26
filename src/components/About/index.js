const data = {
    txt: `
    Driven by a deep passion for technology, I undertook a journey of self-study and career transition. With a strong foundation in computer science, extensive knowledge of web development technologies, and growing expertise in blockchain, I am actively seeking opportunities to make a meaningful impact as a developer in the ever-evolving world of technology`,
}

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
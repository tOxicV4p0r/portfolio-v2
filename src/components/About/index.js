const data = {
    txt: `
    Driven by a deep passion for technology, I undertook a journey of self-study and career transition. With a strong foundation in computer science, extensive knowledge of web development technologies, and growing expertise in blockchain, I am actively seeking opportunities to make a meaningful impact as a developer in the ever-evolving world of technology`,
}

function About() {

    return (
        <div className="space-y-2">
            <span>About</span>
            <div className="text-gray-400 hover:text-gray-300">
                <span>{data.txt}</span>
            </div>
        </div>
    );
};

export default About;
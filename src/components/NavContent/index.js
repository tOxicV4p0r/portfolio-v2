function NavContent({ data, section }) {
    const handleClick = (anchor) => {
        const id = `${anchor}-section`;
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    }

    return (
        <section className="space-y-5">
            <div className="">
                {
                    data.sections.map((e, i) => (
                        <div
                            key={i}
                            onClick={() => handleClick(e.sectionId)}
                            className={`${section == e.sectionId ? "text-white" : ""}`}
                        >
                            {e.title}
                        </div>
                    ))
                }
            </div>
        </section>
    )
};

export default NavContent;
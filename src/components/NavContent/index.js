const data = {
    title: "",
    descriptions: "Powered by React.js and Tailwind",
}

function NavContent() {

    return (
        <section className="space-y-5">
            <div className="">
                <span className="text-primarySubContent1">{data.descriptions} {data.title}</span>
            </div>
        </section>
    )
};

export default NavContent;
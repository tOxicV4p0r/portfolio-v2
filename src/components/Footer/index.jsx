const data = {
    title: "",
    descriptions: "Powered by React.js and Tailwind",
}

function Footer() {

    return (
        <section className="space-y-5">
            <div className="flex justify-end">
                <span className="text-primarySubContent1">{data.descriptions} {data.title}</span>
            </div>
        </section>
    )
};

export default Footer;
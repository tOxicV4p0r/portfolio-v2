import ProfilePic from "../../asset/profilepixel.png"

const data = {
    name: "Kraisorn Deelert",
    title: "Software Developer | between jobs",
    degree: "CPE | Mahanakorn University",
    contact: "k.deelert@gmail.com",
}

function Header() {
    return (
        <section>
            <div className="text-2xl md:text-3xl font-medium text-primaryTitle">{data.name}</div>
            <div className="space-x-2 font-medium underline underline-offset-4 decoration-primarySubContent2 text-primaryHeader">
                <span className="truncate">{data.title}</span>
            </div>
            <div className="text-primaryContent font-bold text-sm">{data.degree}</div>
            <div className="text-primaryContent font-bold text-sm">{data.contact}</div>
        </section>
    );
};

export default Header;
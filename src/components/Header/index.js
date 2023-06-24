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
            <div className="text-2xl md:text-3xl font-medium">{data.name}</div>
            <div className="space-x-2 text-gray-400 hover:text-gray-300 font-medium underline underline-offset-4 decoration-gray-700">
                <span className="truncate">{data.title}</span>
            </div>
            <div className="text-gray-500 hover:text-gray-400 font-bold text-sm">{data.degree}</div>
            <div className="text-gray-500 hover:text-gray-400 font-bold text-sm">{data.contact}</div>
        </section>
    );
};

export default Header;
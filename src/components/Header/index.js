import ProfilePic from "../../asset/profilepixel.png"

const data = {
    name: "Kraisorn Deelert",
    title: "Fullstack Developer • Crypto Maxi",
    degree: "CPE | Mahanakorn University",
    contact: "k.deelert@gmail.com",
}

function Header() {
    return (
        <div className="grid grid-cols-8">
            <div className="col-span-2 self-center mx-auto sm:mx-0">
                <img src={ProfilePic} alt="me" className="h-20 sm:h-28 rounded-full" />
            </div>
            <div className="col-span-6 self-center">
                <div className="text-xl font-medium">{data.name}</div>
                <div className="space-x-2 text-gray-400 hover:text-gray-300 font-medium underline underline-offset-4 decoration-gray-700">
                    <span className="truncate">{data.title}</span>
                </div>
                <div className="text-gray-500 hover:text-gray-400 font-bold text-sm">{data.degree}</div>
                <div className="text-gray-500 hover:text-gray-400 font-bold text-sm">{data.contact}</div>
            </div>
        </div>
    );
};

export default Header;
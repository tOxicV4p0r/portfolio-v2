const data = {
    text: "Download Resume",
    link: "https://raw.githubusercontent.com/tOxicV4p0r/Resume/main/resume.pdf",
}

function Nav() {
    return (
        <div>
            <div className="fixed left-0 top-0 p-4">
                <img className="h-10 rounded-full" src="https://i.seadn.io/gcs/files/68de9d09c2e406c342f2321fb0294361.gif?auto=format&dpr=1&w=1000" alt="The Potatoz" />
            </div>
            <div className="float-right p-4">
                <a className="px-2 py-1 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-semibold rounded-md shadow-lg focus:outline-none" href={data.link} target="_blank" rel="noopener noreferrer">{data.text}</a>
            </div>
        </div>
    );
};

export default Nav;
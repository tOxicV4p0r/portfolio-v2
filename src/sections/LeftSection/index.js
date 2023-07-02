import Contact from "../Contact";
import Header from "../Header";
import NavContent from "../NavContent";

const LeftSection = ({ navBarItems, currectSection }) => {
    return (
        <div>
            <div className="sticky top-14 lg:h-[90vh] grid grid-cols-1 grid-rows-[70%_30%] gap-6 lg:grid-rows-[3fr_35%_20%] lg:gap-14">
                <Header />
                <NavContent sections={navBarItems} currentSection={currectSection} />
                <Contact />
            </div>
        </div>
    )
}

export default LeftSection;
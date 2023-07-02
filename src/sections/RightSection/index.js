import ContentContainer from "../../components/ContentContainer";
import { data as aboutData } from "../../contents/about";
import { data as certificationData } from "../../contents/certification";
import { data as experienceData } from "../../contents/experience";
import { data as projectData } from "../../contents/project";
import useRSSQuery from "../../hook/useRSSQuery";
import About from "../About";
import Footer from "../Footer";

const RightSection = ({ onInitial, currectSection }) => {
    const articleData = useRSSQuery();

    return (
        <>
            <About
                onInitial={onInitial}
                title="About"
                description={aboutData.description}
            />
            {/* <Skill /> */}
            <ContentContainer
                onInitial={onInitial}
                title="Experience"
                data={experienceData}
                stateWatchOnHover={currectSection}
            />
            <ContentContainer
                onInitial={onInitial}
                title="Project"
                data={projectData}
                stateWatchOnHover={currectSection}
            />
            <ContentContainer
                onInitial={onInitial}
                title="Article"
                data={articleData}
                stateWatchOnHover={currectSection}
            />
            <ContentContainer
                onInitial={onInitial}
                title="Certification"
                data={certificationData}
                stateWatchOnHover={currectSection}
                pictureClassName="w-3/6 bg-primaryContent"
            />
            <Footer />
        </>
    )
}

export default RightSection;
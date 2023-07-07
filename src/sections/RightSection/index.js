import ContentContainer from "../../components/ContentContainer";
import { data as aboutData } from "../../contents/about";
import { data as certificationData } from "../../contents/certification";
import { data as experienceData } from "../../contents/experience";
import { data as projectData } from "../../contents/project";
import useRSSQuery from "../../hook/useRSSQuery";
import About from "../About";
import Footer from "../Footer";

const RightSection = ({ onInitial, currectSection, scrollId }) => {
    const articleData = useRSSQuery('https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40KDeelert');

    return (
        <div id={scrollId} className="w-full grid gap-32 lg:gap-40">
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
                pictureClassName="w-4/6 bg-primaryContent"
            />
            <Footer />
        </div>
    )
}

export default RightSection;
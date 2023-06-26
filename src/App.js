import { useEffect, useState } from "react";
import useMediaQuery from "./hook/useMediaQuery";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header"
import NavContent from "./components/NavContent";
import SideProject from "./components/SideProject";
// import Skill from "./components/Skill";

const OFFSET_Y = 79;
const data = {
  title: "",
  descriptions: "Powered by React.js and Tailwind",
  sections: [
    { title: "About", sectionId: "about" },
    { title: "Experience", sectionId: "experience" },
    { title: "Project", sectionId: "sideproject" },
    { title: "Certification", sectionId: "certification" },
  ]
}

function App() {
  const isNonMobile = useMediaQuery("(min-width:1024px)")
  const [currectSection, setCurrectSection] = useState(data.sections[0].sectionId);
  const [sectionIds, setSectionId] = useState([]);

  // set components ID at mounted time
  const addSection = (sections) => {
    // use set to prevent duplicate, when dev mode component loaded twice
    setSectionId((prev) => [...new Set([...prev, ...sections])]);
  }

  // when desktop mode, can scroll only right column
  const handleScroll = (e) => {

    for (let i = 0; i < data.sections.length; i++) {
      const el = data.sections[i];
      const offetTop = document.getElementById(`${el.sectionId}-section`).getBoundingClientRect().top;
      const height = document.getElementById(`${el.sectionId}-section`).getClientRects()[0].height;
      const rootHeight = document.getElementById('root').getClientRects()[0].height * 0.4;

      if (offetTop <= OFFSET_Y) {
        if (offetTop + (height / 2) > OFFSET_Y) {
          setCurrectSection(el.sectionId);
        }
      } else if (offetTop > OFFSET_Y && offetTop < rootHeight) {
        setCurrectSection(el.sectionId);
      }
    }

  }

  // when mobile mode, scroll from window
  const handleWindowScroll = () => {
    for (let i = 0; i < sectionIds.length; i++) {
      const el = sectionIds[i];
      const offetTop = document.getElementById(`${el}`).getBoundingClientRect().top;
      const height = document.getElementById(`${el}`).getClientRects()[0].height;
      const viewHeight = document.documentElement.clientHeight * 0.45;

      if (offetTop <= viewHeight) {
        if (offetTop + (height * 0.5) > viewHeight) {
          setCurrectSection(el);
        }
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);

    return () => window.removeEventListener('scroll', handleWindowScroll);
    // eslint-disable-next-line
  }, [sectionIds]);

  return (
    <main className="max-w-6xl mx-auto">
      <div className="px-5 pb-7 pt-14 font-poppins tracking-wide block lg:flex h-screen">
        <div className="w-full lg:w-5/6 grid gap-10 pb-10 lg:pb-0">
          <Header isNonMobile={isNonMobile} />
          {isNonMobile && <NavContent data={data} section={currectSection} />}
          <Contact isNonMobile={isNonMobile} />
        </div>
        <div className="w-full overflow-y-scroll no-scrollbar grid gap-32 lg:gap-40" onScroll={handleScroll}>
          <About />
          {/* <Skill /> */}
          <Experience isNonMobile={isNonMobile} section={currectSection} addSection={addSection} />
          <SideProject isNonMobile={isNonMobile} section={currectSection} addSection={addSection} />
          <Certificate isNonMobile={isNonMobile} section={currectSection} addSection={addSection} />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;

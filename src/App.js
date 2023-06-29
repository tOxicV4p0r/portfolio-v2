import { useEffect, useState } from "react";

import About from "./components/About";
import Certification from "./components/Certification";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavContent from "./components/NavContent";
import Project from "./components/Project";
// import Skill from "./components/Skill";
import useMediaQuery from "./hook/useMediaQuery";

const SCROLL_SECTION_ID = "content-section";

const data = {
  sections: [
    { title: "About", sectionId: "about-section" },
    { title: "Experience", sectionId: "experience-section" },
    { title: "Project", sectionId: "sideproject-section" },
    { title: "Certification", sectionId: "certification-section" },
  ]
};

function App() {
  const isNonMobile = useMediaQuery("(min-width:1024px)");
  const [currectSection, setCurrectSection] = useState(data.sections[0].sectionId);
  const [sectionIds, setSectionId] = useState([]);

  // set components ID at mounted time
  const addSection = (sections) => {
    // use set to prevent duplicate, when dev mode component loaded twice
    setSectionId((prev) => [...new Set([...prev, ...sections])]);
  };

  // when desktop mode, can scroll only right column
  const handleScroll = () => {
    try {
      const firstOffetTop = document.getElementById(SCROLL_SECTION_ID).getBoundingClientRect().top;

      for (let i = 0; i < data.sections.length; i++) {
        const el = data.sections[i];
        const elementOffetTop = document.getElementById(el.sectionId).getBoundingClientRect().top;
        const height = document.getElementById(el.sectionId).getClientRects()[0].height;
        const rootHeight = document.getElementById('root').getClientRects()[0].height * 0.4;

        if (elementOffetTop <= firstOffetTop) {
          if (elementOffetTop + (height / 2) > firstOffetTop) {
            setCurrectSection(el.sectionId);
          }
        } else if (elementOffetTop > firstOffetTop && elementOffetTop < rootHeight) {
          setCurrectSection(el.sectionId);
        }
      }
    } catch (e) { /* empty */ }
  };

  // when mobile mode, scroll from window
  const handleWindowScroll = () => {
    try {
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
    } catch (e) { /* empty */ }
  };

  const handleWheel = (e) => {
    const offSet = document.getElementById(SCROLL_SECTION_ID).getBoundingClientRect().top;
    const firstOffetTop = document.getElementById(data.sections[0].sectionId).getBoundingClientRect().top - offSet;
    const startPosition = Math.abs(firstOffetTop);
    document.getElementById(SCROLL_SECTION_ID).scroll(0, startPosition + e.deltaY);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleWindowScroll);
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('scroll', handleWindowScroll);
      window.removeEventListener('wheel', handleWheel);
    }
    // eslint-disable-next-line
  }, [sectionIds]);

  return (
    <main className="max-w-6xl mx-auto" >
      <div className="px-5 pb-7 pt-14 font-poppins tracking-wide block lg:flex h-screen">
        <div className="w-full lg:w-5/6 grid gap-10 pb-10 lg:pb-0">
          <Header />
          {isNonMobile ? <NavContent data={data} section={currectSection} scrollSectionId={SCROLL_SECTION_ID} fisrtSectionOfScroll={data.sections[0].sectionId} /> : null}
          <Contact />
        </div>
        <div id={SCROLL_SECTION_ID} className="w-full overflow-y-scroll no-scrollbar grid gap-32 lg:gap-40" onScroll={handleScroll}>
          <About
            detail={data.sections[data.sections.findIndex(e => e.title === "About")]}
          />
          {/* <Skill /> */}
          <Experience
            detail={data.sections[data.sections.findIndex(e => e.title === "Experience")]}
            section={currectSection}
            addSection={addSection}
          />
          <Project
            detail={data.sections[data.sections.findIndex(e => e.title === "Project")]}
            section={currectSection}
            addSection={addSection}
          />
          <Certification
            detail={data.sections[data.sections.findIndex(e => e.title === "Certification")]}
            section={currectSection}
            addSection={addSection}
          />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;

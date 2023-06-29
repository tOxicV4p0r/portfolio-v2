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

  const handleScroll = () => {

    try {
      // windows mode
      if (isNonMobile) {

        for (let i = 0; i < data.sections.length; i++) {
          const el = data.sections[i];
          const elementOffetTop = document.getElementById(el.sectionId).getClientRects()[0].top;
          const height = document.getElementById(el.sectionId).getClientRects()[0].height;
          const viewHeight = window.screen.height * 0.3;

          if (elementOffetTop <= 0) {
            if (elementOffetTop + height > viewHeight) {
              setCurrectSection(el.sectionId);
            }
          } else if (elementOffetTop > 0 && elementOffetTop < viewHeight) {
            setCurrectSection(el.sectionId);
          }
        }

      } else {
        // mobile mode

        for (let i = 0; i < sectionIds.length; i++) {
          const el = sectionIds[i];
          const elementOffetTop = document.getElementById(el).getClientRects()[0].top;
          const height = document.getElementById(el).getClientRects()[0].height;
          const viewHeight = window.screen.height * 0.4;

          if (elementOffetTop <= viewHeight) {
            if (elementOffetTop + (height * 0.5) > viewHeight) {
              setCurrectSection(el);
            }
          }
        }

      }

    } catch (e) {/* empty */ }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [isNonMobile]);// eslint-disable-line

  return (
    <main className="max-w-6xl mx-auto" >
      <div className="grid lg:grid-cols-[2fr_3fr] px-5 pb-7 pt-14 font-poppins tracking-wide">
        <div>
          <div className="sticky top-14 lg:h-[90vh] flex flex-col justify-between gap-14">
            <Header />
            {isNonMobile ? <NavContent data={data} section={currectSection} /> : null}
            <Contact />
          </div>
        </div>
        <div id={SCROLL_SECTION_ID} className="w-full no-scrollbar grid gap-32 lg:gap-40">
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

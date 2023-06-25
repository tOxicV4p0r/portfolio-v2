import { useState } from "react";
import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Nav from "./components/Nav";
import NavContent from "./components/NavContent";
import SideProject from "./components/SideProject";
import Skill from "./components/Skill";
import useMediaQuery from "./hook/useMediaQuery";

const OFFSET_Y = 56;
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
  const isLg = useMediaQuery("(min-width:1024px)")
  const [currectSection, setCurrectSection] = useState("");

  const handleScroll = () => {
    for (let i = 0; i < data.sections.length; i++) {
      const el = data.sections[i];
      const offetTop = document.getElementById(`${el.sectionId}-section`).getBoundingClientRect().top;
      const height = document.getElementById(`${el.sectionId}-section`).getClientRects()[0].height;
      const rootHeight = document.getElementById('root').getClientRects()[0].height * 0.4;
      console.log(el.sectionId, offetTop, height);
      if (offetTop <= OFFSET_Y) {
        if (offetTop + (height / 2) > OFFSET_Y) {
          setCurrectSection(el.sectionId)
          // console.log(el.sectionId)
        }
      } else if (offetTop > OFFSET_Y && offetTop < rootHeight) {
        setCurrectSection(el.sectionId)
      }
    }
  }

  return (
    <main className="max-w-5xl mx-auto">
      <div className="pt-14 pb-7 px-7 font-mono tracking-tighter block lg:flex h-screen">
        <div className="w-full lg:w-4/6 grid gap-6 pb-10 lg:pb-0">
          <Header />
          {isLg && <NavContent data={data} section={currectSection} />}
          <Contact />
        </div>
        <div className="w-full overflow-y-scroll no-scrollbar grid gap-32 lg:gap-64" onScroll={handleScroll}>
          <About />
          {/* <Skill /> */}
          <Experience />
          <SideProject />
          <Certificate />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default App;

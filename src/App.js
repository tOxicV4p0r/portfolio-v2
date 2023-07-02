import { useEffect, useState } from "react";

import useMediaQuery from "./hook/useMediaQuery";
import LeftSection from "./sections/LeftSection";
import RightSection from "./sections/RightSection";

const SCROLL_SECTION_ID = "content-section";

const App = () => {
  const isNonMobile = useMediaQuery("(min-width:1024px)");

  const [currectSection, setCurrectSection] = useState("");
  const [navBarItems, setNavBarItems] = useState([]);
  const [sectionIds, setSectionId] = useState([]);
  const [sectionChildIds, setSectionChildId] = useState([]);

  // set components ID at mounted time
  const addSectionIds = (sectionId) => {
    try {
      const elementId = document.getElementById(sectionId).id;
      const elementText = document.getElementById(`${sectionId}-title`).textContent;
      const obj = { title: elementText, sectionId: elementId };

      setNavBarItems((prev) => {
        if (prev.findIndex(e => e.title === obj.title) < 0) {
          return [...prev, obj];
        }
        return prev;
      });

      // use Set to prevent duplicates, when in dev mode the component is loaded twice.
      // parent section ID
      setSectionId((prev) => [...new Set([...prev, elementId])]);

      // child section ID
      const elementIds = [...document.getElementById(sectionId).querySelectorAll('[id]')].map(e => e.id);
      setSectionChildId((prev) => [...new Set([...prev, ...elementIds])]);
    } catch (e) { /* empty */ }
  };

  const handleScroll = () => {
    try {
      // windows mode
      if (isNonMobile) {

        for (let i = 0; i < sectionIds.length; i++) {
          const el = sectionIds[i];
          const elementOffetTop = document.getElementById(el).getClientRects()[0].top;
          const height = document.getElementById(el).getClientRects()[0].height;
          const viewHeight = window.screen.height * 0.3;

          if (elementOffetTop <= 0) {
            if (elementOffetTop + height > viewHeight) {
              setCurrectSection(el);
            }
          } else if (elementOffetTop > 0 && elementOffetTop < viewHeight) {
            setCurrectSection(el);
          }
        }

      } else {
        // mobile mode
        for (let i = 0; i < sectionChildIds.length; i++) {
          const el = sectionChildIds[i];
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
  }, [isNonMobile, sectionChildIds]); // eslint-disable-line

  useEffect(() => {
    if (navBarItems.length > 0) {
      setCurrectSection(navBarItems[0].sectionId);
    }

  }, [navBarItems]); // eslint-disable-line

  return (
    <main className="max-w-6xl mx-auto" >
      <div className="grid lg:grid-cols-[2fr_3fr] px-5 pb-7 pt-14 font-poppins tracking-wide">
        <LeftSection
          navBarItems={navBarItems}
          currectSection={currectSection}
        />
        <div id={SCROLL_SECTION_ID} className="w-full no-scrollbar grid gap-32 lg:gap-40">
          <RightSection
            onInitial={addSectionIds}
            currectSection={currectSection}
          />
        </div>
      </div>
    </main>
  );
}

export default App;

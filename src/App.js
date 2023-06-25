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

function App() {
  const isLg = useMediaQuery("(min-width:1024px)")

  return (
    <main className="max-w-5xl mx-auto">
      <div className="pt-14 pb-7 px-7 font-mono tracking-tighter block lg:flex h-screen">
        <div className="w-full lg:w-4/6 grid gap-6 pb-10 lg:pb-0">
          <Header />
          {isLg && <NavContent />}
          <Contact />
        </div>
        <div className="w-full overflow-y-scroll no-scrollbar grid gap-32">
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

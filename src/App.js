import About from "./components/About";
import Certificate from "./components/Certificate";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header"
import Nav from "./components/Nav";
import SideProject from "./components/SideProject";
import Skill from "./components/Skill";

function App() {
  return (
    <div>
      <Nav />
      <div className="max-w-xl mx-auto py-16 space-y-10 p-2 font-mono tracking-tighter">
        <Header />
        <About />
        <Skill />
        <Experience />
        <Certificate />
        <SideProject />
        <Contact />
      </div>
    </div>
  );
}

export default App;

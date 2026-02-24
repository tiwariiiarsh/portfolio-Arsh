import About from "./components/About/About";
import CustomCursor from "./components/BlobCursor";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";
import BlurBlob from "./components/BlurBlob";
const App = () => {
  return (
    <div className="bg-[#050414] relative overflow-hidden">

     <BlurBlob position={{ top: "5%", left: "17%" }} size={{ width: "500px", height: "500px" }} />
      {/* Global Custom Cursor */}
      <CustomCursor />
      <Navbar />
      <About />
      <Skills />
      <Work />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

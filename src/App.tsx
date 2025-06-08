import Business from "./components/Business";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Stats from "./components/Stats";

function App() {
  return (
    <div className="bg-[#00040F] w-screen h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection/>
      <Stats/>
      <Business/>
    </div>
  );
}

export default App;

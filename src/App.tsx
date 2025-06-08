import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg-black w-screen h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection/>
    </div>
  );
}

export default App;

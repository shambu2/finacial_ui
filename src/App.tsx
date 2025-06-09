import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PaymentCard from "./components/PaymentCard";
import Stats from "./components/Stats";
import TestimonialCard from "./components/TestimonialCard";

function App() {
  return (
    <div className="bg-[#00040F] w-screen h-screen overflow-x-hidden">
      <Navbar />
      <HeroSection/>
      <Stats/>
      <Business/>
      <CardDeal/>
      <PaymentCard/>
      <TestimonialCard/>
    </div>
  );
}

export default App;

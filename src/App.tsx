import Business from "./components/Business";
import CardDeal from "./components/CardDeal";
import CompanyCards from "./components/CompanyCards";
import Cta from "./components/Cta";
import Footer from "./components/Footer";
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
      <CompanyCards/>
      <Cta/>
      <Footer/>
    </div>
  );
}

export default App;

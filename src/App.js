import Blog from "./components/Blog/Blog";
import DesignSite from "./components/DesignSite/DesignSite";
import Footer from "./components/Footer/Footer";
import FooterTop from "./components/Footer/FooterTop/FooterTop";
import HelpingSection from "./components/HelpingSection/HelpingSection";
import HeroSection from "./components/HeroSection/HeroSection";
import ManageCommunity from "./components/ManageCommunity/ManageCommunity";
import Navbar from "./components/Navbar/Navbar";
import OurClients from "./components/OurClients/OurClients";
import Tesla from "./components/Tesla/Tesla";
import Unseen from "./components/Unseen/Unseen";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <OurClients /> 
      <ManageCommunity />
      <Unseen />
      <HelpingSection/>
      <DesignSite />
      <Tesla />
      <Blog />
      <FooterTop />
      <Footer />
    </div>
  );
}

export default App;

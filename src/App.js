import HeroSection from "./HeroSection/HeroSection";
import DesignSite from "./components/DesignSite/DesignSite";
import HelpingSection from "./components/HelpingSection/HelpingSection";
import ManageCommunity from "./components/ManageCommunity/ManageCommunity";
import Navbar from "./components/Navbar/Navbar";
import OurClients from "./components/OurClients/OurClients";
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
    </div>
  );
}

export default App;

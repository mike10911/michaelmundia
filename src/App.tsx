import React from "react";
import { StyledAppContainer } from "./App.styles";
import AboutSection from "./components/about-section/AboutSection";
import ConnectSection from "./components/connect-section/ConnectSection";
import ExperienceSection from "./components/experience-section/ExperienceSection";
import Footer from "./components/footer/Footer";
import LandingPage from "./components/landing-page/LandingPage";
import NavBar from "./components/nav-bar/NavBar";
import SkillsSection from "./components/skills-section/SkillsSection";

function App() {
  return (
    <StyledAppContainer>
      <NavBar />
      <LandingPage />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ConnectSection />
      <Footer />
    </StyledAppContainer>
  );
}

export default App;

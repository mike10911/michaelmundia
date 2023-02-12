import React from "react";
import { StyledAppContainer } from "./App.styles";
import AboutSection from "./components/about-section/AboutSection";
import LandingPage from "./components/landing-page/LandingPage";
import NavBar from "./components/nav-bar/NavBar";

const startupAudio = new Audio('/startup.mp3');
startupAudio.play();
function App() {
  return (
    <StyledAppContainer>
      <audio id="audio" loop autoPlay> 
        <source src="/startup.mp3" type="audio/mpeg"/>
      </audio>
      <NavBar/>
      <LandingPage/>
      <AboutSection/>
    </StyledAppContainer>
  );
}

export default App;

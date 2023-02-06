import React from "react";
import { StyledAppContainer } from "./App.styles";
import LandingPage from "./components/landing-page/LandingPage";
import NavBar from "./components/nav-bar/NavBar";

function App() {
  return (
    <StyledAppContainer>
      <NavBar/>
      <LandingPage/>
    </StyledAppContainer>
  );
}

export default App;

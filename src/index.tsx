import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraBaseProvider } from "@chakra-ui/react";

const startupAudio = new Audio("./startup.mp3");
startupAudio.play();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(

    <React.StrictMode>
      <App />
    </React.StrictMode>

);

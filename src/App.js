import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import HomePageComponent from "./Components/HomePageComponent";
import FooterPageComponent from "./Components/FooterPageComponent";
import MainPageComponent from "./Components/MainPageComponent";

function App() {
  return (
    <ChakraProvider>
      <MainPageComponent />
      <FooterPageComponent />
    </ChakraProvider>
  );
}

export default App;

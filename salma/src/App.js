import "./App.css";
import Navbar from "./components/nav/navbar";
import Intro from "./components/intro/introd";
import Service from "./components/Services/Service";
import Experience from "./components/Experiences/Experience";
import Portfolio from "./components/Portfolios/Portfolio";
import Contact from "./components/Contacts/Contact";
import Footer from "./components/Footer/Footer";
import { themeContext } from "./Context.js";
import { useContext } from "react";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Service />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

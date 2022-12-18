import React, { useState } from "react";
// import logo from './logo.svg';
import "./App.css";
import About from "./components/About";
import ContactForm from "./components/Contact";
// import Footer from "./components/Footer";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
// import Project from "./components/Project";
import Resume from "./components/Resume";

function App() {
  const [currentTab, setCurrentTab] = useState("about");

  const displayTab = () => {
    switch (currentTab) {
      case "about":
        return <About />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <ContactForm />;
      case "resume":
        return <Resume />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
      <main>{displayTab()}</main>
      <div>{/* <Footer></Footer> */}</div>
    </div>
  );
}

export default App;

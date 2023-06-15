import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import InformationSection from "./components/InformationSection";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Quizzes from "./components/Quizzes";
import InformationEc from "./components/InformationEc";

function App() {
  return (<div>
    <Header />
    <Home /> 
    <InformationSection />   
    <About />
    <Quizzes />
    <InformationEc />
    <ContactUs />
    <Footer />
  </div>);
}

export default App;
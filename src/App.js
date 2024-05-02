import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
// import React from 'react';
import Aboutme from "./components/AboutMe/aboutme"; 
import Skills from "./components/Skills/skills";
import Portfolio from "./components/Portfolio/portfolio";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

// import Socialmediaicons from "./components/Socialmediaicons/socialmediaicons";
// import Footer from "./footer";
function App() {
  return (
    <div className="App">
      <Navbar/>
  <Intro/>
  <Aboutme/>
 <Skills/>
 <Portfolio/>
 <Contact/>
 {/* <Socialmediaicons/> */}
  <Footer/>
    </div>
  );
}

export default App;

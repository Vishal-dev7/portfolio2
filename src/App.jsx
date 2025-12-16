 import About from "./components/about";
 import Contact from "./components/contact";
 import Home from "./components/home";
 import Skills from "./comps/skills"
 import { BrowserRouter , Routes , Route } from 'react-router-dom';
 import Tools from "./comps/tools";
 import AOS from 'aos';
 import Projects from "./comps/projects";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import CardRotate from "./comps/card.jsx";
import VantaBackground from "./comps/vanta";
import ContactTerminal from "./comps/touch";
import Touch from "./comps/touch";
AOS.init();

function App() {
  

  return (
    <div>
      
  <div className="containeres"id="">
  
  {/* <BrowserRouter>
  <Routes>
      <Route path="#home" element={<Home />}/> 
     <Route path="#about" element={<About />}/> 
    <Route path="#contact" element={<Contact />}/>    
  </Routes>
  </BrowserRouter>  */}
  <Home id="home"/>
  <CardRotate/>

  <About id="about"/> 
   <Skills />
  <Tools />
  
  <Contact id="contact"/>
{/*➜ <Toolslide/> ✅*/}
 {/* <Touch/> */}
   {/* <Projects/> */}
 {/* <TerminalContactForm/> */}</div>
   </div>
  );
}

export default App


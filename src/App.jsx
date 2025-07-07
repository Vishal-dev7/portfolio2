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
      
  <div className=""id="vanta">
  
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home  class="bg-[url(./img/grid1.avif)]"/>}/>
    <Route path="#about" element={<About />}/> 
    <Route path="#contact" element={<Contact />}/>   
  </Routes>
  </BrowserRouter> </div>
  <CardRotate/>
  {/* <Projects/> */}
  <About id="about"/> 
   <Skills />
  <Tools />
  {/* <TerminalContactForm/> */}
  <Contact id="contact"/>
{/*➜ <Toolslide/> ✅*/}
 {/* <Touch/> */}
 
   </div>
  );
}

export default App


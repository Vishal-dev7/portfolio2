import React from 'react'
import Navbar from '../comps/navbar'
import aboutimg from '../img/about.png';
import heroImage from "../img/hero.jpg";


const About = () => {
  
 
  return (
    
      
    <section id="about" className="w-full min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 lg:px-20 py-16">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold mb-4 text-center leading-tight">
        About <span className="text-violet-300">Me</span>
      </h1>

      {/* Subtitle */}
      <p className="text-base sm:text-lg text-gray-300 text-center max-w-2xl sm:max-w-3xl mb-6 sm:mb-8 px-2">
        Passionate developer building innovative solutions and solving real-world problems.
      </p>

      {/* Divider */}
      <div className="flex gap-2 items-center mb-8 sm:mb-10">
        <div className="w-2 h-2 bg-violet-300 rounded-full"></div>
        <div className="w-2 h-2 bg-violet-500 rounded-full"></div>
        <div className="w-2 h-2 bg-violet-300 rounded-full"></div>
      </div>

      {/* Description */}
      <p className="text-center text-gray-300 max-w-3xl sm:max-w-4xl leading-6 sm:leading-7 text-sm sm:text-base px-3">
        Hey there! 👋 I'm <span className="text-violet-400 font-semibold">Vishal R</span>, a BCA
         student passionate
        about building web applications that solve real-world problems. I've created projects like ResumeBuilder for
        generate CV from user requirements. With skills in React, JavaScript, Tailwind css, and C++, I love exploring
        new technologies, solving DSA problems, and working on AI-powered solutions.
      </p>

      {/* Button */}
      <button className="mt-8 sm:mt-10 bg-gradient-to-r from-purple-600 to-red-500 transition-all px-5 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-2 text-sm sm:text-base text-white shadow-lg shadow-blue-700/30 active:scale-95">
        🚀 I like to build smart solutions for future
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 pt-20 ">
    {/* card1    */}
<div class="container noselect  ">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div id="card">
      <div class="card-content">
        <div class="card-glare"></div>
        <div class="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        {/* <p id="prompt">HOVER ME</p> */}
        {/* <div class="title">CYBER<br />CARD</div> */}
        
        <div class="glowing-elements">
          <div class="glow-1"></div>
          <div class="glow-2"></div>
          <div class="glow-3"></div>
        </div>
        {/* <div class="subtitle">
          <span>INTERACTIVE</span>
          <span class="highlight">3D EFFECT</span>
        </div> */}
        <div class="flex my-5">
        <span><svg viewBox="-5.28 -5.28 34.56 34.56" class="w-10 h-10 ml-5" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-5.28" y="-5.28" width="34.56" height="34.56" rx="2.4192" fill="#3276c3" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5 21C5 17.134 8.13401 14 12 14C15.866 14 19 17.134 19 21M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#ffffff" stroke-width="1.6320000000000001" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
        <span class="mt-2.5 ml-2 font-semibold"><h2>Who I am</h2></span>
        </div>
        <ul class=" p-3 font-normal text-sm ml-4">
          <li class="mb-2">A web developer having interest in software engineering.</li>
           <li class="mb-2"> Enjoy solving problems and building scalable applications.</li>
              <li class="mb-2">Always learning new technologies to improve my skills.</li>
        </ul>
        <div class="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div class="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</div>
{/* card-2    */}
<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div id="card">
      <div class="card-content">
        <div class="card-glare"></div>
        <div class="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        {/* <p id="prompt">HOVER ME</p> */}
        {/* <div class="title">CYBER<br />CARD</div> */}
        <div class="glowing-elements">
          <div class="glow-1"></div>
          <div class="glow-2"></div>
          <div class="glow-3"></div>
        </div>
        {/* <div class="subtitle">
          <span>INTERACTIVE</span>
          <span class="highlight">3D EFFECT</span>
        </div> */}
         <div class="flex my-5">
        <span><svg fill="#ffffff" class="h-10 w-10 ml-5" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-51.2 -51.2 614.40 614.40" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-51.2" y="-51.2" width="614.40" height="614.40" rx="30.72" fill="#6144ca" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M468.32,53.08H43.68C19.595,53.08,0,72.675,0,96.76V415.24c0,24.085,19.595,43.68,43.68,43.68H468.32 c24.085,0,43.68-19.595,43.68-43.68V96.76C512,72.675,492.405,53.08,468.32,53.08z M495.413,415.24 c0,14.939-12.154,27.093-27.093,27.093H43.68c-14.939,0-27.093-12.154-27.093-27.093V140.441h478.825V415.24z M495.413,123.853 H16.587V96.76c0-14.939,12.154-27.093,27.093-27.093H468.32c14.939,0,27.093,12.154,27.093,27.093V123.853z"></path> </g> </g> <g> <g> <path d="M61.374,88.467h-8.847c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294h8.847 c4.58,0,8.294-3.713,8.294-8.294C69.667,92.18,65.954,88.467,61.374,88.467z"></path> </g> </g> <g> <g> <path d="M96.76,88.467h-8.847c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294h8.847 c4.58,0,8.294-3.713,8.294-8.294C105.054,92.18,101.341,88.467,96.76,88.467z"></path> </g> </g> <g> <g> <path d="M132.147,88.467H123.3c-4.58,0-8.294,3.713-8.294,8.294c0,4.58,3.713,8.294,8.294,8.294h8.847 c4.58,0,8.294-3.713,8.294-8.294C140.441,92.18,136.727,88.467,132.147,88.467z"></path> </g> </g> <g> <g> <path d="M134.321,291.387l57.148-65.312c3.016-3.448,2.666-8.687-0.781-11.704c-3.447-3.016-8.686-2.667-11.703,0.781 l-61.927,70.773c-2.736,3.127-2.736,7.796,0,10.923l61.927,70.773c1.64,1.873,3.937,2.832,6.245,2.832 c1.939,0,3.885-0.676,5.458-2.051c3.447-3.017,3.796-8.256,0.781-11.703L134.321,291.387z"></path> </g> </g> <g> <g> <path d="M394.942,285.923l-61.927-70.771c-3.017-3.447-8.256-3.796-11.703-0.781c-3.447,3.017-3.796,8.256-0.781,11.703 l57.148,65.312l-57.148,65.312c-3.017,3.448-2.667,8.686,0.781,11.703c1.574,1.377,3.52,2.051,5.458,2.051 c2.308,0,4.606-0.959,6.245-2.832l61.927-70.773C397.678,293.719,397.678,289.05,394.942,285.923z"></path> </g> </g> <g> <g> <path d="M294.606,204.123c-4.224-1.777-9.086,0.205-10.863,4.424L212.97,376.634c-1.777,4.222,0.203,9.084,4.424,10.863 c1.052,0.442,2.142,0.652,3.215,0.652c3.237,0,6.312-1.908,7.648-5.077l70.773-168.086 C300.808,210.764,298.827,205.9,294.606,204.123z"></path> </g> </g> </g></svg></span>
        <span class="mt-2.5 ml-2 font-semibold"><h2>What I Do</h2></span>
        </div>
        <ul class=" p-3 font-normal text-sm ml-4 ">
          <li  class="mb-2">Develop high-performance web apps using modern tech stacks.</li>
           <li class="mb-2">Solve algorithmic problems and optimize code efficiency.</li>
              <li class="mb-2">Contribute to open-source and follow industry trends.</li>
        </ul>
        <div class="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div class="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</div>
{/* card-3    */}
        <div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div id="card">
      <div class="card-content">
        <div class="card-glare"></div>
        <div class="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        {/* <p id="prompt">HOVER ME</p> */}
        {/* <div class="title">CYBER<br />CARD</div> */}
        <div class="glowing-elements">
          <div class="glow-1"></div>
          <div class="glow-2"></div>
          <div class="glow-3"></div>
        </div>
        {/* <div class="subtitle">
          <span>INTERACTIVE</span>
          <span class="highlight">3D EFFECT</span>
        </div> */}
        <div class="flex my-5">
        <span> <svg viewBox="-8.16 -8.16 40.32 40.32" class="ml-5 w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-8.16" y="-8.16" width="40.32" height="40.32" rx="4.032" fill="#2fac3e" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 8V5L19 2L20 4L22 5L19 8H16ZM16 8L12 11.9999M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2M17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7" stroke="#ffffff" stroke-width="1.752" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></span>
        <span class="mt-2.5 ml-2 font-semibold"><h2>My Goals</h2></span>
        </div>
        <ul class=" p-3 font-normal text-sm ml-4 ">
          <li  class="mb-2">Build tech products that solve real-world challenges at scale.</li>
           <li class="mb-2">Advance as a web developer with modern frameworks.</li>
              <li class="mb-2">Grow the dev community through open-source contributions.</li>
        </ul>
        <div class="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div class="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</div>
{/* card-4   */}
<div class="container noselect">
  <div class="canvas">
    <div class="tracker tr-1"></div>
    <div class="tracker tr-2"></div>
    <div class="tracker tr-3"></div>
    <div class="tracker tr-4"></div>
    <div class="tracker tr-5"></div>
    <div class="tracker tr-6"></div>
    <div class="tracker tr-7"></div>
    <div class="tracker tr-8"></div>
    <div class="tracker tr-9"></div>
    <div id="card">
      <div class="card-content">
        <div class="card-glare"></div>
        <div class="cyber-lines">
          <span></span><span></span><span></span><span></span>
        </div>
        {/* <p id="prompt">HOVER ME</p> */}
        {/* <div class="title">CYBER<br />CARD</div> */}
        <div class="glowing-elements">
          <div class="glow-1"></div>
          <div class="glow-2"></div>
          <div class="glow-3"></div>
        </div>
        {/* <div class="subtitle">
          <span>INTERACTIVE</span>
          <span class="highlight">3D EFFECT</span>
        </div> */}
        <div class="flex my-5">
          <span><svg fill="#ffffff" class="w-10 h-10 ml-5" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-26.38 -26.38 120.40 120.40" xml:space="preserve" stroke="#ffffff" stroke-width="0.40582199999999996"><g id="SVGRepo_bgCarrier" stroke-width="0"><rect x="-26.38" y="-26.38" width="120.40" height="120.40" rx="15.652000000000001" fill="#ff4500" strokewidth="0"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M40.303,63.148H28.333c-1.239,0-2.244,1.006-2.244,2.244c0,1.239,1.005,2.244,2.244,2.244h11.969 c1.238,0,2.244-1.005,2.244-2.244C42.547,64.154,41.541,63.148,40.303,63.148z"></path> <path d="M40.303,57.414H28.333c-1.239,0-2.244,1.005-2.244,2.244c0,1.24,1.005,2.244,2.244,2.244h11.969 c1.238,0,2.244-1.004,2.244-2.244C42.547,58.419,41.541,57.414,40.303,57.414z"></path> <path d="M33.819,0C20.516,0,9.693,10.822,9.693,24.125c0,7.787,6.428,16.992,11.818,23.343c2.736,3.226,3.719,4.751,4.064,5.39 c-0.014,0.102-0.021,0.207-0.021,0.313c0,1.239,1.004,2.244,2.244,2.244h13.002c0.012-0.001,0.021,0,0.031,0 c1.238,0,2.243-1.005,2.243-2.244c0-0.312-0.063-0.608-0.179-0.878c0.219-0.508,0.714-1.467,1.824-3.102 c0.912-1.34,1.89-2.725,2.882-4.129c5.084-7.201,10.341-14.647,10.341-20.938C57.944,10.822,47.123,0,33.819,0z M43.938,42.473 c-1.009,1.428-2,2.833-2.929,4.197c-1.196,1.761-1.981,3.134-2.4,4.256h-8.983c-0.715-1.402-2.146-3.363-4.691-6.363 c-6.934-8.166-10.751-15.426-10.751-20.438c0-10.828,8.809-19.637,19.637-19.637c10.827,0,19.638,8.809,19.638,19.637 C53.457,28.99,48.399,36.154,43.938,42.473z"></path> </g> </g> </g></svg></span>
        <span class="mt-2.5 ml-2 font-semibold"><h2>My Philosophy</h2></span>
        </div>
        <ul class=" p-3 font-normal text-sm ml-4 ">
          <li  class="mb-2">Technology should simplify lives, not complicate them.</li>
           <li class="mb-2">Great software solves problems, not just writes code.</li>
              <li class="mb-2">Continuous learning keeps you ahead in tech.</li>
        </ul>
        <div class="card-particles">
          <span></span><span></span><span></span> <span></span><span></span
          ><span></span>
        </div>
        <div class="corner-elements">
          <span></span><span></span><span></span><span></span>
        </div>
        <div class="scan-line"></div>
      </div>
    </div>
  </div>
</div>
      </div>
      
    </section>
  );
}
        


export default About;


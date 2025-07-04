import React from 'react'
import Navbar from '../comps/navbar'
import aboutimg from '../img/about.png';
import heroImage from "../img/hero.jpg";


const About = () => {
  
 
  return (
    <div id="about" class="bg-black ">
         
        <section class="overflow-hidden pb-13 pt-10 text-white ">
          <div>
            <h1 class="text-center font-semibold text-2xl sm:text-2xl xl:text-5xl mt-5 sm:mt-9">About me</h1>
            <div class="flex mt-5 mb-10">
              <div class="w-full sm:w-1/2 text-center justify-items-center my-auto  m-2  " data-aos="fade-up" data-aos-duration="1000">
              <div class="flex w-full  ml-5 ">
              <span class="mt-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 text-purple-500">
                   <path fill-rule="evenodd" d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z" clip-rule="evenodd" />
                  </svg>
              </span>
              <h1 class="text-xl ml-2 mt-2">Hello,I am Vishal</h1>
              </div>
              <h4 class="text-left sm:text-xl md:text-2xl lg:text-3xl text-xs md:pl-5 ml-3 mx-5 sm:mx-0 p-3">I am currently pursuing a Bachelor of Computer Applications (BCA) at SASTRA deemed to be university,with focused interest in frontend developement.I am passionate about creating responsie ,user-centric web interfaces that align with modern standards.</h4>
              </div>
              <div class="w-1/2 hidden sm:block justify-items-center">
                
              </div>
              


            </div>
          </div>
        </section>
        </div>
        
  )
  
}

export default About;


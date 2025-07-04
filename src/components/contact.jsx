import React from 'react'
import Navbar from '../comps/navbar'
import  { useState, useRef, useEffect } from "react";
const Contact = () => {
 const [step, setStep] = useState(1);
   const [form, setForm] = useState({ email: "", name: "", description: "" });
   const inputRef = useRef(null);
 
   const handleNext = () => {
     if (step === 1 && form.email.trim()) setStep(2);
     if (step === 2 && form.name.trim()) setStep(3);
     if (step === 3 && form.description.trim()) setStep(4);
   };
 
   const handleRestart = () => {
     setForm({ email: "", name: "", description: "" });
     setStep(1);
   };
 
  const handleSend = () => {
  alert("✅ Message started sending..!");

  const number = "+919342236148";
  const { name, email, description } = form;

  if (!name.trim() || !email.trim() || !description.trim()) {
    alert("Please fill out all fields.");
    return;
  }

  const text = `Hi dude, I'm ${name}. Contact me: ${email}. ${description}`;
  const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

  window.open(url, '_blank')?.focus();

  handleRestart(); // clear the form
};


  function wtsp() {
  

  let number = "+919342236148";
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let msg = document.getElementById('msg').value.trim();

  // Encode message properly
  let text = `Hi dude, I'm ${name}   Contact me: ${email}  ${msg}`;
  alert("wait");
  let url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  

  window.open(url, '_blank').focus();
}
   
  return (
    <div id="contact">
      <div className="min-h-screen bg-black bg-center flex items-center justify-center p-4 ">
      <div className="w-full max-w-6xl bg-gray-600 rounded-xl shadow-xl border border-black overflow-hidden xl:w-[60%] 2xl:w-[70%]">
        
        {/* Header */}
        <div className="bg-gray-900 text-white text-sm px-4 py-3 flex justify-between items-center font-mono 2xl:h-20">
          <span className="text-2xl 2xl:text-3xl">Get in touch today</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 2xl:w-7 2xl:h-7 bg-red-500 rounded-full" />
            <div className="w-3 h-3 2xl:w-7 2xl:h-7 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 2xl:w-7 2xl:h-7 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Body */}
        <div className="text-white font-mono px-6 py-8 space-y-6 text-base sm:text-lg leading-relaxed 2xl:text-2xl">
          <p className="text-sm sm:text-base 2xl:text-2xl">Hey there! We're excited to link 📎</p>
          <hr className="border-t border-dashed border-gray-500" />

         <div>
            <p>
              To start, could you give us your <span className="text-purple-300">email</span> ? 
            </p>
          
            {step > 1 ? (
              <p className="text-green-400 mt-1">✔ {form.email}</p>
            ) : (
              
              <input
                ref={inputRef}
                type="email"
                placeholder="your@email.com"
                required
       
              
                className="mt-2 w-full bg-transparent border-b border-gray-500 text-white outline-none py-1 text-base sm:text-lg 2xl:mt-2 2xl:text-2xl "
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
                id="email"
              /> 
            )}
          </div>

          {/* Step 2: Name */}
          
          {step >= 2 && (
            <div>
              <p>
                Awesome! And what's your <span className="text-purple-300">name</span>?
              </p>
              
              {step > 2 ? (
                <p className="text-green-400 mt-1">✔ {form.name}</p>
              ) : (
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Your name"
                  required 
                  autofocus
                  maxLength={20 }
                  className="mt-2 w-full bg-transparent border-b border-gray-500 text-white outline-none py-1 text-base sm:text-lg 2xl:text-2xl"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                  id="name"
                />
              )}</div>

            
          )}

          {/* Step 3: Description */}
          {step >= 3 && (
            <div>
              <p>Perfect, and how can we help you?</p>
               
              {step > 3 ? (
                <p className="text-green-400 mt-1">✔ {form.description}</p>
              ) : (
                <textarea
                  ref={inputRef}
                  placeholder="Describe your request..."
                  rows={3} 
                  autofocus
                  className="mt-2 w-full bg-transparent border-b border-gray-500 text-wrap text-white outline-none resize-none py-1 text-base sm:text-lg 2xl:text-2xl"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                  id="msg"
                />
              )}
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <>
              <p>Beautiful! Here's what we've got:</p>
              <div className="space-y-1 text-sm sm:text-base 2xl:text-2xl">
                <p><span className="text-blue-400 2xl:text-2xl">email:</span> {form.email}</p>
                <p><span className="text-blue-400 2xl:text-2xl">name:</span> {form.name}</p>
                <p><span className="text-purple-400 text-wrap 2xl:text-2xl">description:</span> {form.description}</p>
              </div>
              <p className="mt-4">Look good?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={handleRestart}
                  className="bg-white text-black border border-black px-4 py-2 rounded-4xl hover:bg-gray-300 2xl:px-6"
                >
                  Restart
                </button>
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-4xl hover:bg-blue-600 2xl:px-6"
                >
                  Send it!
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  


               
        
  


         {/* <section class="pt-7 pb-8  flex  bg-[url(./img/gray.avif)] overflow-hidden">
          <div class="container p-0 pb-5 pt-5 shadow-2xl mx-auto rounded-3xl backdrop-blur-3xl"> 
          <h1 class="text-center font-semibold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-white">Get in touch today</h1>
          <form action="" class="grid grid-cols-2  place-items-center ">
            <h4 class="mt-4 md:mt-8 xl:mt-10 -ml-12 sm:ml-0 font-semibold md:text-2xl">Name</h4>
            <div className="border shadow-2xl hover:shadow-violet-500 h-9 sm:h-11 lg:h-13 xl:h-15  mt-4 md:mt-8 xl:mt-10 border-black w-[100%] rounded-2xl sm:-ml-20 lg:-ml-40 has-focus-within:shadow-2xl has-focus-within:shadow-violet-500"><input type="text" id='name' maxLength={20} required placeholder='name..' class="ml-2 focus-within:outline-none mt-1 md:mt-1.5 lg:mt-2  caret-black  cursor-pointer  text-white wviolet%]"/></div>
            <h4  class="mt-4 md:mt-8 xl:mt-10 -ml-12 sm:ml-0 font-semibold md:text-2xl ">email</h4>
            <div className="border shadow-2xl hover:shadow-violet-500 h-9 sm:h-11 lg:h-13 xl:h-15  mt-4 md:mt-8 xl:mt-10 border-black w-[100%] rounded-2xl sm:-ml-20 lg:-ml-40 has-focus-within:shadow-2xl has-focus-within:shadow-violet-500"><input type="mail" id='email'  required  placeholder='@...'class="ml-2 focus-within:outline-none mt-1 md:mt-1.5  lg:mt-2 caret-black cursor-pointer text-white  w-[98%]"/></div>
            <h4  class="mt-4 md:mt-8 xl:mt-10 font-semibold md:text-2xl">Leave me a message</h4>
              
           <div  class="border rounded-2xl mr-1 h-20  md:mt-8 xl:mt-10 sm:-ml-13 lg:-ml-40 border-black mt-4 sm:w-sm md:w-sm lg:w-md xl:w-xl  caret-black cursor-pointer has-focus-within:shadow-2xl has-focus-within:shadow-violet-500"><textarea name="" id="msg" placeholder='Type something ...' maxLength={250} aria-expanded class="w-[98%] ml-2 focus-within:outline-none mt-1 text-white cursor-pointer "></textarea></div>
          
          </form>
          <div className="flex"> 
           <button class="bg-gradient-to-r from-violet-500 to-red-500 border px-7  text-white py-2 rounded-2xl  shadow-gray-700 shadow-md mx-auto mt-8 mb-8 border-none 2xl:px-10 2xl:py-5 2xl:text-2xl transition-transform duration-300 hover: scale-105 justify-center" onClick={wtsp} type='submit' >connect</button>
        </div> 
         </div>
         </section> */}
          
{/* contact links */}
        <section id="contact" className="pt-10 pb-16 bg-black bg-cover bg-center">
  <div className="container mx-auto px-4 backdrop-blur-md rounded-3xl shadow-2xl bg-black/30">
    <h1 className="text-center text-white font-semibold text-2xl sm:text-3xl lg:text-4xl py-8">Contact Me</h1>

    <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 px-4 pb-10">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/vishal-ravichandran232005" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full w-40 mx-auto  p-6 hover:scale-105 transition-transform duration-300 shadow-xl shadow-gray-900 hover:shadow-2xl hover:shadow-violet-400 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" viewBox="0 0 128 128">
            <path fill="#0076b2" d="M116 3H12a8.91 8.91 0 00-9 8.8v104.42a8.91 8.91 0 009 8.78h104a8.93 8.93 0 009-8.81V11.77A8.93 8.93 0 00116 3z"/>
            <path fill="#fff" d="M21.06 48.73h18.11V107H21.06zm9.06-29a10.5 10.5 0 11-10.5 10.49 10.5 10.5 0 0110.5-10.49M50.53 48.73h17.36v8h.24c2.42-4.58 8.32-9.41 17.13-9.41C103.6 47.28 107 59.35 107 75v32H88.89V78.65c0-6.75-.12-15.44-9.41-15.44s-10.87 7.36-10.87 15V107H50.53z"/>
          </svg>
          <h3 className="text-white text-lg font-medium">LinkedIn</h3>
        </div>
      </a>

      {/* GitHub */}
      <a href="https://github.com/Vishal-dev7" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full p-6 hover:scale-105 transition-transform duration-300 w-40 mx-auto shadow-xl shadow-gray-900 hover:shadow-2xl hover:shadow-violet-400 ">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" viewBox="0 0 128 128">
            <path fill="#fff" fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/>
          </svg>
          <h3 className="text-white text-lg font-medium">GitHub</h3>
        </div>
      </a>

      {/* Email */}
      <a href="mailto:vishalravichandran37@gmail.com">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full p-6 hover:scale-105 transition-transform duration-300 w-40 mx-auto  shadow-xl shadow-gray-900 hover:shadow-2xl hover:shadow-violet-400 ">
          <svg viewBox="0 0 100 100" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" xmlns="http://www.w3.org/2000/svg">
            <path fill="#d85040" d="M95.861 24.752c0-7.801-8.824-12.254-15.003-7.579l-5.844 4.427-25.014 18.935-25.014-18.948-5.831-4.415c-6.192-4.675-15.016-.221-15.016 7.579v53.654c0 3.49 2.799 6.316 6.257 6.316h14.59v-35.773l25.014 18.935 25.014-18.935v35.773h14.59c3.457 0 6.257-2.826 6.257-6.316V24.752z"/>
          </svg>
          <h3 className="text-white text-lg font-medium">Email</h3>
        </div>
      </a>
      {/* instagram */}
      <a href="https://github.com/Vishal-dev7" target="_blank" rel="noopener noreferrer">
        <div className="flex flex-col items-center bg-gray-900 border border-white rounded-full p-6 hover:scale-105 transition-transform duration-300 w-40 mx-auto shadow-xl shadow-gray-900 hover:shadow-2xl hover:shadow-violet-400 ">
         <svg viewBox="0 0 2500 2500" className="w-12 h-12 sm:w-16 sm:h-16 mb-3" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><radialGradient id="0" cx="332.14" cy="2511.81" r="3263.54" gradientUnits="userSpaceOnUse"><stop offset=".09" stop-color="#fa8f21"></stop><stop offset=".78" stop-color="#d82d7e"></stop></radialGradient><radialGradient id="1" cx="1516.14" cy="2623.81" r="2572.12" gradientUnits="userSpaceOnUse"><stop offset=".64" stop-color="#8c3aaa" stop-opacity="0"></stop><stop offset="1" stop-color="#8c3aaa"></stop></radialGradient></defs><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#0)"></path><path d="M833.4,1250c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7S833.4,1480.11,833.4,1250m-225.26,0c0,354.5,287.36,641.86,641.86,641.86S1891.86,1604.5,1891.86,1250,1604.5,608.14,1250,608.14,608.14,895.5,608.14,1250M1767.27,582.69a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M745,2267.47c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27s373.28,1.31,505.15,7.27c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M734.65,7.57c-133.07,6.06-224,27.16-303.41,58.06C349,97.54,279.38,140.35,209.81,209.81S97.54,349,65.63,431.24c-30.9,79.46-52,170.34-58.06,303.41C1.41,867.93,0,910.54,0,1250s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43S349,2402.37,431.24,2434.37c79.56,30.9,170.34,52,303.41,58.06C868,2498.49,910.54,2500,1250,2500s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2150.95,97.54,2068.86,65.63c-79.56-30.9-170.44-52.1-303.41-58.06C1632.17,1.51,1589.56,0,1250.1,0S868,1.41,734.65,7.57" fill="url(#1)"></path></g></svg>
          <h3 className="text-white text-lg font-medium">Instagram</h3>
        </div>
      </a>
    </div>
  </div>
</section>

        </div>
        
  )
}

export default Contact
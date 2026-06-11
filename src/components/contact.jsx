import React from 'react'
import Navbar from '../comps/navbar'
import  { useState, useRef, useEffect } from "react";
import Reacticon from '../assets/react.svg';
const Contact = () => {
 const [step, setStep] = useState(1);
   const [form, setForm] = useState({ email: "", name: "", description: "" });
   const inputRef = useRef(null);
 
   const handleNext = () => {
     if (step === 1 && form.email.trim())  setStep(2);
     if (step === 2 && form.name.trim()) setStep(3);
     if (step === 3 && form.description.trim()) setStep(4);

   };
   const emailvalid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
  setStatusMsg("Enter a valid email address");
  return;
}
   };
 
   const handleRestart = () => {
     setForm({ email: "", name: "", description: "" });
     setStep(1);
   };
 const [statusMsg, setStatusMsg] = useState("");

  const handleSend = () => {
  const { name, email, description } = form;

  if (!name || !email || !description) {
    setStatusMsg("Please fill all fields");
    return;
  }

  setStatusMsg("Redirecting to WhatsApp...");

  const message = `Hello, I'm ${name}
Contact me on: ${email}
Here is my message for you: ${description}
Thank you!`;

  const phone = "919342236148";
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  // Small delay to show message
  setTimeout(() => {
    window.open(url, "_blank");
    setStatusMsg("Message sent successfully! Thanks for your message");
    handleRestart();
  }, 600);
};



  function wtsp() {
  

  let number = "+919342236148";
  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let msg = document.getElementById('msg').value.trim();

  // Encode message properly
  let text = `Hey , I'm ${name}   \n Here my mail: ${email} \n sub: ${msg}\n thanks you..!`;
  alert("wait");
  let url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
  

  window.open(url, '_blank').focus();
}
   
  return (
    <div >
      <div id="contact" className=" min-h-screen bg-gray-950 bg-center flex items-center justify-center p-4 ">
      <div className="r lg:w-[55%] max-w-5xl bg-gray-700 rounded-xl shadow-xl border border-black overflow-hidden xl:w-[60%] 2xl:w-[70%]">
        
        {/* Header */}
        <div className="bg-gray-900 text-white text-sm px-4 py-3 flex justify-between items-center font-mono 2xl:h-20">
          <span className="text-2xl 2xl:text-3xl ">Get in touch today</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 2xl:w-5 2xl:h-5 bg-red-500 rounded-full" />
            <div className="w-3 h-3 2xl:w-5 2xl:h-5 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 2xl:w-5 2xl:h-5 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Body */}
        <div className="text-white font-mono px-6 py-8 space-y-6 text-base sm:text-lg leading-relaxed 2xl:text-xl">
          <p className="text-sm sm:text-base 2xl:text-xl ">Hey there! We're excited to link 📎</p>
          <hr className="border-t border-dashed border-gray-500" />

         <div>
            <p>
              To start, could you give us your <span className="text-purple-300">email</span> ? 
            </p>
            <div class="flex">
          {/* <span class=" mt-4 "><svg xmlns="http://www.w3.org/2000/svg"  fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="size-6 animate-blink">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>
</span> */}
{step === 1 && form.email.length === 0 && (
    <span className="terminal_cursor mt-5"></span>
)}
            {step > 1 ? (
              <p className="text-green-400 mt-1">✔ {form.email}</p>
            ) : (
              
              <input
                ref={inputRef}
                type="email"
                placeholder="your@email.com"
                required
       
              
                className=" email mt-2 w-full ml-1 bg-transparent border-b border-gray-500 text-white outline-none py-1 text-base sm:text-lg 2xl:mt-2 2xl:text-xl "
                value={ form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleNext() }
                id="email"
                
              /> 
              
            )}
            </div>
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
                  className="mt-2 w-full bg-transparent border-b border-gray-500 text-white outline-none py-1 text-base sm:text-lg 2xl:text-xl"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                  id="name"
                  autoFocus
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
                  placeholder="Describe your message for us..."
                  rows={3} 
                  autofocus
                  className="mt-2 w-full bg-transparent border-b border-gray-500 text-wrap text-white outline-none resize-none py-1 text-base sm:text-lg 2xl:text-xl"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                  id="msg"
                  autoFocus
                />
              )}
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <>
              <p>Beautiful! Here's what we've got:</p>
              <div className="space-y-1 text-sm sm:text-base 2xl:text-xl">
                <p><span className="text-blue-400 2xl:text-lg">email:</span> {form.email}</p>
                <p><span className="text-blue-400 2xl:text-lg">name:</span> {form.name}</p>
                <p><span className="text-purple-400 text-wrap 2xl:text-lg">description:</span> {form.description}</p>
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
                {statusMsg && (
  <span className="text-lime-400 font-medium block mt-2">
    {statusMsg}
  </span>
)}

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
          



     
      
      
     
  

  

  

 <section
      
      className="relative min-h-screen w-full overflow-x-hidden bg-gray-950 flex flex-col "
    >
      {/* MAIN CONTENT */}
      <div id="social" className="flex-grow flex items-center justify-center px-4 mb-4">
        <div className="w-[80%] md:w-[70%] lg:w-[50%] max-w-6xl bg-gray-800/90 backdrop-blur-md rounded-3xl shadow-2xl">
          <h1 className="text-center text-white font-semibold text-2xl sm:text-3xl lg:text-4xl py-8">
            Contact Me
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:gap-4 px-6 pb-10 place-items-center">


            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vishal-ravichandran232005"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-white shadow-lg transition hover:scale-110 float-glow ">
                
                  <svg width="30px" height="30px" class="" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M18 22V15C18 13.8954 17.1046 13 16 13C14.8954 13 14 13.8954 14 15V22H10" stroke="#3276c3" stroke-width="1.752" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M10 22V15C10 11.6863 12.6863 9 16 9C19.3137 9 22 11.6863 22 15V22H18" stroke="#3276c3" stroke-width="1.752" stroke-linecap="round" stroke-linejoin="round"></path> <rect x="3" y="9" width="4" height="13" stroke="#3276c3" stroke-width="1.752" stroke-linecap="round" stroke-linejoin="round"></rect> <circle cx="5" cy="4" r="2" stroke="#3276c3" stroke-width="1.752" stroke-linecap="round" stroke-linejoin="round"></circle> </g></svg>
          
                  
              </div>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/Vishal-dev7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-white shadow-lg transition hover:scale-110 float-glow ripple">
                <svg viewBox="0 0 24 24" width="30px" height="30px" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" stroke-width="0.00024000000000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" fill="#ffffff"></path> <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" fill="#ffffff"></path> </g>
         </svg>
              </div>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:vishalravichandran37@gmail.com"
              className="flex justify-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-white shadow-lg transition hover:scale-110 float-glow ripple">
                <svg viewBox="0 0 32 32" class="w-8 h-8" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M16.58,19.1068l-12.69-8.0757A3,3,0,0,1,7.1109,5.97l9.31,5.9243L24.78,6.0428A3,3,0,0,1,28.22,10.9579Z" fill="#ea4435"></path><path d="M25.5,5.5h4a0,0,0,0,1,0,0v18a3,3,0,0,1-3,3h0a3,3,0,0,1-3-3V7.5a2,2,0,0,1,2-2Z" fill="#00ac47" transform="translate(53.0001 32.0007) rotate(180)"></path><path d="M29.4562,8.0656c-.0088-.06-.0081-.1213-.0206-.1812-.0192-.0918-.0549-.1766-.0823-.2652a2.9312,2.9312,0,0,0-.0958-.2993c-.02-.0475-.0508-.0892-.0735-.1354A2.9838,2.9838,0,0,0,28.9686,6.8c-.04-.0581-.09-.1076-.1342-.1626a3.0282,3.0282,0,0,0-.2455-.2849c-.0665-.0647-.1423-.1188-.2146-.1771a3.02,3.02,0,0,0-.24-.1857c-.0793-.0518-.1661-.0917-.25-.1359-.0884-.0461-.175-.0963-.267-.1331-.0889-.0358-.1837-.0586-.2766-.0859s-.1853-.06-.2807-.0777a3.0543,3.0543,0,0,0-.357-.036c-.0759-.0053-.1511-.0186-.2273-.018a2.9778,2.9778,0,0,0-.4219.0425c-.0563.0084-.113.0077-.1689.0193a33.211,33.211,0,0,0-.5645.178c-.0515.022-.0966.0547-.1465.0795A2.901,2.901,0,0,0,23.5,8.5v5.762l4.72-3.3043a2.8878,2.8878,0,0,0,1.2359-2.8923Z" fill="#ffba00"></path><path d="M5.5,5.5h0a3,3,0,0,1,3,3v18a0,0,0,0,1,0,0h-4a2,2,0,0,1-2-2V8.5a3,3,0,0,1,3-3Z" fill="#4285f4"></path><path d="M2.5439,8.0656c.0088-.06.0081-.1213.0206-.1812.0192-.0918.0549-.1766.0823-.2652A2.9312,2.9312,0,0,1,2.7426,7.32c.02-.0475.0508-.0892.0736-.1354A2.9719,2.9719,0,0,1,3.0316,6.8c.04-.0581.09-.1076.1342-.1626a3.0272,3.0272,0,0,1,.2454-.2849c.0665-.0647.1423-.1188.2147-.1771a3.0005,3.0005,0,0,1,.24-.1857c.0793-.0518.1661-.0917.25-.1359A2.9747,2.9747,0,0,1,4.3829,5.72c.089-.0358.1838-.0586.2766-.0859s.1853-.06.2807-.0777a3.0565,3.0565,0,0,1,.357-.036c.076-.0053.1511-.0186.2273-.018a2.9763,2.9763,0,0,1,.4219.0425c.0563.0084.113.0077.169.0193a2.9056,2.9056,0,0,1,.286.0888,2.9157,2.9157,0,0,1,.2785.0892c.0514.022.0965.0547.1465.0795a2.9745,2.9745,0,0,1,.3742.21A2.9943,2.9943,0,0,1,8.5,8.5v5.762L3.78,10.9579A2.8891,2.8891,0,0,1,2.5439,8.0656Z" fill="#c52528"></path></g>
          </svg>
              </div>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/im_vishal.7/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-900 border border-white shadow-lg transition hover:scale-110 float-glow ripple">
                 <svg viewBox="0 0 24 24" class="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#C13584"></path> <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" fill="#C13584"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#C13584"></path> </g>
        
        </svg>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="w-full bg-gray-900/80 py-6 mt-auto">
        <div className="text-center text-white/80 text-sm space-y-2">
          <p>© {new Date().getFullYear()} Vishal R. All rights reserved.</p>

          <div className="flex justify-center items-center gap-2">
            <span>Built with</span>
            <img
              src={Reacticon}
              alt="React"
              className="w-5 h-5 animate-spin"
            />
            <span>using</span>
            <span class="animate-pulse"><svg xmlns="http://www.w3.org/2000/svg"
             width="28" height="25" viewBox="0 0 128 128"><title>Vitejs SVG Icon</title>
             <path fill="#ffd700" d="M91.557 1.92L49.05 10.248a1.06 1.06 0 0 0-.856.977l-2.617 44.168a1.05 1.05 0 0 0 1.299 1.097l11.836-2.736c1.444-.332 2.78.972 2.482 2.424l-3.517 17.218a1.047 1.047 0 0 0 1.35 1.227l7.308-2.223c1.475-.447 2.929.881 2.62 2.391l-5.59 27.047c-.128.62.192 1.014.638 1.197s.95.127 1.293-.404l.61-.945l34.626-69.106c.41-.818-.254-1.692-1.146-1.52L87.2 33.413c-1.49.29-2.792-1.136-2.369-2.594l7.951-27.562A1.046 1.046 0 0 0 91.56 1.92h-.002zM6.086 14.86a3 3 0 0 0-.463.02c-2.106.254-3.467 2.637-2.318 4.651l58.582 102.73c1.203 2.11 4.25 2.098 5.437-.023L124.766 19.52c1.289-2.305-.688-5.067-3.286-4.594l-32.744 5.969l-2.943 10.2v.003a1.043 1.043 0 0 0 1.217 1.334h.002l12.183-2.354v.002c1.646-.319 2.986 1.446 2.233 2.947l-34.653 69.155l-.638.992a2.055 2.055 0 0 1-2.512.787a2.06 2.06 0 0 1-1.238-2.324l5.59-27.047a1.05 1.05 0 0 0-1.35-1.233l-7.309 2.223c-1.472.448-2.927-.875-2.62-2.383l3.517-17.218a1.05 1.05 0 0 0-1.278-1.25l-11.835 2.736c-1.328.304-2.6-.771-2.522-2.131l1.973-33.277L6.566 14.91a3 3 0 0 0-.48-.05"/></svg></span>
  
          </div>
        </div>
      </footer>
    </section>



  
  




        </div>
        
  )
}

export default Contact
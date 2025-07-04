import React, { useState, useRef, useEffect } from "react";

const Touch = () => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({ email: "", name: "", description: "" });

  // Refs for each input field
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);

  useEffect(() => {
    if (step === 1 && emailRef.current) emailRef.current.focus();
    if (step === 2 && nameRef.current) nameRef.current.focus();
    if (step === 3 && descRef.current) descRef.current.focus();
  }, [step]);

  const handleNext = () => {
    if (step === 1 && form.email.trim()) setStep(2);
    else if (step === 2 && form.name.trim()) setStep(3);
    else if (step === 3 && form.description.trim()) setStep(4);
  };

  const handleRestart = () => {
    setForm({ email: "", name: "", description: "" });
    setStep(1);
  };

  const handleSend = () => {
    alert("Form sent successfully!");
    handleRestart();
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-3xl bg-gray-800 rounded-xl shadow-xl border border-black overflow-hidden">
        {/* Header */}
        <div className="bg-gray-900 text-white text-sm px-4 py-3 flex justify-between items-center font-mono">
          <span className="text-2xl">Get in touch today</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-400 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
        </div>

        {/* Body */}
        <div className="text-white font-mono px-6 py-8 space-y-6 text-base sm:text-lg leading-relaxed">
          <p className="text-sm sm:text-base">Hey there! We're excited to link 📎</p>
          <hr className="border-t border-dashed border-gray-500" />

          {/* Step 1: Email */}
          <div>
            <p>
              To start, could you give us your <span className="text-purple-300">email</span>?
            </p>
            {step > 1 ? (
              <p className="text-green-400 mt-1">✔ {form.email}</p>
            ) : (
              <input
                ref={emailRef}
                type="email"
                placeholder="your@email.com"
                required
                className="mt-2 w-full bg-transparent border-b border-gray-500 text-white outline-none py-1 text-base sm:text-lg  outline:none"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                onKeyDown={(e) => e.key === "Enter" && handleNext()}
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
                  ref={nameRef}
                  type="text"
                  placeholder="Your name"
                  maxLength={20}
                  required
                  className="mt-2 w-full bg-transparent border-b border-gray-500 text-white outline-none py-1 text-base sm:text-lg outline:none"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                />
              )}
            </div>
          )}

          {/* Step 3: Description */}
          {step >= 3 && (
            <div>
              <p>Perfect, and how can we help you?</p>
              {step > 3 ? (
                <p className="text-green-400 mt-1">✔ {form.description}</p>
              ) : (
                <textarea
                  ref={descRef}
                  placeholder="Describe your request..."
                  rows={3}
                  required
                  className="mt-2 w-full bg-transparent border-b border-gray-500 text-white outline-none resize-none py-1 text-base sm:text-lg outline:none"
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  onKeyDown={(e) => e.key === "Enter" && handleNext()}
                />
              )}
            </div>
          )}

          {/* Step 4: Summary */}
          {step === 4 && (
            <>
              <p>Beautiful! Here's what we've got:</p>
              <div className="space-y-1 text-sm sm:text-base">
                <p><span className="text-blue-400">email:</span> {form.email}</p>
                <p><span className="text-blue-400">name:</span> {form.name}</p>
                <p><span className="text-purple-400 text-wrap">description:</span> {form.description}</p>
              </div>
              <p className="mt-4">Look good?</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  onClick={handleRestart}
                  className="bg-white text-black border border-black px-4 py-2 rounded-3xl hover:bg-gray-300 transition"
                >
                  Restart
                </button>
                <button
                  onClick={handleSend}
                  className="bg-gradient-to-r from-purple-600 to-rose-500 text-white px-4 py-2 rounded-3xl hover:brightness-110 transition"
                >
                  Send it!
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Touch;

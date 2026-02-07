import React from "react";
// Import your profile image if you have one
// import ProfileImg from "../../assets/profile.png"; 

const Home = () => {
  return (
    <div id="Home" className="text-white flex flex-col md:flex-row w-full min-h-screen mx-auto justify-center items-center p-10 md:p-24 overflow-hidden">
      
      {/* Left Content Side */}
      <div className="flex flex-col items-start md:w-2/4 space-y-6">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter bg-gradient-to-r from-[#b80dec] via-[#57cef1] to-[#9a22df] text-transparent bg-clip-text">
          Hello, I am Fahad
        </h1>
        
        <p className="text-white/80 font-sans text-md md:text-xl tracking-wide leading-relaxed max-w-lg">
          I am a <span className="text-[#57cef1]">Frontend Developer</span> and Computer Science Engineering student dedicated to
          crafting high-performance, visually stunning user interfaces.
        </p>

        {/* Download Button - Wrapped in a div for spacing */}
        <div className="pt-4">
          <a
            href="/Resume.pdf" 
            download="Fahad_Resume.pdf"
            className="inline-block px-8 py-3 bg-[#f3349d] text-white font-bold rounded-full shadow-[0_0_20px_rgba(243,52,157,0.4)] hover:shadow-[0_0_30px_rgba(243,52,157,0.6)] hover:scale-105 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image/Graphic Side */}
      <div className="hidden md:flex md:w-2/4 justify-center items-center relative">
        {/* If you don't have an image yet, this creates a cool glowing orb background */}
        <div className="absolute w-64 h-64 bg-[#b80dec] rounded-full filter blur-[100px] opacity-30 animate-pulse"></div>
        <div className="relative z-10 w-80 h-80 rounded-2xl border-2 border-white/10 overflow-hidden bg-slate-900/50 backdrop-blur-sm flex justify-center items-center text-slate-500">
           {/* Replace this div with an <img> tag when ready */}
           <p>Your Image Here</p> 
        </div>
      </div>

    </div>
  );
};

export default Home;
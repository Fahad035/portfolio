import React, { useState, useEffect } from "react";
import "./Home.css";
import i1 from "../../assets/i1.svg"
import i2 from "../../assets/i2.svg"
import i3 from "../../assets/i3.svg"
import i4 from "../../assets/i4.svg"
import i5 from "../../assets/i5.svg"
import i6 from "../../assets/i6.svg"

const Home = () => {
  // Logic to store and randomize the selected image
  const [currentProfile, setCurrentProfile] = useState(i1);

  useEffect(() => {
    const profileImages = [i1, i2, i3, i4, i5, i6];
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    setCurrentProfile(profileImages[randomIndex]);
  }, []);

  return (
    <div id="Home" className="text-white flex flex-col md:flex-row w-full min-h-screen mx-auto justify-center items-center p-10 md:p-24 overflow-hidden bg-[#0a0a0a]">
      {/* Left Content Side */}
      <div className="flex flex-col items-start md:w-2/4 space-y-6 z-10">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter bg-linear-to-r from-[#b80dec] via-[#57cef1] to-[#9a22df] text-transparent bg-clip-text">
          Hello, I am Fahad
        </h1>
        
        <p className="text-white/80 font-sans text-md md:text-xl tracking-wide leading-relaxed max-w-lg">
          I am a <span className="text-[#57cef1]">Frontend Developer</span> and Computer Science Engineering student dedicated to
          crafting high-performance, visually stunning user interfaces.
        </p>

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

      {/* Right Image/Graphic Side - Replicating the Argha Isometric Style */}
      <div className="mt-16 md:mt-0 flex md:w-2/4 justify-center items-center relative">
        
        {/* The Neon Floor Glow effect underneath the image */}
        <div className="absolute w-[300px] h-[100px] bg-[#b80dec]/20 rounded-[100%] blur-[60px] -bottom-5 rotate-[-15deg]"></div>

        {/* The Floating Image Container with 3D Transform */}
        <div 
          className="relative z-10 transition-all duration-500 ease-in-out"
          style={{ 
            transform: 'perspective(1000px) rotateX(10deg) rotateY(-15deg)',
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          {/* Main SVG Image Container with Glassmorphism styling */}
          <div className="p-4 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 shadow-2xl">
            <img 
              className="w-64 h-64 md:w-80 md:h-80 object-contain transition-all duration-500" 
              src={currentProfile} 
              alt="Fahad Profile" 
            />
          </div>

          {/* Decorative Floating Elements to match the "Attractive" style */}
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-linear-to-br from-[#57cef1] to-[#b80dec] rounded-lg opacity-60 shadow-[0_0_15px_#57cef1] animate-bounce"></div>
          <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-[#f3349d] rounded-md opacity-40 shadow-[0_0_15px_#f3349d] animate-pulse"></div>
        </div>
      </div>

      {/* Global Background Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#b80dec]/10 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#57cef1]/10 rounded-full blur-[120px]"></div>
    </div>
  );
};

export default Home;
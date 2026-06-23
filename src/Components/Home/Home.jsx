import React from "react";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";


import { TypeAnimation } from "react-type-animation";
import "./Home.css";
import profile2 from "../../assets/profile2.jpeg";

const Home = () => {
  return (
    <div
      id="Home"
      className="text-white flex flex-col md:flex-row w-full max-w-full min-h-screen mx-auto justify-center items-center p-10 md:p-24 overflow-x-hidden bg-linear-to-r from-gray-950 via-blue-950 to-purple-950"
    >
      <div className="flex flex-col items-start md:w-2/4 space-y-6 z-10">
        <h1 className="text-4xl md:text-7xl font-bold leading-tight tracking-tighter bg-linear-to-r from-[#b80dec] via-[#57cef1] to-[#9a22df] text-transparent bg-clip-text">
          <TypeAnimation
            sequence={[
              "Hello, I am Fahad",
              1200,
              "",
              200,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            speed={45}
          />
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

      <div className="mt-16 md:mt-0 flex md:w-2/4 justify-center items-center relative">
        <motion.div
          className="profile-card"
          initial={{ y: 0 }}
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
        >
          <img
            className="profile-img"
            src={profile2}
            alt="Fahad Profile"
            draggable={false}
          />
        </motion.div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-[#b80dec]/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-[#57cef1]/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default Home;


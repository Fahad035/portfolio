import React from "react";

const Home = () => {
  return (
    <div className="text-white flex w-full h-screen mx-auto justify-center items-center p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-serif flex leading-normal tracking-tighter bg-linear-to-r from-[#b80dec] via-[#57cef1] to-[#9a22df] text-transparent bg-clip-text">
          Hello, I am Fahad
        </h1>
        <p className="text-white/70 text-justify font-sans text-sm md:text-xl tracking-tight leading-relaxed">
          I am a Frontend Developer and Computer Science Engineering student dedicated to
          crafting high-performance, visually stunning user interfaces.
        </p>
      </div>
      <div className="flex justify-end">

      </div>
    </div>
  );
};

export default Home;

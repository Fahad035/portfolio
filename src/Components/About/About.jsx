import React from "react";
import Sketch from "../../assets/Sketch.png";
import { IoArrowForward } from "react-icons/io5";

const About = () => {
  return (
    <div id='About' className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black/40 shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold bg-linear-to-r from-[#b80dec] via-[#57cef1] to-[#9a22df] text-transparent bg-clip-text">
          About me
        </h2>
        <div className="md:flex flex-wrap gap-5 flex-col md:flex-row items-center">
          <img className="md:h-80 rounded-4xl" src={Sketch} alt="" />

          <ul>
            <div className="flex gap-3 py-4">
              <span className="w-96">
                <p className="text-white/70 font-sans text-justify text-sm md:text-md leading-relaxed">
                  I am a passionate Frontend Developer and Computer Science
                  Engineering student dedicated to building immersive,
                  responsive, and high-performance user interfaces. With a
                  strong command of React.js, Tailwind CSS, and JavaScript, I
                  specialize in transforming complex requirements into intuitive
                  digital experiences. My portfolio includes diverse projects,
                  ranging from sleek utility apps like an Age Calculator to
                  sophisticated AI-driven interfaces for chatbots and
                  misinformation detectors, all optimized for seamless user
                  interaction. I take pride in writing clean, maintainable code
                  and leveraging modern tools like Vercel to deploy scalable web
                  applications that prioritize both accessibility and aesthetic
                  appeal.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;

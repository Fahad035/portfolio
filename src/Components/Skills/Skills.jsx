import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaDatabase, FaGithub, FaGit } from 'react-icons/fa';

const skills = [
  {
    name: 'HTML5',
    icon: <FaHtml5 size={60} className="text-orange-500" />,
  },
  {
    name: 'CSS3',
    icon: <FaCss3 size={60} className="text-blue-500" />,
  },
  {
    name: 'JavaScript',
    icon: <FaJs size={60} className="text-yellow-500" />,
  },
  {
    name: 'React JS',
    icon: <FaReact size={60} className="text-blue-300" />,
  },
  {
    name: 'Node.js',
    icon: <FaNodeJs size={60} className="text-green-500" />,
  },
  {
    name: 'Database',
    icon: <FaDatabase size={60} className="text-gray-400" />,
  },
  {
    name: 'Github',
    icon: <FaGithub size={60} className="text-white" />,
  },
  {
    name: 'Version Control',
    icon: <FaGit size={60} className="text-red-500" />,
  }
];

const Skills = () => {
  return (
    <div id='Skills' className="text-white p-10 md:p-20">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-12 bg-linear-to-r from-[#4230e6] via-[#e12ee7] to-[#570488] text-transparent bg-clip-text">Technical Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-lg p-6 flex flex-col items-center justify-center transform hover:scale-105 transition-transform duration-300"
          >
            {skill.icon}
            <p className="mt-4 text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Scr1 from '../../assets/Scr1.png';
import Scr2 from '../../assets/Scr2.png';
import Scr from '../../assets/Scr.png';

const projects = [
  {
    title: 'Fake News Detection',
    description: 'Fake news detection using machine learning is a sophisticated process that leverages advanced algorithms to automatically identify and classify news articles as real or fake.',
    technologies: ['Html', 'Javasript', 'Tailwind CSS', 'Python', 'Flask'],
    imageUrl: Scr1,
    liveUrl: 'https://fake-news-detector-9.onrender.com',
    sourceUrl: '#',
  },
  {
    title: 'Misinformation identifier',
    description: 'TrustGuard was founded on the principle that everyone deserves access to reliable, unbiased information.',
    technologies: ['Html', 'Javasript', 'React.js', 'Tailwind CSS'],
    imageUrl: Scr2,
    liveUrl: 'https://trust-guard-vh44.vercel.app',
    sourceUrl: '#',
  },
  {
    title: 'Chatbot',
    description: 'It demonstrates expertise in Natural Language Processing (NLP) and Retrieval-Augmented Generation (RAG) systems. The bot uses an LLM (e.g., Google Gemini API) and a vector database',
    technologies: ['Python', 'Streamlit'],
    imageUrl: Scr,
    liveUrl: '#',
    sourceUrl: '#',
  },
];

const Projects = () => {
  return (
    <section id="Projects" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl bg-linear-to-r from-[#ec0dd9] via-[#d331e9] to-[#13d9e7] text-transparent bg-clip-text">My Projects</h2>
          <p className="mt-4 text-lg text-slate-400">Here are a few projects I've worked on recently.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 border-2 border-transparent hover:border-[#f3349d]">
              <div className="overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-300 text-sm font-semibold px-3 py-1 rounded-full">{tech}</span>
                  ))}
                </div>
                <div className="flex justify-between items-center mt-6">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-[#f3349d] hover:text-white transition-colors duration-300">
                    <FaExternalLinkAlt className="mr-2" /> Live Demo
                  </a>
                  <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-[#f3349d] hover:text-white transition-colors duration-300">
                    <FaGithub className="mr-2" /> Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

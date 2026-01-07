import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaPaperPlane, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    // Here you would typically integrate with an email sending service
    // like EmailJS, Formspree, or a custom backend.
    console.log('Form data submitted:', formData);

    // Simulate a network request
    setTimeout(() => {
      // For demonstration, let's assume success
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setFormStatus(null), 5000); // Hide status after 5 seconds
    }, 2000);
  };

  return (
    <section id="Contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold sm:text-3xl bg-linear-to-r from-[#ec0dd9] via-[#d331e9] to-[#13d9e7] text-transparent bg-clip-text">Contact Me</h2>
          <p className="mt-4 text-lg text-slate-400">I'm open to discussing new projects and opportunities.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-6 bg-linear-to-r from-[#ec0dd9] via-[#d331e9] to-[#13d9e7] text-transparent bg-clip-text">Get in Touch</h3>
            <p className="text-slate-400 mb-8">
              Have a question or want to work together? Feel free to reach out. I'm always happy to connect!
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaMapMarkerAlt className="text-2xl text-[#f3349d] mr-4" />
                <span className="text-lg">Telangana, INDIA (Remote)</span>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-2xl text-[#f3349d] mr-4" />
                <a href="mailto:hello@example.com" className="text-lg hover:text-[#f3349d] transition-colors">fahadjdk345671@gmail.com</a>
              </div>
              <div className="flex items-center">
                <FaPhone className="text-2xl text-[#f3349d] mr-4" />
                <a href="tel:+1234567890" className="text-lg hover:text-[#f3349d] transition-colors">+91 7995251073</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="text-xl font-semibold mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a href="https://github.com/fahad035" className="text-slate-400 hover:text-[#0c070a] transition-colors text-3xl"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/md-fahad-71505a2b6" className="text-slate-400 hover:text-[#3487f3] transition-colors text-3xl"><FaLinkedin /></a>
                <a href="https://x.com/MdFahad1362761" className="text-slate-400 hover:text-[#fcf7fa] transition-colors text-3xl"><FaTwitter /></a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <FaUser className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border-2 border-slate-600 rounded-lg py-3 pr-4 pl-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f3349d] focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border-2 border-slate-600 rounded-lg py-3 pr-4 pl-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f3349d] focus:border-transparent transition-all"
                />
              </div>
              <div className="relative">
                <FaPhone className="absolute top-1/2 -translate-y-1/2 left-4 text-slate-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone (Optional)"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-700 border-2 border-slate-600 rounded-lg py-3 pr-4 pl-12 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f3349d] focus:border-transparent transition-all"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-700 border-2 border-slate-600 rounded-lg py-3 px-4 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#f3349d] focus:border-transparent transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={formStatus === 'sending'}
                className="w-full flex items-center justify-center bg-[#f3349d] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 disabled:bg-slate-600 disabled:cursor-not-allowed"
              >
                <FaPaperPlane className="mr-3" />
                {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
              </button>

              {formStatus === 'success' && (
                <p className="text-center text-green-400 bg-green-900/50 p-3 rounded-lg">
                  Message sent successfully! I'll get back to you soon.
                </p>
              )}
              {formStatus === 'error' && (
                <p className="text-center text-red-400 bg-red-900/50 p-3 rounded-lg">
                  Something went wrong. Please try again later.
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

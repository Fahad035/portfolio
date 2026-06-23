import React, { useEffect, useMemo, useRef, useState } from 'react';
/* eslint-disable-next-line no-unused-vars */
import { AnimatePresence, motion } from 'framer-motion';
import { FaCompass } from 'react-icons/fa';

const NAV_ITEMS = [
  { label: 'Home', href: '#Home' },
  { label: 'About', href: '#About' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Achievements', href: '#Achievements' },
  { label: 'Contact', href: '#Contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef(null);

  const explorerButtonVariants = useMemo(
    () => ({
      closed: { scale: 1, opacity: 1 },
      open: { scale: 0.98, opacity: 1 }
    }),
    []
  );

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    const onPointerDown = (e) => {
      const el = navRef.current;
      if (!el) return;
      if (!el.contains(e.target)) setIsOpen(false);
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el) return;

    const openOnHover = () => setIsOpen(true);
    const closeOnLeave = () => setIsOpen(false);

    const media = window.matchMedia?.('(pointer: fine)');
    const shouldAttach = media ? media.matches : true;

    if (!shouldAttach) return;

    const explorer = el.querySelector('[data-explorer-button="true"]');
    const panel = el.querySelector('[data-explorer-panel="true"]');
    if (!explorer || !panel) return;

    explorer.addEventListener('pointerenter', openOnHover);
    panel.addEventListener('pointerenter', openOnHover);
    panel.addEventListener('pointerleave', closeOnLeave);

    return () => {
      explorer.removeEventListener('pointerenter', openOnHover);
      panel.removeEventListener('pointerenter', openOnHover);
      panel.removeEventListener('pointerleave', closeOnLeave);
    };
  }, [isOpen]);

  const containerVariants = {
    closed: {
      opacity: 0,
      y: 12,
      scale: 0.98,
      filter: 'blur(4px)'
    },
    open: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 450, damping: 32, mass: 0.8 }
    }
  };

  const listVariants = {
    closed: { opacity: 0 },
    open: {
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.02, when: 'beforeChildren' }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, scale: 0.4, y: 18, x: 0, filter: 'blur(6px)' },
    open: {
      opacity: 1,
      scale: 1,
      y: 0,
      x: 0,
      filter: 'blur(0px)',
      transition: { type: 'spring', stiffness: 380, damping: 18 }
    }
  };

  const hoverRing = 'hover:shadow-[0_0_30px_rgba(236,72,153,0.35)] hover:border-fuchsia-400/50 focus-visible:border-fuchsia-300/70';

  return (
    <nav
      ref={navRef}
      className="fixed left-0 top-0 z-50 w-full px-6 md:px-16 pt-6"
      aria-label="Portfolio navigation"
    >
      <div className="relative">
        <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md px-4 md:px-8 py-3 shadow-lg">
          {/* Left: Logo */}
          <a href="#Home" className="select-none cursor-default">
            <h1
              className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-cyan-300 via-fuchsia-400 to-rose-400 text-transparent bg-clip-text"
            >
              Fahad
            </h1>
          </a>

          {/* Right: Explore */}
          <motion.div
            variants={explorerButtonVariants}
            initial="closed"
            animate={isOpen ? 'open' : 'closed'}
          >
            <button
              type="button"
              data-explorer-button="true"
              onClick={() => setIsOpen((v) => !v)}
              className="group relative inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-2 font-semibold text-white backdrop-blur-md shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-300/60"
            >
              <span className="absolute inset-0 rounded-full bg-linear-to-r from-fuchsia-500/0 via-fuchsia-400/20 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <FaCompass className="text-cyan-200/90 drop-shadow-[0_0_10px_rgba(103,232,249,0.45)] transition-transform duration-300 group-hover:rotate-6" />
              <span>Explore</span>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                className="ml-1 text-fuchsia-200/80"
              >
                ▸
              </motion.span>
            </button>
          </motion.div>
        </div>

        {/* Explorer panel (appears below navbar) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              data-explorer-panel="true"
              initial="closed"
              animate="open"
              exit="closed"
              variants={containerVariants}
              className="absolute left-0 right-0 top-full mt-3 mx-auto w-[min(900px,calc(100vw-3rem))]"
            >
              <motion.div
                className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl shadow-2xl overflow-hidden"
                initial={false}
                animate={{
                  boxShadow: '0 0 0 rgba(0,0,0,0)',
                  filter: 'saturate(1.2)'
                }}
                transition={{ duration: 0.2 }}
              >
                {/* Gradient border overlay */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-3xl p-px bg-linear-to-r from-cyan-300/60 via-fuchsia-500/50 to-rose-300/50"
                />
                <div className="relative p-3 md:p-4">
                  <motion.ul
                    className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-3"
                    variants={listVariants}
                    initial="closed"
                    animate="open"
                  >
                    {NAV_ITEMS.map((item) => (
                      <motion.li key={item.href} variants={itemVariants}>
                        <a
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className={`block rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm md:text-[15px] font-semibold text-white/90 backdrop-blur-md transition-all duration-200 ${
                            hoverRing
                          }`}
                        >
                          <span className="inline-flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-linear-to-r from-cyan-300 to-fuchsia-400 shadow-[0_0_18px_rgba(217,70,239,0.35)]" />
                            {item.label}
                          </span>
                        </a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
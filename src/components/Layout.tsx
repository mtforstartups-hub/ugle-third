import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { NavBar, Footer, ToastContainer, ScrollProgress } from './Shared';
import { motion, AnimatePresence } from 'motion/react';

export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-white text-ugle-slate font-sans selection:bg-[#75C043]/20 relative flex flex-col">
      <ToastContainer />
      <ScrollProgress />
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.main 
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="flex-grow"
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

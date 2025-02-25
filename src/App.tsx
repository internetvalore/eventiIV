import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';
import About from './pages/About';
import FlippingCatalog from './pages/FlippingCatalog';
import Specializations from './pages/Specializations';
import InstantWebsites from './pages/InstantWebsites';
import LeadGeneration from './pages/services/LeadGeneration';
import Ecommerce from './pages/services/Ecommerce';
import Ads from './pages/services/Ads';
import Analytics from './pages/services/Analytics';
import NavigationGuide from './components/NavigationGuide';
import AutomatedTelephoneResponders from './pages/AutomatedTelephoneResponders';

function ScrollHandler() {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollToContact) {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -20
  }
};

const pageTransition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.5
};

function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <ScrollHandler />
      <div className="flex-grow pt-16">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Hero />
                <Services />
                <Contact />
              </motion.div>
            } />
            <Route path="/services" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Services />
              </motion.div>
            } />
            <Route path="/services/lead-generation" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <LeadGeneration />
              </motion.div>
            } />
            <Route path="/services/ecommerce" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Ecommerce />
              </motion.div>
            } />
            <Route path="/services/ads" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Ads />
              </motion.div>
            } />
            <Route path="/services/analytics" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Analytics />
              </motion.div>
            } />
            <Route path="/instant-websites" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <InstantWebsites />
              </motion.div>
            } />
            <Route path="/flipping-catalog" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <FlippingCatalog />
              </motion.div>
            } />
            <Route path="/specializations" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <Specializations />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <About />
              </motion.div>
            } />
            <Route path="/automated-telephone-responders" element={
              <motion.div
                initial="initial"
                animate="in"
                exit="exit"
                variants={pageVariants}
                transition={pageTransition}
              >
                <AutomatedTelephoneResponders />
              </motion.div>
            } />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </AnimatePresence>
      </div>
      <NavigationGuide />
      <Footer />
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;

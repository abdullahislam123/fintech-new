import React from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Topbar from './Topbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="layout-root" style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg-dark)', flexDirection: 'column' }}>
      <div className="main-content" style={{ 
        flex: 1, 
        marginLeft: 0, 
        transition: 'var(--transition-smooth)',
        display: 'flex',
        flexDirection: 'column',
        width: '100%'
      }}>
        <Topbar />
        <main style={{ padding: '0', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={location.key}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{ flex: 1, display: 'flex', flexDirection: 'column' }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;


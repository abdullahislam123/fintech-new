import React from 'react';
import Topbar from './Topbar';
import { motion, AnimatePresence } from 'framer-motion';

const Layout = ({ children }) => {
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
        <main style={{ padding: '0', flex: 1 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={window.location.pathname}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
};

export default Layout;


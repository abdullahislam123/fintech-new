import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaArrowRight } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const JoinHub = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center' }}
      >
        <div style={{ display: 'inline-flex', background: 'rgba(0, 245, 212, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '2rem' }}>
          <FaUserPlus size={32} color="var(--accent-teal)" />
        </div>
        <h1 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1.5rem' }}>Vaultora Institutional Hub</h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.6 }}>
          Designed for funds, organizations, and developers. Get access to enterprise-grade tools, advanced API endpoints, and dedicated account management.
        </p>
        
        <div className="glass-card" style={{ padding: '3rem', borderRadius: '2rem', textAlign: 'left', border: '1px solid var(--accent-teal-soft)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '2rem', color: 'white' }}>Apply for Hub Access</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input type="text" placeholder="Organization Name" style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '1rem', color: 'white', width: '100%', boxSizing: 'border-box' }} />
            <input type="email" placeholder="Work Email" style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '1rem', color: 'white', width: '100%', boxSizing: 'border-box' }} />
            <textarea placeholder="How do you plan to use Vaultora Hub?" rows="4" style={{ padding: '1rem 1.5rem', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', borderRadius: '1rem', color: 'white', width: '100%', resize: 'none', boxSizing: 'border-box' }}></textarea>
            <button type="button" className="btn-primary teal-glow" style={{ width: '100%', justifyContent: 'center', padding: '1rem' }}>
              Submit Application <FaArrowRight />
            </button>
          </form>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default JoinHub;

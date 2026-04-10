import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldDog, FaUserLock } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const Policy = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(0, 245, 212, 0.1)', padding: '1rem', borderRadius: '50%', marginBottom: '2rem' }}>
            <FaUserLock size={32} color="var(--accent-teal)" />
          </div>
          <h1 className="font-heading" style={{ fontSize: '3.5rem', fontWeight: 900, marginBottom: '1rem' }}>Privacy & Security Policy</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem' }}>Your data, your control. Vaultora is built on absolute privacy and security.</p>
        </div>

        <div className="glass-card" style={{ padding: '3rem', borderRadius: '2rem', border: '1px solid var(--glass-border)' }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Non-Custodial Architecture</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
            Vaultora is a client-side interface. We do not hold, control, or have access to your private keys or Secret Recovery Phrase. All transactions are signed locally on your device.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Data Collection</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
            We default to maximum privacy. Vaultora collects zero personally identifiable information (PII) to perform basic wallet functions. Features like Swap and Bridge may require connecting to third-party APIs.
          </p>

          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'white', marginBottom: '1rem' }}>Transaction Shielding</h3>
          <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
             Our built-in transaction monitoring alerts you of suspicious contracts or interactions before you sign them. This acts as an automated security layer without compromising your data privacy.
          </p>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Policy;

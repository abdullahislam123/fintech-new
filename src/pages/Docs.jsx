import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaCode, FaPlug, FaKey, FaArrowRight } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const Docs = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem' }}>Vaultora Developer Docs</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto' }}>
            Build supercharged on-chain experiences. Integrate with Vaultora SDK, utilize Smart Accounts, and extend functionality with Vaultora Plugins.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {[
            { icon: <FaCode />, title: "Vaultora SDK", desc: "Integrate Vaultora into your dApp with just a few lines of code. Support for Unity, React, and native mobile." },
            { icon: <FaKey />, title: "Smart Accounts Kit", desc: "Create walletless dapps and embedded wallets using Account Abstraction (ERC-4337)." },
            { icon: <FaPlug />, title: "Plugins & Snaps", desc: "Extend Vaultora's capabilities. Build custom transaction insights or add new blockchain networks." },
            { icon: <FaBook />, title: "Web3 Services", desc: "Trusted dapp infrastructure, RPC nodes, and real-time indexing APIs via the Vaultora API Dashboard." }
          ].map((doc, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5, borderColor: 'var(--accent-teal)' }}
              className="glass-card" 
              style={{ padding: '3rem 2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div style={{ width: '50px', height: '50px', background: 'rgba(0, 245, 212, 0.1)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                {doc.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{doc.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, flex: 1, marginBottom: '2rem' }}>{doc.desc}</p>
              <a href="#" style={{ color: 'var(--accent-teal)', textDecoration: 'none', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                View Documentation <FaArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Docs;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowRight, 
  FaChevronDown, 
  FaBolt,
  FaGlobe,
  FaSpinner,
  FaShieldHalved
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const NETWORKS = [
  { id: 'eth', name: 'Ethereum', icon: '⟠', color: '#627EEA' },
  { id: 'poly', name: 'Polygon', icon: '⬢', color: '#8247E5' },
  { id: 'arb', name: 'Arbitrum', icon: '🔵', color: '#28A0F0' },
  { id: 'opt', name: 'Optimism', icon: '🔴', color: '#FF0420' },
];

const Bridge = () => {
  const [sourceNet, setSourceNet] = useState(NETWORKS[0]);
  const [destNet, setDestNet] = useState(NETWORKS[1]);
  const [amount, setAmount] = useState('');
  const [isBridging, setIsBridging] = useState(false);
  const [step, setStep] = useState(0); // 0: Idle, 1: Initiating, 2: Crossing, 3: Finalizing

  const handleBridge = () => {
    if (!amount) return;
    setIsBridging(true);
    setStep(1);
    
    // Simulate steps
    setTimeout(() => setStep(2), 2500);
    setTimeout(() => setStep(3), 5500);
    setTimeout(() => {
      setIsBridging(false);
      setStep(0);
      setAmount('');
    }, 8500);
  };

  const stepsContent = [
    { title: 'Confirm Transaction', desc: 'Awaiting signature in your wallet...' },
    { title: 'Moving Assets', desc: 'Transferring from source network to Vaultora Vault...' },
    { title: 'Finalizing Transfer', desc: 'Minting assets on destination network...' },
  ];

  const switchNetworks = () => {
    const temp = sourceNet;
    setSourceNet(destNet);
    setDestNet(temp);
  };

  return (
    <div className="bridge-page" style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      
      {/* Background Portal Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '640px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <header style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-3px' }}>Bridge<span style={{ color: 'var(--accent-teal)' }}>.</span></h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 600 }}>Zero-Latency Cross-Chain Infrastructure</p>
        </header>

        <div className="glass-card" style={{ padding: '3rem', background: 'rgba(5, 12, 17, 0.5)', backdropFilter: 'blur(40px)' }}>
          {/* Network Selection Row */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 60px 1fr', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, display: 'block', marginBottom: '0.75rem', letterSpacing: '2px' }}>SOURCE</span>
              <button style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white', 
                fontWeight: 900, 
                fontSize: '1.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                cursor: 'pointer',
                width: '100%',
                letterSpacing: '-0.5px'
              }}>
                <span style={{ fontSize: '1.75rem' }}>{sourceNet.icon}</span> 
                {sourceNet.name}
              </button>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <motion.button 
                whileHover={{ scale: 1.2, rotate: 180 }}
                onClick={switchNetworks}
                style={{ background: 'var(--accent-teal)', border: '4px solid var(--bg-dark)', borderRadius: '14px', padding: '0.5rem', cursor: 'pointer', color: '#050c11', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                <FaArrowRight size={20} />
              </motion.button>
            </div>

            <div className="glass-card" style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '1.5rem' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 800, display: 'block', marginBottom: '0.75rem', letterSpacing: '2px' }}>DESTINATION</span>
              <button style={{ 
                background: 'transparent', 
                border: 'none', 
                color: 'white', 
                fontWeight: 900, 
                fontSize: '1.25rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.75rem',
                cursor: 'pointer',
                width: '100%',
                letterSpacing: '-0.5px'
              }}>
                <span style={{ fontSize: '1.75rem' }}>{destNet.icon}</span> 
                {destNet.name}
              </button>
            </div>
          </div>

          {!isBridging ? (
            <>
              {/* Amount Input */}
              <div className="glass-card" style={{ padding: '2rem', background: 'rgba(0,0,0,0.2)', marginBottom: '2.5rem', border: '1px solid var(--glass-border)', borderRadius: '1.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Asset Amount</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 700 }}>1.24 ETH</span>
                </div>
                <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ 
                      background: 'transparent', 
                      border: 'none', 
                      color: 'white', 
                      fontSize: '2.5rem', 
                      fontWeight: 900, 
                      width: '100%', 
                      outline: 'none',
                      letterSpacing: '-2px'
                    }} 
                  />
                  <button className="glass-card" style={{ padding: '0.75rem 1.75rem', fontWeight: 900, cursor: 'pointer', borderRadius: 'var(--pill-radius)', border: '1px solid var(--accent-teal-soft)', color: 'var(--accent-teal)' }}>MAX</button>
                </div>
              </div>

              {/* Info Box */}
              <div className="glass-card" style={{ padding: '1.5rem', border: '1px solid var(--accent-teal-soft)', marginBottom: '3rem', background: 'rgba(0, 245, 212, 0.03)', borderRadius: '1.5rem' }}>
                <div style={{ display: 'flex', gap: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  <FaBolt size={24} color="var(--accent-teal)" />
                  <div>
                    <strong style={{ color: 'white', display: 'block', marginBottom: '0.25rem', fontWeight: 900 }}>Nitro Relay Active</strong>
                    Elite-grade cross-chain relaying enabled. Settlement in ~120s.
                  </div>
                </div>
              </div>

              <button 
                onClick={handleBridge}
                disabled={!amount}
                className="btn-primary teal-glow" 
                style={{ 
                  width: '100%', 
                  justifyContent: 'center', 
                  height: '4.5rem', 
                  fontSize: '1.25rem', 
                  borderRadius: 'var(--pill-radius)',
                  opacity: amount ? 1 : 0.3,
                  cursor: amount ? 'pointer' : 'not-allowed'
                }}
              >
                Execute Bridge Transfer
              </button>
            </>
          ) : (
            <div style={{ textAlign: 'center', padding: '3rem 0' }}>
              <div style={{ position: 'relative', width: '100px', height: '100px', margin: '0 auto 3rem' }}>
                <FaSpinner size={100} color="var(--accent-teal)" className="animate-spin" style={{ position: 'absolute', top:0, left:0, opacity: 0.1 }} />
                <FaSpinner size={100} color="var(--accent-teal)" className="animate-spin-slow" style={{ position: 'absolute', top:0, left:0 }} />
              </div>
              <h3 className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>{stepsContent[step-1].title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 600 }}>{stepsContent[step-1].desc}</p>
            </div>
          )}
        </div>

        {/* Feature Highlights */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginTop: '2.5rem' }}>
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card" 
            style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}
          >
            <FaShieldHalved size={24} color="var(--accent-teal)" />
            <div>
              <span style={{ fontSize: '1rem', fontWeight: 700, display: 'block' }}>Secure Custody</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Audit-verified smart contracts</span>
            </div>
          </motion.div>
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-card" 
            style={{ padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}
          >
            <FaGlobe size={24} color="var(--accent-teal)" />
            <div>
              <span style={{ fontSize: '1rem', fontWeight: 700, display: 'block' }}>Global Relay</span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Low-latency cross-chain nodes</span>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
      <Footer />
    </div>
  );
};

export default Bridge;

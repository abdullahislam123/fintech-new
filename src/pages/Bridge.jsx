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
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 600 }}>The best of crypto brought to you.</p>
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

        {/* Extra Content Sections - Consistent with site-wide master layout */}
        <div style={{ marginTop: '12rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Bridge Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', maxWidth: '1200px' }}
          >
            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Cross-Chain Infrastructure</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: <FaGlobe />, title: 'Multi-Network Hub', desc: 'Securely move assets between Ethereum, Solana, Arbitrum, and other EVM compatible chains.' },
                { icon: <FaBolt />, title: 'Nitro Settlements', desc: 'Optimized routing nodes ensure cross-chain finality in under 120 seconds for most pairs.' },
                { icon: <FaShieldHalved />, title: 'Trustless Security', desc: 'Immutable smart contracts audited by industry leaders. No centralized custodians involved.' },
                { icon: <FaSpinner />, title: 'Real-time Tracking', desc: 'Track your cross-chain transaction across both source and destination networks in real-time.' }
              ].map((feature, i) => (
                <div key={i} className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--glass-border)'}>
                   <div style={{ fontSize: '2.5rem', color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>{feature.icon}</div>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{feature.title}</h3>
                   <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Bridge Steps */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: '12rem', width: '100%', maxWidth: '1000px', textAlign: 'center' }}
          >
            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '4rem' }}>How To Bridge</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', position: 'relative' }}>
               <div style={{ position: 'absolute', top: '3rem', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', zIndex: 0 }} />
               {[
                 { title: 'Define Route', desc: 'Choose your source and destination networks and the amount to send.' },
                 { title: 'Release Asset', desc: 'Approve and sign the transaction to send tokens to the bridge vault.' },
                 { title: 'Nexus Finality', desc: 'Our relayers verify the proof and release assets on the target chain.' }
               ].map((step, i) => (
                 <div key={i} style={{ flex: 1, zIndex: 1 }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-surface)', border: '2px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontWeight: 900, fontSize: '1.5rem', color: 'var(--accent-teal)', boxShadow: '0 0 20px rgba(0,245,212,0.2)' }}>
                      {i + 1}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{step.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Bridge CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '12rem', 
              marginBottom: '8rem',
              width: '100%', 
              maxWidth: '1200px', 
              background: 'linear-gradient(90deg, rgba(0, 245, 212, 0.05), transparent, rgba(255, 100, 50, 0.05))',
              padding: '4rem',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <h2 className="font-heading" style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Experience Multi-Chain Unity</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
              Bridge assets between 9+ networks with the industry standard for cross-chain security.
            </p>
            <button onClick={() => window.scrollTo({ top: 300, behavior: 'smooth' })} className="btn-primary" style={{ padding: '1.25rem 3rem' }}>Move to Bridge Widget</button>
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

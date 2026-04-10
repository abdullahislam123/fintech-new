import React, { useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { FaCreditCard, FaLock, FaGlobe, FaSpinner, FaCopy } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const VirtualCardVisual = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const rotateX = useTransform(y, [-200, 200], [15, -15]);
  const rotateY = useTransform(x, [-200, 200], [-15, 15]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      style={{ perspective: 1500, width: '100%', maxWidth: '450px' }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          width: '100%',
          aspectRatio: '1.586/1',
          borderRadius: '1.5rem',
          background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.15) 0%, rgba(5, 12, 17, 0.95) 100%)',
          border: '1px solid var(--accent-teal-soft)',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5), inset 0 0 20px rgba(0,245,212,0.1)',
          position: 'relative',
          padding: '2.5rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        <div style={{ position: 'absolute', top: '20%', left: '20%', width: '150px', height: '150px', background: 'var(--accent-teal)', filter: 'blur(80px)', opacity: 0.2, zIndex: 0 }} />
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', transform: 'translateZ(40px)', position: 'relative', zIndex: 1 }}>
          <div className="font-heading" style={{ color: 'white', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-0.5px' }}>
            Vaultora<span style={{ color: 'var(--accent-teal)' }}>Spend</span>
          </div>
          <FaGlobe size={24} color="rgba(255,255,255,0.4)" />
        </div>
        
        <div style={{ transform: 'translateZ(50px)', position: 'relative', zIndex: 1, marginTop: '2rem' }}>
          <div style={{ color: 'white', letterSpacing: '6px', fontSize: '1.5rem', fontWeight: 600, fontFamily: 'monospace', marginBottom: '1rem', display: 'flex', justifyContent: 'space-between' }}>
            <span>4092</span><span>3812</span><span>9910</span><span>2384</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600, letterSpacing: '1px' }}>
             <div>VALID THRU<br/><span style={{ color: 'white', fontSize: '1rem' }}>12/28</span></div>
             <div style={{ textAlign: 'right' }}>CVC<br/><span style={{ color: 'white', fontSize: '1rem' }}>***</span></div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const VirtualCards = () => {
  const [generating, setGenerating] = useState(false);
  const [cardGenerated, setCardGenerated] = useState(false);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setCardGenerated(true);
    }, 2000);
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '10rem', position: 'relative' }}>
      <AnimatedBackground />
      <main style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 2rem 10rem 2rem' }}>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--accent-teal-soft)', background: 'rgba(0, 245, 212, 0.05)', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '2rem', letterSpacing: '2px' }}>
              VAULTORA SPEND
            </div>
            <h1 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', lineHeight: 1.1, letterSpacing: '-2px' }}>
              Instant Virtual<br/><span style={{ color: 'var(--accent-teal)' }}>Crypto Cards.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.6, maxWidth: '500px' }}>
              Generate burner or multi-use virtual cards funded directly by your Web3 assets. Perfect for online subscriptions, temporary purchases, or anonymous spending.
            </p>
            
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 3rem 0' }}>
              {[
                { icon: <FaLock />, text: "Single-Use Burner Capabilities" },
                { icon: <FaGlobe />, text: "Accepted at 40M+ Locations Online" },
                { icon: <FaCreditCard />, text: "Draw Directly from Custody or DeFi" }
              ].map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  style={{ marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '1.25rem', color: 'white', fontSize: '1.1rem', fontWeight: 600 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(0,245,212,0.1)', color: 'var(--accent-teal)' }}>
                    {item.icon}
                  </div>
                  {item.text}
                </motion.li>
              ))}
            </ul>

            <button 
              onClick={handleGenerate}
              disabled={generating || cardGenerated}
              className="btn-primary teal-glow" 
              style={{ padding: '1.25rem 3rem', fontSize: '1.1rem', opacity: (generating || cardGenerated) ? 0.7 : 1 }}
            >
              {generating ? (
                <><FaSpinner className="animate-spin" /> Provisioning Asset Link...</>
              ) : cardGenerated ? (
                'Card Ready for Use'
              ) : (
                'Generate Virtual Card'
              )}
            </button>
          </motion.div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              {!cardGenerated ? (
                <motion.div 
                  key="placeholder"
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="glass-card" 
                  style={{ width: '100%', maxWidth: '450px', aspectRatio: '1.586/1', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px dashed var(--glass-border)', background: 'rgba(255,255,255,0.01)' }}
                >
                  {generating ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }}>
                       <div style={{ width: '60px', height: '60px', borderRadius: '50%', border: '3px solid var(--accent-teal-soft)', borderTopColor: 'var(--accent-teal)' }} />
                    </motion.div>
                  ) : (
                    <>
                      <FaCreditCard size={48} color="rgba(255,255,255,0.1)" style={{ marginBottom: '1.5rem' }} />
                      <div style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '2px' }}>AWAITING GENERATION</div>
                    </>
                  )}
                </motion.div>
              ) : (
                <motion.div key="card" style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <VirtualCardVisual />
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    style={{ marginTop: '3rem', width: '100%', maxWidth: '450px', background: 'rgba(0, 245, 212, 0.05)', border: '1px solid var(--accent-teal-soft)', padding: '1.5rem', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                  >
                    <div>
                      <div style={{ color: 'var(--accent-teal)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '0.5rem' }}>CARD NUMBER</div>
                      <div style={{ color: 'white', fontWeight: 600, fontSize: '1.1rem', fontFamily: 'monospace', letterSpacing: '2px' }}>4092 3812 9910 2384</div>
                    </div>
                    <button style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'white', padding: '0.75rem', borderRadius: '0.5rem', cursor: 'pointer', transition: '0.3s' }} whileHover={{ background: 'var(--accent-teal)', color: 'black' }}>
                      <FaCopy />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </main>
      <Footer />
      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default VirtualCards;

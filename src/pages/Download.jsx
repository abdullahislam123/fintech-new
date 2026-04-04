import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaChrome, FaFirefox, FaArrowRight, FaShieldHalved, FaBolt } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';

const ExtensionCard = ({ browser, icon, gradient, glowColor, users, features }) => {
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

  const rotateX = useTransform(y, [-200, 200], [12, -12]);
  const rotateY = useTransform(x, [-200, 200], [-12, 12]);

  return (
    <motion.div
      style={{ perspective: 1200 }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ 
          rotateX, 
          rotateY, 
          transformStyle: "preserve-3d",
          cursor: "pointer"
        }}
        whileHover={{ scale: 1.02 }}
        className="glass-card"
        onClick={() => alert(`Initiating ${browser} Extension Download...`)}
      >
        <div style={{
          padding: '3rem 2rem',
          background: gradient,
          borderRadius: 'var(--card-radius)',
          border: '1px solid var(--glass-border)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
          boxShadow: `0 20px 50px ${glowColor}20`
        }}>
          {/* Subtle Glow Background */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '200px',
            height: '200px',
            background: glowColor,
            filter: 'blur(100px)',
            opacity: 0.15,
            zIndex: 0
          }} />

          {/* 3D Floating Icon */}
          <motion.div 
            style={{ 
              fontSize: '5rem', 
              marginBottom: '2rem',
              color: 'white',
              position: 'relative',
              zIndex: 1,
              filter: `drop-shadow(0 10px 20px ${glowColor}60)`
            }}
            initial={{ y: 0 }}
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            {icon}
          </motion.div>

          <h2 className="font-heading" style={{ fontSize: '2rem', marginBottom: '0.5rem', position: 'relative', zIndex: 1 }}>{browser}</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', position: 'relative', zIndex: 1 }}>
            Join {users}+ active users
          </p>

          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', width: '100%', position: 'relative', zIndex: 1 }}>
            {features.map((feature, i) => (
              <div key={i} style={{ flex: 1, background: 'rgba(0,0,0,0.3)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                <div style={{ color: glowColor, marginBottom: '0.5rem', fontSize: '1.25rem' }}>{feature.icon}</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 600 }}>{feature.title}</div>
              </div>
            ))}
          </div>

          <button className="btn-primary" style={{ 
            width: '100%', 
            padding: '1.25rem', 
            fontSize: '1.1rem', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '0.75rem',
            position: 'relative',
            zIndex: 1,
            background: 'white',
            color: 'black'
          }}>
            Install Extension <FaArrowRight />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Download = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '8rem', position: 'relative', paddingBottom: '5rem' }}>
      <AnimatedBackground />
      
      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', maxWidth: '800px', marginBottom: '4rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--accent-teal-soft)', background: 'rgba(0, 245, 212, 0.05)', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
            CONNECT WEB3
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Your Portal to the <span className="text-gradient">Decentralized Web</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
            Download the Vaultora browser extension to instantly access thousands of dApps, manage digital assets, and trade with Elite security.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem', width: '100%', maxWidth: '900px' }}>
          <ExtensionCard 
            browser="Chrome" 
            icon={<FaChrome />} 
            gradient="linear-gradient(145deg, rgba(20,25,35,0.7), rgba(10,15,25,0.9))"
            glowColor="#4285F4"
            users="2.5M"
            features={[
              { title: 'Lightning Fast', icon: <FaBolt /> },
              { title: 'Bank-Grade Security', icon: <FaShieldHalved /> }
            ]}
          />
          <ExtensionCard 
            browser="Firefox" 
            icon={<FaFirefox />} 
            gradient="linear-gradient(145deg, rgba(35,20,15,0.7), rgba(25,10,5,0.9))"
            glowColor="#FF7139"
            users="850k"
            features={[
              { title: 'Privacy Focused', icon: <FaShieldHalved /> },
              { title: 'Low Resource', icon: <FaBolt /> }
            ]}
          />
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{ marginTop: '4rem', color: 'var(--text-secondary)', textAlign: 'center', fontSize: '0.9rem' }}
        >
          Also available on <a href="#" style={{ color: 'white' }}>Brave</a>, <a href="#" style={{ color: 'white' }}>Edge</a>, and <a href="#" style={{ color: 'white' }}>Opera</a>.<br/>
          Supports Windows, macOS, and Linux.
        </motion.div>
      </div>
    </div>
  );
};

export default Download;

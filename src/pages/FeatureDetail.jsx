import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaScrewdriverWrench, FaCode, FaGears, FaHammer, FaRegCreditCard, FaWifi, FaShieldHalved, FaBug, FaCrosshairs } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';

// Map pathnames to display titles and icons
const PAGE_CONTENT = {
  '/community': {
    title: 'Community Platform',
    desc: 'Join the decentralized governance and open-source core discussions. Access upcoming community calls and contribution guides.',
    icon: <FaCode />,
    badge: 'OPEN GOVERNANCE',
    badgeColor: 'rgba(130, 71, 229, 0.15)', // Indigo
    primaryBtn: 'Join Discord',
    secondaryBtn: 'View Forums'
  },
  '/policy': {
    title: 'VMI Policy & Bug Bounty',
    desc: 'Help secure the Vaultora Protocol. Explore our bug bounty program and read up on the latest VMI Policy decisions.',
    icon: <FaScrewdriverWrench />,
    badge: 'SECURITY LIVE',
    badgeColor: 'rgba(255, 80, 50, 0.15)', // Orange/Red
    primaryBtn: 'Submit Bug Report',
    secondaryBtn: 'Read Policies',
    customVisual: (
      <motion.div 
        style={{
          width: '100%',
          aspectRatio: '1/1',
          maxWidth: '420px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(40,10,10,0.8) 0%, rgba(10,5,5,1) 100%)',
          boxShadow: '0 0 60px rgba(255,50,0,0.2), inset 0 0 60px rgba(255,50,0,0.3)',
          border: '2px solid rgba(255,80,50,0.4)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
        animate={{ rotateZ: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {/* Outer targeting ring */}
        <motion.div 
          style={{ position: 'absolute', inset: '8%', border: '4px dashed rgba(255,80,50,0.5)', borderRadius: '50%', borderLeftColor: 'transparent', borderRightColor: 'transparent' }}
          animate={{ rotateZ: -720 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        {/* Inner thin targeting ring */}
        <motion.div 
          style={{ position: 'absolute', inset: '18%', border: '1px solid rgba(255,80,50,0.8)', borderRadius: '50%', borderTopColor: 'transparent' }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        {/* Radar scan effect */}
        <motion.div 
          style={{ position: 'absolute', inset: 0, background: 'conic-gradient(from 0deg, transparent 70%, rgba(255,80,50,0.4) 100%)', borderRadius: '50%' }}
          animate={{ rotateZ: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Central Counter rotating container to keep icon upright */}
        <motion.div
          style={{ position: 'relative', zIndex: 5, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          animate={{ rotateZ: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
          {/* Pulsing Shield */}
          <motion.div
            style={{ fontSize: '8rem', color: '#ff4422', filter: 'drop-shadow(0 0 25px rgba(255,60,20,0.8))' }}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <FaShieldHalved />
          </motion.div>
          {/* Overlapping bug icon */}
          <motion.div
            style={{ position: 'absolute', fontSize: '3.5rem', color: '#1a0505', zIndex: 6 }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.1, repeat: Infinity, ease: "linear", repeatDelay: 2.5 }}
          >
           <FaBug />
          </motion.div>
        </motion.div>
        
        {/* Radar Grid */}
        <div style={{ position: 'absolute', inset: -50, backgroundImage: 'linear-gradient(rgba(255,80,50,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,80,50,0.1) 1px, transparent 1px)', backgroundSize: '15px 15px', borderRadius: '50%', opacity: 0.4 }} />
        
        {/* Crosshairs */}
        <FaCrosshairs size={450} color="rgba(255,80,50,0.15)" style={{ position: 'absolute' }} />
      </motion.div>
    )
  },
  '/reporting': {
    title: 'Transparency & Reporting',
    desc: 'Real-time attestation and reserve audits for Vaultora USD and other managed stable assets. Trust through verifiable math.',
    icon: <FaGears />,
    badge: 'REAL-TIME DATA',
    badgeColor: 'rgba(0, 245, 212, 0.1)', // Teal
    primaryBtn: 'View Latest Audit',
    secondaryBtn: 'Verify Reserves',
    customVisual: (
      <motion.div 
        style={{
          width: '400px',
          height: '280px',
          background: 'linear-gradient(180deg, rgba(5,15,20,0.9) 0%, rgba(0,5,10,0.95) 100%)',
          borderRadius: '16px',
          boxShadow: '0 20px 50px rgba(0,245,212,0.1), inset 0 1px 0 rgba(255,255,255,0.1)',
          border: '1px solid rgba(0,245,212,0.3)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
          perspective: 1000
        }}
        animate={{ y: [-10, 10, -10], rotateX: [4, -4, 4], rotateY: [-5, 5, -5] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Header bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,245,212,0.15)', paddingBottom: '1rem', zIndex: 2 }}>
           <div style={{ display: 'flex', gap: '0.5rem' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5555' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#fdda24' }} />
              <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#00f5d4', boxShadow: '0 0 10px #00f5d4' }} />
           </div>
           <motion.div 
             animate={{ opacity: [1, 0.5, 1] }}
             transition={{ duration: 1.5, repeat: Infinity }}
             style={{ color: '#00f5d4', fontSize: '0.75rem', fontWeight: 900, letterSpacing: '2px' }}
           >
             LIVE ATTESTATION
           </motion.div>
        </div>
        
        {/* Animated Grid lines */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,245,212,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,245,212,0.05) 1px, transparent 1px)', backgroundSize: '25px 25px', pointerEvents: 'none', zIndex: 0 }} />

        {/* Live Chart Bars */}
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flex: 1, zIndex: 1, padding: '0 0.5rem', gap: '8px' }}>
           {[0.3, 0.8, 0.5, 0.9, 0.4, 0.7, 0.6, 0.95].map((h, i) => (
             <div key={i} style={{ flex: 1, background: 'rgba(0,245,212,0.05)', borderRadius: '4px 4px 0 0', position: 'relative', height: '100%', display: 'flex', alignItems: 'flex-end' }}>
                <motion.div 
                  animate={{ height: [`${h * 100}%`, `${(Math.random() * 0.4 + 0.3) * 100}%`, `${h * 100}%`] }}
                  transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: 'easeInOut' }}
                  style={{ width: '100%', background: 'linear-gradient(0deg, rgba(0,245,212,0.6) 0%, rgba(0,245,212,1) 100%)', boxShadow: '0 0 15px rgba(0,245,212,0.4)', borderRadius: '4px 4px 0 0' }}
                />
             </div>
           ))}
        </div>
        
        {/* Floating Data Nodes overlay */}
        <motion.div
           style={{ position: 'absolute', zIndex: 2, top: '45%', right: '15%', fontSize: '3rem', color: '#ffffff', filter: 'drop-shadow(0 0 15px #00f5d4)' }}
           animate={{ opacity: [0.8, 1, 0.8], scale: [0.9, 1.1, 0.9], rotate: 360 }}
           transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
           <FaGears />
        </motion.div>
      </motion.div>
    )
  },
  '/docs': {
    title: 'Developer Documentation',
    desc: 'Detailed integration guides, API references, and SDKs to build custom financial tools on top of the Vaultora network.',
    icon: <FaHammer />,
    badge: 'V2.5 API ACTIVE',
    badgeColor: 'rgba(40, 160, 220, 0.15)', // Blue
    primaryBtn: 'Read the Docs',
    secondaryBtn: 'GitHub Repo'
  },
  '/apply': {
    title: 'Apply for Metal Card',
    desc: 'Unlock Elite spending power globally. Apply for the exclusive Vaultora Metal card with up to 5% crypto cashback on dining and luxury.',
    icon: <FaRegCreditCard />,
    badge: 'PREMIUM TIER',
    badgeColor: 'rgba(220, 180, 40, 0.15)', // Gold
    primaryBtn: 'Start Application',
    secondaryBtn: 'Card Benefits',
    // Realistic Credit Card visual replacing the generic icon
    customVisual: (
      <motion.div 
        style={{
          width: '380px',
          height: '240px',
          background: 'radial-gradient(ellipse at top left, #2a2a2a 0%, #0a0f14 100%)',
          borderRadius: '16px',
          boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 1px 1px rgba(255,255,255,0.15), inset 0 -1px 1px rgba(0,0,0,0.5)',
          border: '1px solid rgba(255,255,255,0.1)',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden'
        }}
        animate={{ y: [-15, 15, -15], rotateY: [-20, 20, -20], rotateX: [5, -5, 5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        {/* Metal Texture overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.02) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.02) 50%, rgba(255,255,255,0.02) 75%, transparent 75%, transparent)', backgroundSize: '4px 4px', mixBlendMode: 'overlay', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-50%', left: '-50%', right: '-50%', bottom: '-50%', background: 'linear-gradient(to bottom right, rgba(255,255,255,0.1), transparent 50%, rgba(255,255,255,0.05))', transform: 'rotate(25deg)', pointerEvents: 'none' }} />
        
        {/* Top row: Chip and Contactless */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', zIndex: 1, marginTop: '0.5rem' }}>
          <div style={{ width: '45px', height: '35px', background: 'linear-gradient(135deg, #d4af37 0%, #aa8000 100%)', borderRadius: '6px', border: '1px solid #775000', opacity: 0.9, position: 'relative', overflow: 'hidden' }}>
             {/* Microchip lines */}
             <div style={{ position: 'absolute', top: '50%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.3)' }} />
             <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: '1px', background: 'rgba(0,0,0,0.3)' }} />
             <div style={{ position: 'absolute', top: '25%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.2)' }} />
             <div style={{ position: 'absolute', top: '75%', left: 0, right: 0, height: '1px', background: 'rgba(0,0,0,0.2)' }} />
          </div>
          <FaWifi size={28} color="#aaa" style={{ transform: 'rotate(90deg)' }} />
        </div>

        {/* Middle: Card Number */}
        <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', letterSpacing: '3px', color: '#e0e0e0', textShadow: '1px 1px 2px rgba(0,0,0,0.8), -1px -1px 0 rgba(255,255,255,0.1)', zIndex: 1 }}>
          **** **** **** 4920
        </div>

        {/* Bottom row: Name and Logo */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', zIndex: 1 }}>
          <div style={{ color: '#ccc', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            VALUED ELITE
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div style={{ width: '35px', height: '35px', background: '#ff5f00', borderRadius: '50%', opacity: 0.85 }} />
            <div style={{ width: '35px', height: '35px', background: '#fdda24', borderRadius: '50%', marginLeft: '-15px', mixBlendMode: 'screen', opacity: 0.85 }} />
          </div>
        </div>
      </motion.div>
    )
  }
};

const FeatureDetail = () => {
  const location = useLocation();
  const path = location.pathname;
  
  // Default fallback content if route not in map
  const content = PAGE_CONTENT[path] || {
    title: path.substring(1).replace('-', ' ').toUpperCase(),
    desc: 'Access advanced Elite tools and explore our rapidly evolving DeFi ecosystem securely and efficiently.',
    icon: <FaScrewdriverWrench />,
    badge: 'SYSTEM ACTIVE',
    badgeColor: 'rgba(0, 245, 212, 0.1)',
    primaryBtn: 'Access Module',
    secondaryBtn: 'More Info'
  };

  return (
    <div style={{ minHeight: '100vh', paddingTop: '8rem', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <AnimatedBackground />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', flex: 1, w: '100%' }}>
        
        <Link to="/" style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', marginBottom: '4rem', fontWeight: 600, transition: 'color 0.2s' }} onMouseEnter={e => e.target.style.color='white'} onMouseLeave={e => e.target.style.color='var(--text-secondary)'}>
          <FaArrowLeft /> Back to Home
        </Link>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', flex: 1, alignItems: 'center' }}>
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--glass-border)', background: content.badgeColor, color: 'white', fontWeight: 800, fontSize: '0.875rem', marginBottom: '1.5rem', letterSpacing: '1px' }}>
              {content.badge}
            </div>
            <h1 className="font-heading" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem', textTransform: 'capitalize' }}>
              {content.title}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', maxWidth: '600px' }}>
              {content.desc}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem' }}>
              <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1rem' }}>{content.primaryBtn}</button>
              <button style={{ background: 'transparent', color: 'white', border: '1px solid var(--glass-border)', padding: '1rem 2rem', borderRadius: '12px', fontSize: '1rem', fontWeight: 600, cursor: 'pointer', transition: 'all 0.3s' }} onMouseEnter={e => {e.target.style.background='rgba(255,255,255,0.05)'; e.target.style.borderColor='rgba(255,255,255,0.2)'}} onMouseLeave={e => {e.target.style.background='transparent'; e.target.style.borderColor='var(--glass-border)'}}>
                {content.secondaryBtn}
              </button>
            </div>
          </motion.div>

          {/* Hologram or Custom Visual Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: 'spring' }}
            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', perspective: 1200 }}
          >
            {content.customVisual ? (
              content.customVisual
            ) : (
              <motion.div 
                className="glass-card"
                style={{
                  width: '100%',
                  aspectRatio: '1/1',
                  maxWidth: '500px',
                  borderRadius: 'var(--card-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(20,25,35,0.4), rgba(5,10,15,0.8))',
                  border: `1px solid ${content.badgeColor.replace('0.15', '0.5').replace('0.1', '0.5')}`,
                  boxShadow: `0 0 50px ${content.badgeColor.replace('0.15', '0.3').replace('0.1', '0.3')}`
                }}
                animate={{ y: [-15, 15, -15] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                {/* Radial glow */}
                <div style={{ position: 'absolute', width: '300px', height: '300px', background: content.badgeColor.replace('rgba', 'rgb').replace(/,\s*[0-9.]+\)/, ')'), filter: 'blur(120px)', opacity: 0.15 }} />
                
                {/* Wireframe grids to mimic development/building */}
                <div style={{ position: 'absolute', inset: 0, backgroundSize: '40px 40px', backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)', opacity: 0.5, maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }} />

                <motion.div 
                  style={{ fontSize: '8rem', color: content.badgeColor.replace('rgba', 'rgb').replace(/,\s*[0-9.]+\)/, ')'), zIndex: 2, filter: `drop-shadow(0 0 20px ${content.badgeColor.replace('0.15', '0.5').replace('0.1', '0.5')})` }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                >
                  {content.icon}
                </motion.div>
              </motion.div>
            )}
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default FeatureDetail;

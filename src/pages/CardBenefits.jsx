import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGem, FaPlane, FaCrown, FaShieldHalved } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const BenefitCard = ({ icon, title, desc, delay }) => {
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
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay }}
      style={{ perspective: 1500 }}
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d", height: '100%' }}
        whileHover={{ scale: 1.05 }}
      >
        <div 
          className="glass-card" 
          style={{ 
            padding: '3rem 2rem', 
            borderRadius: '2rem', 
            textAlign: 'center', 
            background: 'linear-gradient(145deg, rgba(10,15,20,0.8), rgba(5,8,12,0.95))',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}
        >
          {/* Subtle Glow */}
          <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'var(--accent-teal)', filter: 'blur(100px)', opacity: 0.1, zIndex: 0 }} />
          
          <div style={{ transform: 'translateZ(40px)', position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '3.5rem', color: 'var(--accent-teal)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center', filter: 'drop-shadow(0 10px 20px rgba(0,245,212,0.3))' }}>
              {icon}
            </div>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', color: 'white', letterSpacing: '-0.5px' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem' }}>{desc}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const CardBenefits = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '10rem', position: 'relative' }}>
      <AnimatedBackground />
      <main style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 2rem 10rem 2rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--accent-teal-soft)', background: 'rgba(0, 245, 212, 0.05)', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '2rem', letterSpacing: '2px' }}>
            ELITE TIER
          </div>
          <h1 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-3px' }}>
            Cardholder <span style={{ color: 'var(--accent-teal)' }}>Benefits.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Holding the Vaultora Card unlocks a suite of premium lifestyle and ecosystem perks unmatched in the Web3 space.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', marginBottom: '8rem' }}>
          <BenefitCard 
            icon={<FaGem />} 
            title="Cashback in Crypto" 
            desc="Earn up to 5% back on all purchases paid out directly to your wallet in ETH or USDC." 
            delay={0.1} 
          />
          <BenefitCard 
            icon={<FaPlane />} 
            title="Global Lounges" 
            desc="Complimentary, unlimited access to over 1,200 premium airport lounges globally." 
            delay={0.2} 
          />
          <BenefitCard 
            icon={<FaCrown />} 
            title="Zero Gas Priority" 
            desc="Cardholders get universally subsidized, front-run protected logic on all in-app swaps." 
            delay={0.3} 
          />
          <BenefitCard 
            icon={<FaShieldHalved />} 
            title="Purchase Protection" 
            desc="Up to $100,000 in comprehensive damage and theft protection on eligible purchases." 
            delay={0.4} 
          />
        </div>

      </main>
      <Footer />
    </div>
  );
};
export default CardBenefits;

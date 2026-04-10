import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaUser, FaEnvelope, FaGlobe, FaChevronRight, FaCheck } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const CardApply = () => {
  const [submitted, setSubmitted] = useState(false);
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

  const rotateX = useTransform(y, [-300, 300], [15, -15]);
  const rotateY = useTransform(x, [-300, 300], [-15, 15]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '0rem' }}>
      <AnimatedBackground />

      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 10rem 2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left Side - 3D Card Showcase */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ perspective: 1500 }}
          >
            <h1 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, letterSpacing: '-2px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              The Ultimate <br /><span style={{ color: 'var(--accent-teal)' }}>Web3 Metal Card.</span>
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', marginBottom: '4rem', lineHeight: 1.6 }}>
              Spend your crypto anywhere in the world. 5% cashback on all purchases, zero fx fees, and seamless Vaultora dashboard integration.
            </p>

            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d",
                width: '100%',
                maxWidth: '450px',
                aspectRatio: '1.586/1',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, rgba(20, 20, 25, 0.9), rgba(5, 5, 8, 1))',
                boxShadow: '0 30px 60px rgba(0,0,0,0.8), inset 0 0 0 1px rgba(255,255,255,0.1)',
                position: 'relative',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
               {/* Chip and Logo */}
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', transform: 'translateZ(30px)' }}>
                 <div style={{ width: '45px', height: '35px', background: 'linear-gradient(135deg, #d4af37, #aa8000)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)' }}></div>
                 <div className="font-heading" style={{ color: 'white', fontWeight: 900, fontSize: '1.5rem', letterSpacing: '-1px' }}>
                   Vaultora<span style={{ color: 'var(--accent-teal)' }}>.</span>
                 </div>
               </div>

               {/* Virtual Details */}
               <div style={{ transform: 'translateZ(40px)' }}>
                 <div style={{ fontFamily: 'monospace', fontSize: '1.5rem', color: 'rgba(255,255,255,0.8)', letterSpacing: '4px', marginBottom: '1rem' }}>
                   **** **** **** 4920
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 600 }}>
                    <span>ELITE MEMBER</span>
                    <span>12/29</span>
                 </div>
               </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Application Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card" style={{ padding: '3.5rem', borderRadius: '2rem' }}>
              {!submitted ? (
                <>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '0.5rem' }}>Priority Waitlist</h3>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '0.9375rem' }}>Join 45,000+ users waiting for the Vaultora Elite Card.</p>
                  
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                        <FaUser />
                      </div>
                      <input 
                        type="text" 
                        placeholder="Full Legal Name" 
                        required
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '1rem', color: 'white', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                        <FaEnvelope />
                      </div>
                      <input 
                        type="email" 
                        placeholder="Email Address" 
                        required
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '1rem', color: 'white', fontSize: '1rem', outline: 'none' }}
                      />
                    </div>

                    <div style={{ position: 'relative' }}>
                      <div style={{ position: 'absolute', left: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}>
                        <FaGlobe />
                      </div>
                      <select 
                        required
                        style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '1.25rem 1.25rem 1.25rem 3.5rem', borderRadius: '1rem', color: 'white', fontSize: '1rem', outline: 'none', appearance: 'none', cursor: 'pointer' }}
                      >
                        <option value="" disabled selected>Country of Residence</option>
                        <option value="us" style={{ background: '#050c11' }}>United States</option>
                        <option value="uk" style={{ background: '#050c11' }}>United Kingdom</option>
                        <option value="eu" style={{ background: '#050c11' }}>European Union</option>
                        <option value="ae" style={{ background: '#050c11' }}>United Arab Emirates</option>
                        <option value="other" style={{ background: '#050c11' }}>Other</option>
                      </select>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                      <button type="submit" className="btn-primary teal-glow" style={{ width: '100%', justifyContent: 'center', height: '4rem', fontSize: '1.125rem', borderRadius: '1rem' }}>
                        Reserve Your Card <FaChevronRight size={14} />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div style={{ textAlign: 'center', padding: '2rem 0' }}>
                  <motion.div 
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.2 }}
                    style={{ width: '80px', height: '80px', background: 'rgba(0, 245, 212, 0.1)', border: '2px solid var(--accent-teal)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem' }}
                  >
                    <FaCheck size={32} color="var(--accent-teal)" />
                  </motion.div>
                  <h3 style={{ fontSize: '2rem', fontWeight: 900, marginBottom: '1rem' }}>You're on the list!</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>We will notify you at your email address as soon as Vaultora cards become available in your region.</p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CardApply;

import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const GenericPage = ({ title, subtitle, content }) => {
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

  const rotateX = useTransform(y, [-500, 500], [5, -5]);
  const rotateY = useTransform(x, [-500, 500], [-5, 5]);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '0rem' }}>
      <AnimatedBackground />

      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 10rem 2rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--accent-teal-soft)', background: 'rgba(0, 245, 212, 0.05)', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '2rem', letterSpacing: '2px' }}>
            VAULTORA PROTOCOL
          </div>
          <h1 className="font-heading" style={{ fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 900, letterSpacing: '-2px', marginBottom: '1.5rem', lineHeight: 1.1 }}>
            {title}<span style={{ color: 'var(--accent-teal)' }}>.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 500, maxWidth: '800px', margin: '0 auto', lineHeight: 1.6 }}>
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          style={{ perspective: 2000 }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
              rotateX, 
              rotateY, 
              transformStyle: "preserve-3d"
            }}
            className="glass-card"
          >
            <div style={{ 
              padding: '4rem 5rem', 
              borderRadius: '2rem',
              background: 'linear-gradient(145deg, rgba(10, 15, 20, 0.8), rgba(5, 8, 12, 0.95))',
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Corner Glow */}
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '400px', height: '400px', background: 'var(--accent-teal)', filter: 'blur(150px)', opacity: 0.05, zIndex: 0 }} />
              
              <div style={{ position: 'relative', zIndex: 1, fontSize: '1.1rem', color: 'var(--text-primary)', lineHeight: 1.8 }}>
                {content}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default GenericPage;

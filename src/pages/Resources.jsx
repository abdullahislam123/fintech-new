import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMagnifyingGlass, 
  FaTerminal, 
  FaFileCode, 
  FaBookOpen, 
  FaUsers, 
  FaBolt, 
  FaShieldHalved, 
  FaCommentDots,
  FaChevronRight,
  FaArrowRight,
  FaGithub
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const DocCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay }}
    whileHover={{ y: -10, borderColor: 'var(--accent-teal-soft)' }}
    className="glass-card" 
    style={{ 
      padding: '2.5rem', 
      cursor: 'pointer',
      background: 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(40px)',
      border: '1px solid var(--glass-border)',
      transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
    }}
  >
    <div style={{ background: 'rgba(0, 245, 212, 0.08)', padding: '1rem', borderRadius: '1rem', width: 'fit-content', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Icon size={24} color="var(--accent-teal)" />
    </div>
    <h3 style={{ color: 'white', fontSize: '1.25rem', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, fontWeight: 500 }}>{desc}</p>
    <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem' }}>
       View Docs <FaChevronRight size={14} />
    </div>
  </motion.div>
);

const Resources = () => {
  return (
    <div className="resources-page" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />
      
      {/* Background Portal Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '50vw', height: '50vw', background: 'radial-gradient(circle, rgba(0, 245, 212, 0.05) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />

      {/* Header */}
      <section style={{ padding: '12rem 4rem 6rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading" 
          style={{ fontSize: 'max(5rem, 8vw)', fontWeight: 900, color: 'white', marginBottom: '2.5rem', letterSpacing: '-4px' }}
        >
          Developer <span style={{ color: 'var(--accent-teal)' }}>Hub.</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.35rem', maxWidth: '750px', margin: '0 auto 5rem', lineHeight: 1.6, fontWeight: 500 }}
        >
          Technical documentation, community forums, and security bulletins for the global Vaultora ecosystem.
        </motion.p>

        {/* Search Bar */}
        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          <div className="glass-card" style={{ padding: '0.8rem', display: 'flex', gap: '1.5rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(50px)' }}>
            <div style={{ padding: '1.125rem', display: 'flex', alignItems: 'center' }}><FaMagnifyingGlass size={20} color="var(--text-muted)" /></div>
            <input 
              type="text" 
              placeholder="Search documentation, SDKs, or protocols..." 
              style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '1.15rem', fontWeight: 600 }} 
            />
            <button className="btn-primary teal-glow" style={{ transform: 'none', boxShadow: 'none', padding: '0 3rem' }}>
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Docs Grid */}
      <section style={{ padding: '6rem 4rem', maxWidth: '1440px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', marginBottom: '2.5rem' }}>
          <DocCard icon={FaTerminal} title="Quick Start Guide" desc="Integrate Vaultora's Elite grade SDK into your app in less than 5 minutes." delay={0.1} />
          <DocCard icon={FaFileCode} title="API Reference" desc="Detailed technical documentation for our unified REST and WebSocket endpoints." delay={0.2} />
          <DocCard icon={FaShieldHalved} title="Security Protocol" desc="Ensuring your organization meets the strictest Elite compliance standards." delay={0.3} />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2.5rem' }}>
          <DocCard icon={FaUsers} title="Ecosystem Governance" desc="Join the specialized forums and participate in the Vaultora DAO decision metrics." delay={0.4} />
          <DocCard icon={FaBolt} title="VMI Infrastructure" desc="Automate your node orchestration with VPC and containerized cloud integrations." delay={0.5} />
        </div>
      </section>

      {/* Community Section */}
      <section style={{ padding: '8rem 4rem', position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <div className="glass-card" style={{ maxWidth: '1200px', margin: '0 auto', padding: '6rem', background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.05) 0%, rgba(5,12,17,0.8) 100%)', border: '1px solid var(--accent-teal-soft)', backdropFilter: 'blur(60px)' }}>
          <h2 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '2rem', letterSpacing: '-3px' }}>Join the global core.</h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.35rem', marginBottom: '5rem', maxWidth: '800px', margin: '0 auto 5rem', fontWeight: 500 }}>
            Collaborate with thousands of researchers and Elite partners building the future of algorithmic finance on Vaultora.
          </p>
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <button className="btn-primary teal-glow" style={{ padding: '1.35rem 4.5rem', fontSize: '1.1rem' }}>Open Discord Hub</button>
            <button className="glass-card" style={{ padding: '1.35rem 4.5rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '1rem' }}>
               Official Forums <FaArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;

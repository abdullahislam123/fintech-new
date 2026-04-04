import React from 'react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { 
  FaBuilding, 
  FaLock, 
  FaShieldHalved, 
  FaBolt, 
  FaArrowRight,
  FaChartBar,
  FaGlobe,
  FaServer,
  FaFingerprint,
  FaCircleCheck,
  FaFileLines,
  FaChartLine
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const FeatureCard = ({ icon: Icon, title, desc, delay, isActive }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay, ease: [0.16, 1, 0.3, 1] }}
    className="glass-card" 
    style={{ 
      padding: '3rem', 
      height: '100%',
      border: isActive ? '1px solid var(--accent-teal-soft)' : '1px solid var(--glass-border)',
      background: isActive ? 'rgba(0, 245, 212, 0.03)' : 'rgba(255, 255, 255, 0.02)',
      backdropFilter: 'blur(40px)'
    }}
  >
    <div style={{ 
      background: isActive ? 'rgba(0, 245, 212, 0.1)' : 'rgba(130, 71, 229, 0.1)', 
      padding: '1.25rem', 
      borderRadius: '1.25rem', 
      width: 'fit-content', 
      marginBottom: '2rem',
      border: isActive ? '1px solid rgba(0, 245, 212, 0.2)' : '1px solid rgba(130, 71, 229, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Icon size={24} color={isActive ? 'var(--accent-teal)' : '#8247E5'} />
    </div>
    <h3 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 900, marginBottom: '1rem', letterSpacing: '-1px' }}>{title}</h3>
    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontSize: '1rem', fontWeight: 500 }}>{desc}</p>
  </motion.div>
);

const Elite = () => {
  const location = useLocation();
  const path = location.pathname;

  const contentMap = {
    '/vmi': {
      label: 'VMI PROTOCOL',
      title: 'Managed Node Infrastructure.',
      desc: 'Deploy redundant, Elite-grade validator nodes across 24 global regions with one-click orchestration.',
      accent: 'var(--accent-teal)'
    },
    '/policy': {
      label: 'POLICY CONTROL',
      title: 'Enterprise Risk Management.',
      desc: 'Define complex multi-sig governance and transaction rules to secure organizational assets at scale.',
      accent: '#8247E5'
    },
    '/reporting': {
      label: 'COMPLIANCE REPORTING',
      title: 'Audit-Ready Intelligence.',
      desc: 'Export high-fidelity transaction data formatted for global regulatory, tax, and legal requirements.',
      accent: '#3b82f6'
    }
  };

  const current = contentMap[path] || contentMap['/vmi'];

  return (
    <div className="Elite-page" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />
      
      {/* Background Portal Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '50vw', height: '50vw', background: `radial-gradient(circle, ${current.accent === 'var(--accent-teal)' ? 'rgba(0, 245, 212, 0.1)' : 'rgba(130, 71, 229, 0.1)'} 0%, transparent 70%)`, filter: 'blur(100px)', zIndex: 0 }} />

      {/* Hero Section */}
      <section style={{ padding: '12rem 4rem 6rem', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <motion.div
           key={path + '-label'}
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           className="capsule-badge"
           style={{ 
             display: 'inline-flex', 
             alignItems: 'center', 
             gap: '0.75rem', 
             borderColor: current.accent,
             color: current.accent,
             marginBottom: '3rem'
           }}
        >
          {path === '/vmi' ? <FaServer size={14} /> : path === '/policy' ? <FaLock size={14} /> : <FaFileLines size={14} />}
          {current.label}
        </motion.div>
        
        <motion.h1 
          key={path + '-title'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading" 
          style={{ fontSize: 'max(5rem, 8vw)', fontWeight: 900, color: 'white', maxWidth: '1200px', margin: '0 auto 2.5rem', lineHeight: 0.9, letterSpacing: '-4px' }}
        >
          {current.title.split('.')[0]}<span style={{ color: current.accent }}>.</span>
        </motion.h1>
        
        <motion.p 
          key={path + '-desc'}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{ color: 'var(--text-secondary)', fontSize: '1.35rem', maxWidth: '800px', margin: '0 auto 5rem', lineHeight: 1.6, fontWeight: 500 }}
        >
          {current.desc}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}
        >
          <button className="btn-primary" style={{ background: current.accent, color: '#050c11', padding: '1.25rem 3.5rem', fontSize: '1.1rem' }}>
            Request Access
          </button>
          <button className="glass-card" style={{ padding: '1.25rem 3.5rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer' }}>
            View Documentation
          </button>
        </motion.div>
      </section>

      {/* Grid Features */}
      <section style={{ padding: '6rem 4rem', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
          {path === '/vmi' ? (
            <>
              <FeatureCard icon={FaServer} title="Edge Nodes" desc="Proprietary low-latency nodes optimized for high-frequency Elite trading." delay={0.1} isActive={true} />
              <FeatureCard icon={FaChartLine} title="99.99% Uptime" desc="SLA-backed infrastructure with automated failover and 24/7 reliability." delay={0.2} isActive={true} />
              <FeatureCard icon={FaGlobe} title="24 Regions" desc="Geographically distributed infrastructure to meet local data sovereignty rules." delay={0.3} isActive={true} />
            </>
          ) : path === '/policy' ? (
            <>
              <FeatureCard icon={FaLock} title="Multi-Sig Engine" desc="Advanced m-of-n approval workflows for every organizational transaction." delay={0.1} isActive={true} />
              <FeatureCard icon={FaFingerprint} title="Biometric Auth" desc="Hardware-level isolation for key management and transaction signing." delay={0.2} isActive={true} />
              <FeatureCard icon={FaBuilding} title="Quorum Rules" desc="Define complex governance structures for managing treasury assets." delay={0.3} isActive={true} />
            </>
          ) : (
            <>
              <FeatureCard icon={FaChartBar} title="Real-Time Audits" desc="Streaming transaction data for immediate internal and external auditing." delay={0.1} isActive={true} />
              <FeatureCard icon={FaFileLines} title="Tax Portability" desc="Generate audit-ready reports formatted for global tax jurisdictions." delay={0.2} isActive={true} />
              <FeatureCard icon={FaShieldHalved} title="KYT Monitoring" desc="Automated Know-Your-Transaction monitoring for anti-money laundering." delay={0.3} isActive={true} />
            </>
          )}
        </div>
      </section>

      {/* Trust Section */}
      <section style={{ padding: '10rem 4rem', position: 'relative', zIndex: 1, background: 'rgba(5, 12, 17, 0.4)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem', alignItems: 'center' }}>
          <div>
            <h2 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, color: 'white', marginBottom: '2.5rem', letterSpacing: '-3px' }}>Compliance First. <br />Always.</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', lineHeight: 1.7, marginBottom: '4rem', fontWeight: 500 }}>
              Vaultora is built from the ground up to meet the strictest regulatory standards. Our security stack includes MPC-CMP technology, hardware-isolated enclaves, and real-time transaction monitoring.
            </p>
            <div style={{ display: 'grid', gap: '2rem' }}>
              {[
                { icon: FaFingerprint, text: 'Biometric & Hardware Auth Integration' },
                { icon: FaGlobe, text: 'Global Regulatory License Network' },
                { icon: FaShieldHalved, text: 'SOC2 Type II & ISO 27001 Certified' }
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'white', fontWeight: 800, fontSize: '1.1rem' }}>
                  <div style={{ background: 'rgba(130, 71, 229, 0.1)', padding: '0.75rem', borderRadius: '1rem', border: '1px solid rgba(130, 71, 229, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <item.icon size={18} color="#8247E5" />
                  </div>
                  {item.text}
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card" style={{ padding: '4rem', borderRadius: '2.5rem', border: '1px solid rgba(130, 71, 229, 0.1)', background: 'linear-gradient(135deg, rgba(130, 71, 229, 0.05) 0%, rgba(5,12,17,0.5) 100%)', backdropFilter: 'blur(50px)' }}>
             <pre style={{ color: '#a78bfa', fontSize: '1rem', lineHeight: 1.8, fontFamily: 'monospace', fontWeight: 600 }}>
{`// Policy Control API
const policy = await Vaultora.createPolicy({
  name: "Elite Custody",
  assets: ["ETH", "USDC"],
  rules: {
    maxDailyVolume: "10,000,000 USD",
    requireApproval: 3,
    approvers: ["CEO", "CFO", "Compliance"],
    whitelistedOnly: true
  }
});`}
             </pre>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Elite;

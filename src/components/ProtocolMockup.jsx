import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowTrendUp, FaWallet, FaBell, FaMagnifyingGlass, FaChartLine, FaEllipsis, FaHouse, FaChartPie, FaArrowsRotate, FaShieldHalved } from 'react-icons/fa6';

const ProtocolMockup = () => {
  // SVG Area Chart Data
  const chartPoints = "M0,60 C20,55 40,75 60,40 C80,10 100,50 120,30 C140,15 160,45 180,25 C200,5 220,35 240,20 L240,100 L0,100 Z";
  const linePoints = "M0,60 C20,55 40,75 60,40 C80,10 100,50 120,30 C140,15 160,45 180,25 C200,5 220,35 240,20";

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      style={{ 
        position: 'relative', 
        width: '320px', 
        height: '670px', 
        margin: '0 auto',
        perspective: '1000px'
      }}
    >
      {/* Background Ambient Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '200%',
        height: '120%',
        background: 'radial-gradient(circle, rgba(0, 245, 212, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      {/* Modern Phone Frame (Slim Bezel) */}
      <motion.div 
        animate={{ rotateY: [-2, 2, -2], rotateX: [1, -1, 1] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{
          width: '100%',
          height: '100%',
          background: '#010409',
          borderRadius: '44px',
          border: '10px solid #1a1a1a',
          position: 'relative',
          zIndex: 2,
          overflow: 'hidden',
          boxShadow: `
            0 50px 100px -20px rgba(0, 0, 0, 0.8),
            0 0 20px rgba(0, 245, 212, 0.1),
            inset 0 0 20px rgba(255, 255, 255, 0.05)
          `,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {/* Dynamic Island */}
        <div style={{
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100px',
          height: '28px',
          background: '#000',
          borderRadius: '14px',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 8px',
          gap: '6px'
        }}>
          <div style={{ width: '6px', height: '6px', background: '#1a1a1a', borderRadius: '50%' }} />
          <div style={{ width: '6px', height: '6px', background: 'var(--accent-teal)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-teal)' }} />
        </div>

        {/* Content Area */}
        <div style={{ flex: 1, padding: '48px 24px 20px', display: 'flex', flexDirection: 'column' }}>
          {/* Top Bar */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--accent-teal-soft)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                   <FaShieldHalved size={14} color="var(--accent-teal)" />
                </div>
                <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'white' }}>Vaultora</span>
             </div>
             <FaBell size={18} color="var(--text-muted)" />
          </div>

          {/* Balance Card */}
          <div className="glass-card" style={{ padding: '20px', marginBottom: '28px', background: 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%)' }}>
             <p style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--text-muted)', marginBottom: '8px', letterSpacing: '1px', textTransform: 'uppercase' }}>Assets Value</p>
             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                <h2 style={{ fontSize: '2.25rem', fontWeight: 900, color: 'white', letterSpacing: '-1px' }}>$12,450</h2>
                <div style={{ color: 'var(--accent-teal)', fontSize: '0.8rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '4px' }}>
                   <FaArrowTrendUp size={12} /> +5.2%
                </div>
             </div>
          </div>

          {/* Chart Section */}
          <div style={{ height: '100px', marginBottom: '32px', position: 'relative' }}>
             <svg viewBox="0 0 240 100" style={{ width: '100%', height: '100%', overflow: 'visible' }}>
                <motion.path d={chartPoints} fill="url(#mobileFill)" initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1.5 }} />
                <motion.path d={linePoints} fill="none" stroke="var(--accent-teal)" strokeWidth="4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, ease: "easeInOut" }} />
                <defs>
                   <linearGradient id="mobileFill" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="var(--accent-teal)" />
                      <stop offset="100%" stopColor="transparent" />
                   </linearGradient>
                </defs>
             </svg>
          </div>

          {/* Actions Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '40px' }}>
             {[
                { icon: <FaArrowsRotate size={18} />, label: 'Swap' },
                { icon: <FaArrowTrendUp size={18} />, label: 'Stake' },
                { icon: <FaChartLine size={18} />, label: 'Bridge' },
                { icon: <FaWallet size={18} />, label: 'Send' }
             ].map((action, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                   <div className="glass-card" style={{ width: '50px', height: '50px', margin: '0 auto 8px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      {React.cloneElement(action.icon, { color: 'var(--accent-teal)' })}
                   </div>
                   <span style={{ fontSize: '0.65rem', fontWeight: 800, color: 'var(--text-secondary)' }}>{action.label}</span>
                </div>
             ))}
          </div>

          {/* Featured Pool */}
          <div style={{ flex: 1 }}>
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h3 style={{ fontSize: '0.9rem', fontWeight: 900, color: 'white' }}>Top Opportunities</h3>
                <span style={{ fontSize: '0.7rem', color: 'var(--accent-teal)', fontWeight: 800 }}>See All</span>
             </div>
             <div className="glass-card" style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid rgba(0, 245, 212, 0.1)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                   <div style={{ width: '36px', height: '36px', background: 'rgba(0, 245, 212, 0.05)', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <FaChartPie size={16} color="var(--accent-teal)" />
                   </div>
                   <div>
                      <p style={{ fontSize: '0.8rem', fontWeight: 800, color: 'white' }}>ETH Vault</p>
                      <p style={{ fontSize: '0.65rem', color: 'var(--text-muted)', fontWeight: 600 }}>4.2% APY</p>
                   </div>
                </div>
                <button style={{ background: 'var(--accent-teal)', border: 'none', padding: '6px 12px', borderRadius: '8px', color: '#000', fontWeight: 900, fontSize: '0.7rem' }}>Stake</button>
             </div>
          </div>
        </div>

        {/* Bottom Nav */}
        <div style={{ 
          padding: '12px 24px 34px', 
          background: 'rgba(2, 6, 9, 0.95)', 
          borderTop: '1px solid var(--glass-border)',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          backdropFilter: 'blur(10px)'
        }}>
           <FaHouse size={20} color="var(--accent-teal)" />
           <FaChartPie size={20} color="var(--text-muted)" />
           <div style={{ width: '48px', height: '48px', background: 'var(--accent-teal)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-40px', boxShadow: '0 10px 20px rgba(0, 245, 212, 0.3)', transform: 'rotate(45deg)' }}>
              <FaArrowsRotate size={20} color="#000" style={{ transform: 'rotate(-45deg)' }} />
           </div>
           <FaChartLine size={20} color="var(--text-muted)" />
           <FaWallet size={20} color="var(--text-muted)" />
        </div>
      </motion.div>

      {/* Outer Floating Tokens */}
      <motion.div 
        animate={{ y: [-20, 20], rotate: [0, 15, -15, 0] }}
        transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        style={{ position: 'absolute', top: '15%', right: '-50px', zIndex: 1 }}
      >
        <div className="glass-card" style={{ padding: '14px', borderRadius: '18px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
           <div style={{ width: '30px', height: '30px', background: '#627EEA', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem' }}>Ξ</div>
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [20, -20], rotate: [0, -12, 12, 0] }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        style={{ position: 'absolute', bottom: '25%', left: '-60px', zIndex: 1 }}
      >
        <div className="glass-card" style={{ padding: '14px', borderRadius: '18px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
           <div style={{ width: '30px', height: '30px', background: '#F7931A', borderRadius: '50%', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: '1.2rem' }}>₿</div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProtocolMockup;

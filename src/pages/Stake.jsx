import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  FaChartBar, 
  FaShieldHalved, 
  FaBolt, 
  FaArrowRight,
  FaArrowTrendUp,
  FaLock,
  FaChevronRight,
  FaCircleInfo,
  FaClock,
  FaCircleCheck,
  FaPlus
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import StatCounter from '../components/StatCounter';

const STAKING_POOLS = [
  { id: 1, name: 'Ethereum Mainnet', symbol: 'ETH', apr: 4.2, status: 'Live', tvl: '1.2B', color: '#627EEA' },
  { id: 2, name: 'Polygon PoS', symbol: 'MATIC', apr: 7.8, status: 'Live', tvl: '450M', color: '#8247E5' },
  { id: 3, name: 'Arbitrum One', symbol: 'ARB', apr: 6.5, status: 'Live', tvl: '320M', color: '#28A0F0' },
  { id: 4, name: 'Solana Network', symbol: 'SOL', apr: 5.1, status: 'Live', tvl: '890M', color: '#14F195' },
];

const Stake = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [selectedPool, setSelectedPool] = useState(STAKING_POOLS[0]);
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="stake-page" style={{ position: 'relative', minHeight: '100vh', padding: isMobile ? '8rem 1.5rem 4rem' : '10rem 4rem' }}>
      <AnimatedBackground />

      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ marginBottom: isMobile ? '3rem' : '6rem' }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading" 
            style={{ fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: 1.1 }}
          >
            Earn <span style={{ color: 'var(--accent-teal)' }}>Crypto.</span>
          </motion.h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: isMobile ? '1.1rem' : '1.25rem', fontWeight: 600 }}>Grow your crypto with enterprise-grade validator infrastructure.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr', gap: isMobile ? '3rem' : '4rem' }}>
          <section>
            <div className="glass-card" style={{ padding: isMobile ? '2rem' : '3rem', marginBottom: '3rem', background: 'rgba(5, 12, 17, 0.5)', backdropFilter: 'blur(40px)' }}>
               <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: isMobile ? '2rem' : '3rem', gap: '1.5rem' }}>
                 <h2 style={{ color: 'white', fontSize: isMobile ? '1.5rem' : '1.75rem', fontWeight: 900, letterSpacing: '-1px' }}>Available Protocol Vaults</h2>
                 <div className="capsule-badge" style={{ color: 'var(--accent-teal)', borderColor: 'var(--accent-teal-soft)', fontSize: '0.7rem' }}>
                   AUTO-COMPOUNDING ACTIVE
                 </div>
               </div>

               <div style={{ display: 'grid', gap: '1.25rem' }}>
                 {STAKING_POOLS.map((pool) => (
                    <motion.div 
                      key={pool.id}
                      whileHover={isMobile ? {} : { x: 10, background: 'rgba(255,255,255,0.03)' }}
                      onClick={() => setSelectedPool(pool)}
                      style={{ 
                        padding: isMobile ? '1.25rem' : '1.75rem', 
                        borderRadius: '1.5rem', 
                        border: '1px solid var(--glass-border)',
                        background: selectedPool.id === pool.id ? 'rgba(0, 245, 212, 0.05)' : 'transparent',
                        borderColor: selectedPool.id === pool.id ? 'var(--accent-teal-soft)' : 'var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '1rem' : '2rem' }}>
                        <div style={{ 
                          width: isMobile ? '40px' : '56px', 
                          height: isMobile ? '40px' : '56px', 
                          background: pool.color,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: isMobile ? '1rem' : '1.25rem',
                          color: 'white',
                          fontWeight: 900,
                          boxShadow: `0 0 30px ${pool.color}33`
                        }}>
                          {pool.symbol[0]}
                        </div>
                        <div>
                          <div style={{ color: 'white', fontWeight: 800, fontSize: isMobile ? '0.9rem' : '1.125rem' }}>{pool.name}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700 }}>TVL: ${pool.tvl}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'var(--accent-teal)', fontWeight: 900, fontSize: isMobile ? '1.1rem' : '1.5rem' }}>{pool.apr}%</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.65rem', fontWeight: 800 }}>EST. APR</div>
                      </div>
                    </motion.div>
                 ))}
               </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: '1.5rem' }}>
              {[
                { label: 'Total Staked', value: 890, suffix: 'M', icon: FaLock },
                { label: 'Validators', value: 12400, suffix: '', icon: FaShieldHalved },
                { label: 'Integrity', value: 99, suffix: '%', icon: FaBolt }
              ].map((stat, i) => (
                <div key={i} className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}>
                    <stat.icon size={22} color="var(--accent-teal)" />
                  </div>
                  <div style={{ color: 'white', fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-1px' }}>
                    <StatCounter value={stat.value} duration={2000} />{stat.suffix}
                  </div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 800 }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          <aside>
            <div className="glass-card" style={{ padding: '3rem', position: 'sticky', top: '120px', border: '1px solid var(--accent-teal-soft)', background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.05) 0%, rgba(5,12,17,0.5) 100%)' }}>
               <h3 style={{ color: 'white', fontSize: '2rem', fontWeight: 900, marginBottom: '2.5rem', letterSpacing: '-1px' }}>Stake {selectedPool.symbol}</h3>
               
               <div style={{ marginBottom: '2.5rem' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                   <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 800 }}>STAKING QUANTITY</span>
                   <span style={{ color: 'var(--accent-teal)', fontSize: '0.8125rem', fontWeight: 800 }}>MAX: 12.4 {selectedPool.symbol}</span>
                 </div>
                 <div style={{ position: 'relative' }}>
                   <input 
                     type="number" 
                     placeholder="0.0" 
                     value={amount}
                     onChange={(e) => setAmount(e.target.value)}
                     style={{ 
                       width: '100%', 
                       background: 'rgba(255,255,255,0.03)', 
                       border: '1px solid var(--glass-border)', 
                       borderRadius: '1.25rem', 
                       padding: '1.5rem', 
                       color: 'white', 
                       fontSize: '2rem', 
                       fontWeight: 900, 
                       outline: 'none',
                       letterSpacing: '-1px'
                     }} 
                   />
                   <div style={{ position: 'absolute', right: '1.5rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)', fontWeight: 900 }}>
                     {selectedPool.symbol}
                   </div>
                 </div>
               </div>

               <div style={{ display: 'grid', gap: '1.25rem', marginBottom: '3.5rem' }}>

                 <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem' }}>
                   <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Exchange Fee</span>
                   <span style={{ color: 'var(--accent-teal)', fontWeight: 900 }}>NO FEE</span>
                 </div>
               </div>

               <button 
                 className="btn-primary teal-glow" 
                 style={{ width: '100%', justifyContent: 'center', height: '4.5rem', fontSize: '1.25rem', borderRadius: 'var(--pill-radius)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
               >
                 Confirm Staking <FaPlus size={20} />
               </button>
               
               <p style={{ marginTop: '2rem', fontSize: '0.8125rem', color: 'var(--text-muted)', textAlign: 'center', lineHeight: 1.6, fontWeight: 500 }}>
                 Vaultora uses non-custodial liquid staking protocols. Your assets remain under your cryptographic control at all times.
               </p>
            </div>
          </aside>
        </div>

        {/* Extra Content Sections */}
        <div style={{ marginTop: isMobile ? '6rem' : '12rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* Staking Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', maxWidth: '1200px' }}
          >
            <h2 className="font-heading" style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '2.5rem' : '4rem', textAlign: 'center', lineHeight: 1.2 }}>Enterprise Security</h2>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
              {[
                { icon: <FaShieldHalved />, title: 'Institutional Nodes', desc: 'Secure, low-latency validator infrastructure hosted in global tier-1 data centers.' },
                { icon: <FaLock />, title: 'Non-Custodial', desc: 'Maintain full control of your private keys. Assets are locked in open-source smart contracts.' },
                { icon: <FaArrowTrendUp />, title: 'Real-time Rewards', desc: 'Watch your assets grow in real-time with rewards distributed every block.' },
                { icon: <FaBolt />, title: 'Instant Liquidity', desc: 'Receive Liquid Staking Tokens (LSTs) to maintain capital efficiency while earning.' }
              ].map((feature, i) => (
                <div key={i} className="glass-card" style={{ padding: isMobile ? '2rem' : '2.5rem', borderRadius: '24px', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--glass-border)'}>
                   <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>{feature.icon}</div>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{feature.title}</h3>
                   <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Staking Steps */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: isMobile ? '6rem' : '12rem', width: '100%', maxWidth: '1000px', textAlign: 'center' }}
          >
            <h2 className="font-heading" style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '3rem' : '4rem' }}>The Staking Process</h2>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: '3rem', position: 'relative' }}>
               {!isMobile && <div style={{ position: 'absolute', top: '3rem', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', zIndex: 0 }} />}
               {[
                 { title: 'Select Network', desc: 'Choose a blockchain from the available protocol vaults.' },
                 { title: 'Deposit Tokens', desc: 'Allocate your assets into the high-yield staking contract.' },
                 { title: 'Earn Interest', desc: 'Accrue rewards with 100% automated protocol distribution.' }
               ].map((step, i) => (
                 <div key={i} style={{ flex: 1, zIndex: 1 }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-surface)', border: '2px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', fontWeight: 900, fontSize: '1.5rem', color: 'var(--accent-teal)', boxShadow: '0 0 20px rgba(0,245,212,0.2)' }}>
                      {i + 1}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{step.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Custom CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: isMobile ? '6rem' : '12rem', 
              marginBottom: '6rem',
              width: isMobile ? 'calc(100% - 3rem)' : '100%', 
              maxWidth: '1200px', 
              background: 'linear-gradient(135deg, rgba(130, 71, 229, 0.05), transparent, rgba(0, 245, 212, 0.05))',
              padding: isMobile ? '3rem 1.5rem' : '5rem',
              borderRadius: '32px',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <h2 className="font-heading" style={{ fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Earn crypto today</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '3rem', fontSize: isMobile ? '0.95rem' : '1.1rem' }}>
              Join the largest institutional staking network. No minimums, no setup required. Grow your portfolio passively.
            </p>
            <button onClick={() => window.scrollTo({ top: isMobile ? 500 : 300, behavior: 'smooth' })} className="btn-primary" style={{ padding: '1.25rem 3.5rem', width: isMobile ? '100%' : 'auto', justifyContent: 'center' }}>Select a Vault</button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Stake;

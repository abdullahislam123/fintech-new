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
  const [selectedPool, setSelectedPool] = useState(STAKING_POOLS[0]);
  const [amount, setAmount] = useState('');

  return (
    <div className="stake-page" style={{ position: 'relative', minHeight: '100vh', padding: '10rem 4rem' }}>
      <AnimatedBackground />

      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ marginBottom: '6rem' }}>
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-heading" 
            style={{ fontSize: '4.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-3px' }}
          >
            Elite <span style={{ color: 'var(--accent-teal)' }}>Staking.</span>
          </motion.h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 600 }}>Secure rewards with enterprise-grade validator infrastructure.</p>
        </header>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '4rem' }}>
          <section>
            <div className="glass-card" style={{ padding: '3rem', marginBottom: '3rem', background: 'rgba(5, 12, 17, 0.5)', backdropFilter: 'blur(40px)' }}>
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                 <h2 style={{ color: 'white', fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-1px' }}>Available Protocol Vaults</h2>
                 <div className="capsule-badge" style={{ color: 'var(--accent-teal)', borderColor: 'var(--accent-teal-soft)' }}>
                   AUTO-COMPOUNDING ACTIVE
                 </div>
               </div>

               <div style={{ display: 'grid', gap: '1.25rem' }}>
                 {STAKING_POOLS.map((pool) => (
                    <motion.div 
                      key={pool.id}
                      whileHover={{ x: 10, background: 'rgba(255,255,255,0.03)' }}
                      onClick={() => setSelectedPool(pool)}
                      style={{ 
                        padding: '1.75rem', 
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
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <div style={{ 
                          width: '56px', 
                          height: '56px', 
                          background: pool.color,
                          borderRadius: '16px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.25rem',
                          color: 'white',
                          fontWeight: 900,
                          boxShadow: `0 0 30px ${pool.color}33`
                        }}>
                          {pool.symbol[0]}
                        </div>
                        <div>
                          <div style={{ color: 'white', fontWeight: 800, fontSize: '1.125rem' }}>{pool.name}</div>
                          <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 700 }}>TVL: ${pool.tvl} INJECTED</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ color: 'var(--accent-teal)', fontWeight: 900, fontSize: '1.5rem' }}>{pool.apr}%</div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800 }}>EST. APR</div>
                      </div>
                    </motion.div>
                 ))}
               </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
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
      </main>

      <Footer />
    </div>
  );
};

export default Stake;

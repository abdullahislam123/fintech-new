import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowTrendUp, 
  FaArrowUpRightFromSquare, 
  FaPlus, 
  FaWallet, 
  FaShieldHalved, 
  FaBolt, 
  FaRotate, 
  FaSpinner,
  FaEllipsisVertical,
  FaMinus,
  FaXmark
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';

import Footer from '../components/Footer';
import { useWallet } from '../context/WalletContext';

const Dashboard = () => {
  const { cardBalance, cryptoAssets, loadingAssets } = useWallet();
  const [totalBalance, setTotalBalance] = useState(0);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Modal states
  const [modalType, setModalType] = useState(null);
  const [selectedAsset, setSelectedAsset] = useState('ETH');
  const [txAmount, setTxAmount] = useState('');

  useEffect(() => {
    const cryptoTotal = cryptoAssets.reduce((sum, asset) => sum + (asset.value || 0), 0);
    setTotalBalance(cardBalance + cryptoTotal);
  }, [cardBalance, cryptoAssets]);

  const handleTransaction = () => {
    // For prototype purposes, transaction interactions will route to topup
    setModalType(null);
    setTxAmount('');
  };


  return (
    <div className="dashboard-container" style={{ minHeight: '100vh', padding: isMobile ? '8rem 1.5rem 4rem' : '10rem 6rem 4rem', position: 'relative' }}>
      <AnimatedBackground />

      {/* Main Portfolio Header */}
      <header style={{ marginBottom: isMobile ? '4rem' : '6rem', maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', gap: isMobile ? '3rem' : '0' }}>
          <motion.div style={{ width: isMobile ? '100%' : 'auto' }}>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              style={{ color: 'var(--text-secondary)', marginBottom: '1.25rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.8125rem' }}
            >
              All your networks, all your assets
            </motion.p>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading"
              style={{ fontSize: isMobile ? '3.5rem' : '6rem', fontWeight: 900, letterSpacing: isMobile ? '-2px' : '-5px', marginBottom: '1.5rem', color: 'white', lineHeight: 0.9 }}
            >
              ${totalBalance.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
              <span style={{ color: 'var(--text-muted)', fontSize: isMobile ? '2rem' : '4rem' }}>.{Math.round((totalBalance % 1) * 100).toString().padStart(2, '0')}</span>
            </motion.h1>
            
            {/* Visual Action Points */}
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '2.5rem', flexWrap: isMobile ? 'wrap' : 'nowrap' }}>
               <motion.div 
                 whileHover={{ scale: 1.05, y: -5 }}
                 onClick={() => setModalType('deposit')}
                 className="glass-card" 
                 style={{ padding: '0.6rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--accent-teal-soft)', cursor: 'pointer', flex: isMobile ? 1 : 'none', justifyContent: 'center' }}
               >
                  <div style={{ background: 'var(--accent-teal)', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaPlus size={14} color="black" /></div>
                  <span style={{ fontWeight: 800, fontSize: '1rem' }}>Deposit</span>
               </motion.div>
               
               <motion.div 
                 whileHover={{ scale: 1.05, y: -5 }}
                 onClick={() => setModalType('withdraw')}
                 className="glass-card" 
                 style={{ padding: '0.6rem 2rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--glass-border)', cursor: 'pointer', opacity: 0.7, flex: isMobile ? 1 : 'none', justifyContent: 'center' }}
               >
                  <div style={{ background: '#ff5555', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaMinus size={14} color="white" /></div>
                  <span style={{ fontWeight: 800, fontSize: '1rem' }}>Withdraw</span>
               </motion.div>
            </div>
          </motion.div>

          {/* Elite Mix Visualization */}
          <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '2rem' : '4rem', width: isMobile ? '100%' : 'auto', justifyContent: isMobile ? 'space-between' : 'flex-end' }}>
             <div style={{ textAlign: isMobile ? 'left' : 'right' }}>
                <div style={{ color: 'var(--accent-teal)', fontWeight: 900, fontSize: isMobile ? '2rem' : '2.5rem', letterSpacing: '-1px' }}>+12.4%</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px' }}>PERFORMANCE (30D)</div>
             </div>
             <div style={{ position: 'relative', width: isMobile ? '80px' : '150px', height: isMobile ? '80px' : '150px' }}>
                <svg viewBox="0 0 36 36" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  <circle cx="18" cy="18" r="16" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="2.5" />
                  <motion.circle 
                    initial={{ strokeDasharray: '0 100' }}
                    animate={{ strokeDasharray: '65 100' }}
                    cx="18" cy="18" r="16" fill="none" stroke="var(--accent-teal)" strokeWidth="2.5" strokeDashoffset="0"
                  />
                  <motion.circle 
                    initial={{ strokeDasharray: '0 100' }}
                    animate={{ strokeDasharray: '25 100' }}
                    cx="18" cy="18" r="16" fill="none" stroke="var(--accent-indigo)" strokeWidth="2.5" strokeDashoffset="-65"
                  />
                </svg>
                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'white', fontWeight: 900, fontSize: isMobile ? '0.8rem' : '1.25rem' }}>MIX</div>
             </div>
             
             {!isMobile && (
               <motion.button 
                  whileHover={{ rotate: 180, background: 'rgba(0, 245, 212, 0.1)' }}
                  style={{ 
                    background: 'rgba(255,255,255,0.03)', 
                    border: '1px solid var(--glass-border)', 
                    borderRadius: '50%',
                    padding: '16px',
                    cursor: 'pointer',
                    color: 'var(--accent-teal)',
                    transition: '0.5s',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {loadingAssets ? <FaSpinner className="animate-spin" size={24} /> : <FaRotate size={24} />}
                </motion.button>
             )}
          </div>
        </div>
      </header>

      <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        {/* Core Protocol Stats */}
        <section style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', gap: isMobile ? '1.5rem' : '2.5rem', marginBottom: isMobile ? '4rem' : '6rem' }}>
          {[
            { label: 'Security Protocols', value: 'SOC2-READY', icon: <FaShieldHalved size={28} color="var(--accent-teal)" /> },
            { label: 'Network Integrity', value: 'ULTRA-FAST', icon: <FaBolt size={28} color="var(--accent-teal)" /> },
            { label: 'Custody Mode', icon: <FaWallet size={28} color="var(--accent-teal)" />, value: 'NON-CUSTORIAL' }
          ].map((stat, i) => (
            <motion.div 
              key={i}
              whileHover={{ translateY: -10, borderColor: 'var(--accent-teal-soft)' }}
              className="glass-card" 
              style={{ padding: isMobile ? '2rem' : '3rem 2.5rem', display: 'flex', alignItems: 'center', gap: isMobile ? '1.5rem' : '2rem' }}
            >
              <div style={{ background: 'rgba(0, 245, 212, 0.08)', padding: isMobile ? '1rem' : '1.25rem', borderRadius: '1.25rem', border: '1px solid rgba(0, 245, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <div>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1.5px', marginBottom: '0.5rem' }}>{stat.label}</p>
                <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.75rem', fontWeight: 900, color: 'white', letterSpacing: '-1px' }}>{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </section>

        {/* Global Liquidity Tracking */}
        <section>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', marginBottom: '3rem', gap: isMobile ? '1.5rem' : '0' }}>
            <h2 className="font-heading" style={{ fontSize: isMobile ? '2rem' : '3rem', fontWeight: 900, letterSpacing: '-2px' }}>Portfolio Map<span style={{ color: 'var(--accent-teal)' }}>.</span></h2>
            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center', width: isMobile ? '100%' : 'auto' }}>
               <button className="glass-card" style={{ padding: '0.75rem 2rem', borderRadius: 'var(--pill-radius)', color: 'white', fontWeight: 800, cursor: 'pointer', fontSize: '0.875rem', flex: isMobile ? 1 : 'none' }}>Portfolio Map</button>
            </div>
          </div>
          
          {isMobile ? (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               {cryptoAssets.map((asset, i) => (
                 <motion.div 
                   key={asset.symbol}
                   initial={{ opacity: 0, y: 15 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.05 }}
                   className="glass-card"
                   style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
                 >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                       <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <img src={asset.iconUrl} alt={asset.symbol} style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                          <div>
                             <div style={{ fontWeight: 800, color: 'white' }}>{asset.name}</div>
                             <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{asset.symbol}</div>
                          </div>
                       </div>
                       <div style={{ textAlign: 'right' }}>
                          <div style={{ fontWeight: 900, color: 'white' }}>${asset.value.toLocaleString()}</div>
                          <div style={{ 
                            color: asset.change.startsWith('-') ? '#ff5555' : 'var(--accent-teal)',
                            fontSize: '0.75rem',
                            fontWeight: 800,
                             display: 'flex',
                             alignItems: 'center',
                             justifyContent: 'flex-end',
                             gap: '0.25rem'
                          }}>
                             {!asset.change.startsWith('-') && <FaArrowTrendUp size={12} />}
                             {asset.change}%
                          </div>
                       </div>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--glass-border)', paddingTop: '1rem' }}>
                       <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                          Balance: <span style={{ color: 'white', fontWeight: 800 }}>{asset.balance} {asset.symbol}</span>
                       </div>
                       <button style={{ background: 'transparent', border: 'none', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem' }}>Swap</button>
                    </div>
                 </motion.div>
               ))}
            </div>
          ) : (
            <div className="glass-card" style={{ padding: '1.5rem', overflow: 'hidden', border: '1px solid var(--glass-border)', background: 'rgba(5, 12, 17, 0.3)' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--glass-border)', textAlign: 'left' }}>
                    <th style={{ padding: '2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Network Asset</th>
                    <th style={{ padding: '2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>Consolidated Balance</th>
                    <th style={{ padding: '2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>USD Intelligence</th>
                    <th style={{ padding: '2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px' }}>24H Vector</th>
                    <th style={{ padding: '2rem' }}></th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence>
                    {cryptoAssets.map((asset, i) => (
                      <motion.tr 
                        key={asset.symbol}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.05 }}
                        whileHover={{ background: 'rgba(255,255,255,0.015)' }}
                        style={{ borderBottom: i === cryptoAssets.length - 1 ? 'none' : '1px solid var(--glass-border)', transition: '0.3s' }}
                      >
                        <td style={{ padding: '2rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
                          <img src={asset.iconUrl} alt={asset.symbol} style={{ width: '56px', height: '56px', borderRadius: '50%' }} />
                          <div>
                            <div style={{ fontWeight: 900, fontSize: '1.125rem', color: 'white', letterSpacing: '-0.5px' }}>{asset.name}</div>
                            <div style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 800, letterSpacing: '1px' }}>{asset.symbol} PROTOCOL</div>
                          </div>
                        </td>
                        <td style={{ padding: '2rem', fontWeight: 800, color: 'white', fontSize: '1.1rem' }}>{asset.balance} <span style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>{asset.symbol}</span></td>
                        <td style={{ padding: '2rem', fontWeight: 900, color: 'white', fontSize: '1.1rem' }}>${asset.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</td>
                        <td style={{ padding: '2rem' }}>
                          <span style={{ 
                            color: asset.change.startsWith('-') ? '#ff5555' : 'var(--accent-teal)',
                            fontSize: '1.125rem',
                            fontWeight: 900,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            letterSpacing: '-0.5px'
                          }}>
                            {!asset.change.startsWith('-') && <FaArrowTrendUp size={18} />}
                            {asset.change}%
                          </span>
                        </td>
                        <td style={{ padding: '2rem', textAlign: 'right' }}>
                          <button className="glass-card" style={{ 
                            background: 'rgba(255,255,255,0.03)',
                            padding: '0.75rem 2rem',
                            fontSize: '0.875rem',
                            fontWeight: 900,
                            color: 'white',
                            cursor: 'pointer',
                            borderRadius: 'var(--pill-radius)',
                            border: '1px solid var(--glass-border)'
                          }}>
                            Protocol Flow
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
      <style>{`
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Transaction Modal */}
      <AnimatePresence>
        {modalType && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(10px)' }}
              onClick={() => setModalType(null)}
            ></motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50, scale: 0.9 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: 0.9 }}
              className="glass-card"
              style={{ position: 'relative', width: '100%', maxWidth: '450px', padding: '2.5rem', borderRadius: '1.5rem', background: 'rgba(5, 12, 17, 0.95)', border: `1px solid ${modalType === 'deposit' ? 'var(--accent-teal)' : '#ff5555'}`, zIndex: 10000 }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, textTransform: 'capitalize' }}>{modalType} Asset</h3>
                <button onClick={() => setModalType(null)} style={{ background: 'rgba(255,255,255,0.05)', border: 'none', color: 'var(--text-secondary)', padding: '0.5rem', borderRadius: '50%', cursor: 'pointer' }}><FaXmark size={18} /></button>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 800, marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Select Node</label>
                <select 
                  value={selectedAsset} 
                  onChange={(e) => setSelectedAsset(e.target.value)}
                  style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', padding: '1rem', borderRadius: '0.75rem', fontSize: '1rem', fontWeight: 800, outline: 'none', cursor: 'pointer' }}
                >
                  {cryptoAssets.map(a => <option key={a.symbol} value={a.symbol} style={{ background: '#050C11' }}>{a.name} ({a.symbol})</option>)}
                </select>
              </div>

              <div style={{ marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                   <label style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px' }}>Amount</label>
                   {modalType === 'withdraw' && <span style={{ color: 'var(--accent-teal)', fontSize: '0.8125rem', fontWeight: 800, cursor: 'pointer' }} onClick={() => setTxAmount('0')}>MAX</span>}
                </div>
                <div style={{ position: 'relative' }}>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    value={txAmount}
                    onChange={(e) => setTxAmount(e.target.value)}
                    style={{ width: '100%', background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', color: 'white', padding: '1rem', borderRadius: '0.75rem', fontSize: '1.5rem', fontWeight: 900, outline: 'none' }}
                  />
                  <span style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontWeight: 800, pointerEvents: 'none' }}>{selectedAsset}</span>
                </div>
              </div>

              <button 
                onClick={handleTransaction}
                style={{ width: '100%', padding: '1.25rem', background: modalType === 'deposit' ? 'var(--accent-teal)' : '#ff5555', color: modalType === 'deposit' ? '#050C11' : 'white', border: 'none', borderRadius: '0.75rem', fontSize: '1.125rem', fontWeight: 900, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem' }}
              >
                Confirm {modalType}
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  );
};

export default Dashboard;

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaWallet, FaArrowRight, FaEthereum, FaBitcoin, FaChevronDown, FaBolt } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';
import { useWallet } from '../context/WalletContext';

const CardTopup = () => {
  const { cardBalance, topUpCard, cryptoAssets } = useWallet();
  const [amount, setAmount] = useState('');
  const [asset, setAsset] = useState('USDT');
  
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

  return (
    <div style={{ position: 'relative', minHeight: '100vh', paddingTop: '10rem', paddingBottom: '0rem' }}>
      <AnimatedBackground />

      <main style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto', padding: '0 2rem 10rem 2rem' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--accent-teal-soft)', background: 'rgba(0, 245, 212, 0.05)', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '2rem', letterSpacing: '2px' }}>
            INSTANT LIQUIDITY
          </div>
          <h1 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-3px' }}>
            Top-up your <span style={{ color: 'var(--accent-teal)' }}>Card.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Seamlessly convert your crypto assets to spendable fiat in seconds. Zero hidden fees. Instant settlement.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          
          {/* Left - Funding Interface */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card" style={{ padding: '3rem', borderRadius: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Funding Source</h3>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 600 }}>Available: 24,500.00 {asset}</span>
              </div>

              {/* Asset Selector */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <select 
                    value={asset} 
                    onChange={(e) => setAsset(e.target.value)}
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1.1rem', fontWeight: 800, outline: 'none', cursor: 'pointer', appearance: 'none', width: '100%' }}
                  >
                    {cryptoAssets.map(c => <option key={c.symbol} value={c.symbol} style={{ background: '#050C11' }}>{c.name} ({c.symbol})</option>)}
                    {cryptoAssets.length === 0 && <option value="USDT">Tether USD (USDT)</option>}
                  </select>
                </div>
                <FaChevronDown color="var(--text-muted)" />
              </div>

              {/* Amount Input */}
              <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem', position: 'relative' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                  <label style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 600 }}>Top-up Amount</label>
                  <button style={{ background: 'var(--accent-teal-soft)', color: 'var(--accent-teal)', border: 'none', padding: '0.2rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 800, cursor: 'pointer' }}>MAX</button>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-end', gap: '1rem' }}>
                  <input 
                    type="number" 
                    placeholder="0.00" 
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '3rem', fontWeight: 900, outline: 'none', width: '100%', padding: 0 }}
                  />
                  <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-secondary)', paddingBottom: '0.5rem' }}>{asset}</span>
                </div>
              </div>

              {/* Breakdown */}
              <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>Conversion Rate</span>
                  <span style={{ color: 'white', fontWeight: 600 }}>1 USDT = 1.00 USD</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                  <span>Top-up Fee</span>
                  <span style={{ color: 'var(--accent-teal)', fontWeight: 800 }}>Free (Elite Tier)</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1.5rem', fontSize: '1.1rem', fontWeight: 800 }}>
                  <span>Card Balance Increase</span>
                  <span>${amount ? (parseFloat(amount) * 1.0).toFixed(2) : '0.00'}</span>
                </div>
              </div>

              <button 
                onClick={() => {
                   if(amount && parseFloat(amount) > 0) {
                     topUpCard(amount);
                     setAmount('');
                   }
                }}
                className="btn-primary teal-glow" 
                style={{ width: '100%', padding: '1.5rem', fontSize: '1.25rem', borderRadius: '1rem', justifyContent: 'center' }}
              >
                <FaBolt /> Deposit to Card
              </button>
            </div>
          </motion.div>

          {/* Right - 3D Card Visualizer */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', perspective: 1500 }}
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d",
                width: '100%',
                maxWidth: '500px',
                aspectRatio: '1.586/1',
                borderRadius: '1.5rem',
                background: 'linear-gradient(135deg, rgba(20, 20, 25, 0.95), rgba(5, 5, 8, 1))',
                boxShadow: '0 40px 80px rgba(0, 245, 212, 0.15), inset 0 0 0 1px rgba(255,255,255,0.1)',
                position: 'relative',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer'
              }}
            >
               {/* Ambient Card Glow */}
               <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '200px', height: '200px', background: 'var(--accent-teal)', filter: 'blur(100px)', opacity: 0.2, zIndex: 0 }} />

               {/* Chip and Logo */}
               <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', transform: 'translateZ(50px)', position: 'relative', zIndex: 1 }}>
                 <div style={{ width: '50px', height: '40px', background: 'linear-gradient(135deg, #d4af37, #aa8000)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.3)', boxShadow: '0 5px 10px rgba(0,0,0,0.5)' }}></div>
                 <div className="font-heading" style={{ color: 'white', fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-1px' }}>
                   Vaultora<span style={{ color: 'var(--accent-teal)' }}>.</span>
                 </div>
               </div>

               {/* Virtual Details & Balance */}
               <div style={{ transform: 'translateZ(60px)', position: 'relative', zIndex: 1 }}>
                 <div style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 600, marginBottom: '0.5rem' }}>
                    Current Balance
                 </div>
                 <div style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   ${cardBalance.toLocaleString()}
                   {amount && parseFloat(amount) > 0 && (
                     <motion.span 
                       initial={{ opacity: 0, x: -10 }}
                       animate={{ opacity: 1, x: 0 }}
                       style={{ color: 'var(--accent-teal)', fontSize: '1.25rem' }}
                     >
                       +${parseFloat(amount).toFixed(2)}
                     </motion.span>
                   )}
                 </div>
                 <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.875rem', fontFamily: 'monospace', letterSpacing: '4px' }}>
                    <span>**** **** **** 4920</span>
                 </div>
               </div>
            </motion.div>
            
            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', color: 'var(--accent-teal)', marginBottom: '1rem', fontWeight: 800 }}>
                <FaWallet size={24} /> Encrypted Sandbox Element
              </div>
              <p style={{ color: 'var(--text-muted)', maxWidth: '400px', fontSize: '0.9rem' }}>Transactions are securely routed via our non-custodial bridging protocol to ensure zero counterparty risk.</p>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CardTopup;

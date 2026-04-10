import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaArrowRight, 
  FaBolt, 
  FaShieldHalved, 
  FaArrowsRotate, 
  FaGlobe, 
  FaLayerGroup, 
  FaCoins, 
  FaImage,
  FaLock,
  FaChevronDown,
  FaCircleCheck,
  FaUsers,
  FaBuilding,
  FaMicrochip,
  FaArrowUpRightFromSquare,
  FaPlus,
  FaEthereum,
  FaCircleDollarToSlot,
  FaFingerprint,
  FaScaleBalanced,
  FaArrowTrendUp,
  FaArrowTrendDown,
  FaBitcoin,
  FaBahai
} from 'react-icons/fa6';
import ProtocolMockup from '../components/ProtocolMockup';
import AnimatedBackground from '../components/AnimatedBackground';
import SecurityBadge from '../components/SecurityBadge';
import Footer from '../components/Footer';
import { fetchCoinPrices } from '../services/coinService';
import StatCounter from '../components/StatCounter';

const MarketLeaderboard = () => {
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPrices = async () => {
      const data = await fetchCoinPrices();
      if (data) setPrices(data);
      setLoading(false);
    };
    getPrices();
    const interval = setInterval(getPrices, 60000);
    return () => clearInterval(interval);
  }, []);

  const coins = [
    { symbol: 'BTC', name: 'Bitcoin', color: '#F7931A', icon: <FaBitcoin /> },
    { symbol: 'ETH', name: 'Ethereum', color: '#627EEA', icon: <FaEthereum /> },
    { symbol: 'SOL', name: 'Solana', color: '#14F195', icon: <FaBahai /> },
    { symbol: 'USDC', name: 'USD Coin', color: '#2775CA', icon: <FaCircleDollarToSlot /> },
    { symbol: 'ARB', name: 'Arbitrum', color: '#28A0F0', icon: <FaLayerGroup /> },
  ];

  return (
    <section style={{ padding: '8rem 4rem', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <h2 className="font-heading" style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-2px' }}>Live Market Analysis<span style={{ color: 'var(--accent-teal)' }}>.</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', fontWeight: 500 }}>Real-time Elite liquidity feeds from global exchanges.</p>
          </div>
          <button className="glass-card" style={{ padding: '1rem 2rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--glass-border)', color: 'white', fontWeight: 800, fontSize: '0.875rem', cursor: 'pointer' }}>View Full Market</button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem' }}>
          {coins.map(coin => {
            const priceData = prices?.[coin.symbol];
            return (
              <motion.div 
                key={coin.symbol}
                whileHover={{ y: -10, borderColor: 'var(--accent-teal-soft)' }}
                className="glass-card" 
                style={{ padding: '2rem', position: 'relative', overflow: 'hidden' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem' }}>
                   <div style={{ 
                     width: '48px', 
                     height: '48px', 
                     background: coin.color, 
                     borderRadius: '14px', 
                     display: 'flex', 
                     alignItems: 'center', 
                     justifyContent: 'center', 
                     color: 'white', 
                     fontSize: '1.5rem',
                     boxShadow: `0 10px 20px ${coin.color}33`
                   }}>
                     {coin.icon}
                   </div>
                   <div style={{ 
                     fontSize: '0.8125rem', 
                     fontWeight: 800, 
                     color: (priceData?.change >= 0 || priceData?.change === undefined) ? 'var(--accent-teal)' : '#ff5555',
                     background: (priceData?.change >= 0 || priceData?.change === undefined) ? 'rgba(0, 245, 212, 0.1)' : 'rgba(255, 85, 85, 0.1)',
                     padding: '0.4rem 0.75rem',
                     borderRadius: '0.75rem'
                   }}>
                     {loading ? '...' : priceData?.change !== undefined ? `${priceData?.change >= 0 ? '+' : ''}${priceData?.change?.toFixed(2)}%` : 'Active'}
                   </div>
                </div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600, marginBottom: '0.4rem' }}>{coin.name}</div>
                <div style={{ color: 'white', fontSize: '1.75rem', fontWeight: 900 }}>
                   {loading ? '---' : priceData?.usd !== undefined ? `$${priceData?.usd?.toLocaleString()}` : 'System Live'}
                </div>
                <div style={{ marginTop: '1.5rem', height: '1px', background: 'rgba(255,255,255,0.05)', borderRadius: '1px' }}></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div className="home-container" style={{ position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />

      {/* Portal Glow Effects (Image Inspiration) */}
      <div style={{ position: 'absolute', top: '10%', left: '50%', transform: 'translateX(-50%)', width: '60vw', height: '60vw', background: 'radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, transparent 70%)', filter: 'blur(80px)', zIndex: 0 }} className="animate-portal" />

      {/* Top Capsule Navigation */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '1rem',
        padding: '3rem 0 0', 
        position: 'relative',
        zIndex: 10
      }}>
        <span className="capsule-badge">Crypto</span>
        <span className="capsule-badge" style={{ borderColor: 'var(--accent-teal-soft)', color: 'var(--accent-teal)' }}>Vaultora Web3</span>
        <span className="capsule-badge">2026</span>
      </div>

      {/* Main Hero (Target Image Style) */}
      <section style={{ 
        padding: '4rem 0 8rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        perspective: '1500px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20, rotateX: 20 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: '1200px', transformStyle: 'preserve-3d' }}
          whileHover={{ scale: 1.02 }}
        >
          <h1 className="font-heading" style={{ 
            fontSize: 'max(6rem, 10vw)', 
            fontWeight: 900, 
            lineHeight: 0.85, 
            marginBottom: '3rem',
            letterSpacing: '-6px',
            color: 'white',
            transform: 'translateZ(50px)'
          }}>
            A crypto wallet &<br /><span style={{ color: 'var(--accent-teal)' }}>gateway to blockchain apps.</span>
          </h1>

          {/* Floating Action Cards Insight */}
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginBottom: '4rem' }}>
             <motion.div 
               animate={{ y: [0, -10, 0] }} 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="glass-card" 
               style={{ padding: '0.75rem 1.75rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: 'var(--pill-radius)', border: '1px solid var(--accent-teal-soft)', cursor: 'pointer' }}
             >
                <div style={{ background: 'var(--accent-teal)', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaArrowTrendUp size={16} color="black" /></div>
                <span style={{ fontWeight: 800, fontSize: '1rem' }}>Deposit</span>
             </motion.div>
             <motion.div 
               animate={{ y: [10, 0, 10] }} 
               whileHover={{ scale: 1.05 }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="glass-card" 
               style={{ padding: '0.75rem 1.75rem', display: 'flex', alignItems: 'center', gap: '1rem', borderRadius: 'var(--pill-radius)', opacity: 0.8, cursor: 'pointer' }}
             >
                <div style={{ background: '#ff5555', padding: '0.5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaArrowTrendDown size={16} color="white" /></div>
                <span style={{ fontWeight: 800, fontSize: '1rem' }}>Withdraw</span>
             </motion.div>
          </div>

          <p style={{ 
            fontSize: '1.5rem', 
            color: 'var(--text-secondary)', 
            lineHeight: 1.5, 
            marginBottom: '4rem',
            maxWidth: '800px',
            margin: '0 auto 5rem',
            fontWeight: 500
          }}>
            Buy, store, send and swap tokens. Enjoy total control over your data and assets. The definitive Vaultora gateway for digital asset management.
          </p>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', marginBottom: '8rem' }}>
            <Link to="/swap" style={{ textDecoration: 'none' }}>
              <button className="btn-primary teal-glow" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                Explore Vaultora <FaArrowRight size={18} />
              </button>
            </Link>
          </div>
          
          <div style={{ position: 'relative', width: '90vw', maxWidth: '1400px', margin: '0 auto' }}>
            <ProtocolMockup />
          </div>
        </motion.div>
      </section>

      {/* Stats Integrated into the flow */}
      <MarketLeaderboard />

      {/* Trust & Security Section */}
      <section style={{ padding: '10rem 4rem', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '8rem', alignItems: 'center' }}>
          <motion.div>
            <span style={{ color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', textTransform: 'uppercase', marginBottom: '1.5rem', letterSpacing: '3px', display: 'block' }}>OWN YOUR DATA</span>
            <h2 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '2.5rem', lineHeight: 1, letterSpacing: '-3px' }}>The most secure <br />wallet around.</h2>
            <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '4rem', fontWeight: 500 }}>
              Vaultora provides a non-custodial gateway with localized encryption. We never hold your keys—we just provide the world's most beautiful bridge to dApps. Powering the ecosystem with built-in security alerts and front-run protection.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
               <div>
                  <div style={{ color: 'white', fontWeight: 900, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><FaFingerprint size={24} color="var(--accent-teal)" /> Biometrics</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', fontWeight: 500 }}>Hardware-isolated enclaves ensure your private keys never leave your device.</p>
               </div>
               <div>
                  <div style={{ color: 'white', fontWeight: 900, fontSize: '1.25rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '1rem' }}><FaScaleBalanced size={24} color="var(--accent-teal)" /> Regulatory</div>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', fontWeight: 500 }}>Global compliance network ensuring Elite-grade reporting standards.</p>
               </div>
            </div>
          </motion.div>
          <div className="glass-card" style={{ padding: '4rem', borderRadius: '3rem', border: '1px solid var(--accent-teal-soft)', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
             <SecurityBadge type="non-custodial" />
             <h3 style={{ fontSize: '2.5rem', fontWeight: 900, letterSpacing: '-1px' }}>Account Protection <br />Evolution</h3>
             <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, fontWeight: 500 }}>Vaultora utilizes Zero-Knowledge proofs and MPC computation to ensure that transaction signing is split across multiple secure vectors.</p>
             <button className="btn-primary" style={{ transform: 'none', boxShadow: 'none', background: 'rgba(255,255,255,0.05)', color: 'white', border: '1px solid var(--glass-border)', width: 'fit-content' }}>Full Audit Report</button>
          </div>
        </div>
      </section>

      {/* Bottom Launchpad */}
      <section style={{ padding: '10rem 4rem', textAlign: 'center', background: 'var(--accent-teal)', color: '#050c11' }}>
         <h2 className="font-heading" style={{ fontSize: '5rem', fontWeight: 900, marginBottom: '3rem', letterSpacing: '-4px' }}>Build your <span style={{ textDecoration: 'underline' }}>Legacy</span> on Chain.</h2>
         <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center' }}>
            <Link to="/download">
              <button style={{ background: '#050c11', color: 'white', padding: '1.25rem 4rem', borderRadius: 'var(--pill-radius)', border: 'none', fontWeight: 900, fontSize: '1.25rem', cursor: 'pointer' }}>Connect Now</button>
            </Link>
            <Link to="/faq">
              <button style={{ background: 'transparent', color: '#050c11', padding: '1.25rem 4rem', borderRadius: 'var(--pill-radius)', border: '3px solid #050c11', fontWeight: 900, fontSize: '1.25rem', cursor: 'pointer' }}>Enterprise FAQ</button>
            </Link>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

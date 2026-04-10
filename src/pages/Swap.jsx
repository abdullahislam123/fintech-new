import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowDown, 
  FaGear, 
  FaCircleInfo, 
  FaRotate, 
  FaCircleCheck, 
  FaChevronDown,
  FaBolt,
  FaArrowUpRightFromSquare,
  FaSpinner,
  FaShieldHalved,
  FaCoins,
  FaArrowsRotate,
  FaShield,
  FaGlobe,
  FaArrowRight
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import { fetchCoinPrices } from '../services/coinService';
import Footer from '../components/Footer';

const TOKENS = [
  { symbol: 'BTC', name: 'Bitcoin', icon: '₿', color: '#F7931A' },
  { symbol: 'ETH', name: 'Ethereum', icon: 'Ξ', color: '#627EEA' },
  { symbol: 'SOL', name: 'Solana', icon: '◎', color: '#14F195' },
  { symbol: 'USDC', name: 'USD Coin', icon: '$', color: '#2775CA' },
  { symbol: 'ARB', name: 'Arbitrum', icon: 'A', color: '#28A0F0' },
];

const Swap = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [fromToken, setFromToken] = useState(TOKENS[0]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [toToken, setToToken] = useState(TOKENS[1]);
  const [fromAmount, setFromAmount] = useState('');
  const [toAmount, setToAmount] = useState('');
  const [prices, setPrices] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSwapping, setIsSwapping] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  
  // Dropdown states
  const [isFromOpen, setIsFromOpen] = useState(false);
  const [isToOpen, setIsToOpen] = useState(false);

  const loadPrices = async () => {
    setLoading(true);
    const data = await fetchCoinPrices();
    if (data) {
      setPrices(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadPrices();
    const interval = setInterval(loadPrices, 30000); // Refresh every 30s
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (prices && fromAmount && !isSwapping) {
      const fromPrice = prices[fromToken.symbol].usd;
      const toPrice = prices[toToken.symbol].usd;
      const calculated = (parseFloat(fromAmount) * fromPrice) / toPrice;
      setToAmount(calculated.toFixed(6));
    } else if (!fromAmount) {
      setToAmount('');
    }
  }, [fromAmount, fromToken, toToken, prices]);

  const handleSwap = () => {
    setIsSwapping(true);
    setTimeout(() => {
      setIsSwapping(false);
      setShowSuccess(true);
      setFromAmount('');
      setToAmount('');
      setTimeout(() => setShowSuccess(false), 5000);
    }, 2500);
  };

  const switchTokens = () => {
    const temp = fromToken;
    setFromToken(toToken);
    setToToken(temp);
    setFromAmount(toAmount);
  };

  const currentRate = prices ? (prices[fromToken.symbol].usd / prices[toToken.symbol].usd).toFixed(6) : '0.00';

  const TokenList = ({ activeToken, onSelect, isOpen, setIsOpen }) => (
    <div style={{ position: 'relative', zIndex: isOpen ? 1000 : 1 }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="glass-card" 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          gap: '0.75rem', 
          padding: '0.75rem 1.25rem', 
          borderRadius: 'var(--pill-radius)',
          border: '1px solid var(--glass-border)',
          color: 'white',
          fontWeight: 800,
          cursor: 'pointer',
          minWidth: '130px',
          justifyContent: 'space-between',
          background: isOpen ? 'rgba(0, 245, 212, 0.1)' : 'rgba(255, 255, 255, 0.05)',
          transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ 
            width: '28px', 
            height: '28px', 
            background: activeToken.color,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.875rem',
            color: 'white',
            fontWeight: 900
          }}>{activeToken.icon}</span>
          {activeToken.symbol}
        </span>
        <FaChevronDown size={14} style={{ 
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          transition: 'transform 0.3s ease'
        }} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 998 }}
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              style={{ 
                position: 'absolute', 
                top: 'calc(100% + 0.75rem)', 
                right: 0, 
                zIndex: 999,
                background: 'rgba(5, 12, 17, 0.95)',
                backdropFilter: 'blur(50px)',
                border: '1px solid var(--glass-border)',
                borderRadius: '1.5rem',
                padding: '0.5rem',
                minWidth: '220px',
                maxHeight: '220px',
                overflowY: 'auto',
                boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
              }}
            >
              {TOKENS.map(token => (
                <motion.div 
                  key={token.symbol}
                  whileHover={{ background: 'rgba(0, 245, 212, 0.05)', x: 5 }}
                  onClick={() => {
                    onSelect(token);
                    setIsOpen(false);
                  }}
                  style={{ 
                    padding: '0.6rem 1rem', 
                    cursor: 'pointer', 
                    borderRadius: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    color: token.symbol === activeToken.symbol ? 'var(--accent-teal)' : 'white',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <span style={{ 
                    width: '36px', 
                    height: '36px', 
                    background: token.color,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                    color: 'white',
                    fontWeight: 900
                  }}>{token.icon}</span>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1rem' }}>{token.symbol}</div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 600 }}>{token.name}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="swap-page" style={{ minHeight: '100vh', padding: isMobile ? '8rem 1.5rem 4rem' : '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      
      {/* Background Portal Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '540px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <header style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'center', marginBottom: isMobile ? '2rem' : '3rem', gap: isMobile ? '1.5rem' : '0' }}>
          <div>
            <h1 className="font-heading" style={{ fontSize: isMobile ? '2.5rem' : '3.5rem', fontWeight: 900, letterSpacing: '-2px', color: 'white' }}>Swap<span style={{ color: 'var(--accent-teal)' }}>.</span></h1>
            <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1rem' }}>Safely exchange any token.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <motion.button 
              whileHover={{ rotate: 180, background: 'rgba(255,255,255,0.05)' }}
              onClick={loadPrices}
              style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--glass-border)', padding: '12px', borderRadius: '50%', color: 'var(--text-secondary)', cursor: 'pointer', transition: '0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              {loading ? <FaSpinner size={18} className="animate-spin" /> : <FaRotate size={18} />}
            </motion.button>
            <button className="glass-card" style={{ padding: '12px', borderRadius: '50%', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaGear size={18} /></button>
          </div>
        </header>

        <div className="glass-card" style={{ padding: '2rem', marginBottom: '1.5rem', background: 'rgba(5, 12, 17, 0.5)', backdropFilter: 'blur(40px)', border: '1px solid var(--glass-border)' }}>
          {/* From Input */}
          <div style={{ marginBottom: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '1px' }}>You Pay</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', fontWeight: 700 }}>Available: 1.24 {fromToken.symbol}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', gap: isMobile ? '1rem' : '1.5rem', alignItems: isMobile ? 'flex-start' : 'center' }}>
              <input 
                type="number" 
                placeholder="0.0" 
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'white', fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 900, width: '100%', outline: 'none', padding: '0.5rem 0', letterSpacing: '-1px' }} 
              />
              <div style={{ alignSelf: isMobile ? 'flex-end' : 'center' }}>
                <TokenList 
                  activeToken={fromToken} 
                  onSelect={setFromToken} 
                  isOpen={isFromOpen} 
                  setIsOpen={setIsFromOpen} 
                />
              </div>
            </div>
          </div>

          {/* Switch Button */}
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', margin: '-1rem 0' }}>
            <motion.button 
              whileHover={{ scale: 1.2, rotate: 180 }}
              onClick={switchTokens}
              style={{ 
                background: 'var(--accent-teal)', 
                border: '4px solid var(--bg-dark)', 
                borderRadius: '16px', 
                padding: '0.6rem', 
                color: '#050c11',
                cursor: 'pointer',
                zIndex: 2,
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.8)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <FaArrowDown size={20} />
            </motion.button>
          </div>

          {/* To Input */}
          <div style={{ marginTop: '0.75rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <span style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '1px' }}>You Receive</span>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', fontWeight: 700 }}>Wallet: 560.00 {toToken.symbol}</span>
            </div>
            <div style={{ display: 'flex', flexDirection: isMobile ? 'column-reverse' : 'row', gap: isMobile ? '1rem' : '1.5rem', alignItems: isMobile ? 'flex-start' : 'center' }}>
              <input 
                type="number" 
                placeholder="0.0" 
                value={toAmount}
                readOnly
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: isMobile ? '2rem' : '2.5rem', fontWeight: 900, width: '100%', outline: 'none', padding: '0.5rem 0', letterSpacing: '-1px' }} 
              />
              <div style={{ alignSelf: isMobile ? 'flex-end' : 'center' }}>
                <TokenList 
                  activeToken={toToken} 
                  onSelect={setToToken} 
                  isOpen={isToOpen} 
                  setIsOpen={setIsToOpen} 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Rate Info */}
        <div className="glass-card" style={{ padding: '1.5rem', marginBottom: '2rem', background: 'rgba(0, 245, 212, 0.03)', border: '1px solid var(--accent-teal-soft)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem', marginBottom: '0.75rem' }}>
            <span style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>Exchange Vector <FaCircleInfo size={14} /></span>
            <span style={{ color: 'white', fontWeight: 900 }}>1 {fromToken.symbol} ≈ {currentRate} {toToken.symbol}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9375rem' }}>
            <span style={{ color: 'var(--text-muted)', fontWeight: 700 }}>Protocol Fee</span>
            <span style={{ color: 'var(--accent-teal)', fontWeight: 900 }}>ZERO FEE</span>
          </div>
        </div>

        <button 
          onClick={handleSwap}
          disabled={!fromAmount || isSwapping}
          className="btn-primary teal-glow" 
          style={{ 
            width: '100%', 
            justifyContent: 'center', 
            height: '4.5rem', 
            fontSize: '1.25rem', 
            borderRadius: 'var(--pill-radius)',
            opacity: (!fromAmount || isSwapping) ? 0.3 : 1,
            cursor: (!fromAmount || isSwapping) ? 'not-allowed' : 'pointer',
            boxShadow: '0 20px 40px rgba(0, 245, 212, 0.3)'
          }}
        >
          {isSwapping ? (
            <span style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <FaSpinner className="animate-spin" size={24} /> Confirming Order...
            </span>
          ) : (
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              Execute Swap <FaArrowUpRightFromSquare size={20} />
            </span>
          )}
        </button>

        <AnimatePresence>
          {showSuccess && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="glass-card" 
              style={{ marginTop: '2rem', padding: '1.5rem', border: '1px solid var(--accent-teal)', background: 'rgba(0, 245, 212, 0.1)', display: 'flex', alignItems: 'center', gap: '1.25rem' }}
            >
              <div style={{ background: 'var(--accent-teal)', padding: '0.6rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaCircleCheck color="#050c11" size={20} />
              </div>
              <div>
                <p style={{ color: 'white', fontWeight: 900, fontSize: '1.125rem' }}>Order Finalized!</p>
                <p style={{ color: 'var(--accent-teal)', fontSize: '0.875rem', fontWeight: 700 }}>Assets successfully migrated on-chain.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Extra Content Sections */}
      <div style={{ position: 'relative', zIndex: 1, marginTop: isMobile ? '4rem' : '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Benefits Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%', maxWidth: '1200px', padding: isMobile ? '0 1.5rem' : '0' }}
        >
          <h2 className="font-heading" style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '2.5rem' : '4rem', textAlign: 'center', lineHeight: 1.2 }}>The best rates, thousands of pairs.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <FaBolt />, title: 'Instant Execution', desc: 'Atomic swaps using our high-throughput routing engine for the fastest trades.' },
              { icon: <FaShield />, title: 'MEV Protection', desc: 'Shielded transactions to prevent front-running and sandwich attacks.' },
              { icon: <FaCoins />, title: 'Multi-Asset Support', desc: 'Access deep liquidity for vUSD, Elite, and thousands of other tokens.' },
              { icon: <FaGlobe />, title: 'Cross-Chain Routing', desc: 'Automatically finds the best path across multiple bridge protocols.' }
            ].map((feature, i) => (
              <div key={i} className="glass-card" style={{ padding: isMobile ? '2rem' : '2.5rem', borderRadius: '24px', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--glass-border)'}>
                 <div style={{ fontSize: isMobile ? '2rem' : '2.5rem', color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>{feature.icon}</div>
                 <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{feature.title}</h3>
                 <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* How It Works */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginTop: isMobile ? '6rem' : '10rem', width: '100%', maxWidth: '1000px', textAlign: 'center', padding: isMobile ? '0 1.5rem' : '0' }}
        >
          <h2 className="font-heading" style={{ fontSize: isMobile ? '2rem' : '3rem', marginBottom: isMobile ? '3rem' : '4rem' }}>How To Swap</h2>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', gap: '3rem', position: 'relative' }}>
             {!isMobile && <div style={{ position: 'absolute', top: '3rem', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', zIndex: 0 }} />}
             {[
               { title: 'Connect Wallet', desc: 'Link your Vaultora or Web3 wallet securely.' },
               { title: 'Select Pair', desc: 'Choose the assets you wish to swap between.' },
               { title: 'Confirm Order', desc: 'Execute on-chain with zero-fee settlements.' }
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

        {/* CTA Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{ 
            marginTop: isMobile ? '6rem' : '12rem', 
            marginBottom: isMobile ? '4rem' : '8rem',
            width: isMobile ? 'calc(100% - 3rem)' : '100%', 
            maxWidth: '1200px', 
            background: 'linear-gradient(90deg, rgba(0,245,212,0.05), transparent, rgba(0,245,212,0.05))',
            padding: isMobile ? '3rem 1.5rem' : '4rem',
            borderRadius: '32px',
            border: '1px solid var(--glass-border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
          <h2 className="font-heading" style={{ fontSize: isMobile ? '1.75rem' : '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Start Trading Elite Assets</h2>
          <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '2.5rem', fontSize: isMobile ? '0.9rem' : '1rem' }}>
            Experience the most advanced liquidity routing protocol in the DeFi ecosystem.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="btn-primary" style={{ padding: '1.25rem 3rem', width: isMobile ? '100' : 'auto' }}>Move to Swap Widget</button>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default Swap;

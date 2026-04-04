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
  FaSpinner
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
  const [fromToken, setFromToken] = useState(TOKENS[0]);
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
    <div className="swap-page" style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      
      {/* Background Portal Glow */}
      <div style={{ position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)', width: '40vw', height: '40vw', background: 'radial-gradient(circle, rgba(0, 245, 212, 0.1) 0%, transparent 70%)', filter: 'blur(100px)', zIndex: 0 }} />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '540px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <div>
            <h1 className="font-heading" style={{ fontSize: '3.5rem', fontWeight: 900, letterSpacing: '-2px', color: 'white' }}>Swap<span style={{ color: 'var(--accent-teal)' }}>.</span></h1>
            <p style={{ color: 'var(--text-secondary)', fontWeight: 600, fontSize: '1rem' }}>Elite Grade Liquidity Aggregator</p>
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
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 700 }}>Available: 1.24 {fromToken.symbol}</span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <input 
                type="number" 
                placeholder="0.0" 
                value={fromAmount}
                onChange={(e) => setFromAmount(e.target.value)}
                style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '2.5rem', fontWeight: 900, width: '100%', outline: 'none', padding: '0.5rem 0', letterSpacing: '-1px' }} 
              />
              <TokenList 
                activeToken={fromToken} 
                onSelect={setFromToken} 
                isOpen={isFromOpen} 
                setIsOpen={setIsFromOpen} 
              />
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
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', fontWeight: 700 }}>Wallet: 560.00 {toToken.symbol}</span>
            </div>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <input 
                type="number" 
                placeholder="0.0" 
                value={toAmount}
                readOnly
                style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', fontSize: '2.5rem', fontWeight: 900, width: '100%', outline: 'none', padding: '0.5rem 0', letterSpacing: '-1px' }} 
              />
              <TokenList 
                activeToken={toToken} 
                onSelect={setToToken} 
                isOpen={isToOpen} 
                setIsOpen={setIsToOpen} 
              />
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

      <Footer />
    </div>
  );
};

export default Swap;

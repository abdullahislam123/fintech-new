import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaArrowTrendUp, 
  FaArrowTrendDown, 
  FaMagnifyingGlass,
  FaArrowLeft
} from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { fetchTopCoins } from '../services/coinService';
import AnimatedBackground from '../components/AnimatedBackground';

const Market = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    
    const getData = async () => {
      setLoading(true);
      const data = await fetchTopCoins();
      if (data) setCoins(data);
      setLoading(false);
    };
    
    getData();
    const interval = setInterval(getData, 60000);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, []);

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase()) || 
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <AnimatedBackground />
      
      <main style={{ 
        padding: isMobile ? '6rem 1.5rem 4rem' : '8rem 4rem 4rem',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        {/* Header Section */}
        <div style={{ marginBottom: '4rem' }}>
          <Link to="/" style={{ 
            display: 'flex', 
            alignItems: 'center', 
            gap: '0.5rem', 
            color: 'var(--accent-teal)', 
            textDecoration: 'none',
            fontWeight: 800,
            fontSize: '0.875rem',
            marginBottom: '2rem',
            width: 'fit-content'
          }}>
            <FaArrowLeft /> BACK TO ECOSYSTEM
          </Link>
          
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            justifyContent: 'space-between',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: '2rem'
          }}>
            <div>
              <h1 className="font-heading" style={{ 
                fontSize: isMobile ? '2.5rem' : '4rem', 
                fontWeight: 900, 
                color: 'white', 
                marginBottom: '1rem', 
                letterSpacing: '-2px',
                lineHeight: 1.1 
              }}>
                Global Market <span style={{ color: 'var(--accent-teal)' }}>Pulse.</span>
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>
                High-fidelity, institutional-grade data feeds for the top 30 digital assets.
              </p>
            </div>

            <div style={{ 
              position: 'relative', 
              width: isMobile ? '100%' : '350px' 
            }}>
              <FaMagnifyingGlass style={{ 
                position: 'absolute', 
                left: '1.25rem', 
                top: '50%', 
                transform: 'translateY(-50%)', 
                color: 'var(--text-muted)' 
              }} />
              <input 
                type="text" 
                placeholder="Search assets..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ 
                  width: '100%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '1rem',
                  padding: '1rem 1rem 1rem 3.5rem',
                  color: 'white',
                  fontSize: '1rem',
                  fontWeight: 600,
                  outline: 'none focus:border-var(--accent-teal)',
                  transition: 'all 0.3s ease'
                }}
              />
            </div>
          </div>
        </div>

        {/* Market Table/Grid */}
        <div style={{ 
          background: 'rgba(5, 12, 17, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: '2rem',
          border: '1px solid var(--glass-border)',
          overflow: 'hidden'
        }}>
          {loading ? (
            <div style={{ padding: '8rem', textAlign: 'center' }}>
              <div className="teal-glow" style={{ 
                width: '40px', 
                height: '40px', 
                border: '4px solid var(--accent-teal)', 
                borderTopColor: 'transparent',
                borderRadius: '50%',
                margin: '0 auto 1.5rem',
                animation: 'spin 1s linear infinite'
              }} />
              <p style={{ color: 'var(--text-muted)', fontWeight: 600 }}>Syncing with global exchanges...</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid var(--glass-border)' }}>
                    <th style={{ padding: '1.5rem 2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Asset</th>
                    <th style={{ padding: '1.5rem 2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Price</th>
                    <th style={{ padding: '1.5rem 2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>24h Change</th>
                    <th style={{ padding: '1.5rem 2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Market Cap</th>
                    <th style={{ padding: '1.5rem 2rem', color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <AnimatePresence mode='popLayout'>
                    {filteredCoins.map((coin, index) => (
                      <motion.tr 
                        key={coin.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ background: 'rgba(0, 245, 212, 0.03)' }}
                        style={{ borderBottom: '1px solid rgba(255,255,255,0.03)' }}
                      >
                        <td style={{ padding: '1.5rem 2rem' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src={coin.image} alt={coin.name} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                            <div>
                              <div style={{ color: 'white', fontWeight: 800 }}>{coin.name}</div>
                              <div style={{ color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.8125rem', textTransform: 'uppercase' }}>{coin.symbol}</div>
                            </div>
                          </div>
                        </td>
                        <td style={{ padding: '1.5rem 2rem' }}>
                          <div style={{ color: 'white', fontWeight: 900, fontSize: '1.1rem' }}>
                            ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        </td>
                        <td style={{ padding: '1.5rem 2rem' }}>
                          <div style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '0.4rem',
                            color: coin.price_change_percentage_24h >= 0 ? 'var(--accent-teal)' : '#ff5555',
                            fontWeight: 800,
                            fontSize: '0.9rem',
                            background: coin.price_change_percentage_24h >= 0 ? 'rgba(0, 245, 212, 0.1)' : 'rgba(255, 85, 85, 0.1)',
                            padding: '0.4rem 0.75rem',
                            borderRadius: '0.75rem',
                            width: 'fit-content'
                          }}>
                            {coin.price_change_percentage_24h >= 0 ? <FaArrowTrendUp /> : <FaArrowTrendDown />}
                            {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                          </div>
                        </td>
                        <td style={{ padding: '1.5rem 2rem' }}>
                          <div style={{ color: 'var(--text-secondary)', fontWeight: 600 }}>
                            ${(coin.market_cap / 1000000000).toFixed(2)}B
                          </div>
                        </td>
                        <td style={{ padding: '1.5rem 2rem', textAlign: 'right' }}>
                          <Link to="/swap">
                            <button className="glass-card" style={{ 
                              padding: '0.6rem 1.25rem', 
                              borderRadius: '0.75rem', 
                              border: '1px solid var(--glass-border)',
                              color: 'white',
                              fontWeight: 800,
                              fontSize: '0.8125rem',
                              cursor: 'pointer'
                            }}>Trade</button>
                          </Link>
                        </td>
                      </motion.tr>
                    ))}
                  </AnimatePresence>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>


      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        table tr:last-child {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
};

export default Market;

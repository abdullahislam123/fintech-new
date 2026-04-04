import React, { useState, useEffect } from 'react';
import logo from '../assets/favicon.svg';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  FaBars, 
  FaXmark, 
  FaChevronDown, 
  FaArrowUpRightFromSquare, 
  FaBolt, 
  FaShieldHalved, 
  FaGlobe, 
  FaChartBar, 
  FaWallet,
  FaArrowRight,
  FaPlus,
  FaArrowsRotate,
  FaLayerGroup,
  FaCoins,
  FaImage,
  FaBuilding,
  FaLock,
  FaBook,
  FaCommentDots
} from 'react-icons/fa6';

const MENU_DATA = {
  Features: [
    { 
      name: 'Swap', 
      desc: 'Secure Elite trading', 
      path: '/swap', 
      bg: 'linear-gradient(135deg, rgba(6,35,25,0.9) 0%, rgba(18,95,65,0.9) 100%)', // Dark green matching MetaMask Swaps
      widget: (
        <motion.div variants={{ initial: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '5%', background: '#050C11', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', zIndex: 5, boxShadow: '0 20px 40px rgba(0,0,0,0.6)' }}>
          <div style={{ color: 'white', fontSize: '1.25rem', fontWeight: 800 }}>$1383.20</div>
          <div style={{ color: 'var(--accent-teal)', fontSize: '0.75rem', marginTop: '0.25rem' }}>USDC</div>
        </motion.div>
      )
    },
    { 
      name: 'Stake', 
      desc: 'Enterprise validator yields', 
      path: '/stake', 
      bg: 'linear-gradient(135deg, rgba(80,20,150,0.9) 0%, rgba(130,40,210,0.9) 100%)', // Purple matching Earn
      widget: (
        <motion.div variants={{ initial: { scale: 0.8, opacity: 0 }, hover: { scale: 1, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '5%', background: 'white', padding: '0.75rem 1.25rem', borderRadius: '12px', color: 'black', zIndex: 5, boxShadow: '0 10px 20px rgba(255,255,255,0.1)' }}>
           <strong>ETH</strong> <br/> <span style={{fontSize: '0.85rem'}}>3.00254</span>
        </motion.div>
      )
    },
    { 
      name: 'Bridge', 
      desc: 'Cross-chain liquidity network', 
      path: '/bridge', 
      bg: 'linear-gradient(135deg, rgba(200,60,20,0.8) 0%, rgba(255,100,50,0.9) 100%)', // Orange matching Buy
      widget: (
        <motion.div variants={{ initial: { x: 20, opacity: 0 }, hover: { x: 0, opacity: 1 } }} style={{ position: 'absolute', top: '25%', right: '5%', background: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', color: '#000', zIndex: 5, fontWeight: 'bold' }}>
          ↻ Bridge
        </motion.div>
      )
    },
    { 
      name: 'VMI Protocol', 
      desc: 'Vaultora Managed Infrastructure', 
      path: '/vmi', 
      bg: 'linear-gradient(135deg, rgba(40,10,60,0.9) 0%, rgba(80,20,100,0.9) 100%)', // Deep indigo matching Predict
      widget: (
        <motion.div variants={{ initial: { y: -20, opacity: 0 }, hover: { y: 0, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '8%', background: '#050C11', border: '1px solid var(--accent-indigo)', padding: '1rem', borderRadius: '12px', color: '#fff', zIndex: 5 }}>
           🏛️ Policy
        </motion.div>
      )
    },
    { 
      name: 'NFTs', 
      desc: 'Digital asset gallery', 
      path: '/nfts', 
      bg: 'linear-gradient(135deg, rgba(120,150,10,0.9) 0%, rgba(180,220,10,0.9) 100%)', // Bright green matching Perps
      widget: (
        <motion.div variants={{ initial: { scale: 0.8, rotate: 10, opacity: 0 }, hover: { scale: 1.05, rotate: 0, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '8%', background: '#111', padding: '0.5rem', borderRadius: '12px', border: '1px solid #333', zIndex: 5 }}>
           <img src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=150&h=150&auto=format&fit=crop" alt="NFT" style={{width: '50px', height: '50px', borderRadius: '8px'}}/>
        </motion.div>
      )
    }
  ],
  Developer: [
    { 
      name: 'Docs', 
      desc: 'Technical integration guides', 
      path: '/docs',
      bg: 'linear-gradient(135deg, rgba(10,40,80,0.9) 0%, rgba(30,100,200,0.9) 100%)', // Blue
      widget: (
        <motion.div variants={{ initial: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '5%', background: '#050C11', padding: '1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', zIndex: 5, boxShadow: '0 20px 40px rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <FaBook size={24} color="var(--accent-teal)" />
        </motion.div>
      )
    },
    { 
      name: 'Github', 
      desc: 'Open source core protocol', 
      path: '/community',
      bg: 'linear-gradient(135deg, rgba(40,40,40,0.9) 0%, rgba(80,80,80,0.9) 100%)', // Gray
      widget: (
        <motion.div variants={{ initial: { scale: 0.8, opacity: 0 }, hover: { scale: 1, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '5%', background: 'white', padding: '0.75rem 1.25rem', borderRadius: '12px', color: 'black', zIndex: 5, boxShadow: '0 10px 20px rgba(255,255,255,0.1)', textAlign: 'center' }}>
           <strong style={{ fontSize: '1.2rem' }}>{"< / >"}</strong> <br/> <span style={{fontSize: '0.85rem', fontWeight: 800}}>Code</span>
        </motion.div>
      )
    },
    { 
      name: 'Bug Bounty', 
      desc: 'Earn rewards for securing protocol', 
      path: '/policy',
      bg: 'linear-gradient(135deg, rgba(150,40,40,0.9) 0%, rgba(220,60,60,0.9) 100%)', // Red
      widget: (
        <motion.div variants={{ initial: { x: 20, opacity: 0 }, hover: { x: 0, opacity: 1 } }} style={{ position: 'absolute', top: '25%', right: '5%', background: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', color: '#000', zIndex: 5, fontWeight: 'bold' }}>
          🛡️ $500k
        </motion.div>
      )
    },
    { 
      name: 'SDKs & APIs', 
      desc: 'Build custom financial tools', 
      path: '/docs',
      bg: 'linear-gradient(135deg, rgba(20,80,40,0.9) 0%, rgba(40,160,80,0.9) 100%)', // Green
      widget: (
        <motion.div variants={{ initial: { rotate: -10, opacity: 0 }, hover: { rotate: 0, opacity: 1 } }} style={{ position: 'absolute', top: '20%', right: '5%', background: '#111', padding: '0.6rem 1rem', borderRadius: '12px', border: '1px solid #333', color: '#fff', fontWeight: 'bold', zIndex: 5 }}>
          ⚡ v2.4.1
        </motion.div>
      )
    }
  ],
  "Vaultora Card": [
    { 
      name: 'Apply Now', 
      desc: 'Get your physical Metal Card', 
      path: '/apply',
      bg: 'linear-gradient(135deg, rgba(180,140,20,0.9) 0%, rgba(220,180,40,0.9) 100%)', // Gold
      widget: (
        <motion.div variants={{ initial: { y: 20, opacity: 0, rotateY: 90 }, hover: { y: 0, opacity: 1, rotateY: 0 } }} transition={{type: 'spring'}} style={{ position: 'absolute', top: '15%', right: '5%', background: 'linear-gradient(135deg, #111, #333)', padding: '0.5rem', borderRadius: '8px', zIndex: 5, boxShadow: '0 10px 20px rgba(0,0,0,0.5)', border: '1px solid #555', width: '60px', height: '40px' }}>
          <div style={{ width: '10px', height: '8px', background: 'gold', borderRadius: '2px', marginBottom: '4px' }}></div>
          <div style={{ color: '#fff', fontSize: '0.4rem', fontFamily: 'monospace' }}>**** 4920</div>
        </motion.div>
      )
    },
    { 
      name: 'Benefits', 
      desc: 'Exclusive lounge & cashback', 
      path: '/vmi',
      bg: 'linear-gradient(135deg, rgba(80,20,80,0.9) 0%, rgba(140,40,140,0.9) 100%)', // Magenta/Purple
      widget: (
        <motion.div variants={{ initial: { scale: 0.8, opacity: 0 }, hover: { scale: 1, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '5%', background: '#fff', padding: '0.5rem 1rem', borderRadius: '20px', color: '#000', zIndex: 5, fontWeight: 'bold' }}>
          ✨ 5% Back
        </motion.div>
      )
    },
    { 
      name: 'Top-up', 
      desc: 'Fund crypto to fiat instantly', 
      path: '/bridge',
      bg: 'linear-gradient(135deg, rgba(20,80,100,0.9) 0%, rgba(40,140,180,0.9) 100%)', // Cyan
      widget: (
        <motion.div variants={{ initial: { y: -20, opacity: 0 }, hover: { y: 0, opacity: 1 } }} style={{ position: 'absolute', top: '20%', right: '5%', background: '#050C11', border: '1px solid var(--accent-teal)', padding: '0.6rem 1rem', borderRadius: '12px', color: '#fff', fontWeight: 'bold', zIndex: 5 }}>
          + <span style={{ color: 'var(--accent-teal)' }}>$500</span>
        </motion.div>
      )
    },
    { 
      name: 'Virtual Cards', 
      desc: 'Generate disposable cards online', 
      path: '/dashboard',
      bg: 'linear-gradient(135deg, rgba(90,90,100,0.9) 0%, rgba(140,140,150,0.9) 100%)', // Silver
      widget: (
        <motion.div variants={{ initial: { x: 20, opacity: 0 }, hover: { x: 0, opacity: 1 } }} style={{ position: 'absolute', top: '25%', right: '5%', background: '#111', padding: '0.6rem 1rem', borderRadius: '12px', border: '1px dotted #888', color: '#fff', zIndex: 5, fontWeight: 'bold' }}>
          📱 Apple Pay
        </motion.div>
      )
    }
  ],
  "Vaultora USD": [
    { 
      name: 'Mint vUSD', 
      desc: 'Create stablecoins backed 1:1', 
      path: '/swap',
      bg: 'linear-gradient(135deg, rgba(10,50,30,0.9) 0%, rgba(20,100,60,0.9) 100%)', // Green
      widget: (
        <motion.div variants={{ initial: { scale: 0.5, opacity: 0 }, hover: { scale: 1, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '8%', background: 'var(--accent-teal)', padding: '0.75rem', borderRadius: '50%', color: '#000', zIndex: 5, boxShadow: '0 0 20px var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px' }}>
          <strong style={{ fontSize: '1rem' }}>$</strong>
        </motion.div>
      )
    },
    { 
      name: 'Earn Yield', 
      desc: 'Up to 12% APY from US T-Bills', 
      path: '/stake',
      bg: 'linear-gradient(135deg, rgba(120,60,10,0.9) 0%, rgba(200,100,20,0.9) 100%)', // Orange
      widget: (
        <motion.div variants={{ initial: { y: 20, opacity: 0 }, hover: { y: 0, opacity: 1 } }} style={{ position: 'absolute', top: '20%', right: '5%', background: '#fff', padding: '0.5rem 1rem', borderRadius: '12px', color: '#000', zIndex: 5, fontWeight: 'bold' }}>
          📈 12% APY
        </motion.div>
      )
    },
    { 
      name: 'Transparency', 
      desc: 'Real-time reserve attestations', 
      path: '/reporting',
      bg: 'linear-gradient(135deg, rgba(20,20,60,0.9) 0%, rgba(40,40,120,0.9) 100%)', // Deep Blue
      widget: (
        <motion.div variants={{ initial: { rotate: 90, opacity: 0 }, hover: { rotate: 0, opacity: 1 } }} style={{ position: 'absolute', top: '15%', right: '5%', background: '#050C11', padding: '0.8rem', borderRadius: '12px', border: '1px solid var(--glass-border)', color: '#fff', zIndex: 5 }}>
          🔍 Audit
        </motion.div>
      )
    },
    { 
      name: 'Redeem', 
      desc: 'Convert to fiat wire transfer', 
      path: '/swap',
      bg: 'linear-gradient(135deg, rgba(80,20,20,0.9) 0%, rgba(140,40,40,0.9) 100%)', // Dark red
      widget: (
        <motion.div variants={{ initial: { x: -20, opacity: 0 }, hover: { x: 0, opacity: 1 } }} style={{ position: 'absolute', top: '25%', right: '5%', background: '#111', padding: '0.6rem 1rem', borderRadius: '12px', border: '1px solid #444', color: '#fff', zIndex: 5, fontWeight: 'bold' }}>
          🏦 Wire
        </motion.div>
      )
    }
  ]
};

const Topbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const mouseX = useMotionValue(typeof window !== 'undefined' ? window.innerWidth / 2 : 0);
  const mouseY = useMotionValue(typeof window !== 'undefined' ? window.innerHeight / 2 : 0);
  
  const rotateX = useTransform(mouseY, [0, typeof window !== 'undefined' ? window.innerHeight : 1000], [25, -25]);
  const rotateY = useTransform(mouseX, [0, typeof window !== 'undefined' ? window.innerWidth : 1000], [-25, 25]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const handleConnect = () => {
    navigate('/download');
  };

  return (
    <>
      {/* Background Dimmer when Menu is Active */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: activeMenu ? '100vh' : '0vh',
          background: 'rgba(0,0,0,0.6)',
          backdropFilter: 'blur(5px)',
          zIndex: 998,
          transition: 'opacity 0.3s',
          opacity: activeMenu ? 1 : 0,
          pointerEvents: activeMenu ? 'auto' : 'none'
        }}
        onClick={() => setActiveMenu(null)}
        onMouseEnter={() => setActiveMenu(null)}
      />

      <nav style={{ 
        position: 'fixed', 
        top: activeMenu ? 0 : '1.5rem', 
        left: activeMenu ? 0 : '50%',
        transform: activeMenu ? 'none' : 'translateX(-50%)',
        width: activeMenu ? '100%' : '90%',
        maxWidth: activeMenu ? '100%' : '1200px',
        zIndex: 1000,
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}>
        <div 
          className={activeMenu ? "" : "glass-card"}
          style={{ 
            padding: activeMenu ? '1.5rem 4rem' : '0.75rem 2rem',
            borderRadius: activeMenu ? 0 : 'var(--pill-radius)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            background: activeMenu ? '#121212' : (isScrolled ? 'rgba(5, 12, 17, 0.85)' : 'rgba(255, 255, 255, 0.03)'),
            border: activeMenu ? 'none' : (isScrolled ? '1px solid var(--accent-teal-soft)' : '1px solid var(--glass-border)'),
            backdropFilter: activeMenu ? 'none' : 'blur(40px)',
            boxShadow: activeMenu ? 'none' : (isScrolled ? '0 20px 40px rgba(0,0,0,0.5), 0 0 20px rgba(0, 245, 212, 0.1)' : 'none'),
            transition: 'all 0.3s ease'
          }}
        >
          <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', perspective: '1000px' }}>
            <motion.div style={{ rotateX: activeMenu ? 0 : rotateX, rotateY: activeMenu ? 0 : rotateY, display: 'flex', transformStyle: 'preserve-3d' }}>
              <img src={logo} alt="Vaultora Logo" style={{ width: '36px', height: '36px', objectFit: 'cover', borderRadius: '50%', overflow: 'hidden', boxShadow: '0 10px 20px rgba(0, 245, 212, 0.2)' }} />
            </motion.div>
            <span className="font-heading" style={{ color: 'white', fontWeight: 900, fontSize: '1.25rem', letterSpacing: '-1px' }}>VAULTORA</span>
          </Link>

          {/* Desktop Nav Items */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {Object.keys(MENU_DATA).map((menu) => {
              const hasDropdown = MENU_DATA[menu].length > 0;
              return (
                <div 
                  key={menu} 
                  onMouseEnter={() => hasDropdown && setActiveMenu(menu)}
                  onClick={() => !hasDropdown && navigate('/' + menu.toLowerCase().replace(' ', '-'))}
                  style={{ position: 'relative', height: '2.5rem', display: 'flex', alignItems: 'center', cursor: 'pointer' }}
                >
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '0.4rem', 
                    background: activeMenu === menu ? 'var(--accent-teal)' : 'transparent',
                    color: activeMenu === menu ? '#000' : (activeMenu ? '#aaa' : 'white'),
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontWeight: 800,
                    fontSize: '0.875rem',
                    transition: '0.2s',
                    letterSpacing: '0.5px'
                  }}>
                    {menu} {hasDropdown && <FaChevronDown size={12} style={{ transform: activeMenu === menu ? 'rotate(180deg)' : 'none', transition: 'all 0.3s' }} />}
                  </div>
                </div>
              );
            })}

            {/* <Link to="/activity" style={{ 
              textDecoration: 'none', 
              color: activeMenu ? '#aaa' : (isActive('/activity') ? 'white' : 'var(--text-secondary)'),
              fontWeight: 700,
              fontSize: '0.875rem'
            }}>Activity</Link> */}
          </div>

          {/* Global Action Buttons */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <Link to="/dashboard" style={{ textDecoration: 'none' }}>
               <button style={{ 
                 background: 'rgba(255,255,255,0.05)', 
                 color: 'white', 
                 border: '1px solid var(--glass-border)', 
                 padding: '0.6rem 1.75rem', 
                 borderRadius: 'var(--pill-radius)', 
                 fontWeight: 800, 
                 fontSize: '0.8125rem',
                 cursor: 'pointer'
               }}>Dashboard</button>
            </Link>
            <button onClick={handleConnect} className="btn-primary" style={{ padding: '0.6rem 1.75rem', fontSize: '0.8125rem', display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
              <FaWallet size={14} color="black" /> Download
            </button>
            {activeMenu && (
              <button 
                onClick={() => setActiveMenu(null)} 
                style={{ 
                  marginLeft: '0.5rem', 
                  background: 'transparent', 
                  border: 'none', 
                  color: 'white', 
                  cursor: 'pointer', 
                  padding: '0.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
              >
                <FaXmark size={20} />
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Flat Drawer Menu */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            style={{ 
              position: 'fixed',
              top: '5rem', /* right below the extended header */
              left: 0,
              right: 0,
              maxHeight: 'calc(100vh - 5rem)',
              overflowY: 'auto',
              zIndex: 999,
              background: '#050C11', /* Darker contrasting background for Vaultora */
              display: 'flex',
              justifyContent: 'center',
              padding: '2rem 4rem 3rem 4rem',
              borderBottom: '1px solid var(--accent-teal-soft)',
              boxShadow: '0 30px 60px rgba(0,0,0,0.8)'
            }}
          >
            <div style={{ width: '100%', maxWidth: '1200px', display: 'grid', gridTemplateColumns: '3fr 1fr', gap: '3rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {MENU_DATA[activeMenu].map((item) => (
                  <Link 
                    key={item.name} 
                    to={item.path} 
                    style={{ textDecoration: 'none', display: 'block' }}
                    onClick={() => setActiveMenu(null)}
                  >
                    <motion.div 
                      initial="initial"
                      whileHover="hover"
                      style={{ 
                        padding: '1.25rem 1.5rem', 
                        borderRadius: '16px', 
                        background: item.bg || 'rgba(255, 255, 255, 0.04)', 
                        border: item.bg ? 'none' : '1px solid var(--glass-border)',
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'flex-end', 
                        minHeight: '160px', 
                        cursor: 'pointer',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                      }}
                    >
                       {item.widget && item.widget}
                       <motion.div 
                         style={{ position: 'relative', zIndex: 10 }}
                         variants={{ hover: { y: -5 } }}
                       >
                         <div style={{ color: 'white', fontWeight: 900, fontSize: '1.75rem', letterSpacing: '-0.5px' }}>{item.name}</div>
                         <div style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', fontWeight: 600 }}>{item.desc}</div>
                       </motion.div>
                    </motion.div>
                  </Link>
                ))}
              </div>

              <div style={{ paddingLeft: '3rem', borderLeft: '1px solid #333', display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                 <div>
                   <h4 style={{ color: '#666', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>Explore More</h4>
                   <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     {[
                       { name: 'Home', path: '/' },
                       { name: 'Community Calls', path: '/community' },
                       { name: 'Github', path: '/community' },
                       { name: 'Blog', path: '/docs' }
                     ].map((link) => (
                       <li key={link.name}>
                         <Link onClick={() => setActiveMenu(null)} to={link.path} style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', transition: '0.2s' }} onMouseEnter={e => e.target.style.color='var(--accent-teal)'} onMouseLeave={e => e.target.style.color='white'}>
                           {link.name}
                         </Link>
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div>
                   <h4 style={{ color: '#666', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1rem' }}>About Vaultora</h4>
                   <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                     {[
                       { name: 'Support', path: '/docs' },
                       { name: 'Careers', path: '/vmi' }
                     ].map((link) => (
                       <li key={link.name}>
                         <Link onClick={() => setActiveMenu(null)} to={link.path} style={{ color: 'white', textDecoration: 'none', fontWeight: 700, fontSize: '0.95rem', transition: '0.2s' }} onMouseEnter={e => e.target.style.color='var(--accent-teal)'} onMouseLeave={e => e.target.style.color='white'}>
                           {link.name}
                         </Link>
                       </li>
                     ))}
                   </ul>
                 </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Topbar;

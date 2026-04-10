import React from 'react';
import logo from '../assets/favicon.svg';
import { Link } from 'react-router-dom';
import { 
  FaGlobe, 
  FaShieldHalved, 
  FaBolt, 
  FaEnvelope, 
  FaArrowRight,
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaDiscord,
  FaCommentDots
} from 'react-icons/fa6';
import { motion } from 'framer-motion';

const Footer = () => {
  const footerSections = [
    {
      title: 'SOLUTIONS',
      links: [
        { name: 'Multichain Wallet', path: '/dashboard' },
        { name: 'Instant Swap', path: '/swap' },
        { name: 'Secure Bridge', path: '/bridge' },
        { name: 'Yield Staking', path: '/stake' },
        { name: 'NFT Portfolio', path: '/nfts' },
        { name: 'Elite (VMI)', path: '/' }
      ]
    },
    {
      title: 'DEVELOPERS',
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'VMI API', path: '/api' },
        { name: 'Security Audits', path: '/audits' },
        { name: 'Bug Bounty', path: '/bounty' },
        { name: 'Github', path: '/docs' },
        { name: 'Open Source', path: '/open-source' }
      ]
    },
    {
      title: 'RESOURCES',
      links: [
        { name: 'Help Center', path: '/faq' },
        { name: 'Support', path: '/support' },
        { name: 'Careers', path: '/careers' },
        { name: 'Community', path: '/community' },
        { name: 'Governance', path: '/governance' },
        { name: 'Blog', path: '/blog' },
        { name: 'Brand Assets', path: '/assets' }
      ]
    },
    {
      title: 'LEGAL',
      links: [
        { name: 'Privacy Policy', path: '/policy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'Disclaimer', path: '/disclaimer' },
        { name: 'Compliance', path: '/compliance' }
      ]
    }
  ];

  return (
    <footer style={{ 
      background: 'rgba(2, 6, 9, 0.95)', 
      borderTop: '1px solid var(--glass-border)',
      padding: '8rem 4rem 4rem',
      position: 'relative',
      zIndex: 10,
      backdropFilter: 'blur(40px)'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr repeat(4, 1fr)', gap: '4rem', marginBottom: '6rem' }}>
          {/* Brand & Newsletter */}
          <div style={{ paddingRight: '2rem' }}>
            <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
              <img src={logo} alt="Vaultora Logo" style={{ width: '42px', height: '42px', objectFit: 'cover', borderRadius: '50%', overflow: 'hidden' }} />
              <div className="font-heading" style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', letterSpacing: '-1.5px' }}>
                Vaultora<span style={{ color: 'var(--accent-teal)' }}>.</span>
              </div>
            </Link>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6, marginBottom: '2.5rem', fontWeight: 500 }}>
              The definitive gateway to multi-chain liquidity. Elite-grade security for the global Web3 ecosystem.
            </p>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ width: '10px', height: '10px', background: '#10b981', borderRadius: '50%', boxShadow: '0 0 10px #10b981' }}></div>
                <span style={{ color: 'white', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1px' }}>ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>

            <div className="glass-card" style={{ padding: '0.5rem', display: 'flex', gap: '0.5rem', borderRadius: '1rem', border: '1px solid var(--glass-border)', background: 'rgba(255,255,255,0.03)' }}>
              <input 
                type="email" 
                placeholder="Updates & Insights" 
                style={{ background: 'transparent', border: 'none', padding: '0.75rem 1rem', color: 'white', width: '100%', outline: 'none', fontSize: '0.875rem', fontWeight: 600 }} 
              />
              <button style={{ background: 'var(--accent-teal)', color: '#020609', border: 'none', borderRadius: '0.75rem', padding: '0.75rem 1.25rem', cursor: 'pointer', fontWeight: 900, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <FaArrowRight size={18} />
              </button>
            </div>
          </div>

          {/* Nav Columns */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 style={{ color: 'white', fontWeight: 900, fontSize: '0.8125rem', letterSpacing: '1.5px', marginBottom: '2rem', textTransform: 'uppercase' }}>
                {section.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {section.links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '1rem' }}>
                    <Link to={link.path} style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '0.9375rem', fontWeight: 600, transition: 'var(--transition-smooth)' }}>
                      <motion.span whileHover={{ x: 5, color: 'var(--accent-teal)' }} style={{ display: 'inline-block' }}>
                        {link.name}
                      </motion.span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div style={{ 
          pt: '4rem', 
          borderTop: '1px solid var(--glass-border)', 
          paddingTop: '3rem',
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}>
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 600 }}>© 2026 Vaultora Protocol Labs Ltd.</span>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <motion.div whileHover={{ scale: 1.2, color: 'var(--accent-teal)' }} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}><FaXTwitter size={18} /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: 'var(--accent-teal)' }} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}><FaGithub size={18} /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: 'var(--accent-teal)' }} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}><FaLinkedinIn size={18} /></motion.div>
              <motion.div whileHover={{ scale: 1.2, color: 'var(--accent-teal)' }} style={{ cursor: 'pointer', color: 'var(--text-secondary)' }}><FaDiscord size={18} /></motion.div>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.8125rem', fontWeight: 800 }}>
              <FaGlobe size={14} /> English (US)
            </div>
            <div style={{ color: 'var(--text-secondary)', fontSize: '0.8125rem', display: 'flex', gap: '1.5rem', fontWeight: 700 }}>
              <span>Security Hub</span>
              <span>Privacy Center</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

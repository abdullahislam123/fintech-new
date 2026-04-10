import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlus, FaMinus, FaChevronDown, FaMagnifyingGlass, FaArrowRight, FaCircleQuestion } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const FAQ_DATA = [
  {
    category: "General",
    questions: [
      {
        q: "What is Vaultora?",
        a: "Vaultora is an institutional-grade, multi-chain Web3 gateway and non-custodial wallet designed for the next generation of digital finance. We provide secure access to DeFi, NFTs, and cross-chain liquidity through a premium, high-fidelity interface."
      },
      {
        q: "Is Vaultora open source?",
        a: "Yes, the core protocol and wallet implementation are open source. You can audit our code on GitHub to verify our security claims and non-custodial architecture."
      },
      {
        q: "What makes Vaultora different from other wallets?",
        a: "Unlike standard wallets, Vaultora focuses on institutional-grade security, cross-chain management, and a high-performance UI. We offer unique features like VMI Managed Infrastructure and built-in MEV protection."
      }
    ]
  },
  {
    category: "Security",
    questions: [
      {
        q: "Are my funds safe in Vaultora?",
        a: "Vaultora is non-custodial, meaning you alone control your private keys. We never have access to your assets. We utilize hardware-isolated enclaves and advanced encryption standards to ensure your keys remain on your device."
      },
      {
        q: "What happens if I lose my recovery phrase?",
        a: "As a non-custodial wallet, Vaultora does not store your recovery phrase. If you lose it, your funds cannot be recovered. Always store your phrase in multiple secure, offline locations."
      },
      {
        q: "Has Vaultora been audited?",
        a: "Yes, our smart contracts and wallet infrastructure undergo regular audits by leading security firms including Certik and Trail of Bits. You can view our latest audit reports in our documentation."
      }
    ]
  },
  {
    category: "Assets & Chains",
    questions: [
      {
        q: "Which blockchains does Vaultora support?",
        a: "We currently support Ethereum, Solana, Polygon, Arbitrum, Optimism, Base, and Avalanche. We are constantly expanding our multi-chain network."
      },
      {
        q: "Can I manage NFTs in Vaultora?",
        a: "Yes, Vaultora features a high-fidelity NFT gallery that supports ERC-721, ERC-1155, and SPL tokens, providing detailed metadata and floor price analytics for your entire portfolio."
      }
    ]
  }
];

const AccordionItem = ({ q, a, index, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      style={{
        marginBottom: '1rem',
        borderRadius: '1.25rem',
        background: isOpen ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.01)',
        border: isOpen ? '1px solid var(--accent-teal-soft)' : '1px solid var(--glass-border)',
        overflow: 'hidden',
        transition: 'all 0.3s ease'
      }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: isMobile ? '1.5rem 1.25rem' : '1.75rem 2rem',
          background: 'none',
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '1rem'
        }}
      >
        <span style={{ 
          color: isOpen ? 'var(--accent-teal)' : 'white', 
          fontWeight: 700, 
          fontSize: isMobile ? '1rem' : '1.1rem',
          transition: 'color 0.3s ease'
        }}>
          {q}
        </span>
        <div style={{
          width: '28px',
          height: '28px',
          borderRadius: '50%',
          background: isOpen ? 'var(--accent-teal)' : 'rgba(255,255,255,0.05)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: isOpen ? 'black' : 'white',
          transition: 'all 0.3s ease'
        }}>
          {isOpen ? <FaMinus size={12} /> : <FaPlus size={12} />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div style={{ 
              padding: isMobile ? '0 1.25rem 1.75rem' : '0 2rem 2rem', 
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              fontSize: isMobile ? '0.9rem' : '1rem'
            }}>
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQ = () => {
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 1024 : false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = ['All', ...FAQ_DATA.map(c => c.category)];

  const filteredData = FAQ_DATA.map(cat => ({
    ...cat,
    questions: cat.questions.filter(q => 
      (activeCategory === 'All' || cat.category === activeCategory) &&
      (q.q.toLowerCase().includes(searchQuery.toLowerCase()) || q.a.toLowerCase().includes(searchQuery.toLowerCase()))
    )
  })).filter(cat => cat.questions.length > 0);

  return (
    <div style={{ minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
      <AnimatedBackground />
      
      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: isMobile ? '8rem 1.5rem 6rem' : '12rem 2rem 8rem', position: 'relative', zIndex: 1 }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: isMobile ? '4rem' : '6rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '20px', 
              background: 'rgba(0, 245, 212, 0.1)', 
              border: '1px solid var(--accent-teal-soft)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--accent-teal)'
            }}>
              <FaCircleQuestion size={30} />
            </div>
          </div>
          <h1 className="font-heading" style={{ fontSize: isMobile ? '2.5rem' : '4rem', fontWeight: 900, color: 'white', marginBottom: '1.5rem', letterSpacing: '-2px' }}>
            Questions? <span style={{ color: 'var(--accent-teal)' }}>Answers.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: isMobile ? '1.1rem' : '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            Everything you need to know about Vaultora protocol and management. Can't find it here? Reach out to support.
          </p>
        </motion.div>

        {/* Search & Filters */}
        <div style={{ marginBottom: '4rem' }}>
          <div className="glass-card" style={{ padding: '0.5rem', borderRadius: '100px', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid var(--accent-teal-soft)', marginBottom: '2rem', background: 'rgba(5, 12, 17, 0.5)' }}>
            <div style={{ paddingLeft: '1.5rem', color: 'var(--accent-teal)' }}><FaMagnifyingGlass size={18} /></div>
            <input 
              type="text" 
              placeholder="Search for questions, keywords..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{ background: 'none', border: 'none', color: 'white', fontSize: '1rem', width: '100%', padding: '1rem 0', outline: 'none', fontWeight: 500 }}
            />
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: '0.6rem 1.5rem',
                  borderRadius: '100px',
                  background: activeCategory === cat ? 'var(--accent-teal)' : 'rgba(255,255,255,0.05)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--accent-teal)' : 'var(--glass-border)',
                  color: activeCategory === cat ? 'black' : 'white',
                  fontWeight: 800,
                  fontSize: '0.85rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* FAQ List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {filteredData.length > 0 ? filteredData.map((section, sIdx) => (
            <div key={section.category}>
              <h2 style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--accent-teal)', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
                {section.category}
              </h2>
              {section.questions.map((q, qIdx) => (
                <AccordionItem key={qIdx} q={q.q} a={q.a} index={qIdx} isMobile={isMobile} />
              ))}
            </div>
          )) : (
            <div style={{ textAlign: 'center', padding: '4rem 0' }}>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>No results found for "{searchQuery}"</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ 
            marginTop: isMobile ? '6rem' : '8rem', 
            padding: isMobile ? '2.5rem 1.5rem' : '3.5rem', 
            borderRadius: '2rem', 
            border: '1px solid var(--accent-teal-soft)',
            textAlign: 'center',
            background: 'linear-gradient(135deg, rgba(0, 245, 212, 0.05), transparent)'
          }}
        >
          <h3 style={{ fontSize: isMobile ? '1.75rem' : '2rem', fontWeight: 900, color: 'white', marginBottom: '1rem' }}>Still have questions?</h3>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '500px', margin: '0 auto 2.5rem' }}>
            Our team is here to help. Reach out to us via email or join our community Discord server.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexDirection: isMobile ? 'column' : 'row' }}>
            <button className="btn-primary teal-glow" style={{ padding: '1rem 3rem', display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
              Contact Support <FaArrowRight size={14} />
            </button>
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default FAQ;

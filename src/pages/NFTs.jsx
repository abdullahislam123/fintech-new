import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaBolt, 
  FaArrowRight,
  FaDisplay,
  FaGem,
  FaShieldHalved,
  FaGlobe,
  FaArrowUpRightFromSquare,
  FaChevronRight,
  FaFilter,
  FaGrip,
  FaBars as FaMenuIcon,
  FaServer,
  FaLock,
  FaFileLines,
  FaChartLine,
  FaFingerprint,
  FaBuilding,
  FaChartBar,
  FaMagnifyingGlass,
  FaTerminal,
  FaFileCode,
  FaUsers
} from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const NFT_COLLECTIONS = [
  { id: 1, name: 'Vaultora Elite #721', collection: 'V-Genesis', price: '4.2 ETH', lastSale: '3.8 ETH', color: '#00f5d4' },
  { id: 2, name: 'Elite Core #09', collection: 'V-Founders', price: '12.5 ETH', lastSale: '10.2 ETH', color: '#8247E5' },
  { id: 3, name: 'Protocol Artifact #55', collection: 'V-Utility', price: '1.8 ETH', lastSale: '1.5 ETH', color: '#28A0F0' },
  { id: 4, name: 'Security Sentinel #12', collection: 'V-Defense', price: '6.4 ETH', lastSale: '5.9 ETH', color: '#ff0055' },
  { id: 5, name: 'Validator Key #88', collection: 'V-Yield', price: '22.0 ETH', lastSale: '18.5 ETH', color: '#ffaa00' },
  { id: 6, name: 'Governance Shard #01', collection: 'V-DAO', price: '0.5 ETH', lastSale: '0.4 ETH', color: '#627EEA' },
];

const NFTCard = ({ nft }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="glass-card" 
    style={{ overflow: 'hidden', border: '1px solid var(--glass-border)', cursor: 'pointer', backdropFilter: 'blur(40px)' }}
  >
    <div style={{ 
      aspectRatio: '1', 
      background: `linear-gradient(135deg, ${nft.color}22 0%, rgba(0,0,0,0) 100%)`, 
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
       <motion.div 
         animate={{ 
           y: [0, -10, 0],
           rotateY: [0, 10, 0]
         }}
         transition={{ 
           duration: 4, 
           repeat: Infinity, 
           ease: "easeInOut" 
         }}
         style={{ 
           width: '120px', 
           height: '120px', 
           background: nft.color, 
           borderRadius: '1.5rem',
           boxShadow: `0 0 50px ${nft.color}44`,
           border: '2px solid rgba(255,255,255,0.2)',
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'center',
           color: 'white'
         }}
       >
         <FaGem size={48} />
       </motion.div>
       
       <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem' }}>
          <div style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(10px)', padding: '0.4rem 0.8rem', borderRadius: '0.75rem', fontSize: '0.7rem', color: 'white', fontWeight: 800, border: '1px solid rgba(255,255,255,0.1)' }}>
            NEW ASSET
          </div>
       </div>
    </div>
    
    <div style={{ padding: '1.5rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.5px' }}>{nft.collection}</span>
        <FaArrowUpRightFromSquare size={12} color="var(--text-muted)" />
      </div>
      <h3 style={{ color: 'white', fontSize: '1rem', fontWeight: 900, marginBottom: '1.25rem' }}>{nft.name}</h3>
      
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)' }}>
        <div>
           <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '0.25rem' }}>Floor Price</div>
           <div style={{ color: 'white', fontWeight: 900, fontSize: '1rem' }}>{nft.price}</div>
        </div>
        <div style={{ textAlign: 'right' }}>
           <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', marginBottom: '0.25rem' }}>Last Sale</div>
           <div style={{ color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem' }}>{nft.lastSale}</div>
        </div>
      </div>
    </div>
  </motion.div>
);

const NFTs = () => {
  return (
    <div className="nfts-page" style={{ position: 'relative' }}>
      <AnimatedBackground />

      <main style={{ padding: '8rem 4rem', position: 'relative', zIndex: 1, maxWidth: '1400px', margin: '0 auto' }}>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem' }}>
          <div>
            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-heading" 
              style={{ fontSize: '3.5rem', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-1.5px' }}
            >
              Collect & trade <span style={{ color: 'var(--accent-teal)' }}>NFTs.</span>
            </motion.h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', fontWeight: 500 }}>Browse. Mint. Repeat. The future of digital ownership in your Vaultora portal.</p>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div className="glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer', backdropFilter: 'blur(40px)' }}>
               <FaFilter size={16} color="var(--text-muted)" />
               <span style={{ color: 'white', fontWeight: 800, fontSize: '0.875rem' }}>High Value</span>
            </div>
            <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', borderRadius: '1rem', padding: '0.25rem', backdropFilter: 'blur(40px)', alignItems: 'center' }}>
               <div style={{ background: 'var(--accent-teal)', color: '#020609', padding: '0.5rem', borderRadius: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaGrip size={18} /></div>
               <div style={{ color: 'var(--text-muted)', padding: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><FaMenuIcon size={18} /></div>
            </div>
          </div>
        </header>

        {/* Gallery Grid */}
        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {NFT_COLLECTIONS.map(nft => (
            <NFTCard key={nft.id} nft={nft} />
          ))}
        </section>

        {/* Extra Content Sections - Consistent with site-wide master layout */}
        <div style={{ marginTop: '12rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          {/* NFT Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ width: '100%', maxWidth: '1200px' }}
          >
            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '4rem', textAlign: 'center' }}>Institutional NFT Custody</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: <FaShieldHalved />, title: 'Cold-Storage Vaults', desc: 'Secure your air-gapped high-value assets with our multi-sig institutional vault infrastructure.' },
                { icon: <FaChartLine />, title: 'Floor Price Oracles', desc: 'Real-time valuation for your entire collection using our proprietary Elite-Grade data feeds.' },
                { icon: <FaBolt />, title: 'Instant NFT Loans', desc: 'Borrow vUSD against blue-chip collections instantly without selling your underlying assets.' },
                { icon: <FaFingerprint />, title: 'Provenance Verification', desc: 'Automatic cryptographic verification of asset history and ownership authenticity.' }
              ].map((feature, i) => (
                <div key={i} className="glass-card" style={{ padding: '2.5rem', borderRadius: '24px', transition: '0.3s' }} onMouseEnter={e => e.currentTarget.style.borderColor='var(--accent-teal)'} onMouseLeave={e => e.currentTarget.style.borderColor='var(--glass-border)'}>
                   <div style={{ fontSize: '2.5rem', color: 'var(--accent-teal)', marginBottom: '1.5rem' }}>{feature.icon}</div>
                   <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }}>{feature.title}</h3>
                   <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* NFT Steps */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ marginTop: '12rem', width: '100%', maxWidth: '1000px', textAlign: 'center' }}
          >
            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '4rem' }}>Managing Your Assets</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', position: 'relative' }}>
               <div style={{ position: 'absolute', top: '3rem', left: '10%', right: '10%', height: '1px', background: 'linear-gradient(90deg, transparent, var(--glass-border), transparent)', zIndex: 0 }} />
               {[
                 { title: 'Link Portfolios', desc: 'Connect multiple wallets to aggregate your digital asset view.' },
                 { title: 'Secure Assets', desc: 'Transfer high-value items to our hardened cold-storage vaults.' },
                 { title: 'Manage & Earn', desc: 'Borrow against or showcase your assets within the Elite ecosystem.' }
               ].map((step, i) => (
                 <div key={i} style={{ flex: 1, zIndex: 1 }}>
                    <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--bg-surface)', border: '2px solid var(--accent-teal)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 2rem', fontWeight: 900, fontSize: '1.5rem', color: 'var(--accent-teal)', boxShadow: '0 0 20px rgba(0,245,212,0.2)' }}>
                      {i + 1}
                    </div>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>{step.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.5 }}>{step.desc}</p>
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Enhanced CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{ 
              marginTop: '12rem', 
              marginBottom: '8rem',
              width: '100%', 
              maxWidth: '1200px', 
              background: 'linear-gradient(to bottom right, rgba(0, 245, 212, 0.05), transparent, rgba(255, 0, 85, 0.05))',
              padding: '6rem 4rem',
              borderRadius: '40px',
              border: '1px solid var(--glass-border)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            <h2 className="font-heading" style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>The Future of Digital Ownership</h2>
            <p style={{ color: 'var(--text-secondary)', maxWidth: '650px', marginBottom: '3rem', fontSize: '1.2rem', lineHeight: 1.6 }}>
              Unlock the liquidity of your collection. Vaultora provides the world's most secure environment for professional collectors.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <button className="btn-primary" style={{ padding: '1.25rem 3.5rem' }}>Connect Collection</button>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default NFTs;

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
              Digital <span style={{ color: 'var(--accent-teal)' }}>Vault.</span>
            </motion.h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', fontWeight: 500 }}>Elite custody for high-value digital collectibles. Managed directly from your VMI portal.</p>
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

        {/* Bottom CTA */}
        <section style={{ marginTop: '8rem', textAlign: 'center' }}>
           <div className="glass-card" style={{ padding: '4rem', borderRadius: '3rem', border: '1px solid var(--glass-border)', background: 'linear-gradient(135deg, rgba(130, 71, 229, 0.05) 0%, rgba(0,0,0,0) 100%)' }}>
              <h2 style={{ color: 'white', fontSize: '2.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-1px' }}>Ready to Eliteize your NFTs?</h2>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem', fontWeight: 500 }}>
                Join the world's leading collectors and institutions managing billions in digital assets on the Vaultora platform.
              </p>
              <button className="btn-primary" style={{ background: 'var(--accent-teal)', color: '#020609', padding: '1.25rem 3.5rem', borderRadius: '1rem', fontWeight: 900, fontSize: '1rem' }}>Explore Full Marketplace</button>
           </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default NFTs;

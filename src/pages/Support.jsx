import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHeadset, FaBook, FaShieldHalved, FaChevronDown, FaEnvelope, FaDiscord, FaXTwitter, FaArrowRight } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const faqData = [
  { q: "How do I create a Vaultora wallet?", a: "Download the Vaultora extension for Chrome or Firefox, click 'Create New Wallet', and follow the on-screen instructions. You'll receive a 12-word seed phrase — store it securely offline. This phrase is the only way to recover your wallet." },
  { q: "What networks does Vaultora support?", a: "Vaultora supports Ethereum, Polygon, Arbitrum, Optimism, Base, BNB Smart Chain, Avalanche, and Solana. We are continuously adding new networks based on community demand." },
  { q: "How do I swap tokens?", a: "Navigate to the Swap page and select the tokens you'd like to exchange. Vaultora aggregates quotes from multiple DEXs to find the best rate for you, with built-in MEV protection and slippage controls." },
  { q: "Are my funds safe?", a: "Vaultora is a non-custodial wallet — your funds are always controlled by your private keys, which never leave your device. Our smart contracts have been audited by Certik and Trail of Bits." },
  { q: "How do I contact support?", a: "You can reach our support team 24/7 via the live chat widget, by emailing support@vaultora.io, or through our official Discord server. Enterprise clients receive priority SLA-backed support." },
  { q: "What are gas fees?", a: "Gas fees are the costs paid to blockchain validators for processing your transactions. Vaultora provides real-time gas estimates and allows you to customize gas settings for faster or cheaper transactions." },
];

const FAQItem = ({ item, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      style={{ borderBottom: '1px solid var(--glass-border)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '2rem 0', background: 'none', border: 'none', color: 'white',
          fontSize: '1.15rem', fontWeight: 700, cursor: 'pointer', textAlign: 'left', gap: '2rem'
        }}
      >
        {item.q}
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.3 }}>
          <FaChevronDown size={14} color="var(--accent-teal)" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, paddingBottom: '2rem', fontSize: '1.05rem' }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Support = () => {
  return (
    <div style={{ minHeight: '100vh', paddingTop: '10rem', position: 'relative' }}>
      <AnimatedBackground />
      <main style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, padding: '0 2rem 10rem 2rem' }}>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <div style={{ display: 'inline-block', padding: '0.5rem 1.5rem', borderRadius: '100px', border: '1px solid var(--accent-teal-soft)', background: 'rgba(0, 245, 212, 0.05)', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.875rem', marginBottom: '2rem', letterSpacing: '2px' }}>
            HELP CENTER
          </div>
          <h1 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-3px' }}>
            How can we <span style={{ color: 'var(--accent-teal)' }}>help?</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '650px', margin: '0 auto', lineHeight: 1.6 }}>
            Browse our knowledge base, explore FAQs, or reach out to our dedicated support team — we're here around the clock.
          </p>
        </motion.div>

        {/* Support Channels Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', marginBottom: '8rem' }}>
          {[
            { icon: <FaHeadset size={28} />, title: "Live Chat", desc: "Get real-time help from our support team. Average response under 2 minutes.", cta: "Start Chat" },
            { icon: <FaBook size={28} />, title: "Knowledge Base", desc: "Step-by-step guides, tutorials, and troubleshooting articles covering every feature.", cta: "Browse Articles" },
            { icon: <FaShieldHalved size={28} />, title: "Security Hub", desc: "Report vulnerabilities, review our audit reports, and learn best security practices.", cta: "Visit Hub" },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, borderColor: 'var(--accent-teal-soft)' }}
              className="glass-card"
              style={{ padding: '3rem 2.5rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1.5rem', cursor: 'pointer', transition: 'border-color 0.3s' }}
            >
              <div style={{ width: '56px', height: '56px', borderRadius: '1rem', background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}>
                {card.icon}
              </div>
              <h3 style={{ color: 'white', fontSize: '1.5rem', fontWeight: 900, letterSpacing: '-0.5px' }}>{card.title}</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem', flex: 1 }}>{card.desc}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--accent-teal)', fontWeight: 800, fontSize: '0.95rem' }}>
                {card.cta} <FaArrowRight size={14} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '8rem' }}
        >
          <h2 className="font-heading" style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px', marginBottom: '3rem' }}>
            Frequently Asked<span style={{ color: 'var(--accent-teal)' }}>.</span>
          </h2>
          <div className="glass-card" style={{ padding: '1rem 3rem', borderRadius: '1.5rem' }}>
            {faqData.map((item, i) => (
              <FAQItem key={i} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Contact strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '4rem', borderRadius: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', background: 'linear-gradient(135deg, rgba(0,245,212,0.06), rgba(5,12,17,0.9))', border: '1px solid var(--accent-teal-soft)' }}
        >
          <div style={{ maxWidth: '500px' }}>
            <h3 style={{ fontSize: '2rem', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-1px' }}>Still need help?</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>Our enterprise support team is available 24/7 with guaranteed SLA response times for business accounts.</p>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <motion.a whileHover={{ scale: 1.1 }} href="mailto:support@vaultora.io" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,245,212,0.1)', border: '1px solid var(--accent-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}>
              <FaEnvelope size={22} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,245,212,0.1)', border: '1px solid var(--accent-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}>
              <FaDiscord size={22} />
            </motion.a>
            <motion.a whileHover={{ scale: 1.1 }} href="#" style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(0,245,212,0.1)', border: '1px solid var(--accent-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)' }}>
              <FaXTwitter size={22} />
            </motion.a>
            <button className="btn-primary teal-glow" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
              Contact Sales
            </button>
          </div>
        </motion.div>

      </main>
      <Footer />
    </div>
  );
};

export default Support;

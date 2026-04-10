import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaDownload, FaFileInvoice } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const Reporting = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <h1 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem' }}>Tax & Reporting</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Generate enterprise-grade transaction reports, compliant with global standards. Designed to simplify your Web3 accounting.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
          {[
            { icon: <FaChartLine />, title: "Portfolio Analytics", desc: "Track historical performance of all your Vaultora assets." },
            { icon: <FaFileInvoice />, title: "Tax Documents", desc: "Export CSVs formatted specifically for major crypto tax providers." },
            { icon: <FaDownload />, title: "Statement Generation", desc: "Download monthly or annual statements of your on-chain activity." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass-card" 
              style={{ padding: '3rem', borderRadius: '1.5rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '3rem', color: 'var(--accent-teal)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {item.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{item.title}</h3>
              <p style={{ color: 'var(--text-secondary)' }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Reporting;

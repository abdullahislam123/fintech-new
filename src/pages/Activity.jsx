import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowUpRightFromSquare, FaClock } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const Activity = () => {
  const activities = [
    { id: 1, type: 'send', asset: 'ETH', amount: '0.5', status: 'Completed', date: '2 mins ago', hash: '0x7a...d2f1' },
    { id: 2, type: 'receive', asset: 'USDC', amount: '120.00', status: 'Completed', date: '1 hour ago', hash: '0x3b...e4a2' },
    { id: 3, type: 'swap', asset: 'MATIC / SOL', amount: '450.00', status: 'Processing', date: '5 mins ago', hash: '0x8f...c9b0' },
    { id: 4, type: 'bridge', asset: 'ETH (L1 -> L2)', amount: '1.2', status: 'In Transit', date: 'Just now', hash: '0x12...e54c' },
  ];

  return (
    <div className="activity-page" style={{ minHeight: '100vh', padding: '4rem 6rem', position: 'relative' }}>
      <AnimatedBackground />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <header style={{ marginBottom: '4rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 className="font-heading" style={{ fontSize: '3.50rem', fontWeight: 900, marginBottom: '0.5rem', letterSpacing: '-2px' }}>Network Activity</h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', fontWeight: 500 }}>Full transparency logs for your on-chain interactions.</p>
          </div>
          <button className="glass-card" style={{ padding: '0.75rem 1.75rem', color: 'white', fontWeight: 900, cursor: 'pointer', borderRadius: '1rem', border: '1px solid var(--glass-border)', fontSize: '0.875rem' }}>Export History</button>
        </header>

        <div className="glass-card" style={{ overflow: 'hidden', padding: '1rem', background: 'rgba(5, 12, 17, 0.4)', borderRadius: '2rem' }}>
          {activities.map((activity, i) => (
            <motion.div 
              key={activity.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ background: 'rgba(255,255,255,0.02)' }}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                padding: '1.75rem 1.5rem',
                borderBottom: i === activities.length - 1 ? 'none' : '1px solid var(--glass-border)',
                transition: 'var(--transition-smooth)',
                borderRadius: '1.5rem'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div style={{ 
                  width: '56px', 
                  height: '56px', 
                  background: activity.type === 'send' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
                  borderRadius: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  border: activity.type === 'send' ? '1px solid rgba(239, 68, 68, 0.1)' : '1px solid rgba(16, 185, 129, 0.1)'
                }}>
                  {activity.type === 'send' ? <FaArrowUpRightFromSquare size={20} color="#ef4444" /> : <FaArrowDownLeft size={20} color="#10b981" />}
                </div>
                <div>
                  <h3 className="font-heading" style={{ fontSize: '1.25rem', fontWeight: 900, color: 'white', marginBottom: '0.25rem' }}>
                    {activity.type.charAt(0).toUpperCase() + activity.type.slice(1)} {activity.asset}
                  </h3>
                  <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <span style={{ 
                      fontSize: '0.75rem', 
                      background: 'var(--glass-bg)', 
                      padding: '0.25rem 0.6rem', 
                      borderRadius: '0.5rem', 
                      color: 'var(--text-muted)',
                      border: '1px solid var(--glass-border)',
                      fontWeight: 800,
                      letterSpacing: '0.5px'
                    }}>{activity.status}</span>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.8125rem', fontWeight: 600 }}>Tx: {activity.hash}</span>
                  </div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ fontWeight: 900, fontSize: '1.25rem', color: 'white', marginBottom: '0.25rem' }}>
                  {activity.type === 'send' ? '-' : '+'}{activity.amount} {activity.asset.split(' ')[0]}
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.8125rem', justifyContent: 'flex-end', fontWeight: 600 }}>
                  <FaClock size={12} />
                  {activity.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Activity;

import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldHalved, FaLock, FaEyeSlash } from 'react-icons/fa6';

const SecurityBadge = ({ type = 'non-custodial' }) => {
  const configs = {
    'non-custodial': {
      icon: <FaEyeSlash size={14} />,
      text: '100% Non-Custodial',
      color: 'var(--accent-teal)'
    },
    'secure': {
      icon: <FaLock size={14} />,
      text: 'AES-256 Encrypted',
      color: '#6366f1'
    },
    'audited': {
      icon: <FaShieldHalved size={14} />,
      text: 'Audit Verified',
      color: '#fbbf24'
    }
  };

  const config = configs[type] || configs['non-custodial'];

  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      style={{ 
        display: 'inline-flex', 
        alignItems: 'center', 
        gap: '0.5rem', 
        padding: '0.4rem 0.75rem', 
        background: 'rgba(255,255,255,0.03)', 
        border: '1px solid var(--glass-border)', 
        borderRadius: '2rem',
        fontSize: '0.75rem',
        fontWeight: 800,
        color: 'white',
        backdropFilter: 'blur(10px)'
      }}
    >
      <span style={{ color: config.color, display: 'flex', alignItems: 'center' }}>{config.icon}</span>
      {config.text}
    </motion.div>
  );
};

export default SecurityBadge;

import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTwitter, FaGithub, FaYoutube, FaUsers } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const Community = () => {
  return (
    <div style={{ minHeight: '100vh', padding: '10rem 4rem', position: 'relative' }}>
      <AnimatedBackground />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
             <div style={{ background: 'var(--accent-teal)', padding: '1.5rem', borderRadius: '50%', color: '#050c11' }}>
                <FaUsers size={40} />
             </div>
          </div>
          <h1 className="font-heading" style={{ fontSize: '4rem', fontWeight: 900, marginBottom: '1rem' }}>Join the Vaultora Global Network</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
            Powering millions of transactions daily. Connect with developers, validators, and enthusiasts building the next generation of Web3.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
          {[
            { icon: <FaDiscord />, title: 'Discord', desc: 'Real-time chat with the community and core team.', color: '#5865F2' },
            { icon: <FaTwitter />, title: 'Twitter / X', desc: 'Latest updates, announcements, and ecosystem news.', color: '#1DA1F2' },
            { icon: <FaGithub />, title: 'GitHub', desc: 'Contribute to our open-source codebase and plugins.', color: 'white' },
            { icon: <FaYoutube />, title: 'YouTube', desc: 'Developer calls, tutorials, and ecosystem events.', color: '#FF0000' }
          ].map((platform, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card" 
              style={{ padding: '2.5rem', borderRadius: '1.5rem', textAlign: 'center', cursor: 'pointer' }}
            >
              <div style={{ fontSize: '3rem', color: platform.color, marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                {platform.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem', color: 'white' }}>{platform.title}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{platform.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default Community;

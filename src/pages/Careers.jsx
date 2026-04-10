import React from 'react';
import { motion } from 'framer-motion';
import { FaLocationDot, FaBriefcase, FaArrowRight, FaUsers, FaRocket, FaHeart, FaGlobe } from 'react-icons/fa6';
import AnimatedBackground from '../components/AnimatedBackground';
import Footer from '../components/Footer';

const openings = [
  { title: "Senior Solidity Engineer", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Lead Product Designer", dept: "Design", location: "London, UK", type: "Full-time" },
  { title: "Blockchain Security Auditor", dept: "Security", location: "Remote", type: "Full-time" },
  { title: "Developer Relations Lead", dept: "Community", location: "San Francisco, US", type: "Full-time" },
  { title: "Full-stack Engineer (React / Node)", dept: "Engineering", location: "Remote", type: "Full-time" },
  { title: "Growth Marketing Manager", dept: "Marketing", location: "Dubai, UAE", type: "Full-time" },
];

const perks = [
  { icon: <FaGlobe />, title: "Remote-First", desc: "Work from anywhere in the world. We operate as a fully distributed team across 12+ countries." },
  { icon: <FaRocket />, title: "Token Grants", desc: "All team members receive competitive vesting token allocations on top of base compensation." },
  { icon: <FaHeart />, title: "Health & Wellness", desc: "Comprehensive medical, dental, and vision coverage plus a monthly $200 wellness stipend." },
  { icon: <FaUsers />, title: "Team Retreats", desc: "Bi-annual all-company offsites in cities like Lisbon, Bali, Tokyo, and Barcelona." },
];

const Careers = () => {
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
            JOIN THE TEAM
          </div>
          <h1 className="font-heading" style={{ fontSize: '4.5rem', fontWeight: 900, marginBottom: '1.5rem', letterSpacing: '-3px' }}>
            Build the future of <span style={{ color: 'var(--accent-teal)' }}>Web3.</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.6 }}>
            Vaultora is on a mission to make decentralized finance accessible to everyone. Join a world-class team shipping products used by millions.
          </p>
        </motion.div>

        {/* Stats Banner */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '8rem' }}>
          {[
            { value: "80+", label: "Team Members" },
            { value: "12", label: "Countries" },
            { value: "30M+", label: "Users Served" },
            { value: "$120M", label: "Raised" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ padding: '2.5rem', borderRadius: '1.5rem', textAlign: 'center' }}
            >
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--accent-teal)', letterSpacing: '-2px', marginBottom: '0.5rem' }}>{stat.value}</div>
              <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 800, letterSpacing: '1.5px', textTransform: 'uppercase' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Perks Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '8rem' }}
        >
          <h2 className="font-heading" style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px', marginBottom: '3rem' }}>
            Why Vaultora<span style={{ color: 'var(--accent-teal)' }}>.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem' }}>
            {perks.map((perk, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -5, borderColor: 'var(--accent-teal-soft)' }}
                className="glass-card"
                style={{ padding: '2.5rem', borderRadius: '1.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', transition: 'border-color 0.3s' }}
              >
                <div style={{ width: '52px', height: '52px', minWidth: '52px', borderRadius: '1rem', background: 'rgba(0,245,212,0.08)', border: '1px solid rgba(0,245,212,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-teal)', fontSize: '1.25rem' }}>
                  {perk.icon}
                </div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1.35rem', fontWeight: 900, marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>{perk.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, fontSize: '1.05rem' }}>{perk.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '8rem' }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
            <h2 className="font-heading" style={{ fontSize: '3rem', fontWeight: 900, letterSpacing: '-2px' }}>
              Open Positions<span style={{ color: 'var(--accent-teal)' }}>.</span>
            </h2>
            <span style={{ color: 'var(--text-muted)', fontWeight: 800, fontSize: '0.875rem', letterSpacing: '1px' }}>{openings.length} OPENINGS</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {openings.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ borderColor: 'var(--accent-teal-soft)', background: 'rgba(255,255,255,0.02)' }}
                className="glass-card"
                style={{ padding: '2rem 2.5rem', borderRadius: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', transition: 'all 0.3s' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                  <div>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', fontWeight: 800, marginBottom: '0.5rem' }}>{job.title}</h3>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>
                        <FaBriefcase size={12} color="var(--accent-teal)" /> {job.dept}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 600 }}>
                        <FaLocationDot size={12} color="var(--accent-teal)" /> {job.location}
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                  <span style={{ padding: '0.4rem 1rem', borderRadius: '100px', background: 'rgba(0,245,212,0.08)', color: 'var(--accent-teal)', fontSize: '0.8rem', fontWeight: 800, letterSpacing: '0.5px' }}>{job.type}</span>
                  <FaArrowRight size={16} color="var(--text-muted)" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card"
          style={{ padding: '4rem', borderRadius: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(0,245,212,0.06), rgba(5,12,17,0.9))', border: '1px solid var(--accent-teal-soft)' }}
        >
          <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'white', marginBottom: '1rem', letterSpacing: '-1px' }}>Don't see a fit?</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.15rem', maxWidth: '550px', margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            We're always looking for exceptional talent. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="btn-primary teal-glow" style={{ padding: '1.25rem 3rem', fontSize: '1.1rem' }}>
            Send Open Application
          </button>
        </motion.div>

      </main>
      <Footer />
    </div>
  );
};

export default Careers;

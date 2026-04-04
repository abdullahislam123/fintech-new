import React from 'react';

const AnimatedBackground = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 50%, #0a0f14 0%, #020609 100%)',
    }}>
      {/* Animated Grid */}
      <div style={{
        position: 'absolute',
        width: '200%',
        height: '200%',
        top: '-50%',
        left: '-50%',
        background: `
          linear-gradient(rgba(0, 245, 212, 0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0, 245, 212, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
        transform: 'perspective(500px) rotateX(60deg)',
        animation: 'grid-move 20s linear infinite',
      }} />

      {/* Glowing Orbs */}
      <div className="orb" style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'float 10s ease-in-out infinite',
      }} />
      <div className="orb" style={{
        position: 'absolute',
        bottom: '10%',
        right: '5%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 245, 212, 0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'float 15s ease-in-out infinite reverse',
      }} />

      <style>{`
        @keyframes grid-move {
          0% { transform: perspective(500px) rotateX(60deg) translateY(0); }
          100% { transform: perspective(500px) rotateX(60deg) translateY(80px); }
        }
      `}</style>
    </div>
  );
};

export default AnimatedBackground;

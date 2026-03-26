import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '919999999999';
const WHATSAPP_MSG = encodeURIComponent('Hi, I need help with cooking setup');

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(true), 1800);
    const t2 = setTimeout(() => { setTooltip(true); setTimeout(() => setTooltip(false), 4500); }, 3500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{
      position: 'fixed', bottom: 22, right: 22, zIndex: 1000,
      display: 'flex', alignItems: 'center', gap: 10,
      opacity: visible ? 1 : 0,
      transform: visible ? 'scale(1) translateY(0)' : 'scale(0.6) translateY(20px)',
      transition: 'all 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)',
    }}>
      {tooltip && (
        <div style={{
          background: '#1f2937', color: 'white',
          padding: '9px 15px', borderRadius: 11,
          fontSize: '0.8rem', fontWeight: 500, whiteSpace: 'nowrap',
          boxShadow: '0 4px 14px rgba(0,0,0,0.2)',
          animation: 'fadeInUp 0.3s ease',
          position: 'relative',
        }}>
          💬 Chat for fastest help
          <div style={{
            position: 'absolute', right: -5, top: '50%', transform: 'translateY(-50%)',
            width: 0, height: 0,
            borderTop: '5px solid transparent',
            borderBottom: '5px solid transparent',
            borderLeft: '5px solid #1f2937',
          }} />
        </div>
      )}

      <a href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MSG}`}
        target="_blank" rel="noreferrer"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setTooltip(true)}
        onMouseLeave={() => setTooltip(false)}
        style={{
          width: 56, height: 56, borderRadius: '50%',
          background: '#25D366',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.65rem',
          boxShadow: '0 4px 18px rgba(37,211,102,0.45)',
          transition: 'all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1)',
          position: 'relative',
          textDecoration: 'none',
        }}
        onMouseEnterCapture={e => { e.currentTarget.style.transform = 'scale(1.12)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(37,211,102,0.55)'; }}
        onMouseLeaveCapture={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,211,102,0.45)'; }}
      >
        <div style={{
          position: 'absolute', inset: -5, borderRadius: '50%',
          border: '2px solid rgba(37,211,102,0.35)',
          animation: 'pulse-dot 2.5s infinite',
        }} />
        💬
      </a>
    </div>
  );
}

import React from 'react';
import { useInView } from '../hooks/useInView';

const steps = [
  {
    number: '01',
    icon: '📝',
    title: 'Request Help',
    desc: 'Share your city, location, and what you need. Takes less than a minute.',
    note: 'Via form or WhatsApp — whichever is easier',
  },
  {
    number: '02',
    icon: '🔍',
    title: 'We Check Availability',
    desc: 'We look for available options near your area and get back to you as soon as we can.',
    note: 'Response time depends on your location',
  },
  {
    number: '03',
    icon: '🚚',
    title: 'We Arrange Delivery',
    desc: 'We coordinate the best possible delivery option available and keep you informed throughout.',
    note: 'Delivery time varies by location and availability',
  },
];

export default function HowItWorks() {
  const [ref, inView] = useInView();

  return (
    <section id="how-it-works" ref={ref} style={{ padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="section-label">📋 The Process</div>
          <h2 className="section-title">How It Works</h2>
          <p className="section-sub">Simple. Honest. Stress-free. Three steps to get your kitchen running again.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: 28,
        }}>
          {steps.map((step, i) => (
            <div key={step.number}
              style={{
                background: '#fafaf9',
                borderRadius: 20, padding: '32px 26px',
                border: '1px solid #f0ece8',
                textAlign: 'center',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(22px)',
                transition: `all 0.55s ease ${i * 0.18}s`,
                position: 'relative',
              }}
            >
              {/* Step number badge */}
              <div style={{
                position: 'absolute', top: -14, left: '50%', transform: 'translateX(-50%)',
                width: 28, height: 28, borderRadius: '50%',
                background: '#111827', color: 'white',
                fontSize: '0.68rem', fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Sora, sans-serif',
                border: '3px solid white',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
              }}>{step.number}</div>

              <div style={{
                width: 64, height: 64, borderRadius: '50%', margin: '8px auto 20px',
                background: 'linear-gradient(135deg, #e85d04, #c94b00)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.7rem',
                boxShadow: '0 6px 20px rgba(232,93,4,0.25)',
              }}>{step.icon}</div>

              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: '1.05rem', color: '#111827', marginBottom: 10,
              }}>{step.title}</h3>

              <p style={{
                fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.68, marginBottom: 16,
              }}>{step.desc}</p>

              <div style={{
                display: 'inline-block',
                background: '#fff7ed', borderRadius: 100,
                padding: '5px 13px',
                fontSize: '0.74rem', color: '#c2612b', fontWeight: 600,
              }}>
                {step.note}
              </div>
            </div>
          ))}
        </div>

        {/* Honest note */}
        <div style={{
          marginTop: 44,
          background: '#fafaf9', borderRadius: 16,
          padding: '22px 28px', border: '1px solid #f0ece8',
          display: 'flex', alignItems: 'flex-start', gap: 14,
        }}>
          <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>💬</span>
          <div>
            <p style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: '0.95rem', color: '#111827', marginBottom: 4,
            }}>A note from our team</p>
            <p style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: 1.7 }}>
              We're a small, growing service. We do our best for every request — but availability varies by city and situation. If we can't help, we'll tell you honestly instead of keeping you waiting.
            </p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <a href="#contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: 10,
            background: 'linear-gradient(135deg, #e85d04, #c94b00)',
            color: 'white', padding: '15px 34px', borderRadius: 14,
            fontSize: '0.97rem', fontWeight: 700,
            boxShadow: '0 6px 20px rgba(232,93,4,0.28)',
            transition: 'all 0.25s', textDecoration: 'none',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(232,93,4,0.38)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,93,4,0.28)'; }}
          >
            🚀 Request Help Now
          </a>
        </div>
      </div>
    </section>
  );
}

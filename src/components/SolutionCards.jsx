import React from 'react';
import { useInView } from '../hooks/useInView';

const solutions = [
  {
    emoji: '🔥',
    title: 'Portable Stove Setup',
    subtitle: 'A compact gas-free cooking option',
    benefits: [
      'Works independently of LPG cylinders',
      'Suitable for daily cooking during outages',
    ],
    note: 'Subject to availability in your area',
    tag: 'Most Requested',
    tagBg: '#fff1e6', tagColor: '#c94b00',
    cardBg: 'linear-gradient(148deg, #fff8f3, #ffecd9)',
    border: 'rgba(232,93,4,0.15)',
  },
  {
    emoji: '⚡',
    title: 'Induction Cooking Setup',
    subtitle: 'Electric cooking — clean and safe',
    benefits: [
      'No open flame — safe for all households',
      'Handles everyday cooking needs well',
    ],
    note: 'Works on regular home electricity',
    tag: 'Popular Option',
    tagBg: '#f5f3ff', tagColor: '#6d28d9',
    cardBg: 'linear-gradient(148deg, #faf5ff, #ede9fe)',
    border: 'rgba(109,40,217,0.12)',
  },
  {
    emoji: '🧰',
    title: 'Emergency Kitchen Kit',
    subtitle: 'A complete backup cooking package',
    benefits: [
      'Covers multi-day cooking disruptions',
      'All essentials in one coordinated arrangement',
    ],
    note: 'We arrange based on what\'s available',
    tag: 'For Longer Outages',
    tagBg: '#f0f9ff', tagColor: '#0369a1',
    cardBg: 'linear-gradient(148deg, #f0f9ff, #e0f2fe)',
    border: 'rgba(3,105,161,0.12)',
  },
];

export default function SolutionCards() {
  const [ref, inView] = useInView();

  return (
    <section id="solutions" ref={ref} style={{ padding: '80px 20px', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div className="section-label">🛠️ Available Solutions</div>
          <h2 className="section-title">Types of Solutions We Can Arrange</h2>
          <p className="section-sub">
            These are the kinds of setups we coordinate — not products we sell or stock. We find what's available near you.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 22,
        }}>
          {solutions.map((s, i) => (
            <div key={s.title}
              style={{
                background: 'white', borderRadius: 20, overflow: 'hidden',
                boxShadow: '0 3px 16px rgba(0,0,0,0.06)',
                border: '1px solid #f3f4f6',
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateY(0)' : 'translateY(24px)',
                transition: `all 0.55s ease ${i * 0.13}s`,
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(0,0,0,0.09)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 3px 16px rgba(0,0,0,0.06)'; }}
            >
              {/* Top */}
              <div style={{
                background: s.cardBg, padding: '32px 28px 24px',
                textAlign: 'center', borderBottom: `1px solid ${s.border}`,
                position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 14, right: 14,
                  background: s.tagBg, color: s.tagColor,
                  fontSize: '0.66rem', fontWeight: 700,
                  padding: '3px 10px', borderRadius: 100, letterSpacing: '0.04em',
                }}>{s.tag}</div>

                <div style={{ fontSize: '3rem', marginBottom: 10 }}>{s.emoji}</div>
                <h3 style={{
                  fontFamily: 'Sora, sans-serif', fontWeight: 800,
                  fontSize: '1.1rem', color: '#111827', marginBottom: 3,
                }}>{s.title}</h3>
                <p style={{ fontSize: '0.83rem', color: '#9ca3af' }}>{s.subtitle}</p>
              </div>

              {/* Body */}
              <div style={{ padding: '22px 26px' }}>
                {s.benefits.map(b => (
                  <div key={b} style={{
                    display: 'flex', alignItems: 'flex-start', gap: 9, marginBottom: 11,
                  }}>
                    <span style={{ color: '#22c55e', flexShrink: 0, marginTop: 2, fontSize: '0.85rem' }}>✓</span>
                    <span style={{ fontSize: '0.88rem', color: '#4b5563', lineHeight: 1.55 }}>{b}</span>
                  </div>
                ))}

                <div style={{
                  marginTop: 16, padding: '9px 12px',
                  background: '#f9fafb', borderRadius: 9,
                  fontSize: '0.77rem', color: '#9ca3af', textAlign: 'center',
                }}>
                  ℹ️ {s.note}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: 32, textAlign: 'center',
          padding: '15px 24px',
          background: 'white', borderRadius: 12,
          border: '1px dashed #d1d5db',
          fontSize: '0.84rem', color: '#9ca3af',
          maxWidth: 680, margin: '32px auto 0',
        }}>
          We are a coordination service — not a direct seller. We connect you with available local sources and help arrange what you need.
        </div>
      </div>
    </section>
  );
}

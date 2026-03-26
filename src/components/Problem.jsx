import React from 'react';
import { useInView } from '../hooks/useInView';

const problems = [
  {
    icon: '⛽',
    title: 'LPG Shortage',
    desc: 'Cylinder runs out at the worst time. Long waits at the dealer, no refill slot in sight.',
    color: '#fef3c7', border: '#fde68a',
  },
  {
    icon: '🍽️',
    title: 'Cooking Disruption',
    desc: 'Meals skipped, food uncooked, daily routine broken. Even simple cooking feels impossible.',
    color: '#fee2e2', border: '#fca5a5',
  },
  {
    icon: '😰',
    title: 'Family Stress',
    desc: 'Kids, elders, or patients at home — everyone depends on a working kitchen. The pressure is real.',
    color: '#ede9fe', border: '#c4b5fd',
  },
  {
    icon: '⏱️',
    title: 'Time Wasted',
    desc: 'Calling dealers, searching online, asking neighbours — hours gone, problem still unsolved.',
    color: '#dcfce7', border: '#86efac',
  },
];

export default function Problem() {
  const [ref, inView] = useInView();

  return (
    <section id="problem" ref={ref} style={{ padding: '80px 20px', background: '#f9fafb' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div className="section-label">🔍 The Reality</div>
          <h2 className="section-title">When Your Kitchen Stops,<br />Everything Stops</h2>
          <p className="section-sub">
            Millions of Indian families face cooking disruptions every month. It's not just inconvenient — it affects everyone at home.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 18,
        }}>
          {problems.map((p, i) => (
            <div key={p.title} style={{
              background: 'white', borderRadius: 18, padding: '26px 24px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
              border: '1px solid #f3f4f6',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(22px)',
              transition: `opacity 0.55s ease ${i * 0.1}s, transform 0.55s ease ${i * 0.1}s`,
            }}>
              <div style={{
                width: 50, height: 50, borderRadius: 13,
                background: p.color, border: `1px solid ${p.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.5rem', marginBottom: 16,
              }}>{p.icon}</div>
              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 700,
                fontSize: '1rem', color: '#111827', marginBottom: 7,
              }}>{p.title}</h3>
              <p style={{ fontSize: '0.87rem', color: '#6b7280', lineHeight: 1.65 }}>{p.desc}</p>
            </div>
          ))}
        </div>

        {/* Human empathy strip */}
        <div style={{
          marginTop: 44,
          background: 'linear-gradient(135deg, #1f2937, #111827)',
          borderRadius: 18, padding: '28px 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: 20,
        }}>
          <div style={{ maxWidth: 540 }}>
            <p style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 700,
              fontSize: '1.05rem', color: 'white', marginBottom: 6, lineHeight: 1.4,
            }}>
              "We understand how stressful it is when cooking suddenly stops."
            </p>
            <p style={{ fontSize: '0.88rem', color: '#9ca3af', lineHeight: 1.65 }}>
              We're here to help you find a quick, practical solution — without big promises, just real effort.
            </p>
          </div>
          <a href="#contact" style={{
            background: '#e85d04', color: 'white',
            padding: '13px 28px', borderRadius: 12,
            fontWeight: 700, fontSize: '0.92rem', whiteSpace: 'nowrap',
            transition: 'all 0.2s', textDecoration: 'none', flexShrink: 0,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = '#c94b00'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = '#e85d04'; e.currentTarget.style.transform = 'scale(1)'; }}
          >🆘 Get Help Now</a>
        </div>
      </div>
    </section>
  );
}

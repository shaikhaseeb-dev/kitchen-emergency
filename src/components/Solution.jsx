import React from 'react';
import { useInView } from '../hooks/useInView';

const points = [
  {
    icon: '📍',
    title: 'We Look for Nearby Options',
    desc: 'We check our network for available cooking solutions near your area — no guarantees, but we genuinely try.',
  },
  {
    icon: '🤝',
    title: 'We Coordinate on Your Behalf',
    desc: 'We handle the calls and arrangements so you don\'t have to figure it out yourself during a stressful moment.',
  },
  {
    icon: '📞',
    title: 'We Keep You Updated',
    desc: 'We get back to you as soon as we have options. Delivery time depends on your location and what\'s available.',
  },
];

export default function Solution() {
  const [ref, inView] = useInView();

  return (
    <section id="solution" ref={ref} style={{ padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60, alignItems: 'center',
        }}>
          {/* Left */}
          <div>
            <div className="section-label">✅ What We Do</div>
            <h2 className="section-title" style={{ marginBottom: 14 }}>
              We Handle the Coordination.<br />You Focus on Your Family.
            </h2>
            <p style={{ fontSize: '0.97rem', color: '#6b7280', lineHeight: 1.78, marginBottom: 12 }}>
              HomeAssist India is not a shop. We're a small coordination service that connects families in kitchen emergencies with available local solutions.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#9ca3af', lineHeight: 1.7, marginBottom: 36 }}>
              We don't stock or sell anything directly. What we do is find what's available near you and help arrange it.
            </p>

            {points.map((s, i) => (
              <div key={s.title} style={{
                display: 'flex', gap: 16, marginBottom: 26,
                opacity: inView ? 1 : 0,
                transform: inView ? 'translateX(0)' : 'translateX(-18px)',
                transition: `all 0.5s ease ${i * 0.13}s`,
              }}>
                <div style={{
                  width: 46, height: 46, borderRadius: 13, flexShrink: 0,
                  background: 'linear-gradient(135deg, #fff1e6, #ffe4cc)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.3rem', border: '1px solid rgba(232,93,4,0.1)',
                }}>{s.icon}</div>
                <div>
                  <h4 style={{
                    fontFamily: 'Sora, sans-serif', fontWeight: 700,
                    fontSize: '0.97rem', color: '#111827', marginBottom: 4,
                  }}>{s.title}</h4>
                  <p style={{ fontSize: '0.86rem', color: '#6b7280', lineHeight: 1.62 }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right visual */}
          <div style={{
            opacity: inView ? 1 : 0,
            transform: inView ? 'translateY(0)' : 'translateY(24px)',
            transition: 'all 0.65s ease 0.2s',
          }}>
            <div style={{
              background: 'linear-gradient(148deg, #fff8f3, #ffe8d6)',
              borderRadius: 22, padding: 32,
              border: '1px solid rgba(232,93,4,0.12)',
              position: 'relative', overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute', top: -28, right: -28,
                width: 140, height: 140, borderRadius: '50%',
                background: 'rgba(232,93,4,0.06)',
              }} />

              <div style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: 14 }}>🔥</div>
              <h3 style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 800,
                fontSize: '1.15rem', color: '#111827', textAlign: 'center', marginBottom: 22,
              }}>What Happens After You Request</h3>

              {[
                { num: '01', text: 'You share your location and what you need' },
                { num: '02', text: 'We check what\'s available near your area' },
                { num: '03', text: 'We arrange the best possible option and update you' },
              ].map((item) => (
                <div key={item.num} style={{
                  display: 'flex', alignItems: 'center', gap: 14,
                  background: 'white', borderRadius: 12, padding: '13px 16px',
                  marginBottom: 10, boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                  border: '1px solid #f5ede8',
                }}>
                  <div style={{
                    fontFamily: 'Sora, sans-serif', fontWeight: 800,
                    fontSize: '1rem', color: '#e85d04', minWidth: 28,
                  }}>{item.num}</div>
                  <div style={{ fontSize: '0.88rem', color: '#374151', fontWeight: 500, lineHeight: 1.45 }}>{item.text}</div>
                </div>
              ))}

              <div style={{
                marginTop: 18, padding: '12px 14px',
                background: 'rgba(232,93,4,0.07)', borderRadius: 10,
                textAlign: 'center', fontSize: '0.8rem', color: '#9a6b4b', fontWeight: 500,
              }}>
                ⏱️ Response time and delivery depend on your location
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

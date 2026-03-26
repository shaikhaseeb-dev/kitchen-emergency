import React from 'react';
import { useInView } from '../hooks/useInView';

const testimonials = [
  {
    name: 'Priya Sharma',
    city: 'Bengaluru',
    text: 'Gas ran out on a Sunday with guests coming. They didn\'t promise miracles but they arranged an induction setup the same day. Genuinely helpful.',
    rating: 5,
    avatar: 'PS',
  },
  {
    name: 'Rajesh Kumar',
    city: 'Hyderabad',
    text: 'I was a bit skeptical honestly. But they called me back and sorted out a portable stove option by evening. Simple and no fuss.',
    rating: 5,
    avatar: 'RK',
  },
  {
    name: 'Meena Iyer',
    city: 'Chennai',
    text: 'They were upfront that it might take time in my area. They found something by next morning. Honest communication made all the difference.',
    rating: 5,
    avatar: 'MI',
  },
];

const trustBadges = [
  { icon: '🤝', label: 'We Arrange, Not Sell', sub: 'Honest coordination service' },
  { icon: '📍', label: 'Local Sourcing', sub: 'We find nearby options' },
  { icon: '🔒', label: 'No Upfront Payment', sub: 'Free to request help' },
  { icon: '💬', label: 'WhatsApp First', sub: 'Fastest way to reach us' },
];

export default function Trust() {
  const [ref, inView] = useInView();

  return (
    <section id="trust" ref={ref} style={{
      padding: '80px 20px',
      background: 'linear-gradient(170deg, #111827 0%, #1a2233 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            fontSize: '0.73rem', fontWeight: 600, letterSpacing: '0.1em',
            textTransform: 'uppercase', color: '#e85d04',
            background: 'rgba(232,93,4,0.13)', padding: '4px 14px', borderRadius: 100,
            marginBottom: 14,
          }}>⭐ Why People Trust Us</div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 800,
            fontSize: 'clamp(1.6rem, 4vw, 2.3rem)', color: 'white',
            lineHeight: 1.2, marginBottom: 12,
          }}>Real People. Real Situations.<br />Genuine Help.</h2>
          <p style={{ fontSize: '0.95rem', color: '#9ca3af', maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
            We're a small team doing our honest best. Here's what people who reached out to us have said.
          </p>
        </div>

        {/* Honest stats — no inflated numbers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 16, marginBottom: 56,
        }}>
          {[
            { value: '200+', label: 'Families Helped', sub: 'Since we started' },
            { value: '15+', label: 'Cities Reached', sub: 'Growing steadily' },
            { value: 'A Few Hours', label: 'Typical Response', sub: 'Depends on location' },
            { value: '100%', label: 'Honest About Limits', sub: 'We tell you if we can\'t help' },
          ].map((stat, i) => (
            <div key={stat.label} style={{
              textAlign: 'center', padding: '22px 14px',
              background: 'rgba(255,255,255,0.04)',
              borderRadius: 16, border: '1px solid rgba(255,255,255,0.07)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(16px)',
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}>
              <div style={{
                fontFamily: 'Sora, sans-serif', fontWeight: 800,
                fontSize: '1.6rem', color: '#e85d04', lineHeight: 1, marginBottom: 5,
              }}>{stat.value}</div>
              <div style={{ fontSize: '0.83rem', color: 'white', fontWeight: 600, marginBottom: 3 }}>{stat.label}</div>
              <div style={{ fontSize: '0.73rem', color: '#6b7280' }}>{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 18, marginBottom: 50,
        }}>
          {testimonials.map((t, i) => (
            <div key={t.name} style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.09)',
              borderRadius: 18, padding: '24px 22px',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateY(0)' : 'translateY(18px)',
              transition: `all 0.6s ease ${i * 0.15}s`,
            }}>
              <div style={{ color: '#f59e0b', fontSize: '0.85rem', marginBottom: 12 }}>
                {'★'.repeat(t.rating)}
              </div>
              <p style={{
                fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.72, marginBottom: 18,
                fontStyle: 'italic',
              }}>"{t.text}"</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 11 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: 'linear-gradient(135deg, #e85d04, #c94b00)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'Sora, sans-serif', fontWeight: 700,
                  fontSize: '0.72rem', color: 'white', flexShrink: 0,
                }}>{t.avatar}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.87rem', color: 'white' }}>{t.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#6b7280' }}>📍 {t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 14,
        }}>
          {trustBadges.map((badge, i) => (
            <div key={badge.label} style={{
              display: 'flex', alignItems: 'center', gap: 13,
              background: 'rgba(232,93,4,0.08)', borderRadius: 14,
              padding: '15px 18px', border: '1px solid rgba(232,93,4,0.18)',
              opacity: inView ? 1 : 0,
              transform: inView ? 'translateX(0)' : 'translateX(-14px)',
              transition: `all 0.5s ease ${i * 0.1}s`,
            }}>
              <span style={{ fontSize: '1.5rem' }}>{badge.icon}</span>
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.87rem', color: 'white' }}>{badge.label}</div>
                <div style={{ fontSize: '0.73rem', color: '#6b7280' }}>{badge.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

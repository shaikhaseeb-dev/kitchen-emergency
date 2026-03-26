import React, { useState } from 'react';

const KNOWN_CITIES = [
  'delhi', 'mumbai', 'bangalore', 'bengaluru', 'hyderabad', 'chennai',
  'pune', 'kolkata', 'ahmedabad', 'jaipur', 'lucknow', 'surat',
  'noida', 'gurgaon', 'gurugram', 'bhopal', 'indore', 'nagpur',
  'coimbatore', 'kochi', 'chandigarh', 'vizag', 'visakhapatnam',
];

export default function CityCheck() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleCheck = () => {
    if (!query.trim()) return;
    setLoading(true);
    setResult(null);
    setTimeout(() => {
      const q = query.toLowerCase().trim();
      const found = KNOWN_CITIES.some(c => c.includes(q) || q.includes(c));
      setResult(found ? 'likely' : 'unsure');
      setLoading(false);
    }, 1100);
  };

  return (
    <section id="city-check" style={{ padding: '80px 20px', background: '#f9fafb' }}>
      <div style={{ maxWidth: 660, margin: '0 auto', textAlign: 'center' }}>
        <div className="section-label">📍 Coverage</div>
        <h2 className="section-title">Check Your Area</h2>
        <p style={{ fontSize: '0.97rem', color: '#6b7280', lineHeight: 1.75, marginBottom: 12, maxWidth: 520, margin: '0 auto 12px' }}>
          Enter your city or pincode to check if we've helped people in your area before.
        </p>
        <p style={{ fontSize: '0.84rem', color: '#9ca3af', marginBottom: 36 }}>
          We are expanding across India. Availability depends on your location — we'll tell you honestly.
        </p>

        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 24 }}>
          <input
            type="text" value={query}
            onChange={e => { setQuery(e.target.value); setResult(null); }}
            onKeyDown={e => e.key === 'Enter' && handleCheck()}
            placeholder="e.g. Hyderabad or 500001"
            style={{
              flex: 1, minWidth: 220,
              padding: '13px 18px', borderRadius: 13,
              border: '2px solid #e5e7eb', fontSize: '0.97rem',
              fontFamily: 'DM Sans, sans-serif', outline: 'none',
              background: 'white', transition: 'border-color 0.2s',
              boxShadow: '0 2px 6px rgba(0,0,0,0.04)',
            }}
            onFocus={e => e.target.style.borderColor = '#e85d04'}
            onBlur={e => e.target.style.borderColor = '#e5e7eb'}
          />
          <button onClick={handleCheck} disabled={loading || !query.trim()}
            style={{
              padding: '13px 26px', borderRadius: 13,
              background: !query.trim() ? '#d1d5db' : 'linear-gradient(135deg, #e85d04, #c94b00)',
              color: 'white', fontWeight: 700, fontSize: '0.92rem',
              boxShadow: query.trim() ? '0 5px 16px rgba(232,93,4,0.28)' : 'none',
              cursor: !query.trim() ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s', fontFamily: 'DM Sans, sans-serif',
            }}
          >{loading ? '⏳ Checking...' : '🔍 Check'}</button>
        </div>

        {result === 'likely' && (
          <div style={{
            background: '#f0fdf4', border: '2px solid #86efac',
            borderRadius: 16, padding: '26px 28px', animation: 'fadeInUp 0.35s ease',
          }}>
            <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>👍</div>
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#166534', marginBottom: 8 }}>
              We've helped people in this area
            </h3>
            <p style={{ color: '#166534', fontSize: '0.87rem', marginBottom: 18, lineHeight: 1.65 }}>
              We have some coverage near <strong>{query}</strong>. Reach out and we'll check what's currently available for your specific location.
            </p>
            <a href="#contact" style={{
              display: 'inline-block', background: '#16a34a', color: 'white',
              padding: '11px 26px', borderRadius: 11,
              fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none',
            }}>Request Help →</a>
          </div>
        )}

        {result === 'unsure' && (
          <div style={{
            background: '#fff7ed', border: '2px solid #fed7aa',
            borderRadius: 16, padding: '26px 28px', animation: 'fadeInUp 0.35s ease',
          }}>
            <div style={{ fontSize: '2.2rem', marginBottom: 8 }}>🗺️</div>
            <h3 style={{ fontFamily: 'Sora, sans-serif', fontWeight: 800, fontSize: '1.1rem', color: '#9a3412', marginBottom: 8 }}>
              We're still expanding to your area
            </h3>
            <p style={{ color: '#9a3412', fontSize: '0.87rem', marginBottom: 18, lineHeight: 1.65 }}>
              We may have limited reach near <strong>{query}</strong> right now. Still, reach out — we'll do our best to help or point you to the right resources.
            </p>
            <a href="#contact" style={{
              display: 'inline-block', background: '#ea580c', color: 'white',
              padding: '11px 26px', borderRadius: 11,
              fontWeight: 700, fontSize: '0.88rem', textDecoration: 'none',
            }}>Contact Us Anyway →</a>
          </div>
        )}

        {/* Quick city chips */}
        <div style={{ marginTop: 30 }}>
          <p style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: 10 }}>Try a city:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {['Hyderabad', 'Bengaluru', 'Mumbai', 'Delhi', 'Chennai', 'Pune'].map(city => (
              <button key={city}
                onClick={() => { setQuery(city); setResult(null); }}
                style={{
                  padding: '6px 14px', borderRadius: 100,
                  background: 'white', border: '1px solid #e5e7eb',
                  fontSize: '0.8rem', color: '#4b5563', cursor: 'pointer',
                  transition: 'all 0.18s', fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#e85d04'; e.currentTarget.style.color = '#e85d04'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e7eb'; e.currentTarget.style.color = '#4b5563'; }}
              >{city}</button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React, { useState } from 'react';

const WHATSAPP_NUMBER = '919999999999';

const urgencyOptions = [
  { value: 'today', label: '🚨 Need help today', color: '#ef4444' },
  { value: 'tomorrow', label: '⚠️ Need help within 1–2 days', color: '#f59e0b' },
  { value: 'flexible', label: '📅 Flexible — within a few days is fine', color: '#22c55e' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', city: '', requirement: '', urgency: 'today' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Please enter your name';
    if (!form.city.trim()) e.city = 'Please enter your city or pincode';
    if (!form.requirement.trim()) e.requirement = 'Please briefly describe what you need';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const msg = encodeURIComponent(
      `Hi! I need kitchen emergency support.\n\nName: ${form.name}\nCity / Area: ${form.city}\nRequirement: ${form.requirement}\nUrgency: ${form.urgency}`
    );

    // TODO: POST to your backend (Formspree, Firebase, etc.)
    console.log('Form submitted:', form);
    setSubmitted(true);

    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    }, 900);
  };

  const set = (field, value) => {
    setForm(p => ({ ...p, [field]: value }));
    if (errors[field]) setErrors(p => ({ ...p, [field]: null }));
  };

  if (submitted) {
    return (
      <section id="contact" style={{ padding: '80px 20px', background: 'white' }}>
        <div style={{ maxWidth: 520, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '3.6rem', marginBottom: 14 }}>✅</div>
          <h2 style={{
            fontFamily: 'Sora, sans-serif', fontWeight: 800,
            fontSize: '1.7rem', color: '#111827', marginBottom: 10,
          }}>Request Received!</h2>
          <p style={{ color: '#6b7280', fontSize: '0.95rem', lineHeight: 1.75, marginBottom: 22 }}>
            Thanks, <strong>{form.name}</strong>! We've got your request for <strong>{form.city}</strong>. We'll look into available options and get back to you. We're also opening WhatsApp so you can reach us directly.
          </p>
          <div style={{
            background: '#f9fafb', borderRadius: 14, padding: '18px 22px',
            border: '1px solid #e5e7eb', marginBottom: 22,
            fontSize: '0.85rem', color: '#6b7280', lineHeight: 1.65,
          }}>
            ⏱️ We'll respond as soon as we can — typically within a few hours. Time varies depending on your location.
          </div>
          <button onClick={() => { setSubmitted(false); setForm({ name: '', city: '', requirement: '', urgency: 'today' }); }}
            style={{
              background: 'none', border: '1px solid #e5e7eb', padding: '9px 22px',
              borderRadius: 9, cursor: 'pointer', color: '#6b7280', fontSize: '0.87rem',
              fontFamily: 'DM Sans, sans-serif',
            }}>Submit another request</button>
        </div>
      </section>
    );
  }

  const inputStyle = (hasError) => ({
    width: '100%', padding: '12px 15px',
    border: `2px solid ${hasError ? '#ef4444' : '#e5e7eb'}`,
    borderRadius: 11, fontSize: '0.93rem',
    fontFamily: 'DM Sans, sans-serif',
    outline: 'none', transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  });

  return (
    <section id="contact" style={{ padding: '80px 20px', background: 'white' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 60, alignItems: 'start',
        }}>
          {/* Left info */}
          <div style={{ paddingTop: 8 }}>
            <div className="section-label">📬 Get Help</div>
            <h2 className="section-title">Tell Us What You Need</h2>
            <p style={{ fontSize: '0.97rem', color: '#6b7280', lineHeight: 1.78, marginBottom: 32 }}>
              Fill this out and we'll look into what's available near you. No commitment, no payment — just a genuine attempt to help.
            </p>

            {[
              { icon: '📞', title: 'We\'ll get back to you', sub: 'Via WhatsApp or call — as soon as we can' },
              { icon: '🆓', title: 'No charges for requesting', sub: 'Coordination is completely free' },
              { icon: '🤝', title: 'Honest about what we can do', sub: 'If we can\'t help in your area, we\'ll tell you' },
            ].map(item => (
              <div key={item.title} style={{
                display: 'flex', alignItems: 'center', gap: 13,
                padding: '13px 16px',
                background: '#fafaf9', borderRadius: 13,
                border: '1px solid #f0ece8',
                marginBottom: 10,
              }}>
                <span style={{ fontSize: '1.3rem' }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.88rem', color: '#111827' }}>{item.title}</div>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>{item.sub}</div>
                </div>
              </div>
            ))}

            <div style={{
              marginTop: 24, padding: '14px 18px',
              background: '#fff8f3', borderRadius: 12,
              border: '1px solid rgba(232,93,4,0.15)',
              fontSize: '0.82rem', color: '#9a6b4b', lineHeight: 1.65,
            }}>
              💬 <strong>Prefer WhatsApp?</strong> That's our fastest channel. Tap the floating button or click "Chat on WhatsApp" — we're quicker to respond there.
            </div>
          </div>

          {/* Form */}
          <div style={{
            background: 'white', borderRadius: 22,
            boxShadow: '0 6px 32px rgba(0,0,0,0.08)',
            padding: '34px 30px',
            border: '1px solid #f3f0ed',
          }}>
            <h3 style={{
              fontFamily: 'Sora, sans-serif', fontWeight: 800,
              fontSize: '1.15rem', color: '#111827', marginBottom: 22,
            }}>🆘 Request Cooking Support</h3>

            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#374151', marginBottom: 5 }}>Your Name *</label>
                <input type="text" value={form.name} onChange={e => set('name', e.target.value)}
                  placeholder="e.g. Priya Sharma"
                  style={inputStyle(errors.name)}
                  onFocus={e => e.target.style.borderColor = '#e85d04'}
                  onBlur={e => e.target.style.borderColor = errors.name ? '#ef4444' : '#e5e7eb'}
                />
                {errors.name && <p style={{ color: '#ef4444', fontSize: '0.76rem', marginTop: 3 }}>{errors.name}</p>}
              </div>

              {/* City */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#374151', marginBottom: 5 }}>City / Area / Pincode *</label>
                <input type="text" value={form.city} onChange={e => set('city', e.target.value)}
                  placeholder="e.g. Hyderabad or 500001"
                  style={inputStyle(errors.city)}
                  onFocus={e => e.target.style.borderColor = '#e85d04'}
                  onBlur={e => e.target.style.borderColor = errors.city ? '#ef4444' : '#e5e7eb'}
                />
                {errors.city && <p style={{ color: '#ef4444', fontSize: '0.76rem', marginTop: 3 }}>{errors.city}</p>}
              </div>

              {/* Requirement */}
              <div style={{ marginBottom: 18 }}>
                <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#374151', marginBottom: 5 }}>What do you need? *</label>
                <textarea value={form.requirement} onChange={e => set('requirement', e.target.value)}
                  placeholder="e.g. Gas cylinder ran out, need a portable stove or induction setup for today"
                  rows={3}
                  style={{ ...inputStyle(errors.requirement), resize: 'vertical' }}
                  onFocus={e => e.target.style.borderColor = '#e85d04'}
                  onBlur={e => e.target.style.borderColor = errors.requirement ? '#ef4444' : '#e5e7eb'}
                />
                {errors.requirement && <p style={{ color: '#ef4444', fontSize: '0.76rem', marginTop: 3 }}>{errors.requirement}</p>}
              </div>

              {/* Urgency */}
              <div style={{ marginBottom: 26 }}>
                <label style={{ display: 'block', fontSize: '0.83rem', fontWeight: 600, color: '#374151', marginBottom: 9 }}>How urgent is this?</label>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {urgencyOptions.map(opt => (
                    <label key={opt.value} style={{
                      display: 'flex', alignItems: 'center', gap: 10,
                      padding: '10px 13px', borderRadius: 10, cursor: 'pointer',
                      border: `2px solid ${form.urgency === opt.value ? opt.color : '#e5e7eb'}`,
                      background: form.urgency === opt.value ? `${opt.color}0d` : 'white',
                      transition: 'all 0.18s',
                    }}>
                      <input type="radio" name="urgency" value={opt.value}
                        checked={form.urgency === opt.value}
                        onChange={e => set('urgency', e.target.value)}
                        style={{ accentColor: opt.color }} />
                      <span style={{ fontSize: '0.86rem', color: '#374151', fontWeight: form.urgency === opt.value ? 600 : 400 }}>{opt.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button type="submit" style={{
                width: '100%', padding: '14px',
                background: 'linear-gradient(135deg, #e85d04, #c94b00)',
                color: 'white', borderRadius: 13,
                fontSize: '0.97rem', fontWeight: 700,
                boxShadow: '0 6px 20px rgba(232,93,4,0.28)',
                transition: 'all 0.22s', fontFamily: 'Sora, sans-serif',
                border: 'none', cursor: 'pointer',
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(232,93,4,0.38)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(232,93,4,0.28)'; }}
              >
                🚀 Submit Request + Open WhatsApp
              </button>

              <p style={{ textAlign: 'center', fontSize: '0.73rem', color: '#b0b8c4', marginTop: 12 }}>
                We're a coordination service. No data is sold. This form is only used to help you.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

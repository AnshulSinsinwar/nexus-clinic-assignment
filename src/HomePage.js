import React, { useState } from 'react';
import { Link } from 'react-router-dom';

/* ── Reusable Win2K Window chrome ────────────────────────────────────────────── */
function WinWindow({ icon = '🖥', title, children, style = {} }) {
  return (
    <div style={{
      background: '#d4d0c8',
      boxShadow: 'inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff, inset -2px -2px 0 #808080, inset 2px 2px 0 #d4d0c8',
      ...style,
    }}>
      {/* Title bar */}
      <div style={{
        background: 'linear-gradient(90deg, #000080 0%, #1084d0 100%)',
        color: '#fff',
        fontSize: '11px',
        fontWeight: '700',
        padding: '3px 4px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none',
        fontFamily: 'Tahoma, sans-serif',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <span style={{ fontSize: '13px' }}>{icon}</span>
          <span>{title}</span>
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {['_', '□', '✕'].map((c, i) => (
            <div key={i} style={{
              width: '14px', height: '12px',
              background: '#d4d0c8',
              boxShadow: 'inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff',
              fontSize: '8px', fontWeight: '700',
              color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'default', userSelect: 'none',
              fontFamily: 'Tahoma, sans-serif',
            }}>{c}</div>
          ))}
        </div>
      </div>
      {/* Content area */}
      <div style={{ padding: '10px', fontFamily: 'Tahoma, sans-serif' }}>
        {children}
      </div>
    </div>
  );
}

/* ── Hero ────────────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="hero" style={{ marginTop: '0' }}>
      <WinWindow icon="🏥" title="Welcome to Nexus Clinic KL — Your Most Confident Self Awaits">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 260px', gap: '12px', alignItems: 'start' }}>
          {/* Left: content */}
          <div>
            {/* Badge */}
            <div style={{
              display: 'inline-block',
              background: '#ffff99',
              border: '1px solid #808000',
              padding: '2px 8px',
              fontSize: '11px',
              marginBottom: '10px',
              fontFamily: 'Tahoma, sans-serif',
            }}>
              ⚠ MOH Registered · Doctor-Led · Kuala Lumpur
            </div>

            <h1 style={{
              fontSize: '22px',
              fontWeight: '700',
              color: '#000080',
              lineHeight: '1.3',
              marginBottom: '10px',
              fontFamily: 'Tahoma, sans-serif',
            }}>
              Your Most Confident<br />
              <span style={{ color: '#ff0000', textDecoration: 'underline' }}>Self Awaits.</span>
            </h1>

            <p style={{
              fontSize: '12px',
              color: '#444',
              lineHeight: '1.6',
              marginBottom: '12px',
              maxWidth: '480px',
              fontFamily: 'Tahoma, sans-serif',
            }}>
              Evidence-based aesthetic and weight loss treatments tailored to you — not trends.
              Every plan begins with an honest medical assessment, not a sales pitch.
            </p>

            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
              <Link to="/#book" className="btn btn--primary">
                📅 Book Free Consultation
              </Link>
              <Link to="/services" className="btn btn--ghost">
                🔍 Explore Treatments
              </Link>
            </div>

            {/* Stats — looks like a Win2K group box */}
            <fieldset style={{
              border: '1px solid #808080',
              boxShadow: '1px 1px 0 #ffffff',
              padding: '8px 12px',
              marginTop: '12px',
              fontFamily: 'Tahoma, sans-serif',
            }}>
              <legend style={{ fontSize: '11px', fontWeight: '700', padding: '0 4px', color: '#000080' }}>
                Clinic Statistics
              </legend>
              <div style={{ display: 'flex', gap: '24px' }}>
                {[['10,000+', 'Patients Treated'], ['15+', 'Years Experience'], ['4.9★', 'Google Rating']].map(([n, l]) => (
                  <div key={l} style={{ textAlign: 'center' }}>
                    <strong style={{ display: 'block', fontSize: '18px', color: '#000080', fontWeight: '700' }}>{n}</strong>
                    <span style={{ fontSize: '10px', color: '#666' }}>{l}</span>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>

          {/* Right: fake "photo" widget */}
          <div>
            <WinWindow icon="🖼" title="Doctor Profile" style={{ marginBottom: '8px' }}>
              <div style={{
                width: '100%',
                height: '160px',
                background: '#c0c0c0',
                boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '48px',
                marginBottom: '6px',
              }}>🏥</div>
              <div style={{
                background: '#ffff99',
                border: '1px solid #808000',
                padding: '3px 6px',
                fontSize: '10px',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
              }}>
                <div style={{ width: '8px', height: '8px', background: '#00aa00', border: '1px solid #006600' }} />
                Dr. Preetha is available now
              </div>
              <div style={{
                background: '#e8ffe8',
                border: '1px solid #008000',
                padding: '3px 6px',
                fontSize: '10px',
              }}>
                ✅ Non-surgical · No downtime
              </div>
            </WinWindow>
          </div>
        </div>
      </WinWindow>
    </section>
  );
}

/* ── Trust Bar ───────────────────────────────────────────────────────────────── */
function TrustBar() {
  const items = [
    { icon: '🏥', text: 'MOH Registered & Compliant' },
    { icon: '👨‍⚕️', text: 'Licensed Medical Doctors Only' },
    { icon: '✅', text: 'FDA-Approved Equipment' },
    { icon: '🔒', text: 'Private & Confidential Care' },
    { icon: '💬', text: 'WhatsApp Follow-Up Support' },
  ];
  return (
    <div style={{
      background: '#d4d0c8',
      boxShadow: 'inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff, inset -2px -2px 0 #808080, inset 2px 2px 0 #d4d0c8',
      display: 'flex',
      flexWrap: 'wrap',
      padding: '4px 8px',
      fontFamily: 'Tahoma, sans-serif',
    }}>
      {items.map(({ icon, text }) => (
        <div key={text} style={{
          display: 'flex', alignItems: 'center', gap: '4px',
          padding: '4px 10px',
          fontSize: '11px',
          borderRight: '1px solid #808080',
          color: '#000',
        }}>
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

/* ── Featured Services ───────────────────────────────────────────────────────── */
function FeaturedServices() {
  const services = [
    { icon: '💉', label: 'Face & Skin', desc: 'Botox, fillers, skin brightening, acne treatment and thread lifts — all doctor-administered.' },
    { icon: '⚖', label: 'Weight Loss', desc: 'Medical-grade fat reduction including Ozempic, cryolipolysis, and supervised programmes.' },
    { icon: '💇', label: 'Hair & Scalp', desc: 'PRP therapy, stem cell treatment, and hair transplants for natural-looking restoration.' },
    { icon: '🏃', label: 'Body', desc: 'Emsculpt, Vanquish ME, and laser contouring for non-surgical body reshaping.' },
  ];
  return (
    <WinWindow icon="✦" title="What We Offer — Treatments Built Around Your Goals">
      <p style={{ fontSize: '11px', color: '#444', marginBottom: '10px', fontFamily: 'Tahoma, sans-serif' }}>
        Every plan starts with understanding you — not filling a package.
      </p>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '6px',
      }}>
        {services.map(s => (
          <div key={s.label} style={{
            background: '#ffffff',
            boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
            padding: '10px',
            fontFamily: 'Tahoma, sans-serif',
            cursor: 'default',
          }}
          onMouseEnter={e => e.currentTarget.style.background = '#e8e4ff'}
          onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
          >
            <div style={{ fontSize: '20px', marginBottom: '6px' }}>{s.icon}</div>
            <h3 style={{ fontSize: '12px', fontWeight: '700', color: '#000080', marginBottom: '4px' }}>{s.label}</h3>
            <p style={{ fontSize: '11px', color: '#444', lineHeight: '1.5', marginBottom: '6px' }}>{s.desc}</p>
            <Link to="/services" style={{ fontSize: '11px', color: '#0000ff', textDecoration: 'underline' }}>View Treatments →</Link>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '10px' }}>
        <Link to="/services" className="btn btn--ghost">🔍 See All Treatments</Link>
      </div>
    </WinWindow>
  );
}

/* ── Why Nexus ───────────────────────────────────────────────────────────────── */
function WhyNexus() {
  const points = [
    { title: 'Assessment First, Always', body: 'We begin every journey with a thorough medical assessment.', icon: '🩺' },
    { title: 'No Upselling. Ever.', body: 'Our consultations are honest conversations. We only recommend what you need.', icon: '🤝' },
    { title: 'Doctor-Performed Procedures', body: 'Every injection and procedure is assessed and performed by a licensed medical doctor.', icon: '👨‍⚕️' },
    { title: 'FDA & MOH Approved Equipment', body: 'We use only FDA-cleared, MOH-compliant equipment and clinically tested products.', icon: '✅' },
    { title: 'Private. Comfortable. Calm.', body: 'Our clinic is designed to feel like a sanctuary. You\'ll feel at ease from the moment you walk in.', icon: '🛡' },
    { title: 'Ongoing WhatsApp Support', body: 'Your journey doesn\'t end after treatment. We\'re reachable for follow-ups and ongoing care.', icon: '💬' },
  ];
  return (
    <WinWindow icon="🤝" title="Why Choose Us — Medicine Before Marketing">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '12px', alignItems: 'start', fontFamily: 'Tahoma, sans-serif' }}>
        {/* Left */}
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#000080', marginBottom: '8px', lineHeight: '1.3' }}>
            Medicine Before<br />
            <span style={{ color: '#ff0000', textDecoration: 'underline' }}>Marketing.</span>
          </h2>
          <p style={{ fontSize: '11px', color: '#444', lineHeight: '1.6', marginBottom: '12px' }}>
            Nexus Clinic is a medical aesthetic clinic where your health and safety always come first.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <Link to="/#book" className="btn btn--primary" style={{ display: 'block', textAlign: 'center' }}>📅 Book Free Consultation</Link>
            <Link to="/about" className="btn btn--ghost" style={{ display: 'block', textAlign: 'center' }}>👥 Meet Our Team</Link>
          </div>
        </div>

        {/* Grid of why-cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
          {points.map(p => (
            <div key={p.title} style={{
              background: '#ffffff',
              boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
              padding: '8px',
              fontFamily: 'Tahoma, sans-serif',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e8e4ff'}
            onMouseLeave={e => e.currentTarget.style.background = '#ffffff'}
            >
              <span style={{ fontSize: '16px', display: 'block', marginBottom: '4px' }}>{p.icon}</span>
              <h4 style={{ fontSize: '11px', fontWeight: '700', marginBottom: '3px', color: '#000080' }}>{p.title}</h4>
              <p style={{ fontSize: '10px', color: '#555', lineHeight: '1.5' }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </WinWindow>
  );
}

/* ── Testimonials ────────────────────────────────────────────────────────────── */
function Testimonials() {
  const reviews = [
    { name: 'Sarah L.', rating: 5, text: 'Nexus Clinic truly stands out. The experienced team made me feel comfortable from the start. Thrilled with my results.' },
    { name: 'Marcus T.', rating: 5, text: 'I came for a weight loss consultation expecting a sales pitch — instead I got an honest assessment. Six months later, 14kg lighter.' },
    { name: 'Priya K.', rating: 5, text: 'My skin looks and feels so much healthier after PRP sessions. Highly recommended.' },
    { name: 'James W.', rating: 5, text: 'Professional, discreet, and genuinely results-focused. The best advice I\'ve received about men\'s wellness.' },
  ];
  return (
    <WinWindow icon="★" title="Patient Stories — Real Results, Real People">
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '6px',
      }}>
        {reviews.map(r => (
          <div key={r.name} style={{
            background: '#ffffff',
            boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
            padding: '10px',
            fontFamily: 'Tahoma, sans-serif',
          }}>
            <div style={{ color: '#ffaa00', fontSize: '13px', marginBottom: '6px' }}>{'★'.repeat(r.rating)}</div>
            <p style={{ fontSize: '11px', color: '#444', lineHeight: '1.5', marginBottom: '6px', fontStyle: 'italic' }}>
              &quot;{r.text}&quot;
            </p>
            <strong style={{ fontSize: '11px', color: '#000080' }}>— {r.name}</strong>
          </div>
        ))}
      </div>
    </WinWindow>
  );
}

/* ── Booking CTA ─────────────────────────────────────────────────────────────── */
function BookingCTA() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <WinWindow icon="📅" title="Get Started — Begin With a Free Consultation">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', alignItems: 'start', fontFamily: 'Tahoma, sans-serif' }}>
        {/* Left: Info */}
        <div>
          <h2 style={{ fontSize: '16px', fontWeight: '700', color: '#000080', marginBottom: '8px', lineHeight: '1.3' }}>
            Begin With a<br />
            <span style={{ color: '#008000', textDecoration: 'underline' }}>Free Consultation</span>
          </h2>
          <p style={{ fontSize: '11px', color: '#444', lineHeight: '1.6', marginBottom: '10px' }}>
            No obligations. No pressure. Just an honest conversation about your goals.
          </p>
          {/* Contact info as Win2K group box */}
          <fieldset style={{ border: '1px solid #808080', boxShadow: '1px 1px 0 #ffffff', padding: '8px', fontFamily: 'Tahoma, sans-serif' }}>
            <legend style={{ fontSize: '11px', fontWeight: '700', padding: '0 4px', color: '#000080' }}>Contact Information</legend>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '11px', color: '#444' }}>
              <div>📍 LG10, Wisma UOA II, Jalan Pinang, KL 50450</div>
              <div>📞 016-702 5699 / 03-2163 5699</div>
              <div>💬 WhatsApp: +016-921 5699</div>
              <div>⏰ Mon–Sat: 10am – 7pm</div>
            </div>
          </fieldset>
        </div>

        {/* Right: Form */}
        <div style={{
          background: '#d4d0c8',
          boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
          padding: '10px',
        }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: '20px' }}>
              <div style={{ fontSize: '32px', marginBottom: '8px' }}>✅</div>
              <h3 style={{ fontSize: '14px', fontWeight: '700', color: '#000080', marginBottom: '4px' }}>
                We&apos;ll be in touch shortly!
              </h3>
              <p style={{ fontSize: '11px', color: '#444' }}>Expect a call or WhatsApp within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <h3 style={{ fontSize: '13px', fontWeight: '700', marginBottom: '8px', color: '#000080' }}>
                Book Your Free Consultation
              </h3>
              {[
                { name: 'name', placeholder: 'Your Full Name', type: 'text' },
                { name: 'phone', placeholder: 'Phone / WhatsApp Number', type: 'text' },
              ].map(f => (
                <div key={f.name} style={{ marginBottom: '6px' }}>
                  <label style={{ display: 'block', fontSize: '11px', marginBottom: '2px', color: '#000' }}>
                    {f.name === 'name' ? 'Full Name:' : 'Phone Number:'}
                  </label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name]}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      background: '#fff',
                      boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
                      border: 'none',
                      padding: '3px 6px',
                      fontSize: '11px',
                      fontFamily: 'Tahoma, sans-serif',
                      outline: 'none',
                    }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: '6px' }}>
                <label style={{ display: 'block', fontSize: '11px', marginBottom: '2px' }}>I&apos;m interested in:</label>
                <select
                  name="interest"
                  value={form.interest}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    background: '#fff',
                    boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
                    border: 'none',
                    padding: '3px 6px',
                    fontSize: '11px',
                    fontFamily: 'Tahoma, sans-serif',
                    outline: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <option value="">Select a treatment...</option>
                  <option>Face &amp; Skin Treatments</option>
                  <option>Weight Loss Programme</option>
                  <option>Hair &amp; Scalp Treatment</option>
                  <option>Body Contouring</option>
                  <option>General Consultation</option>
                </select>
              </div>
              <div style={{ marginBottom: '8px' }}>
                <label style={{ display: 'block', fontSize: '11px', marginBottom: '2px' }}>Message (optional):</label>
                <textarea
                  name="message"
                  placeholder="Any specific concerns?"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  style={{
                    width: '100%',
                    background: '#fff',
                    boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
                    border: 'none',
                    padding: '3px 6px',
                    fontSize: '11px',
                    fontFamily: 'Tahoma, sans-serif',
                    outline: 'none',
                    resize: 'vertical',
                  }}
                />
              </div>
              <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '5px' }}>
                📅 Request Free Consultation
              </button>
              <p style={{ textAlign: 'center', fontSize: '10px', color: '#666', marginTop: '6px' }}>
                🔒 Your information is kept strictly confidential.
              </p>
            </form>
          )}
        </div>
      </div>
    </WinWindow>
  );
}

export default function HomePage() {
  return (
    <main style={{
      marginTop: '130px',
      padding: '8px',
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      minHeight: 'calc(100vh - 130px)',
      paddingBottom: '28px',
      fontFamily: 'Tahoma, sans-serif',
    }}>
      <Hero />
      <TrustBar />
      <FeaturedServices />
      <WhyNexus />
      <Testimonials />
      <BookingCTA />
    </main>
  );
}

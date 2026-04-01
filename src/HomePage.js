import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import PageWrapper from './PageWrapper';

function ScrollTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-grid" aria-hidden="true" />
      <div className="hero__orb hero__orb--1" aria-hidden="true" />
      <div className="hero__orb hero__orb--2" aria-hidden="true" />
      <div className="hero__content">
        <div className="hero__badge">MOH Registered · Doctor-Led · Kuala Lumpur</div>
        <h1 className="hero__headline">
          Your Most Confident<br />
          <em>Self Awaits.</em>
        </h1>
        <p className="hero__sub">
          Evidence-based aesthetic and weight loss treatments tailored to you — not trends.
          Every plan begins with an honest medical assessment, not a sales pitch.
        </p>
        <div className="hero__actions">
          <Link to="/#book" className="btn btn--primary">Book Free Consultation</Link>
          <Link to="/services" className="btn btn--ghost">Explore Treatments</Link>
        </div>
        <div className="hero__trust">
          {[['10,000+', 'Patients Treated'], ['15+', 'Years Experience'], ['4.9★', 'Google Rating']].map(([n, l]) => (
            <div className="hero__stat" key={l}>
              <strong>{n}</strong>
              <span>{l}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__card hero__card--float hero__card--1">
          <div className="card-dot card-dot--green" />
          <span>Dr. Preetha is available now</span>
        </div>
        <div className="hero__portrait-ring">
          <div className="hero__portrait" />
        </div>
        <div className="hero__card hero__card--float hero__card--2">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="8" cy="8" r="8" fill="#C9A96E" />
            <path d="M5 8l2 2 4-4" stroke="var(--white)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Non-surgical · No downtime</span>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: '🏥', text: 'MOH Registered & Compliant' },
    { icon: '👨‍⚕️', text: 'Licensed Medical Doctors Only' },
    { icon: '✅', text: 'FDA-Approved Equipment' },
    { icon: '🔒', text: 'Private & Confidential Care' },
    { icon: '💬', text: 'WhatsApp Follow-Up Support' },
  ];
  return (
    <div className="trust-bar">
      {items.map(({ icon, text }) => (
        <div className="trust-bar__item" key={text}>
          <span>{icon}</span>
          <span>{text}</span>
        </div>
      ))}
    </div>
  );
}

function FeaturedServices() {
  const services = [
    { icon: '✦', label: 'Face & Skin', color: '#C9A96E', desc: 'Botox, fillers, skin brightening, acne treatment and thread lifts — all doctor-administered.' },
    { icon: '◈', label: 'Weight Loss', color: '#7EB8A4', desc: 'Medical-grade fat reduction including Ozempic, cryolipolysis, and supervised programmes.' },
    { icon: '◇', label: 'Hair & Scalp', color: '#A8B4C9', desc: 'PRP therapy, stem cell treatment, and hair transplants for natural-looking restoration.' },
    { icon: '○', label: 'Body', color: '#C9A96E', desc: 'Emsculpt, Vanquish ME, and laser contouring for non-surgical body reshaping.' },
  ];
  return (
    <section className="featured-services section">
      <div className="section__header">
        <span className="section__label">What We Offer</span>
        <h2 className="section__title">Treatments Built<br /><em>Around Your Goals</em></h2>
        <p className="section__sub">Every plan starts with understanding you — not filling a package.</p>
      </div>
      <div className="treatments__grid">
        {services.map(s => (
          <div className="treatment-card" key={s.label} style={{ '--accent': s.color }}>
            <div className="treatment-card__icon">{s.icon}</div>
            <h3 className="treatment-card__title">{s.label}</h3>
            <p className="treatment-card__desc">{s.desc}</p>
            <Link to="/services" className="treatment-card__cta">View Treatments →</Link>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <Link to="/services" className="btn btn--ghost">See All Treatments</Link>
      </div>
    </section>
  );
}

function WhyNexus() {
  const points = [
    { title: 'Assessment First, Always', body: 'We begin every journey with a thorough medical assessment — because what works for someone else may not work for you.', icon: '🩺' },
    { title: 'No Upselling. Ever.', body: 'Our consultations are honest conversations. We only recommend what you genuinely need, and explain every option clearly.', icon: '🤝' },
    { title: 'Doctor-Performed Procedures', body: 'Every injection, prescription, and clinical procedure is assessed and performed by a licensed medical doctor.', icon: '👨‍⚕️' },
    { title: 'FDA & MOH Approved Equipment', body: 'We use only FDA-cleared, MOH-compliant equipment and clinically tested products — no shortcuts, ever.', icon: '✅' },
    { title: 'Private. Comfortable. Calm.', body: 'Our clinic is designed to feel like a sanctuary. You\'ll feel at ease from the moment you walk in.', icon: '🛡️' },
    { title: 'Ongoing WhatsApp Support', body: 'Your journey doesn\'t end after treatment. We\'re reachable for follow-ups, questions, and ongoing care.', icon: '💬' },
  ];
  return (
    <section className="why section" id="about">
      <div className="why__inner">
        <div className="why__left">
          <span className="section__label">Why Choose Us</span>
          <h2 className="section__title">Medicine Before<br /><em>Marketing.</em></h2>
          <p className="section__sub">Nexus Clinic isn't a beauty salon. We are a medical aesthetic clinic where your health and safety always come first.</p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            <Link to="/#book" className="btn btn--primary">Book Free Consultation</Link>
            <Link to="/about" className="btn btn--ghost">Meet Our Team</Link>
          </div>
        </div>
        <div className="why__grid">
          {points.map(p => (
            <div className="why-card" key={p.title}>
              <span className="why-card__icon">{p.icon}</span>
              <h4>{p.title}</h4>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const reviews = [
    { name: 'Sarah L.', rating: 5, text: 'Nexus Clinic truly stands out. The experienced team made me feel comfortable from the start. Thrilled with my results.' },
    { name: 'Marcus T.', rating: 5, text: 'I came for a weight loss consultation expecting a sales pitch — instead I got an honest assessment. Six months later, 14kg lighter.' },
    { name: 'Priya K.', rating: 5, text: 'My skin looks and feels so much healthier after PRP sessions. The team tailored everything to my concerns. Highly recommended.' },
    { name: 'James W.', rating: 5, text: 'Professional, discreet, and genuinely results-focused. The best advice I\'ve received about men\'s wellness.' },
  ];
  return (
    <section className="testimonials section">
      <div className="section__header">
        <span className="section__label">Patient Stories</span>
        <h2 className="section__title">Real Results,<br /><em>Real People.</em></h2>
      </div>
      <div className="testimonials__grid">
        {reviews.map(r => (
          <div className="review-card" key={r.name}>
            <div className="review-card__stars">{'★'.repeat(r.rating)}</div>
            <p className="review-card__text">"{r.text}"</p>
            <strong className="review-card__name">— {r.name}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}

function BookingCTA() {
  const [form, setForm] = useState({ name: '', phone: '', interest: '', message: '' });
  const [sent, setSent] = useState(false);
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => { e.preventDefault(); setSent(true); };

  return (
    <section className="booking section" id="book">
      <div className="booking__inner">
        <div className="booking__left">
          <span className="section__label">Get Started</span>
          <h2 className="section__title" style={{ color: 'var(--white)' }}>Begin With a<br /><em>Free Consultation</em></h2>
          <p style={{ color: 'var(--white-dim)', lineHeight: 1.8, marginTop: '1rem' }}>
            No obligations. No pressure. Just an honest conversation about your goals and how we can help — medically and ethically.
          </p>
          <div className="booking__contact">
            <div>📍 LG10, Wisma UOA II, Jalan Pinang, KL 50450</div>
            <div>📞 016-702 5699 / 03-2163 5699</div>
            <div>💬 WhatsApp: +016-921 5699</div>
            <div>⏰ Mon–Sat: 10am – 7pm</div>
          </div>
        </div>
        <div className="booking__form-wrap">
          {sent ? (
            <div className="booking__success">
              <div style={{ fontSize: '3rem' }}>✅</div>
              <h3>We'll be in touch shortly!</h3>
              <p>Expect a call or WhatsApp within 24 hours.</p>
            </div>
          ) : (
            <form className="booking__form" onSubmit={handleSubmit}>
              <h3>Book Your Free Consultation</h3>
              <input name="name" placeholder="Your Full Name" value={form.name} onChange={handleChange} required />
              <input name="phone" placeholder="Phone / WhatsApp Number" value={form.phone} onChange={handleChange} required />
              <select name="interest" value={form.interest} onChange={handleChange} required>
                <option value="">I'm interested in...</option>
                <option>Face & Skin Treatments</option>
                <option>Weight Loss Programme</option>
                <option>Hair & Scalp Treatment</option>
                <option>Body Contouring</option>
                <option>General Consultation</option>
              </select>
              <textarea name="message" placeholder="Any specific concerns? (optional)" value={form.message} onChange={handleChange} rows={3} />
              <button type="submit" className="btn btn--primary" style={{ width: '100%', padding: '1rem' }}>
                Request Free Consultation
              </button>
              <p className="booking__form-note">Your information is kept strictly confidential.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PageWrapper>
      <Hero />
      <ScrollTransition><TrustBar /></ScrollTransition>
      <ScrollTransition><FeaturedServices /></ScrollTransition>
      <ScrollTransition><WhyNexus /></ScrollTransition>
      <ScrollTransition><Testimonials /></ScrollTransition>
      <ScrollTransition><BookingCTA /></ScrollTransition>
    </PageWrapper>
  );
}

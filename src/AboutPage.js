import React from "react";
import { Link } from "react-router-dom";
import PageWrapper from './PageWrapper';

const DOCTORS = [
  {
    name: "Dr. Aris",
    initial: "A",
    role: "Medical Aesthetic & Weight Management Specialist",
    bio: "Dr. Aris brings a compassionate, patient-first approach to every consultation. Specialising in weight management and injectables, he is known for building realistic treatment plans that deliver lasting results without overpromising.",
    gradient: "linear-gradient(135deg, #C9A96E, #e8c98a)",
  },
  {
    name: "Dr. Preetha",
    initial: "P",
    role: "Aesthetic Medicine Physician",
    bio: "Holding a BSc in Genetics from Universiti Kebangsaan Malaysia, Dr. Preetha brings scientific rigour to aesthetic medicine. She is celebrated for her precision with injectables and her ability to achieve natural, harmonious results.",
    gradient: "linear-gradient(135deg, #7EB8A4, #a8d4c8)",
  },
  {
    name: "Dr. Ashvinia",
    initial: "As",
    role: "Aesthetic & Skin Specialist",
    bio: "Dr. Ashvinia is renowned for her meticulous attention to each patient's unique needs. Her expertise in skin health and facial aesthetics ensures every treatment is precisely calibrated for the individual.",
    gradient: "linear-gradient(135deg, #A8B4C9, #c0c8d8)",
  },
  {
    name: "Dr. Charmaine",
    initial: "C",
    role: "Aesthetic Medicine Doctor",
    bio: "Driven by a belief in patient empowerment, Dr. Charmaine ensures every patient fully understands their treatment options before committing. She leads her field by combining clinical excellence with genuine personal care.",
    gradient: "linear-gradient(135deg, #C9A96E, #7EB8A4)",
  },
];

const TIMELINE = [
  { year: "2009", event: "Nexus Clinic opens at Wisma UOA II, Kuala Lumpur." },
  {
    year: "2012",
    event:
      "Expanded services to include non-surgical body contouring and weight management.",
  },
  {
    year: "2016",
    event: "Introduced advanced laser and PRP therapies for hair and skin.",
  },
  {
    year: "2019",
    event:
      "Became one of the first clinics in KL to offer Emsculpt technology.",
  },
  {
    year: "2022",
    event:
      "Launched full medical weight management programme with GLP-1 therapies.",
  },
  {
    year: "2024",
    event:
      "Surpassed 10,000 patients treated. Continuing to grow — always doctor-led.",
  },
];

const VALUES = [
  {
    icon: "🩺",
    title: "Medical Integrity",
    body: "We follow clinical protocols, not sales targets. Every recommendation we make is medically justified.",
  },
  {
    icon: "🔍",
    title: "Honest Assessments",
    body: "We'll tell you if a treatment isn't right for you — even if that means not selling you something.",
  },
  {
    icon: "🌿",
    title: "Natural Results",
    body: "Our goal is always facial harmony and natural improvement, never an overdone aesthetic.",
  },
  {
    icon: "🛡️",
    title: "Safety First",
    body: "MOH registered and fully compliant. Only FDA-approved products and equipment, always.",
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    body: "We think in terms of your long-term health outcomes, not single transactions.",
  },
  {
    icon: "💬",
    title: "Accessible Support",
    body: "Our team is reachable via WhatsApp between visits — because great care doesn't stop at the clinic door.",
  },
];

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="page-hero__content">
          <span className="section__label">About Nexus Clinic</span>
          <h1
            className="hero__headline"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}
          >
            Medicine First.
            <br />
            <em>Always.</em>
          </h1>
          <p className="hero__sub">
            Since 2009, Nexus Clinic has been Kuala Lumpur's trusted medical
            aesthetic clinic — doctor-led, MOH registered, and built on one
            promise: honest, evidence-based care.
          </p>
        </div>
        <div className="page-hero__image">
          <img src="/med first.jpg.jpeg" alt="Trusted Nexus Clinic Specialist Doctor" />
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission section">
        <div className="mission__inner">
          <div className="mission__quote">
            <span className="mission__quotemark">"</span>
            <blockquote>
              We started Nexus Clinic because we believed patients deserved
              better than a sales pitch disguised as a consultation. Every
              person who walks through our door gets a real medical assessment —
              and only then, an honest recommendation.
            </blockquote>
            <cite>— The Nexus Clinic founding team</cite>
          </div>
          <div className="mission__stats">
            {[
              ["10,000+", "Patients Treated"],
              ["15+", "Years in Practice"],
              ["4", "Specialist Doctors"],
              ["4.9★", "Google Rating"],
            ].map(([n, l]) => (
              <div className="mission__stat" key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        className="values section"
        style={{ background: "var(--off-black)" }}
      >
        <div className="section__header">
          <span className="section__label">What We Stand For</span>
          <h2 className="section__title">
            Our Core <em>Values</em>
          </h2>
          <p className="section__sub">
            The principles that guide every consultation, every treatment, every
            day.
          </p>
        </div>
        <div className="why__grid" style={{ maxWidth: 900, margin: "0 auto" }}>
          {VALUES.map((v) => (
            <div className="why-card" key={v.title}>
              <span className="why-card__icon">{v.icon}</span>
              <h4>{v.title}</h4>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Doctors */}
      <section className="section" id="doctors">
        <div className="section__header">
          <span className="section__label">Our Medical Team</span>
          <h2 className="section__title">
            Meet the <em>Doctors</em>
          </h2>
          <p className="section__sub">
            Every procedure is planned, assessed, and performed by a licensed,
            experienced medical professional.
          </p>
        </div>
        <div className="doctors-about__grid">
          {DOCTORS.map((doc) => (
            <div className="doctor-about-card" key={doc.name}>
              <div
                className="doctor-about-card__avatar"
                style={{ background: doc.gradient }}
              >
                {doc.initial}
              </div>
              <div className="doctor-about-card__body">
                <h3>{doc.name}</h3>
                <p className="doctor-card__role">{doc.role}</p>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "var(--white-dim)",
                    lineHeight: 1.8,
                    marginTop: "0.75rem",
                  }}
                >
                  {doc.bio}
                </p>
                <Link
                  to="/#book"
                  className="treatment-card__cta"
                  style={{ display: "inline-block", marginTop: "1.25rem" }}
                >
                  Book with {doc.name.split(" ")[1]} →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section
        className="timeline section"
        style={{ background: "var(--off-black)" }}
      >
        <div className="section__header">
          <span className="section__label">Our Journey</span>
          <h2 className="section__title">
            15 Years of <em>Excellence</em>
          </h2>
        </div>
        <div className="timeline__track">
          {TIMELINE.map((item, i) => (
            <div
              className={`timeline__item ${i % 2 === 0 ? "left" : "right"}`}
              key={item.year}
            >
              <div className="timeline__dot" />
              <div className="timeline__card">
                <strong className="timeline__year">{item.year}</strong>
                <p>{item.event}</p>
              </div>
            </div>
          ))}
          <div className="timeline__line" />
        </div>
      </section>

      {/* Location */}
      <section className="location section" id="contact">
        <div className="section__header">
          <span className="section__label">Find Us</span>
          <h2 className="section__title">
            Visit <em>Nexus Clinic</em>
          </h2>
        </div>
        <div className="location__inner">
          <div className="location__info">
            <div className="location__item">
              <span className="location__icon">📍</span>
              <div>
                <strong>Address</strong>
                <p>
                  LG10, Lower Ground Floor, Wisma UOA II
                  <br />
                  Jalan Pinang, 50450 Kuala Lumpur
                </p>
              </div>
            </div>
            <div className="location__item">
              <span className="location__icon">📞</span>
              <div>
                <strong>Phone</strong>
                <p>
                  016-702 5699
                  <br />
                  03-2163 5699
                </p>
              </div>
            </div>
            <div className="location__item">
              <span className="location__icon">💬</span>
              <div>
                <strong>WhatsApp</strong>
                <p>+016-921 5699</p>
              </div>
            </div>
            <div className="location__item">
              <span className="location__icon">⏰</span>
              <div>
                <strong>Opening Hours</strong>
                <p>
                  Monday – Saturday: 10:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>
            <Link
              to="/#book"
              className="btn btn--primary"
              style={{ marginTop: "1rem", display: "inline-block" }}
            >
              Book a Free Consultation
            </Link>
          </div>
          <div className="location__map">
            <iframe
              title="Nexus Clinic Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8374453!2d101.7099!3d3.1561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc362a7d5a95b7%3A0x0!2sWisma+UOA+II%2C+Jalan+Pinang%2C+Kuala+Lumpur!5e0!3m2!1sen!2smy!4v1"
              width="100%"
              height="350"
              style={{
                border: 0,
                borderRadius: 12,
                filter: "grayscale(0.5) invert(0.85) hue-rotate(180deg)",
              }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip">
        <p>Ready to take the first step?</p>
        <Link to="/#book" className="btn btn--primary">
          Book Your Free Consultation Today
        </Link>
      </div>
    </PageWrapper>
  );
}

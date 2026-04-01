import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageWrapper from './PageWrapper';

const SERVICES = [
  {
    id: "face",
    icon: "✦",
    color: "#C9A96E",
    label: "Face & Skin",
    tagline: "Natural-looking results. Medical precision.",
    intro:
      "Our face and skin treatments are performed by licensed doctors — not beauticians. Every plan is built around your facial structure, skin type, and personal goals.",
    treatments: [
      {
        name: "Botox & Anti-Wrinkle",
        desc: "Smooth fine lines and dynamic wrinkles on forehead, frown lines, and crow's feet. Results last 3–6 months with minimal downtime.",
        time: "30 min",
        downtime: "None",
      },
      {
        name: "Dermal Fillers",
        desc: "Restore volume to cheeks, chin, jawline, and under-eyes using hyaluronic acid fillers. Results are immediate and natural.",
        time: "45 min",
        downtime: "1–2 days",
      },
      {
        name: "Non-Surgical Thread Lift",
        desc: "Lift and tighten sagging skin without surgery using dissolvable PDO threads that stimulate collagen production.",
        time: "60 min",
        downtime: "3–5 days",
      },
      {
        name: "Acne & Scar Treatment",
        desc: "Medical-grade protocols combining lasers, chemical peels, and PRP to clear active acne and resurface old scars.",
        time: "45 min",
        downtime: "2–5 days",
      },
      {
        name: "Skin Brightening & Pigmentation",
        desc: "Target dark spots, uneven tone, and melasma with laser and mesotherapy treatments tailored to your skin profile.",
        time: "30 min",
        downtime: "Minimal",
      },
      {
        name: "PRP (Platelet-Rich Plasma)",
        desc: "Use your own growth factors to rejuvenate skin, stimulate collagen, and address fine lines — naturally.",
        time: "60 min",
        downtime: "1–2 days",
      },
    ],
  },
  {
    id: "weightloss",
    icon: "◈",
    color: "#7EB8A4",
    label: "Weight Loss",
    tagline: "Doctor-supervised. Results you can feel.",
    intro:
      "Our weight loss programmes begin with a full medical assessment — body composition scan, health history, and lifestyle review. No off-the-shelf packages. Every plan is yours.",
    treatments: [
      {
        name: "Ozempic (Semaglutide)",
        desc: "A weekly GLP-1 injection that regulates appetite and blood sugar. FDA-approved and administered under full medical supervision.",
        time: "Weekly",
        downtime: "None",
      },
      {
        name: "Saxenda (Liraglutide)",
        desc: "A daily injectable that mimics hunger-regulating hormones, helping you feel fuller for longer. Doctor-monitored throughout.",
        time: "Daily",
        downtime: "None",
      },
      {
        name: "Cryolipolysis (Fat Freezing)",
        desc: "Non-surgical fat reduction that permanently destroys fat cells in targeted areas like belly, arms, and thighs using controlled cooling.",
        time: "60 min",
        downtime: "None",
      },
      {
        name: "Emsculpt (Muscle & Fat)",
        desc: "Build muscle and reduce fat simultaneously with high-intensity focused electromagnetic energy — no sweat required.",
        time: "30 min",
        downtime: "None",
      },
      {
        name: "Vanquish ME",
        desc: "Contactless radiofrequency fat reduction targeting the abdomen and thighs. No needles, no downtime, no discomfort.",
        time: "45 min",
        downtime: "None",
      },
      {
        name: "Full Weight Management Programme",
        desc: "A complete doctor-guided journey: assessment, treatment, lifestyle coaching, and regular monitoring from RM 5,000.",
        time: "Ongoing",
        downtime: "None",
      },
    ],
  },
  {
    id: "hair",
    icon: "◇",
    color: "#A8B4C9",
    label: "Hair & Scalp",
    tagline: "Restore confidence. Naturally.",
    intro:
      "Hair loss is more common than you think — and treatable. Our doctors assess the root cause (hormonal, genetic, stress) and personalise a restoration plan accordingly.",
    treatments: [
      {
        name: "PRP for Hair Loss",
        desc: "Inject concentrated growth factors from your own blood into the scalp to stimulate dormant follicles and thicken thinning hair.",
        time: "60 min",
        downtime: "1 day",
      },
      {
        name: "Stem Cell Therapy for Hair",
        desc: "Advanced regenerative treatment using growth-factor-rich stem cells to revive follicles and restore natural hair density.",
        time: "60 min",
        downtime: "1–2 days",
      },
      {
        name: "Hair Mesotherapy",
        desc: "Deliver a cocktail of vitamins, minerals, and peptides directly to the scalp to nourish follicles and reduce shedding.",
        time: "45 min",
        downtime: "None",
      },
      {
        name: "Hair Transplant",
        desc: "Permanent FUE hair transplant for significant hair loss areas — performed under local anaesthesia with natural-looking results.",
        time: "Full day",
        downtime: "7–14 days",
      },
      {
        name: "Scalp Analysis & Assessment",
        desc: "Comprehensive scalp and follicle analysis using medical imaging to identify the type and cause of hair loss before treatment.",
        time: "30 min",
        downtime: "None",
      },
      {
        name: "Low-Level Laser Therapy",
        desc: "Painless light-based stimulation that enhances blood flow to follicles and slows hair loss progression over time.",
        time: "30 min",
        downtime: "None",
      },
    ],
  },
  {
    id: "body",
    icon: "○",
    color: "#C9A96E",
    label: "Body",
    tagline: "Non-surgical. Real results.",
    intro:
      "Beyond the face — our body treatments address stubborn fat, stretch marks, and overall skin quality using the latest medical aesthetic technology.",
    treatments: [
      {
        name: "Body Contouring",
        desc: "A combination of laser, radiofrequency, and ultrasound technology to reshape the body and tighten skin in targeted areas.",
        time: "60 min",
        downtime: "None",
      },
      {
        name: "Stretch Mark Treatment",
        desc: "Reduce the appearance of stretch marks on abdomen, thighs, and arms using fractional laser and microneedling protocols.",
        time: "45 min",
        downtime: "2–3 days",
      },
      {
        name: "Carboxy Therapy",
        desc: "Medical-grade CO₂ injections to improve circulation, break down fat, and tighten loose skin on the body.",
        time: "30 min",
        downtime: "Minimal",
      },
      {
        name: "IV Drip & Wellness Infusions",
        desc: "Custom vitamin, antioxidant, and hydration infusions administered intravenously for energy, immunity, and skin radiance.",
        time: "45 min",
        downtime: "None",
      },
      {
        name: "Laser Body Contouring",
        desc: "Targeted laser energy that disrupts and reduces fat cells in specific areas while improving skin texture simultaneously.",
        time: "45 min",
        downtime: "None",
      },
      {
        name: "Mesotherapy (Body)",
        desc: "Micro-injections of fat-dissolving and toning cocktails to treat cellulite, localised fat, and skin laxity.",
        time: "30 min",
        downtime: "1 day",
      },
    ],
  },
];

function ServiceCard({ treatment }) {
  return (
    <div className="service-detail-card">
      <div className="service-detail-card__header">
        <h4>{treatment.name}</h4>
        <div className="service-detail-card__meta">
          <span>⏱ {treatment.time}</span>
          <span>⬇ Downtime: {treatment.downtime}</span>
        </div>
      </div>
      <p>{treatment.desc}</p>
      <Link to="/#book" className="treatment-card__cta">
        Book Consultation →
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("face");
  const active = SERVICES.find((s) => s.id === activeTab);

  return (
    <PageWrapper>
      {/* Page Hero */}
      <section className="page-hero">
        <div className="hero__bg-grid" aria-hidden="true" />
        <div className="hero__orb hero__orb--1" aria-hidden="true" />
        <div className="page-hero__content">
          <span className="section__label">Our Treatments</span>
          <h1
            className="hero__headline"
            style={{ fontSize: "clamp(2.5rem,5vw,4rem)" }}
          >
            Every Treatment, <em>Tailored.</em>
          </h1>
          <p className="hero__sub">
            No off-the-shelf packages. No guesswork. A qualified doctor assesses
            your needs and builds a plan that's medically sound and right for
            you.
          </p>
          <Link
            to="/#book"
            className="btn btn--primary"
            style={{ marginTop: "1.5rem", display: "inline-block" }}
          >
            Book Free Consultation
          </Link>
        </div>
        <div className="page-hero__image">
          <img src="/services-hero.png" alt="Modern Medical Aesthetic Clinic Treatment Room" />
        </div>
      </section>

      {/* Category Tabs */}
      <section
        className="services-tabs section"
        style={{ paddingTop: "4rem", paddingBottom: "0" }}
      >
        <div className="tabs">
          {SERVICES.map((s) => (
            <button
              key={s.id}
              className={`tab-btn ${activeTab === s.id ? "active" : ""}`}
              style={{ "--tab-accent": s.color }}
              onClick={() => setActiveTab(s.id)}
            >
              <span className="tab-btn__icon">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>
      </section>

      {/* Active Category */}
      <section
        className="services-detail section"
        style={{ paddingTop: "3rem" }}
      >
        <div
          className="services-detail__header"
          style={{ "--accent": active.color }}
        >
          <div>
            <span className="section__label">{active.label}</span>
            <h2 className="section__title" style={{ textAlign: "left" }}>
              {active.tagline}
            </h2>
            <p className="section__sub" style={{ maxWidth: 600 }}>
              {active.intro}
            </p>
          </div>
          <div
            className="services-detail__badge"
            style={{ "--accent": active.color }}
          >
            {active.icon}
          </div>
        </div>
        <div className="services-detail__grid">
          {active.treatments.map((t) => (
            <ServiceCard key={t.name} treatment={t} />
          ))}
        </div>
      </section>

      {/* Pricing Note */}
      <section
        className="pricing-note section"
        style={{ paddingTop: "2rem", paddingBottom: "4rem" }}
      >
        <div className="pricing-note__inner">
          <div>
            <h3>Transparent Pricing, Always</h3>
            <p>
              We don't believe in hidden fees. Treatment costs are shared
              clearly during your free consultation after a proper medical
              assessment.
            </p>
          </div>
          <div className="pricing-highlights">
            <div className="pricing-item">
              <strong>Initial Consultation</strong>
              <span>
                RM 100 <em>(redeemable on treatment)</em>
              </span>
            </div>
            <div className="pricing-item">
              <strong>Weight Management Programme</strong>
              <span>From RM 5,000</span>
            </div>
            <div className="pricing-item">
              <strong>Aesthetic Treatments</strong>
              <span>Discussed at consultation</span>
            </div>
          </div>
          <Link to="/#book" className="btn btn--primary">
            Get a Free Assessment
          </Link>
        </div>
      </section>

      {/* CTA Strip */}
      <div className="cta-strip">
        <p>Not sure which treatment is right for you?</p>
        <Link to="/#book" className="btn btn--primary">
          Speak to a Doctor — It's Free
        </Link>
      </div>
    </PageWrapper>
  );
}

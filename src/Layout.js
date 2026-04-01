import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  const links = [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'About', to: '/about' },
    { label: 'Doctors', to: '/about#doctors' },
    { label: 'Contact', to: '/#book' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <Link to="/" className="navbar__logo">
        <span className="logo-nx">NEXUS</span>
        <span className="logo-divider">|</span>
        <span className="logo-clinic">CLINIC</span>
      </Link>
      <ul className={`navbar__links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l.label}>
            <Link
              to={l.to}
              className={location.pathname === l.to ? 'active' : ''}
              onClick={() => setMenuOpen(false)}
            >
              {l.label}
            </Link>
          </li>
        ))}
        <li>
          <Link to="/#book" className="nav-cta" onClick={() => setMenuOpen(false)}>
            Book Free Consultation
          </Link>
        </li>
      </ul>
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div>
          <Link to="/" className="navbar__logo" style={{ marginBottom: '1rem', display: 'flex' }}>
            <span className="logo-nx">NEXUS</span>
            <span className="logo-divider">|</span>
            <span className="logo-clinic">CLINIC</span>
          </Link>
          <p style={{ maxWidth: 280 }}>
            MOH Registered · Doctor-Led<br />
            KL's Trusted Medical Aesthetic Clinic<br />
            Since 2009.
          </p>
        </div>
        <div>
          <h4>Treatments</h4>
          <ul>
            {['Botox & Fillers', 'Weight Loss Programme', 'Hair Restoration', 'Skin Rejuvenation', 'Body Contouring', 'IV Drip & Wellness'].map(t => (
              <li key={t}><Link to="/services">{t}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Company</h4>
          <ul>
            {[['About Us', '/about'], ['Our Doctors', '/about#doctors'], ['Patient Stories', '/about#reviews'], ['Book Consultation', '/#book']].map(([l, to]) => (
              <li key={l}><Link to={to}>{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4>Visit Us</h4>
          <p>LG10, Lower Ground Floor<br />Wisma UOA II, Jalan Pinang<br />50450 Kuala Lumpur</p>
          <p style={{ marginTop: '0.75rem' }}>📞 016-702 5699<br />📞 03-2163 5699</p>
          <p style={{ marginTop: '0.5rem' }}>💬 WhatsApp: +016-921 5699</p>
          <p style={{ marginTop: '0.5rem' }}>⏰ Mon–Sat: 10am – 7pm</p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Nexus Clinic KL. All rights reserved. Registered with the Ministry of Health Malaysia.</p>
      </div>
    </footer>
  );
}

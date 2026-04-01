import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar({ theme, toggleTheme }) {
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

  const currentUrl = `http://www.nexusclinic.com.my${location.pathname}`;

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="navigation">
      {/* IE Title Bar */}
      <div style={{
        background: 'linear-gradient(90deg, #000080 0%, #1084d0 100%)',
        color: '#fff',
        fontSize: '11px',
        fontWeight: '700',
        padding: '3px 6px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        userSelect: 'none',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span style={{ fontSize: '14px' }}>🌐</span>
          <span>Nexus Clinic KL - Microsoft Internet Explorer</span>
        </div>
        <div style={{ display: 'flex', gap: '2px' }}>
          {['_', '□', '✕'].map((c, i) => (
            <button key={i} style={{
              width: '16px', height: '14px',
              background: '#d4d0c8',
              boxShadow: 'inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff, inset -2px -2px 0 #808080, inset 2px 2px 0 #efefef',
              border: 'none', cursor: 'pointer',
              fontSize: '9px', fontWeight: '700',
              color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center',
              lineHeight: '1', padding: '0',
              fontFamily: 'Tahoma, sans-serif',
            }}>{c}</button>
          ))}
        </div>
      </div>

      {/* IE Menu Bar */}
      <div style={{
        background: '#d4d0c8',
        borderBottom: '1px solid #808080',
        display: 'flex',
        alignItems: 'center',
        padding: '1px 4px',
        fontSize: '11px',
        fontFamily: 'Tahoma, sans-serif',
        gap: '0',
      }}>
        {['File', 'Edit', 'View', 'Favorites', 'Tools', 'Help'].map(m => (
          <span key={m} style={{ padding: '2px 8px', cursor: 'default', userSelect: 'none' }}
            onMouseEnter={e => { e.target.style.background = '#000080'; e.target.style.color = '#fff'; }}
            onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#000'; }}
          >{m}</span>
        ))}
      </div>

      {/* IE Toolbar */}
      <div style={{
        background: '#d4d0c8',
        borderBottom: '1px solid #808080',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        gap: '2px',
        flexWrap: 'wrap',
      }}>
        {/* Back/Forward/Stop/Refresh/Home */}
        {[
          { icon: '◀', label: 'Back' },
          { icon: '▶', label: 'Forward' },
          { icon: '✕', label: 'Stop' },
          { icon: '↻', label: 'Refresh' },
          { icon: '🏠', label: 'Home' },
        ].map(b => (
          <button key={b.label} title={b.label} style={{
            background: '#d4d0c8', border: 'none',
            boxShadow: 'none', padding: '3px 8px',
            fontSize: '11px', cursor: 'pointer',
            display: 'flex', alignItems: 'center', gap: '3px',
            color: '#000', fontFamily: 'Tahoma, sans-serif',
          }}
          onMouseEnter={e => e.currentTarget.style.boxShadow = 'inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff, inset -2px -2px 0 #808080, inset 2px 2px 0 #efefef'}
          onMouseLeave={e => e.currentTarget.style.boxShadow = 'none'}
          >
            <span>{b.icon}</span>
            <span style={{ fontSize: '11px' }}>{b.label}</span>
          </button>
        ))}

        {/* Separator */}
        <div style={{ width: '1px', background: '#808080', height: '20px', margin: '0 4px', boxShadow: '1px 0 0 #ffffff' }} />

        {/* Nav links as toolbar buttons */}
        <ul className={`navbar__links ${menuOpen ? 'open' : ''}`} style={{ display: 'flex', gap: 0, padding: 0, listStyle: 'none', margin: 0 }}>
          {links.map(l => (
            <li key={l.label}>
              <Link
                to={l.to}
                className={location.pathname === l.to ? 'active' : ''}
                onClick={() => setMenuOpen(false)}
                style={{ padding: '3px 10px', fontSize: '11px', fontFamily: 'Tahoma, sans-serif', textDecoration: 'none' }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/#book" className="nav-cta" onClick={() => setMenuOpen(false)}>
              📅 Book Free Consultation
            </Link>
          </li>
          <li>
            <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* IE Address Bar */}
      <div style={{
        background: '#d4d0c8',
        borderBottom: '1px solid #808080',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 6px',
        gap: '6px',
        fontSize: '11px',
        fontFamily: 'Tahoma, sans-serif',
      }}>
        <span style={{ color: '#444', whiteSpace: 'nowrap', fontSize: '11px' }}>Address</span>
        <div style={{
          flex: 1,
          background: '#fff',
          boxShadow: 'inset 1px 1px 0 #404040, inset -1px -1px 0 #ffffff, inset 2px 2px 0 #808080, inset -2px -2px 0 #d4d0c8',
          padding: '2px 6px',
          fontSize: '11px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px',
        }}>
          <span style={{ fontSize: '12px' }}>🌐</span>
          <span style={{ color: '#0000ff', textDecoration: 'underline' }}>{currentUrl}</span>
        </div>
        <button style={{
          background: '#d4d0c8',
          boxShadow: 'inset -1px -1px 0 #404040, inset 1px 1px 0 #ffffff, inset -2px -2px 0 #808080, inset 2px 2px 0 #efefef',
          border: 'none', padding: '2px 12px',
          fontSize: '11px', cursor: 'pointer',
          fontFamily: 'Tahoma, sans-serif',
          color: '#000',
        }}>Go</button>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <>
      {/* Win2K Status Bar */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0,
        background: '#d4d0c8',
        borderTop: '1px solid #808080',
        display: 'flex',
        alignItems: 'center',
        padding: '2px 4px',
        fontSize: '10px',
        color: '#444',
        zIndex: 50,
        fontFamily: 'Tahoma, sans-serif',
        boxShadow: '0 -1px 0 #ffffff',
        gap: '2px',
      }}>
        <div style={{
          flex: 2,
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #ffffff',
          padding: '1px 6px',
          overflow: 'hidden',
          whiteSpace: 'nowrap',
        }}>
          <span className="marquee-text">
            ✅ Done &nbsp;&nbsp;&nbsp; 🔒 MOH Registered &nbsp;&nbsp;&nbsp; 👨‍⚕️ Doctor-Led &nbsp;&nbsp;&nbsp; ⏰ Mon–Sat: 10am–7pm &nbsp;&nbsp;&nbsp; 📞 016-702 5699 &nbsp;&nbsp;&nbsp; 📍 Wisma UOA II, Jalan Pinang, KL &nbsp;&nbsp;&nbsp; ★★★★★ 4.9 Google Rating &nbsp;&nbsp;&nbsp; 10,000+ Patients Treated &nbsp;&nbsp;&nbsp;
          </span>
        </div>
        <div style={{
          boxShadow: 'inset 1px 1px 0 #808080, inset -1px -1px 0 #ffffff',
          padding: '1px 10px', whiteSpace: 'nowrap',
        }}>
          🌐 Internet
        </div>
      </div>

      <footer className="footer" style={{ marginBottom: '20px' }}>
        <div className="footer__inner">
          <div>
            <Link to="/" className="navbar__logo" style={{ marginBottom: '6px', display: 'flex', textDecoration: 'none' }}>
              <span className="logo-nx">NEXUS</span>
              <span className="logo-divider"> | </span>
              <span className="logo-clinic">CLINIC</span>
            </Link>
            <p style={{ maxWidth: 260 }}>
              MOH Registered · Doctor-Led<br />
              KL&apos;s Trusted Medical Aesthetic Clinic<br />
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
            <p style={{ marginTop: '4px' }}>📞 016-702 5699<br />📞 03-2163 5699</p>
            <p style={{ marginTop: '4px' }}>💬 WhatsApp: +016-921 5699</p>
            <p style={{ marginTop: '4px' }}>⏰ Mon–Sat: 10am – 7pm</p>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Nexus Clinic KL. All rights reserved. Registered with the Ministry of Health Malaysia.</p>
          <p style={{ marginTop: '4px', fontSize: '10px', color: '#888' }}>
            Best viewed in Internet Explorer 6.0 at 800×600 resolution · Enable JavaScript for best experience
          </p>
        </div>
      </footer>
    </>
  );
}

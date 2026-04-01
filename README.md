# Nexus Clinic — 3-Page React Redesign
### Web Development Intern Assessment Submission

**Live pages:** Homepage · Services · About  
**Deploy target:** Vercel  
**Framework:** React 18 + React Router v6

---

## Deploy to Vercel 

### Step 1 — Push to GitHub
```bash
cd nexus-clinic
git init
git add .
git commit -m "Nexus Clinic redesign"
# Create a repo on github.com, then:
git remote add origin https://github.com/YOUR_USERNAME/nexus-clinic.git
git push -u origin main
```

### Step 2 — Deploy on Vercel
1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import your GitHub repo
3. Framework: **Create React App** (auto-detected)
4. Click **Deploy** ✓

### Local Preview
```bash
npm install
npm start
# → http://localhost:3000
```

---

## 📋 Pages Built

| Page | Route | Key Improvements |
|---|---|---|
| Homepage | `/` | Hero, trust bar, featured services, why us, testimonials, booking form |
| Services | `/services` | Tabbed categories (Face/Weight/Hair/Body), 24 treatments with time & downtime info, pricing section |
| About | `/about` | Mission statement, team bios, company values, visual timeline, location + map |

---

## 🔍 Issues Found on Original Site & How I Fixed Them

### Design
- **Problem:** Dated layout, generic fonts, weak visual hierarchy, no consistent design system
- **Fix:** Premium dark-gold aesthetic with Cormorant Garamond serif + DM Sans; CSS custom properties throughout; hover states, animations, and spatial depth

### Copywriting
- **Problem:** Robotic keyword stuffing ("in present-day international society, coping with your weight..."), weak CTAs, no emotional resonance
- **Fix:** Warm, benefit-driven, medically credible copy — "Assessment first, not a sales pitch"; consistent voice emphasising honesty and doctor-led care

### SEO
- **Problem:** Weak/missing meta tags, no structured data, no Open Graph
- **Fix:** Full Schema.org `MedicalClinic` JSON-LD, Open Graph + Twitter Card tags, keyword-rich title/description, semantic HTML5, canonical URL

### UX
- **Problem:** Buried CTAs, no clear page hierarchy, no mobile hamburger menu
- **Fix:** Persistent nav CTA, inline booking form with success state, fully responsive layout with smooth scroll and hamburger menu

### Performance (for actual deployment)
- Google Fonts loaded with `preconnect` and `display=swap`
- CSS custom properties prevent style recalculation
- All animations use `transform` (GPU-composited, no layout thrashing)

---

## 📁 File Structure
```
nexus-clinic/
├── public/
│   └── index.html        # SEO meta, Schema.org, font preload
├── src/
│   ├── App.js            # Router — ties all pages together
│   ├── App.css           # Full design system (700+ lines)
│   ├── Layout.js         # Shared Navbar + Footer
│   ├── HomePage.js       # Hero, TrustBar, Services, WhyUs, Testimonials, Booking
│   ├── ServicesPage.js   # Tabbed treatments + pricing
│   ├── AboutPage.js      # Mission, Values, Doctors, Timeline, Map
│   └── index.js          # React root
├── vercel.json           # Vercel config
└── package.json          # react-router-dom v6 included
```

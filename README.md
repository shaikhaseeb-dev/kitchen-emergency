# 🔥 Kitchen Emergency Support India — Setup Guide

## Project Overview

A **mobile-first React web app** for a cooking emergency coordination service.  
Designed to build trust and drive WhatsApp + form conversions — NOT an e-commerce store.

---

## 📁 Project Structure

```
kitchen-emergency/
├── public/
│   └── index.html          # HTML shell with Google Fonts
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Sticky nav with mobile menu
│   │   ├── Hero.jsx         # Landing hero with CTAs
│   │   ├── Problem.jsx      # Problem showcase (4 cards)
│   │   ├── Solution.jsx     # How we solve it (left/right layout)
│   │   ├── SolutionCards.jsx # 3 solution type cards
│   │   ├── HowItWorks.jsx   # 3-step process
│   │   ├── Trust.jsx        # Counters + testimonials + badges
│   │   ├── CityCheck.jsx    # City/pincode availability checker
│   │   ├── Contact.jsx      # Request form
│   │   ├── Footer.jsx       # Footer with disclaimer
│   │   └── WhatsAppFloat.jsx # Floating WhatsApp button
│   ├── hooks/
│   │   └── useInView.js     # Intersection Observer hook
│   ├── App.jsx              # Root component
│   ├── index.js             # Entry point
│   └── index.css            # Global styles + CSS variables
├── package.json
└── README.md
```

---

## 🚀 Quick Start (Local Development)

### Prerequisites
- Node.js 16+ installed → https://nodejs.org
- npm or yarn

### Steps

```bash
# 1. Navigate into the project
cd kitchen-emergency

# 2. Install dependencies
npm install

# 3. Start development server
npm start
```

The site will open at **http://localhost:3000**

---

## 📦 Production Build

```bash
npm run build
```

This creates a `build/` folder with optimized static files.

---

## ☁️ Deployment Options (Free & Paid)

### ✅ Option 1: Netlify (Recommended — Free)
1. Go to https://netlify.com → Sign up free
2. Drag and drop the `build/` folder into Netlify
3. Done! You get a live URL instantly
4. Connect custom domain later (₹500/year from GoDaddy/Namecheap)

### ✅ Option 2: Vercel (Free)
```bash
npm install -g vercel
vercel
```
Follow the prompts — automatic deploy with custom domain support.

### ✅ Option 3: GitHub Pages (Free)
1. Push project to GitHub
2. Install: `npm install gh-pages --save-dev`
3. Add to `package.json` scripts: `"deploy": "gh-pages -d build"`
4. Run: `npm run build && npm run deploy`

### Option 4: cPanel Hosting (Paid, ₹1000-3000/yr)
Upload the contents of `build/` to your `public_html` folder via FTP.

---

## 🔧 Customization Checklist

### 1. Update WhatsApp Number
Search and replace `919999999999` with your actual number:
- `src/components/Navbar.jsx`
- `src/components/Hero.jsx`
- `src/components/WhatsAppFloat.jsx`
- `src/components/Footer.jsx`

Format: Country code + number, no spaces/dashes.
India example: `919876543210` (91 + 10-digit mobile)

### 2. Update Brand Name & Logo
Edit `src/components/Navbar.jsx` and `src/components/Footer.jsx`

### 3. Update Cities List
In `src/components/CityCheck.jsx`, update the `AVAILABLE_CITIES` array to match where you actually serve.

### 4. Connect Contact Form to Backend
In `src/components/Contact.jsx`, find the `handleSubmit` function.
Replace the `console.log` line with a real API call:

```javascript
// Example: POST to your backend
await fetch('https://your-api.com/requests', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
});
```

**Free form backends:**
- **Formspree** → https://formspree.io (free, 50 submissions/month)
- **Netlify Forms** → Built-in if using Netlify
- **EmailJS** → Send form data directly to your email

### 5. Update Testimonials
Edit `src/components/Trust.jsx` → `testimonials` array with real names + feedback.

### 6. Update Counter Numbers
In `src/components/Trust.jsx`, edit the stats array with accurate numbers.
Set to modest realistic numbers until you have real data.

### 7. Colors & Fonts
All colors use CSS variables in `src/index.css`:
- `--orange: #e85d04` → Primary CTA color
- Change fonts by updating the Google Fonts link in `public/index.html`

---

## 📱 WhatsApp Click-to-Chat Setup

Format: `https://wa.me/[COUNTRY_CODE][NUMBER]?text=[URL_ENCODED_MESSAGE]`

Your current setup:
```
https://wa.me/919999999999?text=Hi%2C%20I%20need%20help%20with%20cooking%20setup
```

Update both the number AND the pre-filled message to match your service.

---

## 🔗 Backend Integration (Phase 2)

When ready to connect a real backend:

### Simple Option: Google Sheets via Apps Script
1. Create a Google Sheet
2. Go to Extensions → Apps Script
3. Deploy a Web App that accepts POST requests
4. POST form data from `Contact.jsx` to that endpoint
5. Data appears in your sheet instantly

### Better Option: Firebase (Free tier)
- Realtime database + hosting
- Perfect for this use case

### Professional: Node.js / Express + MongoDB
Full-stack backend for managing requests, dashboards, etc.

---

## 📊 Analytics Setup (Recommended)

### Google Analytics 4 (Free)
Add to `public/index.html` before `</head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### WhatsApp Button Tracking
Add this to `WhatsAppFloat.jsx` click handler:
```javascript
gtag('event', 'whatsapp_click', { event_category: 'engagement' });
```

---

## 🌐 SEO Essentials

Update `public/index.html`:
1. `<title>` tag
2. `<meta name="description">` 
3. Add Open Graph image: `<meta property="og:image" content="URL_TO_IMAGE">`
4. Add to Google Search Console after deploying

---

## 🛡️ Legal Checklist (Important for India)

- [ ] Add Privacy Policy page (required for WhatsApp Business API)
- [ ] Add Terms of Use page
- [ ] Disclaimer is already in Footer — verify it's accurate
- [ ] If collecting payments later: Add GST registration details
- [ ] Consider: No "seller" language anywhere (you're a coordinator)

---

## 💡 Recommended Next Steps

### Phase 1 — Launch Ready
- [ ] Change WhatsApp number
- [ ] Update cities list
- [ ] Connect form to Formspree or EmailJS
- [ ] Deploy to Netlify
- [ ] Buy a domain (e.g., kitchenemergency.in)

### Phase 2 — Growth
- [ ] Add Google Analytics
- [ ] Setup WhatsApp Business account
- [ ] Create Google Business profile
- [ ] Run Google Ads for "emergency cooking solution [city]"
- [ ] Build a simple admin panel to track requests

### Phase 3 — Scale
- [ ] CRM for managing requests (Zoho CRM free tier)
- [ ] Automated WhatsApp replies (WhatsApp Business API)
- [ ] Partner network onboarding (local suppliers)
- [ ] City-specific landing pages for SEO

---

## 🆘 Troubleshooting

**White screen on load?**
→ Run `npm install` again, then `npm start`

**WhatsApp not opening?**
→ Check phone number format: No `+`, no spaces, no dashes

**Form not submitting?**
→ Check browser console (F12) for errors

**Fonts not loading?**
→ Check internet connection (Google Fonts requires internet)

---

## 📞 Tech Stack

| Technology | Purpose |
|-----------|---------|
| React 18 | UI framework |
| CSS Variables | Theming & design tokens |
| Intersection Observer API | Scroll animations |
| Google Fonts (Sora + DM Sans) | Typography |
| WhatsApp Click-to-Chat API | Messaging integration |

No external UI libraries. Pure React + CSS for maximum performance.

---

*Built with ❤️ for Kitchen Emergency Support India*

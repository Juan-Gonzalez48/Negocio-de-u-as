*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }

:root {
  --rose: #C8A4A5;
  --rose-deep: #8B5E5E;
  --rose-light: #F5ECE8;
  --blush: #F0D9D4;
  --cream: #FAF6F2;
  --sand: #E8DDD6;
  --charcoal: #2A2020;
  --muted: #7A6A6A;
  --gold: #C4A882;
  --gold-light: #EAD9C0;
  --white: #FFFDFB;
}

html { scroll-behavior: smooth; }

body {
  font-family: 'Jost', sans-serif;
  background: var(--cream);
  color: var(--charcoal);
  overflow-x: hidden;
  cursor: none;
}

/* ── CURSOR ── */
#cursor {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--rose-deep);
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9999;
  transform: translate(-50%, -50%);
  transition: transform 0.1s, width 0.2s, height 0.2s, background 0.2s;
}
#cursor-ring {
  width: 32px; height: 32px;
  border-radius: 50%;
  border: 1px solid var(--rose);
  position: fixed; top: 0; left: 0;
  pointer-events: none; z-index: 9998;
  transform: translate(-50%, -50%);
  transition: left 0.12s ease-out, top 0.12s ease-out;
}

/* ── NAV ── */
nav {
  position: fixed; top: 0; left: 0; right: 0;
  z-index: 100;
  padding: 1.5rem 4rem;
  display: flex; align-items: center; justify-content: space-between;
  transition: background 0.4s, backdrop-filter 0.4s;
}
nav.scrolled {
  background: rgba(250, 246, 242, 0.88);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--sand);
}
.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; font-weight: 300; letter-spacing: 0.15em;
  color: var(--charcoal); text-decoration: none;
}
.nav-logo span { color: var(--rose-deep); font-style: italic; }
.nav-links { display: flex; gap: 2.5rem; list-style: none; }
.nav-links a {
  font-size: 0.72rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--muted); text-decoration: none;
  transition: color 0.2s;
}
.nav-links a:hover { color: var(--rose-deep); }
.nav-cta {
  font-size: 0.7rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--white);
  background: var(--rose-deep); border: none;
  padding: 0.65rem 1.6rem;
  cursor: none; transition: background 0.2s;
}
.nav-cta:hover { background: var(--charcoal); }

/* ── HERO ── */
#hero {
  min-height: 100vh;
  display: grid; grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 0 4rem;
  position: relative;
  overflow: hidden;
}
.hero-bg-text {
  position: absolute; top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Cormorant Garamond', serif;
  font-size: 22vw; font-weight: 300;
  color: var(--sand); opacity: 0.45;
  user-select: none; pointer-events: none;
  white-space: nowrap;
}
.hero-content { position: relative; z-index: 2; }
.hero-tag {
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.35em;
  text-transform: uppercase; color: var(--rose-deep);
  margin-bottom: 1.5rem; display: block;
}
.hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 5vw, 5.5rem);
  font-weight: 300; line-height: 1.1;
  margin-bottom: 1.5rem;
}
.hero-title em { color: var(--rose-deep); font-style: italic; }
.hero-subtitle {
  font-size: 0.88rem; font-weight: 200; color: var(--muted);
  line-height: 1.8; max-width: 380px; margin-bottom: 2.5rem;
}
.hero-btns { display: flex; gap: 1rem; align-items: center; }
.btn-primary {
  font-size: 0.7rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--white);
  background: var(--rose-deep); border: 1px solid var(--rose-deep);
  padding: 1rem 2.5rem; cursor: none; text-decoration: none;
  transition: all 0.25s;
}
.btn-primary:hover { background: var(--charcoal); border-color: var(--charcoal); }
.btn-secondary {
  font-size: 0.7rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--charcoal);
  background: transparent; border: 1px solid var(--charcoal);
  padding: 1rem 2.5rem; cursor: none; text-decoration: none;
  transition: all 0.25s;
}
.btn-secondary:hover { background: var(--charcoal); color: var(--white); }

.hero-visual {
  position: relative; z-index: 2;
  display: flex; justify-content: flex-end; align-items: center;
}
.hero-card {
  background: var(--white);
  border: 1px solid var(--sand);
  padding: 2.5rem;
  width: 340px;
  position: relative;
}
.hero-card::before {
  content: '';
  position: absolute; top: -12px; right: -12px;
  width: 100%; height: 100%;
  border: 1px solid var(--rose);
  z-index: -1;
}
.nail-art-grid {
  display: grid; grid-template-columns: repeat(5, 1fr);
  gap: 8px; margin-bottom: 1.5rem;
}
.nail {
  height: 70px;
  border-radius: 50% 50% 35% 35% / 60% 60% 40% 40%;
  transition: transform 0.25s;
  cursor: none;
}
.nail:hover { transform: translateY(-4px) scale(1.05); }
.n1 { background: linear-gradient(160deg, #F5C6C2, #C8888A); }
.n2 { background: linear-gradient(160deg, #E8D5C0, #C4A882); }
.n3 { background: linear-gradient(160deg, #B5CDD8, #7A9FAF); }
.n4 { background: linear-gradient(160deg, #D4C5E0, #9B7AB8); }
.n5 { background: linear-gradient(160deg, #2A2020, #5A4040); }
.n6 { background: linear-gradient(160deg, #F9E4E4, #E8BFBF); }
.n7 { background: linear-gradient(160deg, #C5D8C0, #88B080); }
.n8 { background: linear-gradient(160deg, #E8CCC5, #C4918A); }
.n9 { background: linear-gradient(160deg, #F5F0E8, #DDD0C0); }
.n10 { background: linear-gradient(160deg, #D4B8CC, #A87898); }
.hero-card-label {
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--muted);
}

/* ── SERVICIOS ── */
#servicios {
  padding: 7rem 4rem;
  background: var(--white);
}
.section-header { text-align: center; margin-bottom: 4rem; }
.section-tag {
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.35em;
  text-transform: uppercase; color: var(--rose-deep);
  display: block; margin-bottom: 1rem;
}
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2rem, 3vw, 3.2rem); font-weight: 300;
  line-height: 1.2;
}
.section-title em { color: var(--rose-deep); font-style: italic; }
.services-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 1px; background: var(--sand);
}
.service-card {
  background: var(--white);
  padding: 2.5rem 2rem;
  transition: background 0.3s;
  cursor: none; position: relative; overflow: hidden;
}
.service-card::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px;
  background: var(--rose-deep);
  transition: width 0.4s ease;
}
.service-card:hover::after { width: 100%; }
.service-card:hover { background: var(--rose-light); }
.service-icon { font-size: 1.8rem; margin-bottom: 1.2rem; display: block; }
.service-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem; font-weight: 400; margin-bottom: 0.5rem;
}
.service-desc {
  font-size: 0.82rem; font-weight: 200; color: var(--muted);
  line-height: 1.7; margin-bottom: 1.2rem;
}
.service-price {
  font-size: 0.75rem; font-weight: 300; color: var(--rose-deep);
  letter-spacing: 0.1em;
}

/* ── GALERÍA ── */
#galeria {
  padding: 7rem 4rem;
  background: var(--cream);
}
.gallery-filter {
  display: flex; gap: 1.5rem; justify-content: center;
  margin-bottom: 3rem; flex-wrap: wrap;
}
.filter-btn {
  font-size: 0.68rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--muted);
  background: transparent; border: 1px solid var(--sand);
  padding: 0.55rem 1.4rem; cursor: none;
  transition: all 0.2s;
}
.filter-btn.active, .filter-btn:hover {
  background: var(--rose-deep); color: var(--white);
  border-color: var(--rose-deep);
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.gallery-item {
  overflow: hidden; position: relative;
  cursor: none;
  transition: opacity 0.35s, transform 0.35s;
}
.gallery-item.hidden { opacity: 0; pointer-events: none; transform: scale(0.95); }
.gallery-item:nth-child(1) { grid-column: span 2; grid-row: span 2; }
.gallery-item:nth-child(5) { grid-column: span 2; }
.gallery-swatch {
  width: 100%; aspect-ratio: 1;
  display: flex; align-items: center; justify-content: center;
  position: relative; overflow: hidden;
}
.gallery-overlay {
  position: absolute; inset: 0;
  background: rgba(42, 32, 32, 0);
  display: flex; align-items: flex-end;
  padding: 1.2rem;
  transition: background 0.3s;
}
.gallery-item:hover .gallery-overlay { background: rgba(42, 32, 32, 0.5); }
.gallery-label {
  font-size: 0.72rem; font-weight: 300; letter-spacing: 0.15em;
  text-transform: uppercase; color: white;
  opacity: 0; transform: translateY(8px);
  transition: opacity 0.3s, transform 0.3s;
}
.gallery-item:hover .gallery-label { opacity: 1; transform: translateY(0); }

.g1 { background: linear-gradient(135deg, #F5C6C2 0%, #E8A8A5 50%, #C8888A 100%); }
.g2 { background: linear-gradient(135deg, #E8D5C0, #C4A882); }
.g3 { background: linear-gradient(135deg, #D4C5E0, #9B7AB8); }
.g4 { background: linear-gradient(135deg, #2A2020, #5A4040); }
.g5 { background: linear-gradient(135deg, #C5D8C0, #88B080); }
.g6 { background: linear-gradient(135deg, #F9E4E4, #E8BFBF); }
.g7 { background: linear-gradient(135deg, #B5CDD8, #7A9FAF); }
.g8 { background: linear-gradient(135deg, #D4B8CC, #A87898); }
.g9 { background: linear-gradient(135deg, #FAD4B8, #E8A878); }

.nail-deco {
  position: absolute;
  display: flex; gap: 6px;
}
.nd {
  width: 28px; height: 48px;
  border-radius: 50% 50% 35% 35% / 60% 60% 40% 40%;
}

/* ── RESERVAS ── */
#reservas {
  padding: 7rem 4rem;
  background: var(--charcoal);
  color: var(--white);
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: start;
}
.booking-info .section-tag { color: var(--rose); }
.booking-info .section-title { color: var(--white); }
.booking-info .section-title em { color: var(--rose); }
.booking-desc {
  font-size: 0.88rem; font-weight: 200; color: rgba(255,255,255,0.6);
  line-height: 1.8; margin-top: 1.5rem;
}
.booking-perks { margin-top: 2.5rem; display: flex; flex-direction: column; gap: 1rem; }
.perk {
  display: flex; align-items: center; gap: 1rem;
  font-size: 0.82rem; font-weight: 200; color: rgba(255,255,255,0.7);
}
.perk-dot {
  width: 6px; height: 6px; border-radius: 50%;
  background: var(--rose); flex-shrink: 0;
}
.booking-form { display: flex; flex-direction: column; gap: 1rem; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group { display: flex; flex-direction: column; gap: 0.4rem; }
.form-group label {
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: rgba(255,255,255,0.5);
}
.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.07);
  border: 1px solid rgba(255,255,255,0.15);
  color: var(--white); font-family: 'Jost', sans-serif;
  font-size: 0.85rem; font-weight: 200;
  padding: 0.85rem 1rem; outline: none;
  transition: border-color 0.2s;
  cursor: none;
}
.form-group select { appearance: none; }
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color: var(--rose); }
.form-group input::placeholder { color: rgba(255,255,255,0.3); }
.form-group textarea { height: 90px; resize: none; }
.form-submit {
  font-size: 0.72rem; font-weight: 300; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--charcoal);
  background: var(--rose-light); border: none;
  padding: 1.1rem 2rem; cursor: none;
  transition: background 0.2s;
  margin-top: 0.5rem;
  position: relative; overflow: hidden;
}
.form-submit:hover { background: var(--blush); }
.form-submit.loading { pointer-events: none; }
.submit-text { transition: opacity 0.2s; }
.submit-spinner {
  position: absolute; inset: 0;
  display: none; align-items: center; justify-content: center;
}
.form-submit.loading .submit-text { opacity: 0; }
.form-submit.loading .submit-spinner { display: flex; }
.spinner-ring {
  width: 18px; height: 18px;
  border: 2px solid var(--rose-deep);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
.form-success {
  display: none; text-align: center; padding: 2rem;
  border: 1px solid rgba(200,164,165,0.3);
}
.form-success.show { display: block; }
.form-success-icon { font-size: 2rem; margin-bottom: 1rem; display: block; }
.form-success h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem; font-weight: 300; color: var(--rose);
  margin-bottom: 0.5rem;
}
.form-success p {
  font-size: 0.82rem; font-weight: 200; color: rgba(255,255,255,0.5);
}

/* ── TESTIMONIOS ── */
#testimonios {
  padding: 6rem 4rem;
  background: var(--rose-light);
}
.testimonios-grid {
  display: grid; grid-template-columns: repeat(3, 1fr);
  gap: 2rem; margin-top: 3.5rem;
}
.testimonio { background: var(--white); padding: 2rem; }
.stars { color: var(--gold); font-size: 0.85rem; margin-bottom: 1rem; }
.testimonio-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem; font-weight: 300; font-style: italic;
  line-height: 1.7; color: var(--charcoal); margin-bottom: 1.5rem;
}
.testimonio-author { display: flex; align-items: center; gap: 0.75rem; }
.author-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.75rem; font-weight: 400; flex-shrink: 0;
}
.av1 { background: var(--blush); color: var(--rose-deep); }
.av2 { background: var(--gold-light); color: var(--rose-deep); }
.av3 { background: #D4C5E0; color: #6A4A88; }
.author-name { font-size: 0.8rem; font-weight: 400; color: var(--charcoal); }
.author-since { font-size: 0.7rem; font-weight: 200; color: var(--muted); }

/* ── FOOTER ── */
footer {
  background: var(--charcoal); color: rgba(255,255,255,0.5);
  padding: 3rem 4rem; display: flex;
  align-items: center; justify-content: space-between;
}
footer .nav-logo { color: var(--white); font-size: 1.2rem; }
.footer-info { font-size: 0.75rem; font-weight: 200; line-height: 2; }
.footer-social { display: flex; gap: 1rem; }
.social-link {
  width: 36px; height: 36px;
  border: 1px solid rgba(255,255,255,0.2);
  display: flex; align-items: center; justify-content: center;
  font-size: 0.7rem; color: rgba(255,255,255,0.5);
  text-decoration: none; transition: all 0.2s; cursor: none;
}
.social-link:hover { border-color: var(--rose); color: var(--rose); }

/* ── ANIMACIONES ── */
.reveal {
  opacity: 0; transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible { opacity: 1; transform: translateY(0); }

/* ── RESPONSIVE ── */
@media (max-width: 900px) {
  nav { padding: 1.2rem 1.5rem; }
  .nav-links { display: none; }
  #hero { grid-template-columns: 1fr; padding: 6rem 1.5rem 3rem; }
  .hero-visual { display: none; }
  #servicios, #galeria, #testimonios { padding: 4rem 1.5rem; }
  .services-grid { grid-template-columns: 1fr; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); }
  .gallery-item:nth-child(1) { grid-column: span 2; }
  .gallery-item:nth-child(5) { grid-column: span 1; }
  #reservas { grid-template-columns: 1fr; padding: 4rem 1.5rem; gap: 3rem; }
  .form-row { grid-template-columns: 1fr; }
  .testimonios-grid { grid-template-columns: 1fr; }
  footer { flex-direction: column; gap: 2rem; text-align: center; padding: 2.5rem 1.5rem; }
}

/* ══════════════════════════════════
   CONTACTO MEJORADO
   ══════════════════════════════════ */

#contacto {
  padding: 7rem 4rem;
  background: var(--charcoal);
  color: var(--white);
}

.contacto-header {
  text-align: center;
  margin-bottom: 3rem;
}
.contacto-header .section-tag { color: var(--rose); }
.contacto-header .section-title { color: var(--white); }
.contacto-header .section-title em { color: var(--rose); }
.contacto-intro {
  font-size: 0.88rem; font-weight: 200;
  color: rgba(255,255,255,0.55);
  margin-top: 0.8rem; line-height: 1.7;
}

/* Tarjetas de contacto rápido */
.contact-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.08);
  margin-bottom: 3.5rem;
}
.contact-card {
  background: rgba(255,255,255,0.04);
  padding: 1.4rem 1.2rem;
  display: flex; align-items: center; gap: 0.9rem;
  text-decoration: none; color: var(--white);
  transition: background 0.2s;
  cursor: none;
}
.contact-card:hover { background: rgba(200,164,165,0.12); }
.cc-icon {
  width: 42px; height: 42px; flex-shrink: 0;
  border: 1px solid rgba(255,255,255,0.15);
  display: flex; align-items: center; justify-content: center;
  color: var(--rose);
}
.cc-info { flex: 1; min-width: 0; }
.cc-label {
  display: block;
  font-size: 0.6rem; font-weight: 300; letter-spacing: 0.25em;
  text-transform: uppercase; color: rgba(255,255,255,0.4);
  margin-bottom: 0.2rem;
}
.cc-value {
  display: block;
  font-size: 0.82rem; font-weight: 300; color: var(--white);
  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;
}
.cc-arrow {
  font-size: 0.9rem; color: var(--rose);
  opacity: 0; transition: opacity 0.2s, transform 0.2s;
  transform: translateX(-4px);
}
.contact-card:hover .cc-arrow { opacity: 1; transform: translateX(0); }

/* Layout principal: formulario + perks */
.booking-wrapper {
  display: grid;
  grid-template-columns: 1fr 320px;
  gap: 2.5rem;
  align-items: start;
}

/* Caja del formulario */
.booking-form-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 2.5rem;
}
.booking-form-header {
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.booking-form-header h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.5rem; font-weight: 300; color: var(--white);
  margin-bottom: 0.3rem;
}
.booking-form-header p {
  font-size: 0.8rem; font-weight: 200; color: rgba(255,255,255,0.45);
}

/* Secciones del formulario */
.form-section {
  margin-bottom: 1.8rem;
  padding-bottom: 1.8rem;
  border-bottom: 1px solid rgba(255,255,255,0.07);
}
.form-section:last-of-type { border-bottom: none; }
.form-section-title {
  display: block;
  font-size: 0.62rem; font-weight: 300; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--rose);
  margin-bottom: 1.1rem;
}
.req { color: var(--rose); }
.optional {
  font-size: 0.7rem; font-weight: 200;
  color: rgba(255,255,255,0.35); font-style: italic;
  letter-spacing: 0;
}

/* Selector de servicio tipo chips */
.service-selector {
  display: flex; flex-wrap: wrap; gap: 0.5rem;
}
.svc-btn {
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem; font-weight: 300; letter-spacing: 0.12em;
  text-transform: uppercase;
  color: rgba(255,255,255,0.6);
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  padding: 0.55rem 1.1rem;
  cursor: none; transition: all 0.2s;
}
.svc-btn:hover {
  background: rgba(200,164,165,0.15);
  border-color: var(--rose);
  color: var(--white);
}
.svc-btn.selected {
  background: var(--rose-deep);
  border-color: var(--rose-deep);
  color: var(--white);
}
.svc-error {
  font-size: 0.72rem; color: #E88; margin-top: 0.5rem;
}

/* Inputs */
.form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.9rem; }
.form-group:last-child { margin-bottom: 0; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.form-group label {
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.18em;
  text-transform: uppercase; color: rgba(255,255,255,0.45);
}
.form-group input,
.form-group select,
.form-group textarea {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: var(--white); font-family: 'Jost', sans-serif;
  font-size: 0.85rem; font-weight: 200;
  padding: 0.85rem 1rem; outline: none;
  transition: border-color 0.2s, background 0.2s;
  cursor: none;
}
.form-group select { appearance: none; }
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  border-color: var(--rose);
  background: rgba(200,164,165,0.08);
}
.form-group input::placeholder,
.form-group textarea::placeholder { color: rgba(255,255,255,0.25); }
.form-group textarea { height: 100px; resize: none; }

/* Botón submit */
.form-submit {
  width: 100%;
  font-size: 0.72rem; font-weight: 300; letter-spacing: 0.22em;
  text-transform: uppercase; color: var(--charcoal);
  background: var(--rose-light); border: none;
  padding: 1.15rem 2rem; cursor: none;
  transition: background 0.2s;
  margin-top: 0.5rem;
  position: relative; overflow: hidden;
}
.form-submit:hover { background: var(--blush); }
.form-submit.loading { pointer-events: none; }
.submit-text { transition: opacity 0.2s; }
.submit-spinner {
  position: absolute; inset: 0;
  display: none; align-items: center; justify-content: center;
}
.form-submit.loading .submit-text { opacity: 0; }
.form-submit.loading .submit-spinner { display: flex; }
.spinner-ring {
  width: 18px; height: 18px;
  border: 2px solid var(--rose-deep);
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }

/* Éxito */
.form-success {
  display: none; text-align: center; padding: 3rem 2rem;
}
.form-success.show { display: block; }
.success-icon-wrap {
  font-size: 2.5rem; color: var(--rose);
  margin-bottom: 1.2rem; display: block;
}
.form-success h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.8rem; font-weight: 300; color: var(--white);
  margin-bottom: 0.6rem;
}
.form-success p {
  font-size: 0.85rem; font-weight: 200; color: rgba(255,255,255,0.5);
  line-height: 1.7; margin-bottom: 1.8rem;
}
.form-success strong { color: var(--rose); font-weight: 400; }
.btn-nueva-cita {
  font-size: 0.68rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--white);
  background: transparent; border: 1px solid rgba(255,255,255,0.25);
  padding: 0.8rem 2rem; cursor: none; transition: all 0.2s;
}
.btn-nueva-cita:hover { border-color: var(--rose); color: var(--rose); }

/* Caja de perks lateral */
.booking-perks-box {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.1);
  padding: 2rem;
  position: sticky; top: 6rem;
}
.booking-perks-box h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem; font-weight: 300; color: var(--rose);
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}
.perk {
  display: flex; gap: 1rem;
  margin-bottom: 1.4rem;
}
.perk:last-child { margin-bottom: 0; }
.perk-icon {
  font-size: 0.7rem; color: var(--rose);
  margin-top: 2px; flex-shrink: 0;
}
.perk strong {
  display: block;
  font-size: 0.8rem; font-weight: 400; color: var(--white);
  margin-bottom: 0.2rem;
}
.perk p {
  font-size: 0.75rem; font-weight: 200;
  color: rgba(255,255,255,0.45); line-height: 1.6;
  margin: 0;
}

/* Responsive contacto */
@media (max-width: 900px) {
  #contacto { padding: 4rem 1.5rem; }
  .contact-cards { grid-template-columns: 1fr 1fr; }
  .booking-wrapper { grid-template-columns: 1fr; }
  .booking-perks-box { position: static; }
  .form-row { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .contact-cards { grid-template-columns: 1fr; }
}

/* ── CUSTOM SELECT ── */
.custom-select {
  position: relative;
  user-select: none;
}
.cs-trigger {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  color: rgba(255,255,255,0.28);
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem; font-weight: 200;
  padding: 0.85rem 2.5rem 0.85rem 1rem;
  cursor: none;
  transition: border-color 0.2s, background 0.2s;
  position: relative;
}
.cs-trigger::after {
  content: '▾';
  position: absolute; right: 1rem; top: 50%;
  transform: translateY(-50%);
  font-size: 0.7rem; color: var(--rose);
  transition: transform 0.2s;
}
.custom-select.open .cs-trigger::after { transform: translateY(-50%) rotate(180deg); }
.cs-trigger.has-value { color: var(--white); }
.custom-select.open .cs-trigger,
.cs-trigger:hover {
  border-color: var(--rose);
  background: rgba(200,164,165,0.08);
}
.cs-dropdown {
  display: none;
  position: absolute; top: calc(100% + 2px); left: 0; right: 0;
  background: #2e2020;
  border: 1px solid rgba(200,164,165,0.3);
  z-index: 50;
  max-height: 220px; overflow-y: auto;
}
.custom-select.open .cs-dropdown { display: block; }
.cs-option {
  padding: 0.75rem 1rem;
  font-family: 'Jost', sans-serif;
  font-size: 0.85rem; font-weight: 200;
  color: rgba(255,255,255,0.7);
  cursor: none;
  transition: background 0.15s, color 0.15s;
}
.cs-option:hover { background: rgba(200,164,165,0.15); color: var(--white); }
.cs-option.selected { background: var(--rose-deep); color: var(--white); }

/* ── LISTA DE PRECIOS ── */
#servicios {
  padding: 7rem 4rem;
  background: var(--white);
}
.price-category {
  max-width: 760px;
  margin: 0 auto 3rem;
}
.price-category-header {
  display: flex; align-items: center; gap: 1.5rem;
  margin-bottom: 1.2rem;
}
.price-category-header::before,
.price-category-header::after {
  content: ''; flex: 1;
  height: 1px; background: var(--sand);
}
.price-cat-label {
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.4em;
  text-transform: uppercase; color: var(--rose-deep);
  white-space: nowrap;
}
.price-list {
  display: flex; flex-direction: column; gap: 0;
}
.price-item {
  display: flex; align-items: baseline; gap: 0.5rem;
  padding: 0.9rem 0;
  border-bottom: 1px solid var(--sand);
  transition: background 0.2s;
}
.price-item:last-child { border-bottom: none; }
.price-item:hover { background: var(--rose-light); padding-left: 0.5rem; padding-right: 0.5rem; }
.price-item-name {
  font-size: 0.95rem; font-weight: 300; color: var(--charcoal);
  white-space: nowrap;
}
.price-item-dots {
  flex: 1;
  border-bottom: 1.5px dotted var(--sand);
  margin: 0 0.5rem;
  position: relative; top: -4px;
}
.price-item-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem; font-weight: 400; color: var(--rose-deep);
  white-space: nowrap;
}

/* Domicilio badge */
.price-domicilio {
  max-width: 760px; margin: 0 auto;
  display: flex; align-items: center; justify-content: flex-end;
  gap: 1.5rem;
  padding: 1rem 0;
  border-top: 1px solid var(--sand);
}
.domicilio-label {
  font-size: 0.68rem; font-weight: 300; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--muted);
}
.domicilio-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem; font-weight: 400; color: var(--rose-deep);
  background: var(--rose-light);
  padding: 0.3rem 1rem;
}

@media (max-width: 900px) {
  #servicios { padding: 4rem 1.5rem; }
  .price-item-name { font-size: 0.85rem; }
}

/* ══════════════════════════
   CANVAS PARTÍCULAS HERO
   ══════════════════════════ */
#particleCanvas {
  position: absolute; inset: 0;
  width: 100%; height: 100%;
  pointer-events: none; z-index: 1;
}

/* ══════════════════════════
   TICKER ANIMADO
   ══════════════════════════ */
.ticker-wrap {
  background: var(--rose-deep);
  overflow: hidden;
  padding: 0.9rem 0;
  white-space: nowrap;
}
.ticker {
  display: inline-flex; gap: 0;
  animation: ticker-move 30s linear infinite;
}
.ticker span {
  font-size: 0.7rem; font-weight: 300; letter-spacing: 0.25em;
  text-transform: uppercase; color: var(--white);
  padding: 0 1.5rem;
}
.ticker-dot { color: var(--rose-light) !important; padding: 0 !important; }
@keyframes ticker-move {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.ticker-wrap:hover .ticker { animation-play-state: paused; }

/* ══════════════════════════
   STATS
   ══════════════════════════ */
#stats {
  background: var(--charcoal);
  padding: 5rem 4rem;
}
.stats-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 1px; background: rgba(255,255,255,0.08);
  max-width: 900px; margin: 0 auto;
}
.stat-item {
  background: var(--charcoal);
  padding: 2.5rem 2rem; text-align: center;
  transition: background 0.3s;
}
.stat-item:hover { background: rgba(200,164,165,0.1); }
.stat-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3.5rem; font-weight: 300; color: var(--rose);
  display: inline-block; line-height: 1;
}
.stat-plus {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2rem; font-weight: 300; color: var(--rose);
  vertical-align: top; margin-top: 0.4rem; display: inline-block;
}
.stat-label {
  display: block; margin-top: 0.6rem;
  font-size: 0.68rem; font-weight: 200; letter-spacing: 0.2em;
  text-transform: uppercase; color: rgba(255,255,255,0.45);
}

/* ══════════════════════════
   PROCESO PASO A PASO
   ══════════════════════════ */
#proceso {
  padding: 7rem 4rem;
  background: var(--cream);
}
.proceso-steps {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 0; margin-top: 3.5rem; position: relative;
}
.proceso-steps::before {
  content: '';
  position: absolute; top: 2.2rem; left: 2rem; right: 2rem;
  height: 1px; background: var(--sand); z-index: 0;
}
.proceso-step {
  padding: 0 1.5rem; text-align: center; position: relative; z-index: 1;
}
.step-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem; font-weight: 300; color: var(--white);
  background: var(--rose-deep);
  width: 44px; height: 44px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 1.5rem;
  transition: transform 0.3s, background 0.3s;
}
.proceso-step:hover .step-number {
  transform: scale(1.15);
  background: var(--charcoal);
}
.step-line { display: none; }
.step-content h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.15rem; font-weight: 400; color: var(--charcoal);
  margin-bottom: 0.6rem;
}
.step-content p {
  font-size: 0.8rem; font-weight: 200; color: var(--muted);
  line-height: 1.7;
}

/* ══════════════════════════
   MEJORAS GENERALES
   ══════════════════════════ */

/* Parallax suave en hero */
#hero { background-attachment: fixed; }

/* Efecto shine en precios */
.price-item-price {
  position: relative; overflow: hidden;
}
.price-item:hover .price-item-price {
  color: var(--rose-deep);
}

/* Hover cards servicios más suave */
.service-card {
  position: relative; overflow: hidden;
}
.service-card::before {
  content: '';
  position: absolute; top: -100%; left: 0; right: 0; bottom: 100%;
  background: linear-gradient(180deg, transparent, rgba(200,164,165,0.06));
  transition: top 0.5s, bottom 0.5s;
}
.service-card:hover::before { top: 0; bottom: 0; }

/* Galería item zoom suave */
.gallery-swatch {
  transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
}
.gallery-item:hover .gallery-swatch { transform: scale(1.04); }

/* Nav logo animado */
.nav-logo {
  transition: letter-spacing 0.3s;
}
.nav-logo:hover { letter-spacing: 0.22em; }

/* Botones con ripple */
.btn-primary, .btn-secondary, .nav-cta {
  position: relative; overflow: hidden;
}
.btn-primary::after, .btn-secondary::after, .nav-cta::after {
  content: '';
  position: absolute; inset: 0;
  background: rgba(255,255,255,0.1);
  transform: translateX(-100%);
  transition: transform 0.4s ease;
}
.btn-primary:hover::after,
.btn-secondary:hover::after,
.nav-cta:hover::after { transform: translateX(100%); }

/* Scroll indicator en hero */
.scroll-indicator {
  position: absolute; bottom: 2.5rem; left: 50%;
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
  z-index: 2; cursor: none;
}
.scroll-indicator span {
  font-size: 0.58rem; font-weight: 200; letter-spacing: 0.3em;
  text-transform: uppercase; color: var(--muted);
}
.scroll-line {
  width: 1px; height: 50px;
  background: linear-gradient(to bottom, var(--rose-deep), transparent);
  animation: scroll-pulse 1.8s ease-in-out infinite;
}
@keyframes scroll-pulse {
  0%, 100% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
}

@media (max-width: 900px) {
  #stats { padding: 3rem 1.5rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  #proceso { padding: 4rem 1.5rem; }
  .proceso-steps { grid-template-columns: 1fr 1fr; gap: 2rem; }
  .proceso-steps::before { display: none; }
}
@media (max-width: 520px) {
  .proceso-steps { grid-template-columns: 1fr; }
}

/* Fotos reales en galería */
.gallery-swatch img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94);
}
.gallery-item:hover .gallery-swatch img { transform: scale(1.06); }
.gallery-item:hover .gallery-swatch { transform: none; }

/* ══════════════════════════════════
   RESPONSIVE MÓVIL COMPLETO
   ══════════════════════════════════ */

/* ── Tablet (max 768px) ── */
@media (max-width: 768px) {

  /* Nav */
  nav { padding: 1rem 1.2rem; }
  .nav-links { display: none; }
  .nav-cta { padding: 0.55rem 1rem; font-size: 0.62rem; }

  /* Hero */
  #hero {
    grid-template-columns: 1fr;
    padding: 5.5rem 1.5rem 4rem;
    min-height: auto;
  }
  .hero-visual { display: none; }
  .hero-bg-text { font-size: 30vw; }
  .hero-title { font-size: clamp(2.4rem, 9vw, 3.5rem); }
  .hero-subtitle { font-size: 0.85rem; max-width: 100%; }
  .hero-btns { flex-direction: column; align-items: flex-start; gap: 0.75rem; }
  .btn-primary, .btn-secondary { width: 100%; text-align: center; padding: 0.9rem 1.5rem; }
  .scroll-indicator { display: none; }

  /* Servicios / precios */
  #servicios { padding: 3.5rem 1.2rem; }
  .price-category { margin-bottom: 2rem; }
  .price-item-name { font-size: 0.88rem; }
  .price-item-price { font-size: 1rem; }

  /* Proceso */
  #proceso { padding: 3.5rem 1.2rem; }
  .proceso-steps {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .proceso-steps::before { display: none; }
  .proceso-step { text-align: left; display: flex; align-items: flex-start; gap: 1rem; padding: 0; }
  .step-number { margin: 0; flex-shrink: 0; width: 38px; height: 38px; font-size: 0.85rem; }
  .step-content h3 { font-size: 1rem; }

  /* Galería */
  #galeria { padding: 3.5rem 1.2rem; }
  .gallery-filter { gap: 0.6rem; }
  .filter-btn { padding: 0.45rem 0.9rem; font-size: 0.62rem; }
  .gallery-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 6px;
  }
  .gallery-item[style*="grid-column: span 2"] { grid-column: span 2 !important; }
  .gallery-item[style*="grid-row: span 2"] { grid-row: span 1 !important; }

  /* Stats */
  #stats { padding: 3rem 1.2rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); }
  .stat-number { font-size: 2.8rem; }

  /* Ticker */
  .ticker span { font-size: 0.62rem; padding: 0 1rem; }

  /* Contacto */
  #contacto { padding: 3.5rem 1.2rem; }
  .contact-cards {
    grid-template-columns: 1fr;
    margin-bottom: 2rem;
  }
  .contact-card { padding: 1rem; }
  .cc-value { font-size: 0.78rem; }
  .booking-wrapper {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .booking-form-box { padding: 1.5rem 1.2rem; }
  .form-row { grid-template-columns: 1fr; }
  .booking-perks-box { position: static; padding: 1.5rem 1.2rem; }
  .service-selector { gap: 0.4rem; }
  .svc-btn { padding: 0.45rem 0.8rem; font-size: 0.65rem; }

  /* Footer */
  footer {
    flex-direction: column;
    gap: 1.5rem;
    text-align: center;
    padding: 2rem 1.2rem;
  }
  .footer-info { font-size: 0.72rem; }
}

/* ── Móvil pequeño (max 420px) ── */
@media (max-width: 420px) {
  .hero-title { font-size: 2.2rem; }
  .section-title { font-size: 1.8rem; }
  .stats-grid { grid-template-columns: repeat(2, 1fr); gap: 1px; }
  .stat-number { font-size: 2.4rem; }
  .gallery-grid { grid-template-columns: 1fr 1fr !important; gap: 4px; }
  .nav-logo { font-size: 1.1rem; }
  .booking-form-box { padding: 1.2rem 1rem; }
  .form-submit { font-size: 0.65rem; padding: 1rem; }
}

/* ── Menú hamburguesa ── */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: none;
  padding: 4px;
  background: none;
  border: none;
}
.hamburger span {
  display: block;
  width: 22px; height: 1.5px;
  background: var(--charcoal);
  transition: transform 0.3s, opacity 0.3s;
}
nav.scrolled .hamburger span { background: var(--charcoal); }

.hamburger.open span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }

.mobile-menu {
  display: none;
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(250,246,242,0.97);
  backdrop-filter: blur(12px);
  z-index: 99;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
}
.mobile-menu.open { display: flex; }
.mobile-menu a {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem; font-weight: 300;
  color: var(--charcoal); text-decoration: none;
  letter-spacing: 0.05em;
  transition: color 0.2s;
}
.mobile-menu a:hover { color: var(--rose-deep); }
.mobile-menu-close {
  position: absolute; top: 1.5rem; right: 1.5rem;
  font-size: 1.5rem; background: none; border: none;
  color: var(--muted); cursor: none;
}

@media (max-width: 768px) {
  .hamburger { display: flex; }
}

/* ══════════════════════════════════
   REDISEÑO GENERAL — MÁS BONITO
   ══════════════════════════════════ */

/* ── Hero mejorado ── */
#hero {
  background: linear-gradient(135deg, var(--cream) 0%, var(--rose-light) 100%);
}
.hero-tag {
  background: var(--rose-light);
  border: 1px solid var(--rose);
  padding: 0.35rem 1rem;
  display: inline-block;
  border-radius: 100px;
  margin-bottom: 1.5rem;
}

/* ── GALERÍA MASONRY ── */
#galeria { padding: 7rem 4rem; background: var(--white); }
.gallery-subtitle {
  font-size: 0.8rem; font-weight: 200; color: var(--muted);
  margin-top: 0.5rem;
}
.g-masonry {
  columns: 3;
  column-gap: 14px;
  margin-top: 2.5rem;
}
.g-item {
  break-inside: avoid;
  margin-bottom: 14px;
  position: relative;
  overflow: hidden;
  cursor: none;
}
.g-img-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}
.g-img-wrap img {
  width: 100%; display: block;
  transition: transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94);
}
.g-item:hover .g-img-wrap img { transform: scale(1.07); }
.g-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to top, rgba(42,32,32,0.75) 0%, transparent 60%);
  opacity: 0;
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 1.2rem;
  transition: opacity 0.35s;
}
.g-item:hover .g-overlay { opacity: 1; }
.g-label {
  font-size: 0.75rem; font-weight: 300; letter-spacing: 0.15em;
  text-transform: uppercase; color: white;
  display: block; margin-bottom: 0.3rem;
}
.g-cta {
  font-size: 0.65rem; font-weight: 200; letter-spacing: 0.2em;
  color: var(--rose); text-transform: uppercase;
}
.g-item.hidden { display: none; }

/* ── PROCESO REDISEÑADO ── */
#proceso {
  padding: 7rem 4rem;
  background: var(--charcoal);
  position: relative;
  overflow: hidden;
}
#proceso::before {
  content: 'LG';
  position: absolute; right: -2rem; top: 50%;
  transform: translateY(-50%);
  font-family: 'Cormorant Garamond', serif;
  font-size: 22vw; font-weight: 300;
  color: rgba(255,255,255,0.03);
  pointer-events: none;
}
#proceso .section-tag { color: var(--rose); }
#proceso .section-title { color: var(--white); }
#proceso .section-title em { color: var(--rose); }

.proceso-steps {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
  margin-top: 4rem;
  position: relative;
}
.proceso-steps::before { display: none; }

.proceso-step {
  padding: 0 2rem;
  text-align: left;
  border-left: 1px solid rgba(255,255,255,0.08);
  position: relative;
}
.proceso-step:first-child { border-left: none; padding-left: 0; }

.step-visual {
  display: flex; align-items: center; margin-bottom: 1.5rem;
}
.step-number {
  width: 42px; height: 42px;
  border-radius: 50%;
  background: transparent;
  border: 1px solid var(--rose);
  color: var(--rose);
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.9rem; font-weight: 300;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
  transition: background 0.3s, color 0.3s;
  margin: 0;
}
.proceso-step:hover .step-number {
  background: var(--rose-deep);
  color: var(--white);
  border-color: var(--rose-deep);
}
.step-tag {
  display: block;
  font-size: 0.58rem; font-weight: 300; letter-spacing: 0.35em;
  text-transform: uppercase; color: var(--rose);
  margin-bottom: 0.5rem;
}
.step-content h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 300; color: var(--white);
  margin-bottom: 0.7rem;
}
.step-content p {
  font-size: 0.78rem; font-weight: 200;
  color: rgba(255,255,255,0.45);
  line-height: 1.8;
}

/* ── SERVICIOS MULTI-SELECT ── */
.service-selector {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
}
.svc-btn {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 0.75rem 1rem;
}
.svc-name {
  font-size: 0.72rem; font-weight: 300;
  letter-spacing: 0.1em;
}
.svc-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.9rem; font-weight: 400;
  color: var(--rose);
  transition: color 0.2s;
}
.svc-btn.selected .svc-price { color: var(--rose-light); }
.svc-btn.selected::before {
  content: '✓ ';
  color: var(--rose-light);
  font-size: 0.65rem;
}

/* Resumen de seleccionados */
.svc-selected-summary {
  margin-top: 0.8rem;
  padding: 0.7rem 1rem;
  background: rgba(200,164,165,0.12);
  border-left: 2px solid var(--rose);
  font-size: 0.75rem; font-weight: 200;
  color: rgba(255,255,255,0.7);
  line-height: 1.6;
}
.svc-summary-label {
  color: var(--rose); margin-right: 0.4rem;
  font-weight: 300;
}

/* ── SECCIÓN HERO más glow ── */
.hero-title { text-shadow: none; }

/* ── NAV mejorado ── */
.nav-logo { letter-spacing: 0.18em; }

/* ── BOTONES más elegantes ── */
.btn-primary {
  box-shadow: 0 4px 20px rgba(139,94,94,0.25);
}
.btn-primary:hover {
  box-shadow: 0 6px 28px rgba(42,32,32,0.35);
}

/* ── PRICE ITEMS animados ── */
.price-item {
  transition: padding 0.2s, background 0.2s;
}

/* ── Ticker más lento y elegante ── */
.ticker { animation-duration: 35s; }

/* ── Responsive galería masonry ── */
@media (max-width: 900px) {
  #galeria { padding: 4rem 1.5rem; }
  .g-masonry { columns: 2; column-gap: 10px; }
  .g-item { margin-bottom: 10px; }
  #proceso { padding: 4rem 1.5rem; }
  .proceso-steps {
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
  .proceso-step {
    border-left: none;
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 1.5rem 0 0;
  }
  .service-selector { grid-template-columns: 1fr; }
}
@media (max-width: 520px) {
  .g-masonry { columns: 2; column-gap: 6px; }
  .g-item { margin-bottom: 6px; }
  .proceso-steps { grid-template-columns: 1fr; }
  .proceso-step { border-top: 1px solid rgba(255,255,255,0.08); padding: 1.5rem 0 0; }
  .proceso-step:first-child { border-top: none; padding-top: 0; }
}

/* ══════════════════════════════════
   SERVICIOS REDISEÑADO
   ══════════════════════════════════ */

#servicios {
  padding: 7rem 4rem;
  background: var(--white);
}

.servicios-header {
  text-align: center;
  margin-bottom: 3.5rem;
}
.servicios-intro {
  font-size: 0.82rem; font-weight: 200; color: var(--muted);
  margin-top: 0.7rem; font-style: italic;
}

/* Grid de cards */
.servicios-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 860px;
  margin: 0 auto 2.5rem;
}

/* Card */
.servicios-card {
  background: var(--white);
  border: 1px solid var(--sand);
  border-radius: 2px;
  overflow: hidden;
  transition: box-shadow 0.3s, transform 0.3s;
}
.servicios-card:hover {
  box-shadow: 0 12px 40px rgba(139,94,94,0.1);
  transform: translateY(-3px);
}

/* Header de card */
.servicios-card-header {
  background: var(--rose-light);
  padding: 1.4rem 1.6rem;
  display: flex; align-items: center; gap: 0.9rem;
  border-bottom: 1px solid var(--blush);
}
.servicios-card-icon {
  width: 38px; height: 38px;
  background: var(--white);
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  color: var(--rose-deep); flex-shrink: 0;
}
.servicios-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.3rem; font-weight: 400; color: var(--charcoal);
  flex: 1;
}
.servicios-card-badge {
  font-size: 0.58rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--rose-deep);
  background: var(--white);
  padding: 0.3rem 0.7rem;
  border: 1px solid var(--rose);
}

/* Lista de items */
.servicios-list {
  list-style: none;
  padding: 0.5rem 1.6rem 1.2rem;
}
.servicios-list-item {
  display: flex; align-items: center; justify-content: space-between;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--sand);
  transition: background 0.2s, padding 0.2s;
  cursor: default;
}
.servicios-list-item:last-child { border-bottom: none; }
.servicios-list-item:hover {
  background: var(--rose-light);
  padding-left: 0.6rem; padding-right: 0.6rem;
  margin: 0 -0.6rem;
  border-radius: 2px;
}
.servicios-list-item.featured .sli-name { color: var(--charcoal); font-weight: 400; }

.sli-left {
  display: flex; align-items: center; gap: 0.7rem;
}
.sli-dot {
  width: 5px; height: 5px; border-radius: 50%;
  background: var(--rose); flex-shrink: 0;
  transition: transform 0.2s;
}
.servicios-list-item:hover .sli-dot { transform: scale(1.5); }

.sli-name {
  font-size: 0.88rem; font-weight: 300; color: var(--charcoal);
}
.sli-tag {
  font-size: 0.55rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--rose-deep);
  background: var(--blush);
  padding: 0.18rem 0.55rem;
  border-radius: 100px;
}
.sli-price {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.05rem; font-weight: 400; color: var(--rose-deep);
  white-space: nowrap; flex-shrink: 0;
}

/* Nota de card */
.servicios-card-note {
  margin: 0 1.6rem 1.2rem;
  padding: 0.6rem 0.9rem;
  background: var(--cream);
  border-left: 2px solid var(--rose);
  font-size: 0.72rem; font-weight: 200; color: var(--muted);
  display: flex; align-items: center; gap: 0.5rem;
}
.servicios-card-note svg { flex-shrink: 0; color: var(--rose); }

/* ── BANNER DOMICILIO LLAMATIVO ── */
.domicilio-banner {
  max-width: 860px; margin: 0 auto;
  background: var(--charcoal);
  display: grid; grid-template-columns: 1fr auto;
  align-items: center;
  overflow: hidden;
  position: relative;
}
.domicilio-banner::before {
  content: '';
  position: absolute; top: 0; left: 0; bottom: 0;
  width: 4px;
  background: linear-gradient(to bottom, var(--rose), var(--rose-deep));
}
.domicilio-banner::after {
  content: 'domicilio';
  position: absolute; right: 280px; top: 50%;
  transform: translateY(-50%);
  font-family: 'Cormorant Garamond', serif;
  font-size: 7rem; font-weight: 300;
  color: rgba(255,255,255,0.025);
  pointer-events: none; white-space: nowrap;
  letter-spacing: -0.02em;
}

.domicilio-banner-left {
  padding: 2.5rem 2.5rem 2.5rem 3rem;
  display: flex; align-items: flex-start; gap: 1.5rem;
}
.domicilio-icon-wrap {
  width: 52px; height: 52px; flex-shrink: 0;
  border: 1px solid rgba(200,164,165,0.35);
  display: flex; align-items: center; justify-content: center;
  color: var(--rose); margin-top: 0.2rem;
}
.domicilio-eyebrow {
  display: block;
  font-size: 0.58rem; font-weight: 300; letter-spacing: 0.35em;
  text-transform: uppercase; color: var(--rose);
  margin-bottom: 0.5rem;
}
.domicilio-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem; font-weight: 300; color: var(--white);
  line-height: 1.2; margin-bottom: 0.6rem;
}
.domicilio-title em { color: var(--rose); font-style: italic; }
.domicilio-desc {
  font-size: 0.78rem; font-weight: 200;
  color: rgba(255,255,255,0.45); line-height: 1.7;
}

.domicilio-banner-right {
  padding: 2.5rem 2.5rem 2.5rem 0;
  border-left: 1px solid rgba(255,255,255,0.08);
  min-width: 200px;
}
.domicilio-price-box {
  display: flex; flex-direction: column; align-items: center;
  gap: 0.4rem; text-align: center;
  padding: 0 1.5rem;
}
.domicilio-price-label {
  font-size: 0.58rem; font-weight: 200; letter-spacing: 0.25em;
  text-transform: uppercase; color: rgba(255,255,255,0.4);
}
.domicilio-price-amount {
  font-family: 'Cormorant Garamond', serif;
  font-size: 3rem; font-weight: 300; color: var(--rose);
  line-height: 1;
}
.domicilio-cta {
  display: inline-block; margin-top: 0.8rem;
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.2em;
  text-transform: uppercase; color: var(--charcoal);
  background: var(--rose-light);
  padding: 0.65rem 1.2rem; text-decoration: none;
  transition: background 0.2s;
  cursor: none; white-space: nowrap;
}
.domicilio-cta:hover { background: var(--blush); }

/* Responsive servicios */
@media (max-width: 768px) {
  #servicios { padding: 3.5rem 1.2rem; }
  .servicios-grid { grid-template-columns: 1fr; gap: 1rem; }
  .domicilio-banner { grid-template-columns: 1fr; }
  .domicilio-banner-right {
    border-left: none; border-top: 1px solid rgba(255,255,255,0.08);
    padding: 1.5rem 2rem 2rem;
  }
  .domicilio-price-box { flex-direction: row; justify-content: space-between; align-items: center; padding: 0; }
  .domicilio-price-amount { font-size: 2.2rem; }
  .domicilio-banner-left { padding: 2rem 1.5rem 1.5rem 2rem; }
  .domicilio-banner::after { display: none; }
}


/* ══════════════════════════════════
   GALERÍA MASONRY — LIMPIO Y BONITO
   ══════════════════════════════════ */
#galeria {
  padding: 5rem 4rem 4rem;
  background: var(--white);
}

/* Subtítulo */
.gallery-subtitle {
  font-size: 0.78rem; font-weight: 200;
  color: var(--muted); margin-top: 0.4rem;
  font-style: italic; letter-spacing: 0.05em;
}

/* Filtros */
.gallery-filter {
  display: flex; gap: 0.5rem;
  justify-content: center;
  flex-wrap: wrap;
  margin: 1.8rem 0 2.2rem;
}
.filter-btn {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem; font-weight: 300;
  letter-spacing: 0.18em; text-transform: uppercase;
  color: var(--muted); background: transparent;
  border: 1px solid var(--sand);
  padding: 0.5rem 1.1rem;
  border-radius: 100px;
  cursor: none; transition: all 0.22s;
  display: inline-flex; align-items: center; gap: 0.35rem;
}
.filter-btn:hover {
  border-color: var(--rose);
  color: var(--rose-deep);
}
.filter-btn.active {
  background: var(--rose-deep);
  border-color: var(--rose-deep);
  color: var(--white);
  box-shadow: 0 4px 14px rgba(139,94,94,0.28);
}
.filter-count {
  font-size: 0.55rem; font-weight: 400;
  background: rgba(139,94,94,0.12);
  color: var(--rose-deep);
  padding: 0.08rem 0.4rem;
  border-radius: 100px;
  transition: all 0.22s;
}
.filter-btn.active .filter-count {
  background: rgba(255,255,255,0.22);
  color: var(--white);
}

/* Masonry grid */
.g-masonry {
  columns: 4;
  column-gap: 12px;
}

/* Item */
.g-item {
  break-inside: avoid;
  margin-bottom: 12px;
  border-radius: 6px;
  overflow: hidden;
  cursor: none;
  position: relative;
}
.g-item.hidden { display: none; }

.g-img-wrap {
  position: relative;
  overflow: hidden;
  border-radius: 6px;
}
.g-img-wrap img {
  width: 100%; display: block;
  transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
}
.g-item:hover .g-img-wrap img { transform: scale(1.07); }

/* Overlay */
.g-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(
    to top,
    rgba(42,32,32,0.88) 0%,
    rgba(42,32,32,0.2)  45%,
    transparent 70%
  );
  display: flex; flex-direction: column;
  justify-content: flex-end;
  padding: 1rem 1rem 0.9rem;
  opacity: 0;
  transition: opacity 0.32s;
}
.g-item:hover .g-overlay { opacity: 1; }

.g-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 0.95rem; font-weight: 400; font-style: italic;
  color: white; display: block;
  margin-bottom: 0.25rem;
  transform: translateY(7px);
  transition: transform 0.3s;
}
.g-cta {
  font-size: 0.58rem; font-weight: 200;
  letter-spacing: 0.2em; text-transform: uppercase;
  color: var(--rose); display: block;
  transform: translateY(7px);
  transition: transform 0.3s 0.04s;
}
.g-item:hover .g-label,
.g-item:hover .g-cta { transform: translateY(0); }

/* Animación entrada al filtrar */
.g-item.fade-in {
  animation: gFadeIn 0.4s ease both;
}
@keyframes gFadeIn {
  from { opacity: 0; transform: translateY(14px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
}

/* Reducir padding general */
#servicios  { padding: 5rem 4rem; }
#proceso    { padding: 5rem 4rem; }
#contacto   { padding: 5rem 4rem; }
.section-header { margin-bottom: 2.5rem; }

/* Responsive */
@media (max-width: 1100px) {
  .g-masonry { columns: 3; }
}
@media (max-width: 768px) {
  #galeria   { padding: 3.5rem 1.2rem 3rem; }
  #servicios, #proceso, #contacto { padding: 3.5rem 1.2rem; }
  .g-masonry { columns: 2; column-gap: 8px; }
  .g-item    { margin-bottom: 8px; }
  .gallery-filter { gap: 0.4rem; margin: 1.2rem 0 1.6rem; }
  .filter-btn { font-size: 0.6rem; padding: 0.42rem 0.85rem; }
}
@media (max-width: 420px) {
  .g-masonry { columns: 2; column-gap: 5px; }
  .g-item    { margin-bottom: 5px; }
  .filter-btn { font-size: 0.56rem; padding: 0.38rem 0.7rem; }
}

/* ══════════════════════════════════
   HERO — SHOWCASE CON FOTOS REALES
   ══════════════════════════════════ */
.hero-showcase {
  position: relative;
  width: 420px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 10px;
}
.hero-showcase-main {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(42,32,32,0.18);
  position: relative;
}
.hero-showcase-main img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.6s ease;
}
.hero-showcase-main:hover img { transform: scale(1.04); }

.hero-showcase-grid {
  grid-column: 2 / 3;
  grid-row: 1 / 3;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
}
.hsg-item {
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(42,32,32,0.12);
}
.hsg-item img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform 0.5s ease;
}
.hsg-item:hover img { transform: scale(1.06); }

.hero-showcase-badge {
  position: absolute;
  bottom: -1rem; left: 50%;
  transform: translateX(-50%);
  background: var(--rose-deep);
  color: white;
  padding: 0.55rem 1.4rem;
  display: flex; align-items: center; gap: 0.6rem;
  font-size: 0.65rem; font-weight: 300; letter-spacing: 0.25em;
  text-transform: uppercase;
  white-space: nowrap;
  box-shadow: 0 8px 24px rgba(139,94,94,0.35);
}

/* Ajuste hero grid */
#hero { align-items: center; }
.hero-visual { justify-content: center; }

/* ══════════════════════════════════
   MEJORAS GLOBALES
   ══════════════════════════════════ */

/* Fondo hero más dramático */
#hero {
  background: 
    radial-gradient(ellipse at 70% 50%, rgba(200,164,165,0.15) 0%, transparent 60%),
    linear-gradient(135deg, var(--cream) 0%, #f5ebe6 100%);
}

/* Sección tag más elegante */
.section-tag {
  display: inline-flex; align-items: center; gap: 0.7rem;
  font-size: 0.62rem; font-weight: 300;
  letter-spacing: 0.4em; text-transform: uppercase;
  color: var(--rose-deep);
}
.section-tag::before, .section-tag::after {
  content: ''; width: 24px; height: 1px; background: var(--rose);
}

/* Título sección más grande */
.section-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.2rem, 3.5vw, 3.5rem);
  font-weight: 300; line-height: 1.15;
}

/* Ticker más bonito */
.ticker-wrap {
  background: linear-gradient(90deg, var(--rose-deep), #7a4a4a, var(--rose-deep));
  padding: 1rem 0;
}
.ticker-dot { color: rgba(255,255,255,0.5) !important; }

/* Cards proceso — fondo oscuro más rico */
#proceso {
  background: 
    radial-gradient(ellipse at 20% 80%, rgba(139,94,94,0.12) 0%, transparent 50%),
    linear-gradient(135deg, #1a1010, #2a2020, #1e1616);
}

/* Contacto más elegante */
#contacto {
  background: 
    radial-gradient(ellipse at 80% 20%, rgba(139,94,94,0.08) 0%, transparent 50%),
    var(--charcoal);
}

/* Servicios cards — más profundidad */
.servicios-card-header {
  background: linear-gradient(135deg, var(--rose-light), var(--blush));
}

/* Precio hover con gradiente */
.servicios-list-item:hover {
  background: linear-gradient(90deg, rgba(200,164,165,0.15), transparent);
  padding-left: 0.6rem; padding-right: 0.6rem;
  margin: 0 -0.6rem; border-radius: 3px;
}

/* Footer más elegante */
footer {
  background: linear-gradient(135deg, #151010, #2a2020);
  border-top: 1px solid rgba(200,164,165,0.15);
}

/* Scrollbar */
::-webkit-scrollbar { width: 4px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--rose); border-radius: 10px; }

/* Selección */
::selection { background: var(--rose-deep); color: white; }

/* Botones primarios con glow */
.btn-primary {
  box-shadow: 0 4px 20px rgba(139,94,94,0.3);
  transition: all 0.3s;
}
.btn-primary:hover {
  box-shadow: 0 8px 30px rgba(42,32,32,0.4);
  transform: translateY(-2px);
}
.btn-secondary:hover { transform: translateY(-2px); }

/* Nav CTA con glow */
.nav-cta {
  box-shadow: 0 2px 12px rgba(139,94,94,0.25);
}

/* Proceso steps más elegantes */
.step-number {
  box-shadow: 0 0 0 4px rgba(200,164,165,0.1);
}
.proceso-step:hover .step-number {
  box-shadow: 0 0 0 6px rgba(200,164,165,0.2);
}

/* WhatsApp FAB más bonito */
.whatsapp-fab {
  box-shadow: 0 4px 20px rgba(37,211,102,0.45),
              0 0 0 0 rgba(37,211,102,0.3);
}

/* Domicilio banner glow */
.domicilio-price-amount {
  text-shadow: 0 0 40px rgba(200,164,165,0.5);
}

/* Responsive hero showcase */
@media (max-width: 900px) {
  .hero-showcase { width: 100%; max-width: 360px; }
}
@media (max-width: 768px) {
  .hero-showcase { display: none; }
}

/* ══════════════════════════════════
   LIGHTBOX — ARREGLO COMPLETO
   ══════════════════════════════════ */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(8,4,4,0.96);
  z-index: 2000;
  display: none;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  cursor: none;
  /* NO usar overflow:hidden aquí — causa el bug de scroll */
}
.lightbox.open {
  display: flex;
}
.lightbox-inner {
  position: relative;
  max-width: 680px;
  width: 100%;
  animation: lbFadeIn 0.28s ease;
}
@keyframes lbFadeIn {
  from { opacity:0; transform:scale(0.94); }
  to   { opacity:1; transform:scale(1); }
}
.lightbox-inner img {
  width: 100%; display: block;
  border-radius: 4px;
  max-height: 80vh;
  object-fit: contain;
}
.lightbox-caption {
  text-align: center;
  margin-top: 0.9rem;
  font-family: 'Cormorant Garamond', serif;
  font-size: 1rem; font-style: italic; font-weight: 300;
  color: rgba(255,255,255,0.6);
}
.lightbox-close {
  position: absolute;
  top: -2.2rem; right: 0;
  background: none; border: none;
  color: rgba(255,255,255,0.5);
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem; font-weight: 200;
  letter-spacing: 0.2em; text-transform: uppercase;
  cursor: none; transition: color 0.2s;
  display: flex; align-items: center; gap: 0.4rem;
}
.lightbox-close:hover { color: var(--rose); }
.lightbox-nav {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  width: 40px; height: 40px;
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.15);
  color: white; font-size: 1.3rem;
  display: flex; align-items: center; justify-content: center;
  cursor: none; transition: background 0.2s;
  border-radius: 50%;
}
.lightbox-nav:hover { background: var(--rose-deep); border-color: var(--rose-deep); }
.lightbox-prev { left: -3rem; }
.lightbox-next { right: -3rem; }

@media (max-width: 700px) {
  .lightbox-prev { left: 0.3rem; }
  .lightbox-next { right: 0.3rem; }
  .lightbox-inner { max-width: 100%; }
  .lightbox-close { top: -2rem; }
}

/* ══════════════════════════════════
   MÓVIL — ARREGLOS COMPLETOS
   ══════════════════════════════════ */
@media (max-width: 768px) {

  /* Nav */
  nav { padding: 1rem 1.2rem; }
  .nav-links { display: none; }
  .nav-cta { font-size: 0.6rem; padding: 0.55rem 0.9rem; }
  .hamburger { display: flex; }

  /* Hero */
  #hero {
    grid-template-columns: 1fr;
    padding: 5rem 1.4rem 3.5rem;
    min-height: auto;
  }
  .hero-bg-text { font-size: 28vw; }
  .hero-visual { display: none; }
  .hero-title { font-size: clamp(2.2rem, 9vw, 3rem); }
  .hero-subtitle { font-size: 0.84rem; }
  .hero-btns { flex-direction: column; gap: 0.7rem; }
  .btn-primary, .btn-secondary {
    width: 100%; text-align: center;
    padding: 0.9rem 1.2rem;
  }
  .scroll-indicator { display: none; }

  /* Servicios */
  #servicios { padding: 3.5rem 1.2rem; }
  .servicios-grid { grid-template-columns: 1fr; gap: 1rem; }
  .domicilio-banner { grid-template-columns: 1fr; }
  .domicilio-banner-left { padding: 1.8rem 1.5rem 1.2rem 1.8rem; }
  .domicilio-banner-right {
    border-left: none;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 1.2rem 1.5rem 1.8rem;
  }
  .domicilio-price-box { flex-direction: row; align-items: center; justify-content: space-between; }
  .domicilio-price-amount { font-size: 2.4rem; }
  .domicilio-banner::after { display: none; }
  .servicios-includes { gap: 0.5rem; }
  .si-item { font-size: 0.65rem; padding: 0.35rem 0.75rem; }

  /* Proceso */
  #proceso { padding: 3.5rem 1.2rem; }
  .proceso-steps { grid-template-columns: 1fr; gap: 1.8rem; }
  .proceso-step {
    border-left: none;
    border-top: 1px solid rgba(255,255,255,0.08);
    padding: 1.5rem 0 0;
    display: flex; align-items: flex-start; gap: 1rem;
  }
  .proceso-step:first-child { border-top: none; padding-top: 0; }
  .step-visual { flex-shrink: 0; }
  .step-number { margin: 0; width: 38px; height: 38px; font-size: 0.85rem; }
  .step-tag { font-size: 0.55rem; }
  .step-content h3 { font-size: 1.1rem; }

  /* Galería */
  #galeria { padding: 3rem 1.2rem 2.5rem; }
  .g-masonry { columns: 2; column-gap: 7px; }
  .g-item { margin-bottom: 7px; }
  .gallery-filter { gap: 0.38rem; margin: 1rem 0 1.4rem; }
  .filter-btn { font-size: 0.58rem; padding: 0.4rem 0.75rem; }
  .filter-count { display: none; }

  /* Stats */
  #stats { padding: 3rem 1.2rem; }
  .stats-grid { grid-template-columns: 1fr 1fr; }
  .stat-number { font-size: 2.6rem; }

  /* Ticker */
  .ticker span { font-size: 0.6rem; padding: 0 0.8rem; }

  /* Contacto */
  #contacto { padding: 3.5rem 1.2rem; }
  .contact-cards { grid-template-columns: 1fr; }
  .booking-wrapper { grid-template-columns: 1fr; gap: 1.5rem; }
  .booking-form-box { padding: 1.4rem 1rem; }
  .form-row { grid-template-columns: 1fr; }
  .service-selector { grid-template-columns: 1fr; }
  .booking-perks-box { position: static; padding: 1.4rem 1rem; }

  /* Footer */
  footer {
    flex-direction: column; gap: 1.5rem;
    text-align: center; padding: 2rem 1.2rem;
  }
  .footer-social { justify-content: center; }

  /* WhatsApp FAB */
  .whatsapp-fab { bottom: 1.2rem; right: 1.2rem; width: 48px; height: 48px; }
  .whatsapp-tooltip { display: none; }
}

@media (max-width: 420px) {
  .hero-title { font-size: 2rem; }
  .section-title { font-size: 1.9rem; }
  .g-masonry { columns: 2; column-gap: 5px; }
  .g-item { margin-bottom: 5px; }
  .nav-logo { font-size: 1.1rem; letter-spacing: 0.1em; }
  .booking-form-box { padding: 1.1rem 0.9rem; }
}

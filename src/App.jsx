import { useEffect, useRef, useState } from "react";
import {
  ArrowUpRight,
  CaretDown,
  Check,
  CheckCircle,
  EnvelopeSimple,
  InstagramLogo,
  List,
  MagicWand,
  Megaphone,
  MapPin,
  Phone,
  Palette,
  QrCode,
  MonitorPlay,
  Sparkle,
  Target,
  X,
} from "@phosphor-icons/react";
import { whatsappUrl } from "./data/siteContent";
import { languageOptions, translations } from "./data/translations.jsx";
import performanceBefore from "./assets/nathieli-performance-before.png";
import performanceAfter from "./assets/nathieli-performance-after.png";
import "./App.css";

function Logo({ light = false, label }) {
  return (
    <a
      className={`logo ${light ? "logo-light" : ""}`}
      href="#inicio"
      aria-label={label}
    >
      <span className="logo-mark" aria-hidden="true">
        <span />
      </span>
      <span>ORIZON</span>
    </a>
  );
}
function SectionLabel({ children }) {
  return (
    <p className="section-label">
      <span />
      {children}
    </p>
  );
}

function LanguageFlag({ country }) {
  if (country === "pt-PT") {
    return (
      <svg className="language-flag" viewBox="0 0 32 22" aria-hidden="true">
        <rect width="13" height="22" fill="#046a38" />
        <rect x="13" width="19" height="22" fill="#da291c" />
        <circle cx="13" cy="11" r="4.5" fill="#ffcd00" />
      </svg>
    );
  }
  if (country === "pt-BR") {
    return (
      <svg className="language-flag" viewBox="0 0 32 22" aria-hidden="true">
        <rect width="32" height="22" fill="#009c3b" />
        <path d="M16 2 29 11 16 20 3 11Z" fill="#ffdf00" />
        <circle cx="16" cy="11" r="4.5" fill="#002776" />
      </svg>
    );
  }
  return (
    <svg className="language-flag" viewBox="0 0 32 22" aria-hidden="true">
      <rect width="32" height="22" fill="#fff" />
      <path
        d="M0 0h32v3H0zm0 6h32v3H0zm0 6h32v3H0zm0 6h32v3H0z"
        fill="#b22234"
      />
      <path d="M0 0h14v12H0z" fill="#3c3b6e" />
    </svg>
  );
}

export default function App() {
  const [language, setLanguage] = useState(() => {
    const savedLanguage = window.localStorage.getItem("orizon-language");
    return translations[savedLanguage] ? savedLanguage : "pt-PT";
  });
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [formError, setFormError] = useState("");
  const t = translations[language];
  const languagePickerRef = useRef(null);
  const selectedLanguage = languageOptions.find(
    (option) => option.value === language,
  );
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("orizon-language", language);
  }, [language]);

  useEffect(() => {
    const handlePointerDown = (event) => {
      if (!languagePickerRef.current?.contains(event.target)) {
        setLanguageMenuOpen(false);
      }
    };
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="container header-inner">
          <Logo label={t.accessibility.logo} />
          <nav
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label={t.accessibility.navigation}
          >
            <a href="#solucoes" onClick={closeMenu}>
              {t.nav.solutions}
            </a>
            <a href="#orizon-loyalty" onClick={closeMenu}>
              {t.nav.loyalty}
            </a>
            <a href="#processo" onClick={closeMenu}>
              {t.nav.process}
            </a>
            <a href="#portfolio" onClick={closeMenu}>
              {t.nav.portfolio}
            </a>
            <a href="#contato" onClick={closeMenu}>
              {t.nav.contact}
            </a>
          </nav>
          <a
            className="button button-small button-outline header-cta"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {t.nav.cta} <ArrowUpRight size={16} weight="bold" />
          </a>
          <div className="language-picker" ref={languagePickerRef}>
            <button
              className="language-trigger"
              type="button"
              aria-label={t.accessibility.language}
              aria-expanded={languageMenuOpen}
              aria-haspopup="listbox"
              onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
            >
              <LanguageFlag country={selectedLanguage.flag} />
              <CaretDown
                className="language-caret"
                size={14}
                weight="bold"
                aria-hidden="true"
              />
            </button>
            {languageMenuOpen && (
              <div
                className="language-menu"
                role="listbox"
                aria-label={t.accessibility.language}
              >
                {languageOptions.map((option) => (
                  <button
                    className={`language-option ${language === option.value ? "is-selected" : ""}`}
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={language === option.value}
                    onClick={() => {
                      setLanguage(option.value);
                      setLanguageMenuOpen(false);
                    }}
                  >
                    <LanguageFlag country={option.flag} />
                    <span>{option.label}</span>
                    {language === option.value && (
                      <Check size={17} weight="bold" aria-hidden="true" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            className="menu-toggle"
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? t.nav.closeMenu : t.nav.openMenu}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={24} /> : <List size={24} />}
          </button>
        </div>
      </header>
      <main>
        <section className="hero" id="inicio">
          <div className="hero-grid" aria-hidden="true" />
          <div className="container hero-content">
            <div className="hero-copy">
              <SectionLabel>{t.hero.label}</SectionLabel>
              <h1>{t.hero.title}</h1>
              <p className="hero-text">{t.hero.text}</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#contato">
                  {t.hero.primary} <ArrowUpRight size={18} weight="bold" />
                </a>
                <a className="text-link" href="#solucoes">
                  {t.hero.secondary} <ArrowUpRight size={17} />
                </a>
              </div>
              <div className="hero-proof">
                <CheckCircle size={18} weight="fill" />
                <span>{t.hero.proof}</span>
              </div>
            </div>
            <div className="hero-visual" aria-label={t.accessibility.visual}>
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />
              <div className="visual-label label-top">
                <Sparkle size={15} /> {t.hero.visualLabel}
              </div>
              <div className="dashboard-card">
                <div className="dashboard-top">
                  <span className="window-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span className="browser-tabs">orizon.studio</span>
                  <span className="browser-menu">•••</span>
                </div>
                <div className="browser-address">
                  <span>orizon.studio</span>
                  <span className="dashboard-status">
                    <span /> {t.hero.secure}
                  </span>
                </div>
                <div className="browser-page">
                  <div className="dashboard-brand">
                    ORIZON<span>.</span>
                  </div>
                  <div className="dashboard-heading">
                    {t.hero.visualHeading}
                  </div>
                  <div className="dashboard-chart">
                    <span className="chart-line" />
                    <i className="chart-point point-one" />
                    <i className="chart-point point-two" />
                    <i className="chart-point point-three" />
                  </div>
                  <div className="dashboard-footer">
                    <span>{t.hero.reach}</span>
                    <strong>+68.4%</strong>
                  </div>
                </div>
              </div>
              <div className="visual-label label-bottom">
                <Target size={15} /> {t.hero.clarity}
              </div>
            </div>
          </div>
          <div className="container hero-foot">
            <span>{t.hero.region}</span>
            <span className="scroll-note">
              <span className="scroll-line" /> {t.hero.scroll}
            </span>
            <span>ORIZON / 2026</span>
          </div>
        </section>
        <section className="intro section-space">
          <div className="container intro-grid">
            <SectionLabel>{t.intro.label}</SectionLabel>
            <div className="intro-content">
              <h2>{t.intro.title}</h2>
              <p>{t.intro.text}</p>
              <a className="text-link" href="#processo">
                {t.intro.link} <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        </section>
        <section className="services section-space" id="solucoes">
          <div className="container">
            <div className="section-heading">
              <div>
                <SectionLabel>{t.services.label}</SectionLabel>
                <h2>{t.services.title}</h2>
              </div>
              <p>{t.services.text}</p>
            </div>
            <div className="services-grid">
              {t.services.items.map(([title, text, tag], index) => {
                const Icon = [MonitorPlay, QrCode, Palette, Megaphone][index];
                return (
                  <article className="service-card" key={title}>
                    <div className="service-card-top">
                      <span className="service-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <Icon size={27} weight="light" />
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <span className="service-tag">{tag}</span>
                    <ArrowUpRight className="card-arrow" size={19} />
                  </article>
                );
              })}
            </div>
          </div>
        </section>
        <section className="loyalty-section section-space" id="orizon-loyalty">
          <div className="container loyalty-grid">
            <div className="loyalty-copy">
              <SectionLabel>{t.loyalty.label}</SectionLabel>
              <h2>{t.loyalty.title}</h2>
              <p>{t.loyalty.text}</p>
              <a className="button button-dark" href="#contato">
                {t.loyalty.cta} <ArrowUpRight size={18} weight="bold" />
              </a>
            </div>
            <div className="loyalty-panel">
              <div className="loyalty-panel-head">
                <span>
                  <span className="mini-mark" /> ORIZON / loyalty
                </span>
                <span className="panel-live">
                  <span /> {t.loyalty.sample}
                </span>
              </div>
              <div className="metric-main">
                <span>{t.loyalty.metric}</span>
                <strong>{t.loyalty.tailored}</strong>
                <small>{t.loyalty.data}</small>
              </div>
              <div className="metric-bars">
                <i style={{ height: "46%" }} />
                <i style={{ height: "62%" }} />
                <i style={{ height: "55%" }} />
                <i style={{ height: "78%" }} />
                <i style={{ height: "68%" }} />
                <i className="bar-highlight" style={{ height: "92%" }} />
                <i style={{ height: "84%" }} />
              </div>
              <div className="insight">
                <div className="insight-icon">
                  <MagicWand size={18} weight="fill" />
                </div>
                <div>
                  <span>{t.loyalty.insightLabel}</span>
                  <p>{t.loyalty.insight}</p>
                </div>
                <ArrowUpRight size={17} />
              </div>
            </div>
          </div>
        </section>
        <section className="process section-space" id="processo">
          <div className="container">
            <div className="section-heading process-heading">
              <div>
                <SectionLabel>{t.process.label}</SectionLabel>
                <h2>{t.process.title}</h2>
              </div>
              <p>{t.process.text}</p>
            </div>
            <div className="process-list">
              {t.process.steps.map(([title, text], index) => (
                <div key={title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                  <Check size={21} />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="portfolio section-space" id="portfolio">
          <div className="container portfolio-grid">
            <div>
              <SectionLabel>{t.portfolio.label}</SectionLabel>
              <h2>{t.portfolio.title}</h2>
              <p>{t.portfolio.text}</p>
              <a
                className="button button-dark"
                href="https://adv-nathieli.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                {t.portfolio.cta} <ArrowUpRight size={18} weight="bold" />
              </a>
            </div>
            <a
              className="portfolio-card"
              href="https://adv-nathieli.netlify.app/"
              target="_blank"
              rel="noreferrer"
              aria-label={t.portfolio.cta}
            >
              <div className="portfolio-browser">
                <div className="portfolio-browser-top">
                  <span className="window-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                  <span>adv-nathieli.netlify.app</span>
                </div>
                <div className="portfolio-preview">
                  <span className="portfolio-preview-label">
                    NATHIELI DE SOUSA
                  </span>
                  <strong>Seu direito merece ser respeitado.</strong>
                  <span className="portfolio-preview-button">
                    Falar com a advogada
                  </span>
                </div>
              </div>
              <div className="portfolio-card-footer">
                <span>{t.portfolio.project}</span>
                <ArrowUpRight size={18} />
              </div>
            </a>
          </div>
          <div className="container portfolio-results">
            <div className="portfolio-results-heading">
              <SectionLabel>{t.portfolio.resultsLabel}</SectionLabel>
              <h3>{t.portfolio.resultsTitle}</h3>
              <p>{t.portfolio.resultsText}</p>
            </div>
            <div className="performance-comparison">
              <figure className="performance-shot">
                <img
                  src={performanceBefore}
                  alt={t.portfolio.beforeAlt}
                  loading="lazy"
                />
                <figcaption>
                  <span>{t.portfolio.before}</span>
                  <strong>47</strong>
                </figcaption>
              </figure>
              <figure className="performance-shot">
                <img
                  src={performanceAfter}
                  alt={t.portfolio.afterAlt}
                  loading="lazy"
                />
                <figcaption>
                  <span>{t.portfolio.after}</span>
                  <strong>96</strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>
        <section className="faq section-space">
          <div className="container faq-grid">
            <div>
              <SectionLabel>{t.faq.label}</SectionLabel>
              <h2>{t.faq.title}</h2>
              <p>{t.faq.text}</p>
              <a
                className="text-link"
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
              >
                {t.faq.link} <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="faq-list">
              {t.faq.items.map(([question, answer], index) => (
                <div
                  className={`faq-item ${openFaq === index ? "is-open" : ""}`}
                  key={question}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                    aria-expanded={openFaq === index}
                    aria-controls={`faq-answer-${index}`}
                  >
                    <span>{question}</span>
                    <CaretDown size={19} />
                  </button>
                  {openFaq === index && (
                    <p id={`faq-answer-${index}`}>{answer}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="contact-section" id="contato">
          <div className="container contact-grid">
            <div className="contact-copy">
              <SectionLabel>{t.contact.label}</SectionLabel>
              <h2>{t.contact.title}</h2>
              <p>{t.contact.text}</p>
              <div className="contact-details">
                <a href="mailto:Orizonloyalty@gmail.com">
                  <EnvelopeSimple size={19} /> Orizonloyalty@gmail.com
                </a>
                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                  <Phone size={19} /> +351 912 342 274
                </a>
                <span>
                  <MapPin size={19} /> {t.contact.global}
                </span>
              </div>
            </div>
            <form
              className="contact-form"
              onSubmit={async (event) => {
                event.preventDefault();
                setFormError("");
                if (!import.meta.env.VITE_WEB3FORMS_ACCESS_KEY) {
                  setFormError(t.contact.configurationError);
                  return;
                }
                setSending(true);
                try {
                  const formData = new FormData(event.currentTarget);
                  formData.append(
                    "access_key",
                    import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
                  );
                  formData.append("subject", "Novo contacto pelo site ORIZON");
                  formData.append("from_name", "Site ORIZON");
                  const response = await fetch(
                    "https://api.web3forms.com/submit",
                    {
                      method: "POST",
                      body: formData,
                    },
                  );
                  const result = await response.json();
                  if (!response.ok || !result.success) {
                    throw new Error(
                      result.message || "Web3Forms rejected the submission.",
                    );
                  }
                  setSubmitted(true);
                  event.currentTarget.reset();
                } catch (error) {
                  setFormError(
                    error instanceof Error ? error.message : t.contact.error,
                  );
                } finally {
                  setSending(false);
                }
              }}
            >
              <label>
                {t.contact.name}
                <input
                  type="text"
                  name="name"
                  placeholder={t.contact.namePlaceholder}
                  required
                />
              </label>
              <label>
                {t.contact.email}
                <input
                  type="email"
                  name="email"
                  placeholder={t.contact.emailPlaceholder}
                  required
                />
              </label>
              <label>
                {t.contact.help}
                <select name="project" defaultValue="">
                  <option value="" disabled>
                    {t.contact.choose}
                  </option>
                  {t.contact.options.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>
              </label>
              <label>
                {t.contact.message}
                <textarea
                  name="message"
                  rows="3"
                  placeholder={t.contact.messagePlaceholder}
                />
              </label>
              <button
                className="button button-primary"
                type="submit"
                disabled={sending}
              >
                {submitted ? (
                  <>
                    {t.contact.sent} <CheckCircle size={18} weight="fill" />
                  </>
                ) : (
                  <>
                    {sending ? t.contact.sending : t.contact.send}{" "}
                    <ArrowUpRight size={18} weight="bold" />
                  </>
                )}
              </button>
              {submitted && <p className="form-note">{t.contact.note}</p>}
              {formError && (
                <p className="form-error" role="alert">
                  {formError}
                </p>
              )}
            </form>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="container footer-top">
          <Logo light label={t.accessibility.logo} />
          <p>{t.footer.description}</p>
          <div className="footer-links">
            <a href="#solucoes">{t.nav.solutions}</a>
            <a href="#orizon-loyalty">ORIZON Loyalty</a>
            <a href="#portfolio">{t.nav.portfolio}</a>
            <a href="#contato">{t.nav.contact}</a>
          </div>
          <a
            className="social-link"
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            aria-label={t.footer.instagram}
          >
            <InstagramLogo size={21} />
          </a>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 ORIZON. {t.footer.rights}</span>
          <span>{t.footer.tagline}</span>
        </div>
      </footer>
      <a
        className="whatsapp-float"
        href={whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={t.footer.whatsapp}
      >
        <Phone size={23} weight="fill" />
      </a>
    </div>
  );
}

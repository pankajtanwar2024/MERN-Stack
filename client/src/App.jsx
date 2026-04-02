import { useEffect, useState } from "react";
import qiyaPhoto from "./assets/qiya.pic.png";

const strengths = [
  "Story-led content writing",
  "Visual-first content creation",
  "Sharp, clean editing",
  "Brand-conscious media planning",
  "Social strategy with personality"
];

const highlights = [
  {
    title: "Editorial Glow",
    text: "Long-form articles, scripts, captions, and thoughtful storytelling that sounds human and lands with clarity."
  },
  {
    title: "Campaign Styling",
    text: "Launch visuals, content pillars, and scroll-stopping social concepts shaped around a distinct feminine brand voice."
  },
  {
    title: "Momentum Management",
    text: "Content calendars, publishing support, and audience-ready messaging that keeps your channels active and elegant."
  }
];

const portfolioCards = [
  {
    label: "Writer",
    title: "Words that feel polished, warm, and memorable",
    accent: "Rose editorial"
  },
  {
    label: "Creator",
    title: "Concepts designed for attention, retention, and shareability",
    accent: "Peach spotlight"
  },
  {
    label: "Editor",
    title: "Refined pacing, sharper voice, and cleaner final delivery",
    accent: "Champagne finish"
  },
  {
    label: "Social Lead",
    title: "Channel direction with consistency, rhythm, and charm",
    accent: "Blush strategy"
  }
];

const socials = [
  {
    label: "LinkedIn",
    value: "rizqiyahyusrinawati",
    href: "https://www.linkedin.com/in/rizqiyahyusrinawati/"
  },
  {
    label: "Instagram",
    value: "@usumakirizqiyah",
    href: "https://www.instagram.com/usumakirizqiyah/"
  },
  {
    label: "Twitter / X",
    value: "@uzumakiRizqiyah",
    href: "https://twitter.com/uzumakiRizqiyah"
  }
];

export default function App() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      try {
        const response = await fetch("/api/profile");
        if (!response.ok) {
          throw new Error("Failed to load profile");
        }

        const data = await response.json();
        setProfile(data);
      } catch {
        setProfile({
          name: "Qiyaa",
          title: "Content Writer, Creator, Editor & Social Media Handler",
          intro:
            "Build a magnetic presence with storytelling, visuals, and strategy that feel beautifully aligned."
        });
      }
    }

    loadProfile();
  }, []);

  return (
    <div className="page-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <header className="hero">
        <nav className="topbar">
          <span className="brand-mark">Uzumaki Studio</span>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <section className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Creator Portfolio</p>
            <h1>{profile?.name ?? "Loading studio..."}</h1>
            <p className="hero-title">
              {profile?.title ?? "Crafting a polished digital presence"}
            </p>
            <p className="hero-intro">
              {profile?.intro ??
                "A refined space for storytelling, strategy, and standout creative work."}
            </p>

            <div className="hero-actions">
              <a className="primary-btn" href="#contact">
                Book a Project
              </a>
              <a className="secondary-btn" href="#portfolio">
                View Signature Work
              </a>
            </div>

            <ul className="strength-list">
              {strengths.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-card">
            <div className="portrait-panel">
              <div className="portrait-frame">
                <img className="portrait-image" src={qiyaPhoto} alt="Qiyaa portrait" />
              </div>
              <div className="hero-card-inner">
                <p className="mini-label">Brand Mood</p>
                <h2>Elegant, feminine, strategic</h2>
                <p>
                  Designed for a creator who moves between writing, editing, media,
                  and social with confidence.
                </p>
              </div>
            </div>

            <div className="stat-row">
              <div>
                <span>01</span>
                <p>Signature voice</p>
              </div>
              <div>
                <span>02</span>
                <p>Beautiful visuals</p>
              </div>
              <div>
                <span>03</span>
                <p>Modern growth focus</p>
              </div>
            </div>
          </div>
        </section>
      </header>

      <main>
        <section className="section" id="services">
          <div className="section-heading">
            <p className="eyebrow">Services</p>
            <h2>Creative work shaped with style and structure</h2>
          </div>

          <div className="highlight-grid">
            {highlights.map((item) => (
              <article className="highlight-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section portfolio-section" id="portfolio">
          <div className="section-heading">
            <p className="eyebrow">Portfolio Energy</p>
            <h2>Made to feel premium on first glance</h2>
          </div>

          <div className="portfolio-grid">
            {portfolioCards.map((card) => (
              <article className="portfolio-card" key={card.title}>
                <span>{card.label}</span>
                <h3>{card.title}</h3>
                <p>{card.accent}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section info-section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About Qiyaa</p>
            <h2>Everything important in one elegant place</h2>
          </div>

          <div className="info-grid">
            <article className="info-card">
              <p className="mini-label">Contact</p>
              <h3>Direct details</h3>
              <a href="tel:89686414354">89686414354</a>
              <a href="mailto:rizqiyahyusrinawati@gmail.com">
                rizqiyahyusrinawati@gmail.com
              </a>
            </article>

            <article className="info-card">
              <p className="mini-label">Socials</p>
              <h3>Find Qiyaa online</h3>
              <div className="social-list">
                {socials.map((social) => (
                  <a key={social.label} href={social.href} target="_blank" rel="noreferrer">
                    <span>{social.label}</span>
                    <strong>{social.value}</strong>
                  </a>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Let your brand feel beautiful and unmistakable</h2>
              <p>
                Ready for portfolio content, social media direction, editing, or
                full creative support.
              </p>
            </div>
            <a className="primary-btn" href="mailto:rizqiyahyusrinawati@gmail.com">
              rizqiyahyusrinawati@gmail.com
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}

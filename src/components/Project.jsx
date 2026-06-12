import { useState } from "react";

const CASE_STUDY_SLIDES = [
  {
    eyebrow: "Company Snapshot",
    title: "Shree Balaji International",
    summary:
      "The business serves both B2B and B2C buyers with castor seeds and cumin seeds.",
    points: [
      "My role was in the B2C growth team.",
      "Primary goal: increase retail sales for castor and cumin.",
      "Supply model: farm sourcing in Rajasthan, packaging in Ahmedabad, then distribution.",
    ],
  },
  {
    eyebrow: "Core Customer Problem",
    title: "Low trust in quality claims",
    summary:
      "Customers were unsure about lab testing standards and process transparency.",
    points: [
      "Testing confidence was the major conversion blocker.",
      "Packaging looked generic and non-premium.",
      "Product packs had weak origin and chemical-detail communication.",
    ],
  },
  {
    eyebrow: "Market Gaps",
    title: "Branding and channel limitations",
    summary:
      "The catalog needed stronger retail readiness for modern discovery channels.",
    points: [
      "No strong quick-commerce presence on Instamart and FirstClub.",
      "No visual proof of farm-to-factory handling for consumers.",
      "Subscription purchase behavior for repeat buyers was underdeveloped.",
    ],
  },
  {
    eyebrow: "Execution",
    title: "Packaging, traceability, and compliance",
    summary:
      "We redesigned the B2C offer to improve trust, access, and repeatability.",
    points: [
      "Upgraded packaging design and introduced multiple pack sizes including 100 g.",
      "Enabled cumin batch-level tracking with Open Farm process references.",
      "Completed required licensing and FSSAI steps for quick-commerce listing in Ahmedabad.",
    ],
  },
  {
    eyebrow: "Trust Layer",
    title: "Visible quality assurance",
    summary:
      "Process visibility became a key differentiator for B2C buyers.",
    points: [
      "CCTV-backed monitoring across farm-to-factory stages.",
      "Sharper storytelling around quality, source, and handling.",
      "Pushed subscription-focused buying journeys for castor and cumin customers.",
    ],
  },
];

const GRID = [
  { cls: "p-orange", t: "COUPON" },
  { cls: "p-yellow", t: "THE BEST SEEDS" },
  { cls: "p-green", t: "🌱" },
  { cls: "p-green", t: "Castor Seeds" },
  { cls: "p-orange-deep", t: "Cumin Powder" },
  { cls: "p-yellow", t: "PRODUCTS" },
];

export default function Project() {
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = CASE_STUDY_SLIDES.length;
  const currentSlide = CASE_STUDY_SLIDES[activeSlide];

  const goPrev = () => {
    setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goNext = () => {
    setActiveSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <section id="project">
      <div className="inner">
        <div className="head reveal">
          <div className="num">01</div>
          <div className="meta">
            <h2>Shree Balaji International</h2>
            <div className="h-sub">B2C Growth and Marketing</div>
            <div className="h-kicker">Seed retail strategy and trust-led communication</div>
          </div>
        </div>

        <div className="layout">
          {/* phone mockup */}
          <div className="phone reveal d1">
            <div className="notch" />
            <div className="screen">
              <div className="ph-status">
                <span>1:16</span>
                <span>▮▮ ⌃ ▮</span>
              </div>
              <div className="ph-top">‹ &nbsp; shree..... &nbsp; ⌄ ⋯</div>
              <div className="ph-prof">
                <div className="ph-ava" />
                <div className="ph-stats">
                  <div>
                    <b>385</b>Posts
                  </div>
                  <div>
                    <b>3,455</b>Followers
                  </div>
                  <div>
                    <b>323</b>Following
                  </div>
                </div>
              </div>
              <div className="ph-bio">
                <div className="name">Want to buy Seeds and Oils ? </div>
                <div>
                  100% Organic Pesticide free, 100% Transparency of the Process
                </div>
                <div className="link">www.shreeBala....</div>
              </div>
              <div className="ph-btns">
                <div>Following ⌄</div>
                <div>Message</div>
              </div>
              <div className="ph-high">
                <div className="h">
                  <div className="ring">🚚</div>Delivery
                </div>
                <div className="h">
                  <div className="ring">😊</div>Customers
                </div>
                <div className="h">
                  <div className="ring">📍</div>Find
                </div>
              </div>
              <div className="ph-tabs">
                <span>▦</span>
                <span>▷</span>
                <span>👤</span>
              </div>
              <div className="ph-grid">
                {GRID.map((g, i) => (
                  <div className={g.cls} key={i}>
                    {g.t}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* case-study carousel */}
          <div className="work-story reveal d2">
            <div className="work-carousel" role="region" aria-label="Shree Balaji case study highlights">
              <button
                className="carousel-btn"
                type="button"
                onClick={goPrev}
                aria-label="Show previous highlight"
              >
                ←
              </button>

              <article className="work-slide">
                <p className="slide-eyebrow">{currentSlide.eyebrow}</p>
                <h3>{currentSlide.title}</h3>
                <p className="slide-summary">{currentSlide.summary}</p>
                <ul className="slide-points">
                  {currentSlide.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="slide-count">
                  {activeSlide + 1} / {totalSlides}
                </div>
              </article>

              <button
                className="carousel-btn"
                type="button"
                onClick={goNext}
                aria-label="Show next highlight"
              >
                →
              </button>
            </div>

            <div className="carousel-dots" role="tablist" aria-label="Select case study slide">
              {CASE_STUDY_SLIDES.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  role="tab"
                  aria-selected={activeSlide === index}
                  className={`dot ${activeSlide === index ? "active" : ""}`}
                  onClick={() => setActiveSlide(index)}
                >
                  <span className="sr-only">{slide.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="notes">
          <div className="n reveal d1">
            Premium packaging with new <b>100 g</b> entry-size SKU
          </div>
          <div className="n reveal d2">
            Batch-level <b>traceability</b> and origin visibility
          </div>
          <div className="n reveal d3">
            Quick-commerce onboarding plus <b>CCTV-backed trust</b> narrative
          </div>
        </div>
      </div>
    </section>
  );
}

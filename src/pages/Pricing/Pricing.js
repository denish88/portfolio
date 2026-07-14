import React from "react";
import { Link } from "react-router-dom";
import SectionImg from "../../assets/image/pricing-hero.png";
import "./Pricing.css";

const packageGroups = [
  {
    id: "frontend",
    title: "Frontend",
    subtitle: "HTML, CSS & page builds",
    packages: [
      {
        id: "blog",
        name: "Blog Code Writing",
        price: "99",
        unit: "per blog",
        tagline: "Clean, ready-to-publish blog markup",
        features: [
          "Semantic HTML structure",
          "Responsive layout basics",
          "SEO-friendly markup",
          "Quick turnaround",
        ],
      },
      {
        id: "hourly",
        name: "HTML / CSS Support",
        price: "149",
        unit: "per hour",
        tagline: "On-demand help when you need it",
        features: [
          "Bug fixes & polish",
          "Layout troubleshooting",
          "Cross-browser fixes",
          "Flexible hourly booking",
        ],
      },
      {
        id: "bundle",
        name: "HTML / CSS Package",
        price: "399",
        unit: "4 hours",
        tagline: "Focused support block — best value",
        featured: true,
        features: [
          "4 hours dedicated support",
          "Feature builds & styling",
          "Priority turnaround",
          "Save vs hourly rate",
        ],
      },
      {
        id: "page",
        name: "Page Development",
        price: "499",
        unit: "per page",
        tagline: "Full single-page build from design to code",
        features: [
          "Custom page layout",
          "Responsive HTML & CSS",
          "Clean, maintainable code",
          "One round of revisions",
        ],
      },
      {
        id: "ecommerce",
        name: "Ecommerce Page Dev",
        price: "1999",
        unit: "per page",
        tagline: "Product, cart & checkout-ready page builds",
        features: [
          "Ecommerce page structure",
          "Product UI & pricing layout",
          "Responsive storefront styling",
          "Handoff-ready frontend code",
        ],
      },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    subtitle: "Database, APIs & deployment",
    packages: [
      {
        id: "db-design",
        name: "Database Design",
        price: "499",
        unit: "20 tables",
        tagline: "Schema design & architecture for your data layer",
        features: [
          "Up to 20 database tables",
          "Relationships & indexing plan",
          "Normalized schema design",
          "Architecture documentation",
        ],
      },
      {
        id: "api-dev",
        name: "API Development",
        price: "1499",
        unit: "10 APIs",
        tagline: "Backend endpoints built and ready to integrate",
        features: [
          "Up to 10 API endpoints",
          "Request & response design",
          "Auth-ready structure",
          "Clean, documented routes",
        ],
      },
      {
        id: "deployment",
        name: "Website Deployment",
        price: "1499",
        unit: "per site",
        tagline: "Deploy support — domain & server costs excluded",
        features: [
          "Full deployment setup",
          "Hosting configuration help",
          "SSL & DNS guidance",
          "Domain & server price excluded",
        ],
      },
    ],
  },
  {
    id: "full-sites",
    title: "Full Sites",
    subtitle: "Complete website builds",
    packages: [
      {
        id: "informative-site",
        name: "Informative Site",
        price: "4999",
        unit: "full site",
        tagline: "Complete multi-page informative website",
        features: [
          "Full site architecture",
          "Multiple content pages",
          "Responsive design throughout",
          "SEO-friendly structure",
        ],
      },
      {
        id: "ecommerce-full",
        name: "Ecommerce Site Dev",
        price: "9999",
        unit: "full site",
        tagline: "ReactJS, NextJS, Shopify & more",
        featured: true,
        badge: "Premium",
        features: [
          "Full ecommerce storefront",
          "ReactJS / NextJS / Shopify",
          "Product & cart flows",
          "Scalable, production-ready build",
        ],
      },
    ],
  },
];

const PackageCard = ({ pkg }) => (
  <li
    className={
      pkg.featured ? "pricing-card pricing-card--featured" : "pricing-card"
    }
  >
    {pkg.featured && (
      <span className="pricing-badge">{pkg.badge || "Best Value"}</span>
    )}
    <div className="pricing-card-inner">
      <h3 className="pricing-card-name">{pkg.name}</h3>
      <p className="pricing-card-tagline">{pkg.tagline}</p>
      <div className="pricing-amount">
        <span className="pricing-currency">₹</span>
        <span className="pricing-price">{pkg.price}</span>
        <span className="pricing-slash">/-</span>
      </div>
      <p className="pricing-unit">{pkg.unit}</p>
      <ul className="pricing-features">
        {pkg.features.map((feature) => (
          <li key={feature}>
            <span className="pricing-check" aria-hidden="true" />
            {feature}
          </li>
        ))}
      </ul>
      <Link to="/contact" className="primary-btn pricing-cta">
        <span>Get Started</span>
      </Link>
    </div>
  </li>
);

const Pricing = () => {
  return (
    <>
      <section className="pricing-hero-section c-pd-3">
        <div className="container">
          <div className="pricing-hero-wrapper">
            <div className="content-wrapper">
              <div className="pricing-hero-heading">
                <span className="pricing-heading-label">Development</span>
                <h1 className="pricing-heading-title">Pricing</h1>
              </div>
              <h3 className="pricing-hero-subtitle">
                Clear packages for code, support &amp; full builds
              </h3>
              <p className="pricing-hero-copy">
                Frontend, backend, deployment, and complete websites — pick what
                you need. Transparent rates. Domain &amp; server costs stay
                separate where noted.
              </p>
              <div className="pricing-hero-actions">
                <a href="#pricing-packages" className="primary-btn">
                  <span>View Packages</span>
                </a>
                <Link to="/contact" className="pricing-hero-link btn-link-effect">
                  Contact for custom work
                </Link>
              </div>
            </div>
            <div className="image-wrapper">
              <img
                src={SectionImg}
                alt="Development pricing packages preview"
              />
            </div>
          </div>
        </div>
      </section>

      {packageGroups.map((group, groupIndex) => (
        <section
          key={group.id}
          id={groupIndex === 0 ? "pricing-packages" : undefined}
          className={`pricing-packages-section pricing-group-${group.id} c-pd-3`}
        >
          <div className="container">
            <div className="section-heading pricing-packages-heading">
              <span className="pricing-heading-label">{group.subtitle}</span>
              <h2 className="pricing-heading-title">{group.title}</h2>
            </div>
            <ul
              className={`pricing-grid pricing-grid--${group.packages.length}`}
            >
              {group.packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="pricing-note-section c-pd-3">
        <div className="container">
          <div className="pricing-note">
            <h3>Ready to start?</h3>
            <p>
              Tell me about your project on the contact page and we&apos;ll lock
              in the right package. See{" "}
              <Link to="/privacy#refunds" className="btn-link-effect">
                Privacy &amp; Refunds
              </Link>{" "}
              before you pay.
            </p>
            <Link to="/contact" className="primary-btn">
              <span>Contact Me</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;

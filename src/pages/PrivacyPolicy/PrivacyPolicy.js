import React from "react";
import { Link } from "react-router-dom";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <section className="policy-section c-pd-3">
      <div className="container">
        <div className="policy-header">
          <span className="policy-label">Legal</span>
          <h1 className="policy-title">Privacy &amp; Refunds</h1>
          <p className="policy-updated">Last updated: 14 July 2026</p>
          <p className="policy-lead">
            I run freelance web development work under my own name — Denish
            Savaliya. This page covers how I handle your information, how
            payments and delivery work, and when refunds apply. If something
            here is unclear, just mail me through the contact form.
          </p>
        </div>

        <article className="policy-block">
          <h2>1. Who this covers</h2>
          <p>
            These terms apply when you hire me for packages listed on the
            Pricing page — blog markup, HTML/CSS support, page builds, APIs,
            database design, deployment help, or full website work. They also
            cover anyone who fills the contact form on this site.
          </p>
        </article>

        <article className="policy-block">
          <h2>2. What I collect</h2>
          <p>I only collect what I need to reply and do the work:</p>
          <ul>
            <li>
              Contact form details — email, phone number, and the message you
              type
            </li>
            <li>
              Project material you send later — designs, copy, logins, repo
              access, or feedback
            </li>
            <li>
              Payment confirmation details (UPI / bank transfer references) so I
              can match a payment to your job
            </li>
          </ul>
          <p>
            I do not run ad trackers for resale. Basic hosting analytics
            (visitor counts on Vercel) may exist on the site itself, but that is
            not tied to selling your personal data.
          </p>
        </article>

        <article className="policy-block">
          <h2>3. How I use that information</h2>
          <ul>
            <li>To answer your enquiry and quote the right package</li>
            <li>To deliver the code / support you paid for</li>
            <li>To keep a short record of the order for revisions and support</li>
          </ul>
          <p>
            I do not sell or rent your email or phone number. I will not share
            your project files with others unless you ask me to (for example,
            pairing with another developer on your team).
          </p>
        </article>

        <article className="policy-block">
          <h2>4. Contact form &amp; reCAPTCHA</h2>
          <p>
            Messages from the contact page are sent through EmailJS so they land
            in my inbox. Google reCAPTCHA sits on that form to cut spam. Using
            reCAPTCHA means Google may process some technical data under their
            own privacy rules — that part is outside my control.
          </p>
        </article>

        <article className="policy-block">
          <h2>5. How long I keep data</h2>
          <p>
            Enquiry messages stay in email until the conversation is done.
            Project files and access details are kept only while the job is
            active, then removed or returned once you confirm handover — unless
            you want me to retain them for future updates.
          </p>
        </article>

        <article className="policy-block" id="refunds">
          <h2>6. Payments</h2>
          <p>
            Prices on the Pricing page are in Indian Rupees (₹). For most fixed
            packages I ask for advance payment before I start. Larger jobs
            (informative sites, ecommerce builds) can be split into milestones
            — I’ll write that out in chat before work begins.
          </p>
          <p>
            Domain registration, hosting, Shopify plans, third-party plugins,
            and server bills are{" "}
            <strong>not</strong> included in my fees unless we agree otherwise
            in writing. The deployment package covers setup help only; you pay
            the domain and server vendor yourself.
          </p>
        </article>

        <article className="policy-block">
          <h2>7. Delivery timeline</h2>
          <p>
            Small packages (blog posts, hourly CSS fixes) usually turn around
            within 1–3 working days once I have everything I need. Bigger
            packages depend on scope and how quickly you reply with content or
            feedback. Deadlines we agree in writing are the ones that count —
            not a generic estimate from the pricing page.
          </p>
          <p>
            Delays caused by missing assets, slow feedback, or third-party
            outages (hosting panel locked, Shopify app limits, DNS waiting) are
            not treated as my delay.
          </p>
        </article>

        <article className="policy-block">
          <h2>8. Revisions</h2>
          <p>
            Fixed packages include a reasonable review pass for issues tied to
            the original brief. That means fixing what was agreed — not a full
            redesign or new feature list. Extra work after the agreed scope is
            billed as hourly support or a fresh package. Hourly bookings are
            billed for time spent, including calls if we schedule them.
          </p>
        </article>

        <article className="policy-block">
          <h2>9. Refund policy</h2>
          <p>Refunds are limited because freelance code work cannot be “returned” like a product. Here is how I handle it:</p>
          <ul>
            <li>
              <strong>Before I start:</strong> If you cancel after paying but
              before I begin, I refund the amount minus any payment gateway /
              transfer charges if those were already deducted.
            </li>
            <li>
              <strong>After work has started:</strong> Refunds are partial only.
              I deduct payment for hours or milestones already delivered, and
              refund the unused balance if one exists.
            </li>
            <li>
              <strong>Completed &amp; handed over:</strong> Once you accept the
              delivery (or it’s been live / usable for 7 days without a material
              defect report), the fee is final. No refund for change of mind,
              budget change, or hiring someone else later.
            </li>
            <li>
              <strong>Defects on my side:</strong> If delivered work clearly
              fails the written brief and I cannot fix it within a fair window,
              you can request a refund or a redo. Screenshots / a short list of
              what’s wrong helps settle this faster.
            </li>
            <li>
              <strong>Hourly support:</strong> Time already used is
              non-refundable. Unused prepaid hours can stay as credit for 30
              days or be refunded if unused.
            </li>
            <li>
              <strong>Third-party costs:</strong> Domain, hosting, theme, or app
              fees you paid to other companies are never refundable through me.
            </li>
          </ul>
          <p>
            To ask for a refund, contact me with your payment reference, package
            name, and reason. I respond within 2–3 working days. Approved
            refunds go back by the same method used for payment, usually within
            5–7 working days after approval.
          </p>
        </article>

        <article className="policy-block">
          <h2>10. Cancellation</h2>
          <p>
            Either of us can stop a job mid-way. If you cancel after start, you
            pay for work done up to that point. If I have to cancel for a
            personal reason, I’ll refund any unused prepaid amount and hand over
            whatever is finished so far.
          </p>
        </article>

        <article className="policy-block">
          <h2>11. Ownership of work</h2>
          <p>
            After full payment, you own the custom code and design work made for
            your project. I may keep a copy for my portfolio unless you ask me
            not to. Open-source libraries, stock assets, and Shopify / platform
            code stay under their own licenses — I’m not transferring those.
          </p>
        </article>

        <article className="policy-block">
          <h2>12. Your responsibility</h2>
          <ul>
            <li>Share content and credentials only through a channel we agree on</li>
            <li>Keep backups of your live site before major deploy days</li>
            <li>
              Make sure you have rights to logos, images, and text you send me
            </li>
          </ul>
        </article>

        <article className="policy-block">
          <h2>13. Changes to this page</h2>
          <p>
            I may update this page when packages or tools change. The date at
            the top will move when that happens. Ongoing jobs stick to the
            version that was live when you paid, unless we both agree to switch.
          </p>
        </article>

        <article className="policy-block">
          <h2>14. Contact</h2>
          <p>
            Questions about privacy, a payment, or a refund — reach me here:
          </p>
          <p>
            <Link to="/contact" className="policy-link btn-link-effect">
              Contact form
            </Link>
          </p>
          <p className="policy-note">
            I’m a solo freelancer based in India. This page is written for how I
            actually work — not as a big-company legal template. For large
            corporate contracts we can put a separate agreement in writing.
          </p>
        </article>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

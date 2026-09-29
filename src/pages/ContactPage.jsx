import React, { useState } from "react";
import { PageMeta } from "../components/site/PageMeta";
import { ArrowRight, ArrowUpRight, PageHero } from "../components/site/blocks";
import { contact } from "../data/site";
import "../styles/pages/contact.css";

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
  budget: "",
};

// Values are what Netlify stores; keep them in sync with the hidden form in index.html.
const budgetOptions = [
  { value: "", label: "Not sure yet" },
  { value: "less than $5k", label: "Under $5,000" },
  { value: "$5k-$10k", label: "$5,000–$10,000" },
  { value: "$10k-$25k", label: "$10,000–$25,000" },
  { value: "$25k-$50k", label: "$25,000–$50,000" },
  { value: "$50k+", label: "$50,000 or more" },
];

const faqs = [
  {
    question: "What kinds of projects do you take on?",
    answer:
      "Mostly websites for local businesses. When a client needs more, we also build custom software and web and mobile apps.",
  },
  {
    question: "How long does a website or app take to build?",
    answer:
      "It depends on how much there is to build. A simple website might take 2\u2060–\u20604\u00a0weeks, while a larger web or mobile app could take 3\u2060–\u20606\u00a0months. We’ll give you a detailed timeline after our first conversation.",
  },
  {
    question: "Do you offer maintenance and support after launch?",
    answer:
      "Yes. We host and maintain what we build, including software updates, security patches and bug fixes. When you need something changed, you email or call us.",
  },
  {
    question: "How do you price a project?",
    answer:
      "After a first conversation about what you need, we send a detailed quote with every cost listed. We can work on a fixed price or an hourly rate, depending on what suits you.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "React, Angular, Vue.js, Node.js, PHP, Python, Swift and Kotlin, plus WordPress when a client wants to edit their own pages.",
  },
];

const Required = () => (
  <span className="nf-field__req" aria-hidden="true">
    *
  </span>
);

const StatusIcon = ({ error }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    {error ? (
      <>
        <circle cx="8" cy="8" r="6.5" />
        <path d="M8 4.75v3.75M8 11.1v.15" />
      </>
    ) : (
      <path d="m3.5 8.5 3 3 6-7" />
    )}
  </svg>
);

const ContactPage = () => {
  const [formData, setFormData] = useState(emptyForm);

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key] || ""),
      )
      .join("&");
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      submitted: false,
      info: { error: false, msg: null },
    });

    try {
      // Submit to Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact",
          ...formData,
        }),
      });

      if (!response.ok) {
        throw new Error(
          `Form submission failed with status ${response.status}`,
        );
      }

      setFormStatus({
        submitted: true,
        submitting: false,
        info: {
          error: false,
          msg: "Thanks, your message was sent. We’ll be in touch soon.",
        },
      });

      setFormData(emptyForm);
    } catch (error) {
      console.error("Form submission error:", error);
      setFormStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: `Your message didn’t go through. Please try again, or email us at ${contact.email}.`,
        },
      });
    }
  };

  const { submitting, info } = formStatus;

  return (
    <div className="nf-page nf-contact">
      <PageMeta path="/contact" />

      <PageHero
        lines={["Tell us about", "your project."]}
        lede="A few lines about your business and what you need is enough to start. One of us will reply with questions and next steps."
      />

      <section className="nf-contact__main">
        <div className="nf-wrap nf-grid">
          <div className="nf-contact__panel">
            <form
              className="nf-form"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              action="/success"
              onSubmit={handleFormSubmit}
            >
              {/* Netlify Forms hidden fields */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <p className="nf-form__note">
                Fields marked <span className="nf-field__req">*</span> are
                required.
              </p>

              <fieldset className="nf-form__group">
                <legend>About you</legend>
                <div className="nf-form__row">
                  <div className="nf-field">
                    <label htmlFor="contact-name">
                      Name <Required />
                    </label>
                    <input
                      className="nf-input"
                      type="text"
                      id="contact-name"
                      name="name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="nf-field">
                    <label htmlFor="contact-email">
                      Email <Required />
                    </label>
                    <input
                      className="nf-input"
                      type="email"
                      id="contact-email"
                      name="email"
                      autoComplete="email"
                      spellCheck="false"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>
                <div className="nf-form__row">
                  <div className="nf-field">
                    <label htmlFor="contact-phone">Phone</label>
                    <input
                      className="nf-input"
                      type="tel"
                      id="contact-phone"
                      name="phone"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="nf-field">
                    <label htmlFor="contact-company">Business name</label>
                    <input
                      className="nf-input"
                      type="text"
                      id="contact-company"
                      name="company"
                      autoComplete="organization"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </fieldset>

              <fieldset className="nf-form__group">
                <legend>About the project</legend>
                <div className="nf-form__row nf-form__row--wide">
                  <div className="nf-field">
                    <label htmlFor="contact-subject">
                      What do you need? <Required />
                    </label>
                    <input
                      className="nf-input"
                      type="text"
                      id="contact-subject"
                      name="subject"
                      placeholder="e.g. A new website for my restaurant"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="nf-field">
                    <label htmlFor="contact-budget">Budget</label>
                    <span className="nf-select">
                      <select
                        className="nf-input"
                        id="contact-budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                      >
                        {budgetOptions.map((o) => (
                          <option key={o.value} value={o.value}>
                            {o.label}
                          </option>
                        ))}
                      </select>
                    </span>
                  </div>
                </div>
                <div className="nf-field">
                  <label htmlFor="contact-message">
                    Tell us about it <Required />
                  </label>
                  <p id="contact-message-hint" className="nf-field__hint">
                    What your business does, what you want built, and any
                    deadline you’re working to.
                  </p>
                  <textarea
                    className="nf-input nf-input--area"
                    id="contact-message"
                    name="message"
                    rows="6"
                    aria-describedby="contact-message-hint"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </fieldset>

              <div className="nf-form__submit">
                <button
                  type="submit"
                  className="nf-btn nf-btn--primary"
                  disabled={submitting}
                >
                  {submitting ? (
                    "Sending…"
                  ) : (
                    <>
                      Send message <ArrowRight />
                    </>
                  )}
                </button>
                <div
                  className="nf-form__status"
                  role="status"
                  aria-live="polite"
                >
                  {info.msg && (
                    <p
                      className={`nf-status${info.error ? " nf-status--error" : ""}`}
                    >
                      <StatusIcon error={info.error} />
                      <span>{info.msg}</span>
                    </p>
                  )}
                </div>
              </div>
            </form>
          </div>

          <aside className="nf-contact__direct" aria-labelledby="direct-title">
            <h2 id="direct-title" className="nf-contact__direct-title">
              Or reach us directly
            </h2>
            <p className="nf-contact__direct-lede">
              Either way, you’ll be talking to Ryan or Kui, the two people
              who’ll build it.
            </p>
            <dl className="nf-details">
              <div>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={contact.phoneHref}>{contact.phone}</a>
                </dd>
              </div>
              <div>
                <dt>Based in</dt>
                <dd>{contact.city}</dd>
              </div>
              <div>
                <dt>Follow</dt>
                <dd className="nf-details__social">
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn <ArrowUpRight />
                  </a>
                  <a
                    href={contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Instagram <ArrowUpRight />
                  </a>
                </dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="nf-section nf-faq">
        <div className="nf-wrap nf-grid">
          <div className="nf-faq__intro">
            <h2 className="nf-h2">Common questions</h2>
            <p className="nf-lede">
              If yours isn’t here, ask it in the form above.
            </p>
          </div>
          <div className="nf-faq__list">
            {faqs.map((f) => (
              <details key={f.question} className="nf-faq__item">
                <summary>
                  <span className="nf-faq__q">{f.question}</span>
                  <span className="nf-faq__icon" aria-hidden="true" />
                </summary>
                <p>{f.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;

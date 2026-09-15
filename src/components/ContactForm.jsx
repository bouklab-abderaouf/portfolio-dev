import React, { useRef, useState } from "react";
import "./ContactForm.css";

// Web3Forms access keys identify a public form; they are sent by the browser.
const ACCESS_KEY = "77bf670d-7e86-44b3-b0ae-072b5293067e";
const ENDPOINT = "https://api.web3forms.com/submit";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");
  const submitting = useRef(false);

  async function handleSubmit(event) {
    event.preventDefault();
    if (submitting.current) return;
    const form = event.currentTarget;
    for (const name of ["name", "email", "message"]) {
      const field = form.elements.namedItem(name);
      field.setCustomValidity(
        field.value.trim() ? "" : "Please fill out this field.",
      );
    }
    if (!form.reportValidity()) return;

    const values = new FormData(form);
    const payload = {
      access_key: ACCESS_KEY,
      name: values.get("name").trim(),
      email: values.get("email").trim(),
      subject: values.get("subject").trim() || "New message from my portfolio",
      message: values.get("message").trim(),
      from_name: "Abderaouf's portfolio",
    };

    submitting.current = true;
    setStatus("sending");
    setFeedback("Sending your message…");
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 20000);
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) {
        setStatus("error");
        setFeedback(
          "Your message wasn’t accepted. Please try again in a moment. Your text has been kept.",
        );
        return;
      }
      form.reset();
      setStatus("success");
      setFeedback(
        "Message sent. Thank you for reaching out—I’ll reply to your email.",
      );
    } catch {
      setStatus("error");
      setFeedback(
        "I couldn’t confirm delivery. Your message is still here; please wait a moment before trying again.",
      );
    } finally {
      clearTimeout(timeout);
      submitting.current = false;
    }
  }

  return (
    <form
      id="contact-form"
      className="contact-form"
      aria-label="Send a message"
      aria-busy={status === "sending"}
      onSubmit={handleSubmit}
      onInput={(event) => {
        event.target.setCustomValidity?.("");
        if (!submitting.current && status !== "idle") {
          setStatus("idle");
          setFeedback("");
        }
      }}
    >
      <fieldset disabled={status === "sending"}>
        <legend className="visually-hidden">
          Your contact details and message
        </legend>
        <div className="form-row">
          <label htmlFor="contact-name">
            Your name <span aria-hidden="true">*</span>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              placeholder="Alex Morgan"
              maxLength={120}
              required
            />
          </label>
          <label htmlFor="contact-email">
            Email address <span aria-hidden="true">*</span>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="alex@company.com"
              maxLength={254}
              required
            />
          </label>
        </div>
        <label htmlFor="contact-subject">
          What’s it about? <span className="optional">Optional</span>
          <input
            id="contact-subject"
            name="subject"
            placeholder="An opportunity, a project, an idea…"
            maxLength={160}
          />
        </label>
        <label htmlFor="contact-message">
          Your message <span aria-hidden="true">*</span>
          <textarea
            id="contact-message"
            name="message"
            placeholder="Tell me a little about what you have in mind."
            rows={5}
            maxLength={5000}
            required
          />
        </label>
        <div className="form-actions">
          <span className="form-note">
            * Required fields
            <br />
            I’ll use your email to reply.
          </span>
          <button
            type="submit"
            className="send-message"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message"}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-hidden="true"
            >
              <path d="M5 19 19 5M5 5h14v14" />
            </svg>
          </button>
        </div>
      </fieldset>
      <p
        className={`form-feedback ${status}`}
        role="status"
        aria-live="polite"
        aria-atomic="true"
      >
        {feedback}
      </p>
    </form>
  );
}

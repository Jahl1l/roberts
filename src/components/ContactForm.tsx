"use client";

import { useState } from "react";
import { SITE } from "@/lib/content";
import { getWhatsAppHref } from "@/lib/whatsapp";

const BUDGET_OPTIONS = [
  "80K-120K JMD",
  "180K-300K JMD",
  "450K-850K+ JMD",
  "Not sure yet"
];

const TIMELINE_OPTIONS = [
  "ASAP (2-4 weeks)",
  "Next 1-2 months",
  "Next quarter",
  "Just exploring"
];

interface FormState {
  name: string;
  businessName: string;
  contact: string;
  needs: string;
  budget: string;
  timeline: string;
}

const initialState: FormState = {
  name: "",
  businessName: "",
  contact: "",
  needs: "",
  budget: "",
  timeline: ""
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );

  const validate = (data: FormState) => {
    const nextErrors: Record<string, string> = {};

    if (!data.name.trim()) nextErrors.name = "Please add your name.";
    if (!data.businessName.trim())
      nextErrors.businessName = "Business name is required.";
    if (!data.contact.trim())
      nextErrors.contact = "Email or phone is required.";
    if (!data.needs.trim()) nextErrors.needs = "Tell us what you need.";
    if (!data.budget) nextErrors.budget = "Select a budget range.";
    if (!data.timeline) nextErrors.timeline = "Select a timeline.";

    return nextErrors;
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    try {
      setStatus("loading");
      const message = [
        "Hi Roberts Web Applications, I want a web application for my business.",
        "",
        `Name: ${formData.name}`,
        `Business Name: ${formData.businessName}`,
        `Contact: ${formData.contact}`,
        `Needs: ${formData.needs}`,
        `Budget: ${formData.budget}`,
        `Timeline: ${formData.timeline}`
      ].join("\n");
      const whatsappHref = getWhatsAppHref(SITE.whatsappNumber, message);

      window.open(whatsappHref, "_blank", "noopener,noreferrer");
      setStatus("success");
      setFormData(initialState);
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="rounded-3xl border border-ink/10 bg-white/90 p-6 shadow-soft">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <input
              className="input-field"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name ? (
              <p className="mt-1 text-xs text-coral">{errors.name}</p>
            ) : null}
          </div>
          <div>
            <input
              className="input-field"
              name="businessName"
              placeholder="Business name"
              value={formData.businessName}
              onChange={handleChange}
            />
            {errors.businessName ? (
              <p className="mt-1 text-xs text-coral">{errors.businessName}</p>
            ) : null}
          </div>
        </div>
        <div>
          <input
            className="input-field"
            name="contact"
            placeholder="Phone number"
            value={formData.contact}
            onChange={handleChange}
          />
          {errors.contact ? (
            <p className="mt-1 text-xs text-coral">{errors.contact}</p>
          ) : null}
        </div>
        <div>
          <textarea
            className="input-field min-h-[120px]"
            name="needs"
            placeholder="Tell us about the system you need"
            value={formData.needs}
            onChange={handleChange}
          />
          {errors.needs ? (
            <p className="mt-1 text-xs text-coral">{errors.needs}</p>
          ) : null}
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <select
              className="input-field"
              name="budget"
              value={formData.budget}
              onChange={handleChange}
            >
              <option value="">Budget range</option>
              {BUDGET_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.budget ? (
              <p className="mt-1 text-xs text-coral">{errors.budget}</p>
            ) : null}
          </div>
          <div>
            <select
              className="input-field"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
            >
              <option value="">Timeline</option>
              {TIMELINE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {errors.timeline ? (
              <p className="mt-1 text-xs text-coral">{errors.timeline}</p>
            ) : null}
          </div>
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-ocean px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink disabled:opacity-60"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Opening WhatsApp..." : "Send on WhatsApp"}
        </button>
      </form>
      {status === "success" ? (
        <div className="mt-4 rounded-2xl bg-palm/10 p-4 text-sm text-ink">
          WhatsApp was opened with your project details. Send the message to reach us directly.
        </div>
      ) : null}
      {status === "error" ? (
        <div className="mt-4 rounded-2xl bg-coral/10 p-4 text-sm text-ink">
          Something went wrong. Please try again on WhatsApp at {SITE.phone}.
        </div>
      ) : null}
    </div>
  );
}

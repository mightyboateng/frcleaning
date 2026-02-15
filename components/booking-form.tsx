"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

type QuoteFormFields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type QuoteFormProps = {
  submitLabel?: string;
  className?: string;
  title?: string;
  description?: string;
  serviceOptions?: string[];
  successMessage?: string;
  errorMessage?: string;
  onSubmit?: (form: QuoteFormFields) => Promise<void> | void;
  serviceType: string;
};

const defaultOptions = [
  "Residential Cleaning",
  "Commercial Cleaning",
  "Carpet / Specialized",
  "Move-in / Move-out / Post-Renovation",
];

const defaultFormState: QuoteFormFields = {
  name: "",
  email: "",
  phone: "",
  service: defaultOptions[0],
  message: "",
};

const validateEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

const BookingForm = ({
  submitLabel = "Book Now",
  className = "",
  successMessage = "Thanks — we'll contact you soon with a custom quote.",
  errorMessage = "Please provide a valid name and email so we can follow up.",
  onSubmit,
  serviceType,
}: QuoteFormProps) => {
  const [form, setForm] = useState<QuoteFormFields>(defaultFormState);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !validateEmail(form.email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");

    try {
      if (onSubmit) {
        await Promise.resolve(onSubmit(form));
      } else {
        // Call the API route
        const response = await fetch("/api/book", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            message: form.message,
            serviceType,
          }),
        });

        if (!response.ok) {
          throw new Error("Failed to send quote request");
        }
      }
      setStatus("success");
      setForm(defaultFormState);
    } catch (error) {
      console.error("Quote form submission failed", error);
      setStatus("error");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
      className={`w-full rounded-3xl border border-white/40 bg-white/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-lg ${className}`}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="quote-name">Full name</Label>
            <Input
              id="quote-name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Doe"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="quote-email">Email</Label>
            <Input
              id="quote-email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="jane@example.com"
            />
          </div>
        </div>

        <div className={cn("grid gap-4 md:grid-cols-1")}>
          <div className="space-y-2">
            <Label htmlFor="quote-phone">Phone (optional)</Label>
            <Input
              id="quote-phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="(416) 555-1234"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quote-message">Message</Label>
          <Textarea
            id="quote-message"
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={5}
            placeholder="Tell us about your space, frequency, or any specific requests."
          />
        </div>

        <div className="flex flex-col gap-3">
          <Button
            type="submit"
            size="lg"
            className="bg-primary-900 w-fit text-primary hover:text-white border-2 border-gray-900 hover:border-gray-700 px-6 py-3 tracking-wide text-base font-semibold transition-all duration-300"
            disabled={status === "sending" || status === "success"}
          >
            {status === "sending" ? (
              "Sending..."
            ) : status === "success" ? (
              <span className="inline-flex items-center gap-2 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Sent
              </span>
            ) : (
              submitLabel
            )}
          </Button>
          <div
            aria-live="polite"
            className="min-h-5 text-sm font-medium leading-relaxed"
          >
            {status === "success" && (
              <span className="flex items-center gap-2 text-green-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-5 w-5"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {successMessage}
              </span>
            )}
            {status === "error" && (
              <span className="text-red-600">{errorMessage}</span>
            )}
          </div>
        </div>
      </form>
    </motion.div>
  );
};

export default BookingForm;

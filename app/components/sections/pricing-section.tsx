"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import ContactForm from "../contact-form";
import BookDialog from "../book-dialog";

const plans = [
  {
    name: "Condos & Small Homes",
    price: "$200",
    description:
      "Feel the difference with our expert cleaning service, tailored for condos and small homes. ",
    features: ["1–2 bedrooms", " 1 bath", "~800–1200 sq ft"],
  },
  {
    name: "Medium Home",
    price: "$250",
    description:
      "Get a sparkling clean home with our comprehensive cleaning services",
    features: ["2–3 bedrooms", "2 baths", "~1200–1800 sq ft"],
    popular: true,
  },
  {
    name: "Large Home",
    price: "$300+",
    description: "Offering custom pricing for larger homes and specific needs.",
    features: ["3–4 bedrooms", "3+ baths", "~1800–2500+ sq ft"],
  },
];

export function PricingSection() {
  return (
    <section className="bg-secondary px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-md mx-auto">
            Start free, upgrade when you&apos;re ready.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative bg-background rounded-xl p-8 ticket-edge ${plan.popular ? "ring-2 ring-primary" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              data-clickable
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-lime text-foreground text-xs font-medium px-3 py-1 rounded-full">
                  Popular
                </span>
              )}

              <div className="text-center pb-6 border-b border-dashed border-border">
                <h3 className="font-serif text-xl text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-4 flex items-baseline justify-center gap-1">
                  <span className="text-4xl md:text-5xl font-serif text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mt-2">
                  {plan.description}
                </p>
              </div>

              <ul className="mt-6 space-y-3">
                {plan.features.map((feature, j) => (
                  <li
                    key={j}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <BookDialog
                dialogTriggerChild={
                  <div
                    suppressHydrationWarning={false}
                    className={`w-full mt-8 py-3 px-6 rounded-lg font-medium transition-colors ${
                      plan.popular
                        ? "bg-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-secondary border border-primary text-foreground hover:bg-accent/30"
                    }`}
                  >
                    Book
                  </div>
                }
                serviceType={plan.name}
                serviceDescription={plan.description}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-20">
        <ContactForm
          title="Contact Us"
          description="Have questions or need a custom quote? Get in touch with us."
        />
      </div>
    </section>
  );
}

"use client";

import { useState, useRef } from "react";
import SplitHeading from "@/components/split-heading";
import RevealText from "@/components/reveal-text";
import Button from "@/components/button";
import ContactForm from "@/components/form";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const tiers = [
  {
    id: "lite",
    name: "ESSENTIALS",
    price: "FROM $300",
    description:
      "Focused launch sites, editorial platforms, and polished brand surfaces built to tell one clear story well.",
    example: "The Developer Marketing Book",
    features: [
      "Launch / Editorial Site",
      "Responsive Frontend",
      "Conversion Structure",
      "SEO + Performance",
    ],
    color: "bg-faxx-blue",
  },
  {
    id: "pro",
    name: "DYNAMIC APPS",
    price: "FROM $800",
    description:
      "Commerce, event, community, or customer-facing apps with real user flows, sign-in states, and operational logic.",
    example: "Crunchies Online Ordering",
    features: [
      "Checkout / Booking Flows",
      "Authentication States",
      "Dashboards or Member Areas",
      "Custom Integrations",
    ],
    color: "bg-faxx-cyan",
  },
  {
    id: "elite",
    name: "SAAS & SYSTEMS",
    price: "FROM $2000",
    description:
      "Role-based platforms for teams or operations that need structured data, permissions, and long-term workflow design.",
    example: "Merphils (In Progress)",
    features: [
      "RBAC + Multi-Tenant Logic",
      "Admin / Ops Workflows",
      "Scalable Data Models",
      "Platform Architecture",
    ],
    color: "bg-faxx-lime",
  },
  {
    id: "custom",
    name: "BESPOKE",
    price: "LET'S TALK",
    description:
      "Large product ecosystems that span discovery, onboarding, wallets, dashboards, host tools, or phased product rollouts.",
    example: "Grooovy (In Progress)",
    features: [
      "Multi-Surface Product Design",
      "Customer + Internal Tools",
      "Custom Integrations",
      "Long-Term Delivery Partner",
    ],
    color: "bg-zinc-800",
  },
];

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export default function Page() {
  const [selectedTier, setSelectedTier] = useState<string | null>(null);

  const closeModal = () => setSelectedTier(null);

  return (
    <main className="flex-1 w-full flex flex-col pt-[84px] relative z-50">
      {/* Decorative Grid Background */}
      <div
        className="fixed inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(17, 17, 17, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(17, 17, 17, 0.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      ></div>

      <section className="w-full px-6 md:px-12 lg:px-24 py-16 md:py-24 grid gap-16">
        <div className="border-b-8 border-faxx-dark dark:border-gray-700 pb-8 md:pb-12">
          <SplitHeading
            as="h1"
            className="font-display text-3xl md:text-7xl lg:text-9xl uppercase tracking-tighter leading-[1.1]"
            lines={[
              <span key="line-1">WE BUILD</span>,
              <span key="line-2" className="text-faxx-blue dark:text-faxx-cyan">
                EVERYTHING.
              </span>,
            ]}
          />
          <RevealText
            as="p"
            className="font-mono text-sm md:text-base mt-6 text-faxx-blue dark:text-faxx-lime font-bold uppercase tracking-widest"
          >
            Choose a package that fits your needs or request a custom quote.
          </RevealText>
        </div>

        {/* Pricing Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="group relative bg-white dark:bg-zinc-900 border-4 border-faxx-dark dark:border-gray-700 p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 hover:shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] dark:hover:shadow-[12px_12px_0px_0px_rgba(0,229,255,1)]"
            >
              <div
                className={`absolute top-0 left-0 w-full h-2 ${tier.color}`}
              ></div>
              <h3 className="font-display text-3xl mb-2 dark:text-white">
                {tier.name}
              </h3>
              <div className="font-mono text-xl font-bold mb-4 text-faxx-blue dark:text-faxx-cyan">
                {tier.price}
              </div>
              <p className="text-gray-600 dark:text-gray-400 font-body mb-2">
                {tier.description}
              </p>
              <div className="font-mono text-[10px] uppercase tracking-widest text-faxx-dark/40 dark:text-white/40 mb-8">
                Like: {tier.example}
              </div>

              <div className="flex-1 -mx-8 border-t border-gray-100 dark:border-zinc-800 mb-8">
                {tier.features.map((feature) => (
                  <div
                    key={feature}
                    className="px-8 py-3 border-b border-gray-100 dark:border-zinc-800 font-mono text-xs sm:text-sm uppercase tracking-tight dark:text-gray-400"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <Button
                onClick={() => setSelectedTier(tier.id)}
                className="w-full !py-4 group-hover:bg-white dark:group-hover:bg-black group-hover:text-faxx-dark dark:group-hover:text-white"
              >
                SELECT {tier.name}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <Dialog
        open={!!selectedTier}
        onOpenChange={(open) => !open && closeModal()}
      >
        <DialogContent>
          <DialogHeader className="mb-8">
            <div className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-faxx-blue dark:text-faxx-cyan mb-2">
              Project Brief
            </div>
            <DialogTitle className="text-4xl md:text-5xl">
              Tell me about your <br />
              <span className="text-faxx-coral dark:text-faxx-lime">
                next big thing.
              </span>
            </DialogTitle>
          </DialogHeader>

          <ContactForm initialTier={selectedTier} onCancel={closeModal} />
        </DialogContent>
      </Dialog>
    </main>
  );
}

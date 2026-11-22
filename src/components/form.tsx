"use client";

import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./button";
import { sendEmail } from "@/utils/send-email";
import Link from "next/link";
import { useRef } from "react";

export type FormInputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  projectDescription: string;
  budgetRange: string;
  projectTimeline: string;
  preferredContactMethod: string;
  tierName?: string;
};

function SuccessMessage() {
  return (
    <div className="text-center grid gap-6 p-6 md:p-10 bg-white dark:bg-[#0A0A0A] border border-black/15 dark:border-white/15 max-w-2xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-black dark:text-white leading-none">
        Thanks for getting in touch
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-body leading-relaxed">
        I’ll review your brief and follow up about next steps.
      </p>
      <Link href="/" className="mx-auto mt-2">
        <Button className="!px-8 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
          <span>Return home</span>
        </Button>
      </Link>
    </div>
  );
}

export default function ContactForm({ initialTier, onCancel }: { initialTier?: string | null, onCancel?: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<FormInputs>({
    defaultValues: {
      fullName: "",
      email: "",
      phoneNumber: "",
      businessName: "",
      projectDescription: "",
      budgetRange: initialTier === 'lite' ? 'FROM $300' : initialTier === 'pro' ? 'FROM $800' : initialTier === 'elite' ? 'FROM $2000' : 'VARIABLE',
      projectTimeline: "",
      preferredContactMethod: "",
      tierName: initialTier === 'lite' ? 'ESSENTIALS' : initialTier === 'pro' ? 'DYNAMIC APPS' : initialTier === 'elite' ? 'SAAS & SYSTEMS' : initialTier === 'custom' ? 'BESPOKE' : 'GENERAL INQUIRY',
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await sendEmail(data);
    } catch {
      setSubmitError("Your brief couldn’t be sent. Try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full min-w-0 px-3 sm:px-4 py-3 border border-black/20 dark:border-white/20 rounded-none bg-white dark:bg-black text-black dark:text-white font-body text-base md:text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all";
  const labelClasses = "block font-mono text-[11px] font-bold uppercase tracking-widest mb-1.5 text-black dark:text-zinc-400";
  const errorClasses = "font-mono text-[10px] mt-1 font-bold uppercase text-zinc-600 dark:text-zinc-400";

  if (isSubmitSuccessful && !submitError) {
    return <SuccessMessage />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-4 sm:space-y-6">
      <p className="text-sm text-zinc-600 dark:text-zinc-400">Fields marked with * are required.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="fullName" className={labelClasses}>Full name *</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Enter your name." })}
            className={inputClasses}
          />
          {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>Email address *</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Enter your email address." })}
            className={inputClasses}
            placeholder="you@example.com"
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="phoneNumber" className={labelClasses}>Phone number</label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
            className={inputClasses}
            placeholder="Include country code"
          />
        </div>
        <div>
          <label htmlFor="businessName" className={labelClasses}>Business name</label>
          <input
            type="text"
            id="businessName"
            {...register("businessName")}
            className={inputClasses}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div>
          <label htmlFor="projectTimeline" className={labelClasses}>Project timeline</label>
          <select
            id="projectTimeline"
            {...register("projectTimeline")}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="ASAP">As soon as possible</option>
            <option value="1-2 MONTHS">1 to 2 months</option>
            <option value="3+ MONTHS">3 months or more</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredContactMethod" className={labelClasses}>Preferred contact method</label>
          <select
            id="preferredContactMethod"
            {...register("preferredContactMethod")}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="EMAIL">Email</option>
            <option value="WHATSAPP">WhatsApp or phone</option>
            <option value="VIDEO CALL">Video call</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectDescription" className={labelClasses}>Project brief *</label>
        <p id="projectDescriptionHint" className="mb-2 text-sm text-zinc-600 dark:text-zinc-400">
          Describe what you want to build or improve, who it’s for, and what it needs to do. Include a link if you already have a site.
        </p>
        <textarea
          id="projectDescription"
          aria-describedby="projectDescriptionHint"
          {...register("projectDescription", { required: "Enter a short description of your project." })}
          className={`${inputClasses} h-32 md:h-40 resize-none`}
        />
        {errors.projectDescription && <p className={errorClasses}>{errors.projectDescription.message}</p>}
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`flex-1 !whitespace-normal !px-4 !py-4 !text-sm sm:!py-5 sm:!text-lg dark:!border-white dark:!bg-white dark:!text-black dark:hover:!border-zinc-200 dark:hover:!bg-zinc-200 ${isSubmitting ? "opacity-50" : ""}`}
        >
          {isSubmitting ? "Sending…" : "Send project brief"}
        </Button>
        {onCancel && (
          <button 
            type="button"
            onClick={onCancel}
            className="px-8 py-4 font-mono font-bold uppercase text-sm border-2 border-transparent hover:border-black dark:hover:border-zinc-700 transition-all"
          >
            CANCEL
          </button>
        )}
      </div>
      {submitError && <p role="alert" className={errorClasses}>{submitError}</p>}
    </form>
  );
}

"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
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
      <div className="bg-black px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-white dark:bg-white dark:text-black w-max mx-auto">
        Transmission Confirmed
      </div>
      <h2 className="text-3xl md:text-5xl font-display uppercase tracking-tighter text-black dark:text-white leading-none">
        LET&apos;S GET <br />
        <span className="text-zinc-500 dark:text-zinc-400">STARTED.</span>
      </h2>
      <p className="text-zinc-600 dark:text-zinc-400 text-base md:text-lg font-body leading-relaxed">
        I&apos;ve received your project brief. I&apos;ll review the architecture requirements and respond within 24 hours.
      </p>
      <Link href="/" className="mx-auto mt-2">
        <Button className="!px-8 !py-3 !text-xs font-mono font-bold tracking-widest uppercase">
          <span>RETURN HOME</span>
        </Button>
      </Link>
    </div>
  );
}

export default function ContactForm({ initialTier, onCancel }: { initialTier?: string | null, onCancel?: () => void }) {
  const {
    register,
    handleSubmit,
    setValue,
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
    } catch (error) {
      setSubmitError("Transmission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses = "w-full px-4 py-3 border border-black/20 dark:border-white/20 rounded-none bg-white dark:bg-black text-black dark:text-white font-body text-sm focus:outline-none focus:border-black dark:focus:border-white transition-all";
  const labelClasses = "block font-mono text-[11px] font-bold uppercase tracking-widest mb-1.5 text-black dark:text-zinc-400";
  const errorClasses = "font-mono text-[10px] mt-1 font-bold uppercase text-zinc-600 dark:text-zinc-400";

  if (isSubmitSuccessful && !submitError) {
    return <SuccessMessage />;
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className={labelClasses}>Full Name *</label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Name is required" })}
            className={inputClasses}
            placeholder="YOUR NAME"
          />
          {errors.fullName && <p className={errorClasses}>{errors.fullName.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className={labelClasses}>Email Address *</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: "Email is required" })}
            className={inputClasses}
            placeholder="EMAIL@EXAMPLE.COM"
          />
          {errors.email && <p className={errorClasses}>{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phoneNumber" className={labelClasses}>Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber")}
            className={inputClasses}
            placeholder="+1 ..."
          />
        </div>
        <div>
          <label htmlFor="businessName" className={labelClasses}>Business Name</label>
          <input
            type="text"
            id="businessName"
            {...register("businessName")}
            className={inputClasses}
            placeholder="COMPANY NAME"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="projectTimeline" className={labelClasses}>Timeline</label>
          <select
            id="projectTimeline"
            {...register("projectTimeline")}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="ASAP">ASAP</option>
            <option value="1-2 MONTHS">1-2 MONTHS</option>
            <option value="3+ MONTHS">3+ MONTHS</option>
          </select>
        </div>
        <div>
          <label htmlFor="preferredContactMethod" className={labelClasses}>Preferred Contact</label>
          <select
            id="preferredContactMethod"
            {...register("preferredContactMethod")}
            className={`${inputClasses} cursor-pointer`}
          >
            <option value="EMAIL">EMAIL</option>
            <option value="WHATSAPP">WHATSAPP / PHONE</option>
            <option value="VIDEO CALL">VIDEO CALL</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="projectDescription" className={labelClasses}>Project Brief *</label>
        <textarea
          id="projectDescription"
          {...register("projectDescription", { required: "Tell me a bit about the project" })}
          className={`${inputClasses} h-32 md:h-40 resize-none`}
          placeholder="DESCRIBE YOUR VISION..."
        />
        {errors.projectDescription && <p className={errorClasses}>{errors.projectDescription.message}</p>}
      </div>

      <div className="flex flex-col md:flex-row gap-4 pt-4">
        <Button
          type="submit"
          disabled={isSubmitting}
          className={`flex-1 !py-5 !text-lg dark:!border-white dark:!bg-white dark:!text-black dark:hover:!border-zinc-200 dark:hover:!bg-zinc-200 ${isSubmitting ? "opacity-50" : ""}`}
        >
          {isSubmitting ? "TRANSMITTING..." : "SEND PROJECT BRIEF"}
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
      {submitError && <p className={errorClasses}>{submitError}</p>}
    </form>
  );
}

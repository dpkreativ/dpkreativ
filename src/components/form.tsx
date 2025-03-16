"use client";

import React, { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion"; // For animations
import Button from "./button";
import { sendEmail } from "@/utils/send-email";
import Link from "next/link";

// Enhanced form inputs type with optional fields and validation hints
export type FormInputs = {
  fullName: string;
  email: string;
  phoneNumber?: string;
  businessName?: string;
  projectType: string;
  projectDescription: string;
  budgetRange: string;
  projectTimeline: string;
  preferredContactMethod: string;
  referralSource?: string;
  additionalNotes?: string;
};

export default function ContactForm() {
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
      projectType: "",
      projectDescription: "",
      budgetRange: "",
      projectTimeline: "",
      preferredContactMethod: "",
      referralSource: "",
      additionalNotes: "",
    },
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);
      await sendEmail(data);
    } catch (error) {
      setSubmitError("Failed to send your message. Please try again later.");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Success message component
  const SuccessMessage = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center grid gap-5 p-8 bg-gradient-to-r from-green-50 to-green-100 rounded-xl max-w-2xl"
    >
      <h2 className="text-3xl font-bold text-green-800">
        Thank You for Reaching Out!
      </h2>
      <p className="text-green-700 text-lg">
        Your project details have been received successfully. I will review your
        submission and get back to you within 24-48 hours to discuss your needs
        in detail.
      </p>
      <Link href="/" className=" mx-auto">
        <Button>
          <i className="ri-home-5-line text-green-800"></i>
          <span className="text-green-800">Go To Home</span>
        </Button>
      </Link>
    </motion.div>
  );

  return (
    <div>
      {isSubmitSuccessful && !submitError ? (
        <SuccessMessage />
      ) : (
        <motion.form
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-3xl"
        >
          <p className="mb-8">
            With over 5 years of experience, I specialize in delivering
            high-quality, tailored web solutions. Fill out the form below to get
            started.
          </p>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block font-semibold mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                {...register("fullName", { required: "Full name is required" })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="John Doe"
              />
              {errors.fullName && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.fullName.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block font-semibold mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+\.\S+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="john.doe@example.com"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <label htmlFor="phoneNumber" className="block font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                {...register("phoneNumber", {
                  pattern: {
                    value: /^\+?[1-9]\d{1,14}$/,
                    message: "Invalid phone number format",
                  },
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="+1 (555) 123-4567"
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>

            {/* Business Name (Optional) */}
            <div>
              <label
                htmlFor="businessName"
                className="block font-semibold mb-2"
              >
                Business Name
              </label>
              <input
                type="text"
                id="businessName"
                {...register("businessName")}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                placeholder="Acme Corp"
              />
            </div>
          </div>

          {/* Project Type */}
          <div className="mt-6">
            <label htmlFor="projectType" className="block font-semibold mb-2">
              Project Type <span className="text-red-500">*</span>
            </label>
            <select
              id="projectType"
              {...register("projectType", {
                required: "Please select a project type",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
              <option value="">Select Project Type</option>
              <option value="ecommerce">E-commerce Website</option>
              <option value="portfolio">Portfolio/Business Site</option>
              <option value="webapp">Custom Web Application</option>
              <option value="redesign">Website Redesign</option>
              <option value="other">Other</option>
            </select>
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.projectType.message}
              </p>
            )}
          </div>

          {/* Project Description */}
          <div className="mt-6">
            <label
              htmlFor="projectDescription"
              className="block font-semibold mb-2"
            >
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="projectDescription"
              {...register("projectDescription", {
                required: "Please provide a project description",
                minLength: {
                  value: 20,
                  message: "Please provide at least 20 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all h-40 resize-y"
              placeholder="Tell me about your project goals, features, and any specific requirements..."
            />
            {errors.projectDescription && (
              <p className="text-red-500 text-sm mt-1">
                {errors.projectDescription.message}
              </p>
            )}
          </div>

          {/* Budget and Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <label htmlFor="budgetRange" className="block font-semibold mb-2">
                Budget Range <span className="text-red-500">*</span>
              </label>
              <select
                id="budgetRange"
                {...register("budgetRange", {
                  required: "Please select a budget range",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              >
                <option value="">Select Budget Range</option>
                <option value="$1k-$5k">$1,000 - $5,000</option>
                <option value="$5k-$10k">$5,000 - $10,000</option>
                <option value="$10k-$25k">$10,000 - $25,000</option>
                <option value="$25k+">$25,000+</option>
              </select>
              {errors.budgetRange && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.budgetRange.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="projectTimeline"
                className="block font-semibold mb-2"
              >
                Project Timeline <span className="text-red-500">*</span>
              </label>
              <select
                id="projectTimeline"
                {...register("projectTimeline", {
                  required: "Please select a timeline",
                })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
              >
                <option value="">Select Timeline</option>
                <option value="1-4 weeks">1-4 Weeks</option>
                <option value="1-2 months">1-2 Months</option>
                <option value="2-6 months">2-6 Months</option>
                <option value="6+ months">6+ Months</option>
              </select>
              {errors.projectTimeline && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.projectTimeline.message}
                </p>
              )}
            </div>
          </div>

          {/* Preferred Contact Method */}
          <div className="mt-6">
            <label className="block font-semibold mb-2">
              Preferred Contact Method <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-6">
              {["Email", "Phone", "Video Call"].map((method) => (
                <label key={method} className="inline-flex items-center">
                  <input
                    type="radio"
                    value={method}
                    {...register("preferredContactMethod", {
                      required: "Please select a contact method",
                    })}
                    className="form-radio text-indigo-600 h-5 w-5"
                  />
                  <span className="ml-2">{method}</span>
                </label>
              ))}
            </div>
            {errors.preferredContactMethod && (
              <p className="text-red-500 text-sm mt-1">
                {errors.preferredContactMethod.message}
              </p>
            )}
          </div>

          {/* Referral Source (Optional) */}
          <div className="mt-6">
            <label
              htmlFor="referralSource"
              className="block font-semibold mb-2"
            >
              How Did You Find Me?
            </label>
            <select
              id="referralSource"
              {...register("referralSource")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
            >
              <option value="">Select an option (optional)</option>
              <option value="portfolio">Portfolio Website</option>
              <option value="recommendation">Recommendation</option>
              <option value="search">Search Engine</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Additional Notes */}
          <div className="mt-6">
            <label
              htmlFor="additionalNotes"
              className="block font-semibold mb-2"
            >
              Additional Notes
            </label>
            <textarea
              id="additionalNotes"
              {...register("additionalNotes")}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all h-32 resize-y"
              placeholder="Anything else you'd like me to know?"
            />
          </div>

          {/* Submit Button and Error Message */}
          <div className="mt-8 text-center">
            {submitError && <p className="text-red-500 mb-4">{submitError}</p>}
            <Button
              type="submit"
              disabled={isSubmitting}
              className={`mx-auto md:mr-0 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin h-5 w-5 mr-2 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    />
                  </svg>
                  Submitting...
                </span>
              ) : (
                <>
                  <i className="ri-send-plane-fill"></i>
                  <span>Submit Project Details</span>
                </>
              )}
            </Button>
          </div>
        </motion.form>
      )}
    </div>
  );
}

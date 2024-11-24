import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import Button from "./button";

type FormInputs = {
  fullName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  projectDescription: string;
  budgetRange: string;
  projectTimeline: string;
  preferredContactMethod: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit: SubmitHandler<FormInputs> = async (data) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center p-6 bg-green-100 rounded-lg max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold text-green-800 mb-2">Thank You!</h2>
        <p className="text-green-700">
          Your message has been submitted successfully. I'll be in touch soon!
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-4xl font-serif mb-6 text-gray-800">Contact Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-bold mb-2"
          >
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: "Full name is required" })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="phoneNumber"
            className="block text-gray-700 font-bold mb-2"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm mt-1">
              {errors.phoneNumber.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="businessName"
            className="block text-gray-700 font-bold mb-2"
          >
            Business Name
          </label>
          <input
            type="text"
            id="businessName"
            {...register("businessName", {
              required: "Business name is required",
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.businessName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.businessName.message}
            </p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="projectDescription"
          className="block text-gray-700 font-bold mb-2"
        >
          Project Description
        </label>
        <textarea
          id="projectDescription"
          {...register("projectDescription", {
            required: "Project description is required",
          })}
          className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
        ></textarea>
        {errors.projectDescription && (
          <p className="text-red-500 text-sm mt-1">
            {errors.projectDescription.message}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="budgetRange"
            className="block text-gray-700 font-bold mb-2"
          >
            Budget Range
          </label>
          <select
            id="budgetRange"
            {...register("budgetRange", {
              required: "Budget range is required",
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a range</option>
            <option value="<100k">&lt;100k</option>
            <option value="100k-500k">100k-500k</option>
            <option value="500k-1M">500k-1M</option>
            <option value="1M+">1M+</option>
          </select>
          {errors.budgetRange && (
            <p className="text-red-500 text-sm mt-1">
              {errors.budgetRange.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label
            htmlFor="projectTimeline"
            className="block text-gray-700 font-bold mb-2"
          >
            Project Timeline
          </label>
          <select
            id="projectTimeline"
            {...register("projectTimeline", {
              required: "Project timeline is required",
            })}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a timeline</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="1 month">1 month</option>
            <option value="2-3 months">2-3 months</option>
          </select>
          {errors.projectTimeline && (
            <p className="text-red-500 text-sm mt-1">
              {errors.projectTimeline.message}
            </p>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2">
            Preferred Contact Method
          </label>
          <div className="space-y-2">
            {["Phone", "Email", "Video Call"].map((method) => (
              <label key={method} className="inline-flex items-center mr-4">
                <input
                  type="radio"
                  value={method}
                  {...register("preferredContactMethod", {
                    required: "Preferred contact method is required",
                  })}
                  className="form-radio text-blue-500"
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

        <div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className={`${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>
      </div>
    </form>
  );
}

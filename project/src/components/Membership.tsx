"use client";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface Plan {
  id: number;
  name: string;
  // price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const API_URL = import.meta.env.VITE_API_URL;

const plans: Plan[] = [
  { id: 1, name: "Basic",
    //  price: "₹0 / Free", 
    features: ["1 Trial Access", "Limited Features", "Community Support"], cta: "Choose Basic" },
  { id: 2, name: "Group Classes",
    //  price: "₹12k / month",
      features: ["Full Access to Core Features", "Priority Support", "Free Onboarding & Setup"], cta: "Choose Standard", highlight: true },
  { id: 3, name: "One To One",
    //  price: "₹30k / 3 months",
      features: ["Standard Features + Advanced Tools", "Dedicated Account Manager", "Exclusive Resources & Consultations"], cta: "Choose Premium" },
];

const Membership: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Add state for validation errors
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChoosePlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setIsModalOpen(true);
    // Reset errors when opening the modal
    setErrors({ name: "", email: "", phone: "" });
  };

  // 2. Create the validation function
  const validateForm = (data: { name: string; email: string; phone: string; }) => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    if (!data.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(data.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedPlan) return;

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      phone: formData.get('phone') as string,
      message: formData.get('message') as string,
      planName: selectedPlan.name,
      // planPrice: selectedPlan.price,
    };

    // 3. Run validation before submitting
    if (!validateForm(data)) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${API_URL}/membership`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      toast.success('Success! We will contact you shortly.');
      setIsModalOpen(false);
    } catch (error) {
      toast.error('Submission failed. Please try again.');
      console.log("error in membership",error);
        } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3">
              MEMBERSHIP
            </h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white mb-4">
              CHOOSE YOUR PLAN
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed px-2 sm:px-4">
              Flexible membership options to fit your fitness journey. Enjoy world-class facilities, expert trainers, and a motivating community.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col items-center text-white border-2 transition-transform duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.highlight
                    ? "border-yellow-400 ring-1 ring-yellow-400/30 shadow-yellow-400/20"
                    : "border-gray-200/30"
                } bg-gradient-to-b from-blue-950 to-blue-900`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 sm:-top-5 px-4 py-1 rounded-full bg-yellow-400 text-blue-950 font-bold text-xs sm:text-sm shadow-md">
                    POPULAR
                  </div>
                )}
                <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-3 text-center">
                  {plan.name}
                </h4>
                
                <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg w-full flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 mt-1 bg-white flex-shrink-0"></span>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => handleChoosePlan(plan)}
                  className={`w-full sm:w-auto px-6 py-3 rounded-full font-semibold text-sm sm:text-base md:text-lg transition-all duration-300 border-2 shadow-md hover:shadow-xl ${
                    plan.highlight
                      ? "border-yellow-400 bg-yellow-400 text-blue-950 hover:bg-yellow-500 hover:border-yellow-500"
                      : "border-white hover:bg-white hover:text-blue-950"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {isModalOpen && selectedPlan && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md">
              <div className="p-6 border-b text-center">
                <h3 className="text-2xl font-bold text-blue-950">Join the {selectedPlan.name} Plan</h3>
                <p className="text-gray-500 mt-1">Enter your details to proceed</p>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="p-6 space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input type="text" id="name" name="name" required className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="John Medis"/>
                    {/* 4. Display the name error */}
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="your@gmail.com"/>
                    {/* 4. Display the email error */}
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    {/* 4. Display the phone error */}
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message (Optional)</label>
                    <textarea id="message" name="message" rows={3} className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500" placeholder="Any questions or specific requirements?"></textarea>
                  </div>
                </div>
                <div className="p-6 bg-gray-50 rounded-b-lg flex justify-end gap-3">
                  <button type="button" onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm font-medium text-gray-800 hover:bg-gray-100">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="px-4 py-2 border rounded-lg text-sm font-medium text-white shadow-sm disabled:opacity-70 bg-blue-950 hover:bg-blue-800">
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </section>
      
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};

export default Membership;

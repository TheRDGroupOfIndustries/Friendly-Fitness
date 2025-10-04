import React from "react";

interface Plan {
  id: number;
  name: string;
  price: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}

const plans: Plan[] = [
  {
    id: 1,
    name: "Basic",
    price: "₹0 / Free",
    features: ["1 Trial Access", "Limited Features", "Community Support"],
    cta: "Choose Basic",
  },
  {
    id: 2,
    name: "Standard",
    price: "₹12k / month",
    features: [
      "Full Access to Core Features",
      "Priority Support",
      "Free Onboarding & Setup",
    ],
    cta: "Choose Standard",
    highlight: true,
  },
  {
    id: 3,
    name: "Premium",
    price: "₹30k / 3 months",
    features: [
      "Standard Features + Advanced Tools",
      "Dedicated Account Manager",
      "Exclusive Resources & Consultations",
    ],
    cta: "Choose Premium",
  },
];

const Membership: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-blue-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

        {/* Plans Grid */}
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
              {/* Highlight Badge */}
              {plan.highlight && (
                <div className="absolute -top-4 sm:-top-5 px-4 py-1 rounded-full bg-yellow-400 text-blue-950 font-bold text-xs sm:text-sm shadow-md">
                  POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-6 mb-3 text-center">
                {plan.name}
              </h4>

              {/* Price */}
              <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-5 sm:mb-6 text-center">
                {plan.price}
              </div>

              {/* Features */}
              <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-sm sm:text-base md:text-lg w-full flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 mt-1 bg-white flex-shrink-0"></span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
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
    </section>
  );
};

export default Membership;

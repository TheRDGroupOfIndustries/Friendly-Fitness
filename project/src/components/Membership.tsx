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
    <section className="py-16 sm:py-20" style={{ backgroundColor: "#090E26" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4"
            id="title"
          >
            <span className="text-white">MEMBER</span>
            <span style={{ color: "#fff" }}>SHIP</span>
          </h2>
          <h3 className="text-xl sm:text-2xl text-white mb-4">
            CHOOSE YOUR PLAN
          </h3>
          <p className="text-sm sm:text-base md:text-lg text-white max-w-2xl mx-auto px-2">
            Flexible membership options to fit your fitness journey. Enjoy
            world-class facilities, expert trainers, and a motivating community.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl shadow-lg text-white bg-blue-950 p-6 sm:p-8 flex flex-col items-center border-2 transition-transform duration-300 hover:scale-105 ${
                plan.highlight ? "border-yellow-400" : "border-gray-200"
              }`}
            >
              <h4 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 text-center">
                {plan.name}
              </h4>
              <div className="text-xl sm:text-3xl md:text-4xl font-extrabold mb-6 text-center">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-3 text-sm sm:text-base md:text-lg">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className="flex items-start sm:items-center text-left sm:text-center"
                  >
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full mr-3 bg-white mt-1 sm:mt-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg transition-all duration-300 border-2 border-white hover:bg-white hover:text-blue-950">
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

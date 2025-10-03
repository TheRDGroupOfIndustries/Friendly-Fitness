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
    features: [" 1 Trial Access", "Limited Features", "Community Support"],
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
    <section className="py-20" style={{ backgroundColor: "#090E26" }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-5xl md:text-7xl font-bold text-white mb-4"
            id="title"
          >
            <span className="text-white">MEMBER</span>
            <span style={{ color: "#fff" }}>SHIP</span>
          </h2>
          <h3 className="text-2xl text-white mb-4">CHOOSE YOUR PLAN</h3>
          <p className="text-white max-w-2xl mx-auto">
            Flexible membership options to fit your fitness journey. Enjoy
            world-class facilities, expert trainers, and a motivating community.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-2xl shadow-lg text-white bg-blue-950 p-6 sm:p-8 flex flex-col items-center border-2 transition-transform duration-300 hover:scale-105 ${
                plan.highlight ? "border-yellow-400" : "border-gray-200"
              }`}
            >
              <h4 className="text-2xl text-white sm:text-3xl font-bold mb-2">
                {plan.name}
              </h4>
              <div className="text-2xl sm:text-4xl font-extrabold mb-6">
                {plan.price}
              </div>
              <ul className="mb-8 space-y-3 text-sm sm:text-lg">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-3 h-3 rounded-full mr-3 bg-white"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white hover:bg-white hover:text-blue-950">
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

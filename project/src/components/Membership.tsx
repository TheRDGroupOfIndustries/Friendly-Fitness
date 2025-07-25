import React from "react";

const plans = [
  {
    name: "Basic",
    price: "$29/mo",
    features: [
      "Access to gym equipment",
      "1 group class per week",
      "Locker room access",
    ],
    cta: "Choose Basic",
  },
  {
    name: "Standard",
    price: "$49/mo",
    features: [
      "All Basic features",
      "Unlimited group classes",
      "Free fitness assessment",
    ],
    cta: "Choose Standard",
    highlight: true,
  },
  {
    name: "Premium",
    price: "$79/mo",
    features: [
      "All Standard features",
      "Personal trainer (4 sessions/mo)",
      "Nutrition consultation",
    ],
    cta: "Choose Premium",
  },
];

const Membership: React.FC = () => (
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
        <div
          className="mx-auto w-16 h-1 mb-6"
          style={{ backgroundColor: "#090E26" }}
        ></div>
        <h3 className="text-2xl text-white mb-4">CHOOSE YOUR PLAN</h3>
        <p className="text-white max-w-2xl mx-auto">
          Flexible membership options to fit your fitness journey. Enjoy
          world-class facilities, expert trainers, and a motivating community.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-10">
        {plans.map((plan, idx) => (
          <div
            key={plan.name}
            className={`rounded-2xl shadow-lg text-white bg-blue-950 p-4 sm:p-8 flex flex-col items-center border-2 border-gray-200 transition-transform duration-300 hover:scale-105`}
          >
            <h4 className="text-xl sm:text-3xl font-bold mb-1 sm:mb-2 text-white">
              {plan.name}
            </h4>
            <div className="text-2xl sm:text-4xl font-extrabold mb-3 sm:mb-6">
              {plan.price}
            </div>
            <ul className="mb-6 sm:mb-8 space-y-2 sm:space-y-3 text-white text-sm sm:text-lg">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span
                    className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3 inline-block"
                    style={{ backgroundColor: "#fff" }}
                  ></span>
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-lg transition-all duration-300 border-2`}
              style={{
                backgroundColor: "transparent",
                color: "#fff",
                borderColor: "#090E26",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = "#fff";
                e.currentTarget.style.color = "#090E26";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#fff";
              }}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Membership;

import React from "react";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Amit S.",
    review:
      "Before Fitness Evolution, my workouts were inconsistent and I never saw results. Their personalized coaching + weekly check-ins transformed not just my body, but my confidence. I feel stronger, more energetic, and genuinely proud of my progress.",
  },
  {
    name: "Priya M.",
    review:
      "The video call training sessions are a game-changer. Even when I travel for work, I never skip a session. The coaches really care about your form and push you to improve every time.",
  },
  {
    name: "Rahul K.",
    review:
      "I used to struggle with motivation and had no idea how to eat properly. Fitness Evolution’s holistic plan—fitness + mindset + nutrition—helped me lose fat AND gain muscle. Best decision ever!",
  },
  {
    name: "Sneha T.",
    review:
      "What I love most is how Fitness Evolution treats fitness as a lifestyle, not just a workout. The monthly calls, mindset coaching, support—it’s a full journey, and I finally feel like I’m evolving every day.",
  },
];

const ClientReviews: React.FC = () => (
  <section className="py-8 xs:py-10 sm:py-12 md:py-16 lg:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10">
      {/* Header */}
      <div className="text-center mb-8 xs:mb-10 sm:mb-12 md:mb-14 lg:mb-16">
        <div className="relative inline-block">
          <h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-3 md:mb-4"
            id="title"
          >
            <span className="relative z-10">T</span>
            <span className="text-orange-500 relative z-10">ESTIMONIAL</span>
          </h2>
        </div>
        <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl text-gray-800 mb-2 sm:mb-3 md:mb-4 px-2">
          WHAT CLIENTS SAY
        </h3>
        <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-4 sm:px-6">
          Real transformations. Real people. Real results.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-7 sm:gap-8 md:gap-10 justify-items-center px-2 sm:px-0">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-lg p-4 xs:p-5 sm:p-6 pt-14 xs:pt-16 sm:pt-18 md:pt-20 w-full max-w-xs sm:max-w-sm text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Icon */}
            <div className="absolute -top-10 xs:-top-11 sm:-top-12 left-1/2 -translate-x-1/2 w-20 h-20 xs:w-22 xs:h-22 sm:w-24 sm:h-24 rounded-full border-4 border-orange-500 flex items-center justify-center bg-white shadow-md">
              <FaUserCircle className="text-orange-500 text-6xl sm:text-7xl" />
            </div>

            {/* Name */}
            <h4 className="font-semibold text-sm xs:text-base sm:text-lg mt-4 xs:mt-2 mb-5 xs:mb-6 sm:mb-8 px-2">
              {testimonial.name}
            </h4>

            {/* Quote Icon */}
            <div className="text-orange-500 text-4xl xs:text-5xl sm:text-6xl absolute top-4 xs:top-5 sm:top-6 left-1/2 -translate-x-1/2 opacity-20 select-none">
              &ldquo;
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-xs xs:text-sm sm:text-base leading-relaxed px-1 xs:px-2">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviews;

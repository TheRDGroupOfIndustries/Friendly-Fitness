import React from "react";

const testimonials = [
  {
    name: "DAVINC ATONE",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "Praesent aliquet diam et arcu laoreet pellentesque. Integer non euismod eros, vel ornare lorem. Morbi imperdiet tellus sed nulla tempus finibus. Donec sodales ante et nulla egestas, in rutrum arcu viverra.",
  },
  {
    name: "SOPHIA LEE",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "The trainers are amazing and the environment is so motivating! I have achieved my fitness goals faster than I imagined.",
  },
  {
    name: "JASON SMITH",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "A fantastic gym with top-notch equipment and a friendly community. Highly recommended for anyone serious about fitness.",
  },
  {
    name: "EMILY CLARK",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "I love the variety of classes and the support from the staff. Every session is challenging and fun!",
  },
];

const ClientReviews: React.FC = () => (
  <section className="py-12 sm:py-16 md:py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-14 md:mb-16">
        <div className="relative inline-block">
          <h2
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-4"
            id="title"
          >
            <span className="relative z-10">T</span>
            <span className="text-orange-500 relative z-10">ESTIMONIAL</span>
          </h2>
        </div>
        <h3 className="text-lg sm:text-2xl text-gray-800 mb-3 sm:mb-4">
          WHAT CLIENTS SAY
        </h3>
        <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          porttitor egestas orci, nec at velit vestibulum.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10 justify-items-center">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative bg-white rounded-xl shadow-lg p-6 pt-16 sm:pt-20 max-w-xs sm:max-w-sm md:max-w-md text-center transition-transform duration-300 hover:scale-105"
          >
            {/* Overlapping image */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-orange-500 overflow-hidden bg-white">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <h4 className="font-semibold text-base sm:text-lg mt-2 mb-6 sm:mb-8">
              {testimonial.name}
            </h4>

            {/* Quote Icon */}
            <div className="text-orange-500 text-5xl sm:text-6xl absolute top-6 left-1/2 -translate-x-1/2 opacity-20 select-none">
              &ldquo;
            </div>

            {/* Review Text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientReviews;

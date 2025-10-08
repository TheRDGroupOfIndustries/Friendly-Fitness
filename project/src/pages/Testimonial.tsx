import React from "react";
import { User, MessageSquareQuote } from "lucide-react"; 


const testimonials = [
  {
    name: "Amit S.",
    review:
      "Before Fitness Evolution, my workouts were inconsistent. Their personalized coaching transformed not just my body, but my confidence. I feel stronger, more energetic, and genuinely proud of my progress.",
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
      "What I love most is how Fitness Evolution treats fitness as a lifestyle, not just a workout. The monthly calls and mindset coaching make it a full journey. I finally feel like I’m evolving every day.",
  },
];

// --- Testimonial Component ---
const Testimonial: React.FC = () => (
  <div>
    {/* Hero/Header Section */}
    <section className="relative flex h-[350px] items-center justify-center overflow-hidden md:h-[400px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      <div className="relative z-10 px-4 text-center text-white">
        <h1 className="mb-4 flex items-center justify-center text-5xl font-bold md:text-7xl">
          <span className="mr-2 block h-1 w-8 bg-orange-500"></span>
          <span className="mr-2 text-white">TESTIMONIAL</span>
          <span className="mr-2 block h-1 w-8 bg-orange-500"></span>
        </h1>
        <h2 className="text-2xl font-light text-white md:text-3xl">
          WHAT CLIENT'S SAY
        </h2>
      </div>
    </section>

    {/* Testimonials Grid Section */}
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-5xl font-bold text-black md:text-7xl">
            <span className="text-orange-500">TESTIMONIALS</span>
          </h2>
          <h3 className="mb-4 text-2xl text-gray-800">WHAT OUR CLIENTS SAY</h3>
          <p className="mx-auto max-w-2xl text-gray-600">
            Real stories from real people who transformed their lives with our
            guidance and support.
          </p>
        </div>

        {/* Testimonials Grid - Now with consistent card height */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="relative mx-auto flex h-full max-w-md flex-col rounded-xl bg-white p-8 pt-16 text-center shadow-lg"
            >
              {/* Client Icon */}
              <div className="absolute -top-[50px] left-1/2 flex h-[100px] w-[100px] -translate-x-1/2 items-center justify-center rounded-full border-4 border-orange-500 bg-white">
                <User size={50} className="text-orange-500" />
              </div>

              {/* Background Quote Icon */}
              <MessageSquareQuote
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-gray-100"
                size={120}
              />

              {/* Card Content - relative and z-10 to appear above the background icon */}
              <div className="relative z-10 flex flex-grow flex-col">
                <h4 className="mb-2 text-xl font-bold">{testimonial.name}</h4>
                <p className="flex-grow text-gray-600 leading-relaxed">
                  "{testimonial.review}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Testimonial;
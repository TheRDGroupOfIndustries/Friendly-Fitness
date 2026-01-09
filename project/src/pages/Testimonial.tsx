import React from "react";
import SocialProofGallery from '../components/SocialProofGallery';
import ClientReviews from '../components/ClientReviews';

const Testimonial: React.FC = () => (
  <div className="bg-white">
    {/* Hero Header Section */}
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
          <span className="mr-4 block h-1 w-12 bg-orange-500"></span>
          <span className="text-white">TESTIMONIAL</span>
          <span className="ml-4 block h-1 w-12 bg-orange-500"></span>
        </h1>
        <h2 className="text-2xl font-light text-gray-200 md:text-3xl tracking-widest">
          WHAT CLIENTS SAY
        </h2>
      </div>
    </section>

    {/* Section 1: Video Transformation Stories */}
    <div className="py-10">
        <ClientReviews />
    </div>

    {/* Section 2: Real Conversations & Chat Proof */}
    <div className="pb-20">
        <SocialProofGallery />
    </div>
  </div>
);

export default Testimonial;

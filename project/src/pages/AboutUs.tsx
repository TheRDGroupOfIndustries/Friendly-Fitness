import React from "react";
import { Smile, Dumbbell, Coffee, Award } from "lucide-react";
import Trainers from "../components/Trainers";
import Img9 from "../assets/IMG-9.jpg";
import Img10 from "../assets/IMG-10.jpg";
import Img11 from "../assets/IMG-11.jpg";

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-black">
        <img
          src={Img9}
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white w-full px-4">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center mb-2">
              <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                ABOUT US
              </h1>
              <span className="block w-8 h-1 bg-orange-500 ml-2 "></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light mt-2 text-white">
              BUILDING A COMMUNITY OF ATHLETIC WOMEN
            </h2>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative flex justify-center">
          <div className="absolute top-6 left-6 w-full h-full bg-orange-500 rounded-lg -z-10"></div>
          <img
            src={Img10}
            alt="Athletic Woman"
            className="w-full max-w-md rounded-lg shadow-lg object-cover"
          />
        </div>
        {/* Text Side */}
        <div className="lg:pl-8">
          <div className="mb-8">
            <div className="flex items-center mb-2">
              {/* <span className="block w-8 h-1 bg-orange-500 mr-2"></span> */}
              <h2
                className="text-4xl md:text-5xl font-bold text-black"
                id="title"
              >
                ABOUT US
              </h2>
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-4">
              THE BEST GYM
            </h3>
          </div>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib
              ulum porttitor egestas orci, vitae ullamcorper risus consectetur
              id. Donec at velit vestibulum, rutrum massa quis, porttitor lorem.
              Donec et ultrices arcu. In odio augue, hendrerit nec nisl ac,
              rhoncus gravida mauris.
            </p>
            <p>
              Quisque consectetur ligula eu urna dignissim, nec mollis ipsum
              aliquam. Aliquam non est a ipsum facilisis scelerisque eu sed
              lectus.
            </p>
          </div>
          <button className="mt-8 bg-transparent border-2 border-orange-500 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            CONTACT US
          </button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black py-16 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(${Img11})` }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Smile className="mx-auto w-12 h-12 text-white mb-2" />
              <div className="text-4xl font-bold text-orange-500">11</div>
              <div className="text-white text-lg mt-2">Days Worked</div>
            </div>
            <div>
              <Dumbbell className="mx-auto w-12 h-12 text-white mb-2" />
              <div className="text-4xl font-bold text-orange-500">49</div>
              <div className="text-white text-lg mt-2">Project Finished</div>
            </div>
            <div>
              <Coffee className="mx-auto w-12 h-12 text-white mb-2" />
              <div className="text-4xl font-bold text-orange-500">316</div>
              <div className="text-white text-lg mt-2">Coffee Cup</div>
            </div>
            <div>
              <Award className="mx-auto w-12 h-12 text-white mb-2" />
              <div className="text-4xl font-bold text-orange-500">168</div>
              <div className="text-white text-lg mt-2">Client Satisfied</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2
                className="text-5xl md:text-7xl font-bold text-black mb-4"
                id="title"
              >
                <span className="relative z-10">T</span>
                <span className="text-orange-500 relative z-10">
                  ESTIMONIAL
                </span>
                {/* <span className="absolute -top-4 -left-8 w-16 h-1 bg-orange-500 transform -rotate-45"></span>
                <span className="absolute -bottom-4 -right-8 w-16 h-1 bg-orange-500 transform -rotate-45"></span> */}
              </h2>
              <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
            </div>
            <h3 className="text-2xl text-gray-800 mb-4">WHAT CLIENT'S SAY</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib
              ulum porttitor egestas orci, vinec at velit vestibulum.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
                  padding: "80px 32px 32px",
                  maxWidth: "400px",
                  margin: "auto",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {/* Overlapping image */}
                <div
                  style={{
                    position: "absolute",
                    top: "-50px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "4px solid #f7941d",
                    overflow: "hidden",
                    backgroundColor: "#fff",
                  }}
                >
                  <img
                    src={Img9}
                    alt="Client"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                {/* Name */}
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    marginTop: "-20px",
                    marginBottom: "50px",
                  }}
                >
                  DAVINC ATONE
                </div>

                {/* Quote icon */}
                <div
                  style={{
                    fontSize: "100px",
                    color: "#f7941d",
                    margin: "0",
                    position: "absolute",
                    userSelect: "none",
                    top: "20%",
                    left: "50%",
                    transform: "translateX(-50%)",
                  }}
                >
                  &ldquo;
                </div>

                {/* Quote Text */}
                <p
                  style={{
                    color: "#4a4a4a",
                    lineHeight: "1.7",
                    fontSize: "15px",
                  }}
                >
                  Praesent aliquet diam et arcu laoreet pellentesque. Integer
                  non euismod eros, vel ornare lorem. Morbi imperdiet tellus sed
                  nulla tempus finibus. Donec sodales ante et nulla egestas, in
                  rutrum arcu viverra.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trainers Section */}
      <Trainers />
    </div>
  );
};

export default AboutUs;

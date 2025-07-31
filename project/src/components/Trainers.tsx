import React, { useEffect, useState } from "react";
import Img16 from "../assets/IMG-16.jpg";
import Img1 from "../assets/IMG-1.jpg";
import Img2 from "../assets/IMG-2.jpg";
import { client } from "../sanityClient";

const notchSize = 40; // px
const orangeLineThickness = 6; // px

const Trainers: React.FC = () => {
  const [trainers, setTrainers] = useState([
    {
      id: 1,
      name: "RACHEL ADAM",
      role: "GYM TRAINER",
      image: Img16,
    },
    {
      id: 2,
      name: "KEAF SHEN",
      role: "GYM TRAINER",
      image: Img2,
    },
    {
      id: 3,
      name: "LEFEW D. LOEE",
      role: "GYM TRAINER",
      image: Img1,
    },
  ]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "trainerinfo"] {
            _id,
            name,
            role,
            image{asset->{url}}
          }`
      )
      .then((data) => setTrainers(data))
      .catch(console.error);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2
              className="text-5xl md:text-7xl font-bold text-black mb-4"
              id="title"
            >
              <span className="text-black">T</span>
              <span style={{ color: "#090E26" }}>RAINERS</span>
            </h2>
            {/* <div className="absolute -top-4 -left-8 w-16 h-1 transform -rotate-45" style={{ backgroundColor: '#090E26' }}></div>
            <div className="absolute -bottom-4 -right-8 w-16 h-1 transform -rotate-45" style={{ backgroundColor: '#090E26' }}></div> */}
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-2xl mx-auto">
            FOR ATHLETIC WOMEN
          </p>
          <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum
            porttitor egestas orci, vinec at velit vestibulum.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((trainer) => (
            <div
              key={trainer.id}
              className="relative bg-white overflow-hidden"
              style={{
                clipPath: `polygon(${notchSize}px 0, 100% 0, 100% 100%, 0 100%, 0 ${notchSize}px)`,
                WebkitClipPath: `polygon(${notchSize}px 0, 100% 0, 100% 100%, 0 100%, 0 ${notchSize}px)`,
                borderRadius: 0,
                boxShadow: "none",
              }}
            >
              {/* Slanting orange line along the cut */}
              <svg
                width={notchSize + 10}
                height={notchSize + 10}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  zIndex: 10,
                  pointerEvents: "none",
                }}
              >
                <line
                  x1={0}
                  y1={notchSize}
                  x2={notchSize}
                  y2={0}
                  stroke="#F97316"
                  strokeWidth={orangeLineThickness}
                  strokeLinecap="round"
                />
              </svg>
              {/* Trainer Image */}
              <div
                className="w-full h-96 flex items-center justify-center overflow-hidden"
                style={{ borderRadius: 0 }}
              >
                <img
                  src={trainer?.image?.asset?.url}
                  alt={trainer?.name}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: 0 }}
                />
              </div>
              {/* Trainer Info */}
              <div className="text-center py-6">
                <h3
                  className="text-xl font-bold mb-1"
                  style={{ color: "#F97316" }}
                >
                  {trainer?.name}
                </h3>
                <p className="text-gray-600 font-medium text-base">
                  {trainer?.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;

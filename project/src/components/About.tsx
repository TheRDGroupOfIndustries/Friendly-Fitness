import React from "react";
import Img1 from "../assets/IMG-1.jpg";
import Img2 from "../assets/IMG-2.jpg";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Images Side */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="space-y-2 sm:space-y-4">
              <img
                src={Img1}
                alt="Gym Equipment"
                className="w-full h-32 xs:h-40 sm:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-2 sm:space-y-4 pt-4 sm:pt-8">
              <img
                src={Img2}
                alt="Athletic Woman Training"
                className="w-full h-32 xs:h-40 sm:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-8">
            <div className="mb-6 sm:mb-8">
              <h2
                className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-2 sm:mb-4"
                id="title"
              >
                <span className="text-black">ABOUT</span>
                <span style={{ color: "#090E26" }}> US</span>
              </h2>
              <div
                className="w-10 sm:w-16 h-1"
                style={{ backgroundColor: "#090E26" }}
              ></div>
              <h3 className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-light text-gray-800">
                THE BEST GYM
              </h3>
            </div>

            <div className="space-y-4 sm:space-y-6 text-gray-600 leading-relaxed text-sm xs:text-base">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib
                ulum porttitor egestas orci, vitae ullamcorper risus consectetur
                id. Donec at velit vestibulum, rutrum massa quis, porttitor
                lorem. Donec et ultrices arcu. In odio augue, hendrerit nec nisl
                ac, rhoncus gravida mauris.
              </p>

              <p>
                Quisque consectetur ligula eu urna dignissim, nec mollis ipsum
                aliquam. Aliquam non est a ipsum facilisis scelerisque eu sed
                lectus.
              </p>
            </div>

            <button
              className="mt-6 sm:mt-8 bg-transparent border-2 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105"
              onClick={() => navigate("/aboutus")}
              style={{
                borderColor: "#090E26",
                color: "#090E26",
                backgroundColor: "transparent",
              }}
            >
              READ MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

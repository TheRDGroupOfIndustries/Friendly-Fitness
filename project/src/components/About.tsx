import React, { useEffect, useState } from "react";
// import Img1 from "../assets/IMG-1.jpg";
// import Img2 from "../assets/IMG-2.jpg";
import { useNavigate } from "react-router-dom";
import { client } from "../sanityClient";
import BlockContent from "@sanity/block-content-to-react";
import newImg1 from "../assets/newImg1.jpg"
import newImg2 from "../assets/newImg2.jpg"
import newImg4 from "../assets/newImg4.jpg"


const About: React.FC = () => {
  const [about, setAbout] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"]{
          _id,
          image1{asset->{url}},
          image2{asset->{url}},
          image3{asset->{url}},
          body
        }`
      )
      .then((data) => setAbout(data[0]))
      .catch(console.error);
  }, []);

  const serializers = {
    types: {
      block: (props: any) => {
        switch (props.node.style) {
          case "h1":
            return (
              <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900">
                {props.children}
              </h1>
            );
          case "h2":
            return (
              <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-gray-800">
                {props.children}
              </h2>
            );
          case "blockquote":
            return (
              <blockquote className="border-l-4 border-orange-500 pl-4 italic my-4 text-gray-700">
                {props.children}
              </blockquote>
            );
          default:
            return (
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-3">
                {props.children}
              </p>
            );
        }
      },
    },
    list: (props: any) =>
      props.type === "bullet" ? (
        <ul className="list-disc ml-5 mb-4">{props.children}</ul>
      ) : (
        <ol className="list-decimal ml-5 mb-4">{props.children}</ol>
      ),
    listItem: (props: any) => (
      <li className="text-sm sm:text-base mb-1">{props.children}</li>
    ),
    marks: {
      strong: (props: any) => (
        <strong className="font-bold text-gray-800">{props.children}</strong>
      ),
      em: (props: any) => (
        <em className="italic text-gray-700">{props.children}</em>
      ),
      link: (props: any) => (
        <a
          href={props.mark.href}
          className="text-orange-500 hover:underline break-words"
          target="_blank"
          rel="noopener noreferrer"
        >
          {props.children}
        </a>
      ),
    },
  };

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 items-center">
          {/* Image Side */}
          <div className="grid grid-cols-2 gap-3 sm:gap-5">
            <div className="space-y-3 sm:space-y-5">
              <img
                // src={about?.image1?.asset?.url || Img2}
                src={newImg4}
                alt="Gym Equipment"
                className="w-full h-auto xs:h-44 sm:h-64 md:h-72 lg:h-auto object-contain rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="space-y-3 sm:space-y-5 pt-3 sm:pt-6">
              <img
                // src={about?.image2?.asset?.url || Img1}
                src={newImg2}
                alt="Athletic Training"
                className="w-full h-auto xs:h-44 sm:h-64 md:h-72 lg:h-auto object-conatain rounded-xl shadow-lg hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:pl-6">
            {/* Title */}
            <div className="mb-8">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black mb-2">
                <span>ABOUT</span>{" "}
                <span className="text-orange-500">US</span>
              </h2>
              <div className="w-14 sm:w-20 h-1 bg-orange-500 mb-3"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-light text-gray-700 uppercase">
            Best online fitness platform
              </h3>
            </div>

            {/* Dynamic Content */}
            <div className="space-y-4 sm:space-y-6 text-gray-600 ">
              {about?.body ? (
                <BlockContent
                  blocks={about.body}
                  serializers={serializers}
                  projectId={client.config().projectId}
                  dataset={client.config().dataset}
                />
              ) : (
                <p className="text-sm sm:text-base text-gray-500">
                  Loading about section content...
                </p>
              )}
            </div>

            {/* Button */}
            <button
              onClick={() => navigate("/aboutus")}
              className="mt-6 sm:mt-8 border-2 border-orange-500 text-orange-500 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-orange-500 hover:text-white transform hover:scale-105"
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

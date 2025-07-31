import React, { useEffect, useState } from "react";
import Img1 from "../assets/IMG-1.jpg";
import Img2 from "../assets/IMG-2.jpg";
import { useNavigate } from "react-router-dom";
import { client } from "../sanityClient";
import BlockContent from "@sanity/block-content-to-react";

const About: React.FC = () => {
  const [about, setAbout] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "about"] {
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

  console.log(about);

  const serializers = {
    types: {
      block: (props: any) => {
        switch (props.node.style) {
          case "h1":
            return (
              <h1 className="text-4xl font-bold mb-4">{props.children}</h1>
            );
          case "h2":
            return (
              <h2 className="text-3xl font-semibold mb-3">{props.children}</h2>
            );
          case "blockquote":
            return (
              <blockquote className="border-l-4 border-orange-500 pl-4 italic my-4">
                {props.children}
              </blockquote>
            );
          default:
            return <p className="mb-4">{props.children}</p>; // Default paragraph styling
        }
      },
      // You can add more custom types here, like 'image' if you have images in your block content
      // image: ({ node }: any) => <img src={urlFor(node).url()} alt={node.alt} />,
    },
    list: (props: any) => {
      if (props.type === "bullet") {
        return <ul className="list-disc ml-6 mb-4">{props.children}</ul>;
      }
      return <ol className="list-decimal ml-6 mb-4">{props.children}</ol>;
    },
    listItem: (props: any) => <li className="mb-1">{props.children}</li>,
    marks: {
      strong: (props: any) => (
        <strong className="font-bold">{props.children}</strong>
      ),
      em: (props: any) => <em className="italic">{props.children}</em>,
      link: (props: any) => (
        <a href={props.mark.href} className="text-orange-500 hover:underline">
          {props.children}
        </a>
      ),
    },
  };

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Images Side */}
          <div className="grid grid-cols-2 gap-2 sm:gap-4">
            <div className="space-y-2 sm:space-y-4">
              <img
                // src={about?.image1 || Img2}
                src={about?.image1?.asset?.url || Img2}
                alt="Gym Equipment"
                className="w-full h-32 xs:h-40 sm:h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-2 sm:space-y-4 pt-4 sm:pt-8">
              <img
                // src={about?.image1 || Img1}
                src={about?.image2?.asset?.url || Img1}
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
              {about?.body && (
                <BlockContent
                  blocks={about.body}
                  serializers={serializers}
                  projectId={client.config().projectId}
                  dataset={client.config().dataset}
                />
              )}
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

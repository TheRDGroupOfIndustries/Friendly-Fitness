import React, { useEffect, useState } from "react";
import { client } from "../sanityClient";
import { useNavigate } from "react-router-dom";

const OurBlog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "blog"] | order(publishedAt desc)[0...6]{
          _id,
          title,
          slug,
          mainImage{asset->{url}},
          body
        }`
      )
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);

  const getShortText = (body) => {
    if (!body) return "";
    const textBlocks = body
      .filter((block) => block._type === "block")
      .map((block) => block.children.map((child) => child.text).join(" "));
    const combined = textBlocks.join(" ");
    return combined.length > 100
      ? combined.slice(0, 100).trim() + "..."
      : combined;
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center pb-24">
      {/* Divider */}
      <div
        className="w-full h-px bg-white"
        style={{ position: "relative", top: 0, left: 0 }}
      />

      {/* Header Section */}
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 pb-8">
        <div className="flex flex-col items-start md:items-center">
          <div className="relative mb-2">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              style={{ color: "#090E26" }}
              id="title"
            >
              OUR BLOGS
            </h2>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase text-black tracking-wide text-left md:text-center mb-12">
            Building a community of athletic
          </h3>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 sm:px-6 md:px-8 pb-16">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <img
                src={post?.mainImage?.asset?.url}
                alt={post?.title}
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
                  WebkitClipPath:
                    "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
                }}
              />
            </div>
            <div className="mt-4 sm:mt-6 text-black p-3 sm:p-4">
              <h4
                className="font-bold text-sm sm:text-base md:text-lg mb-2 text-black"
                style={{ lineHeight: 1.2 }}
              >
                {post?.title}
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                {getShortText(post?.body)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button
        onClick={() => navigate("/blog")}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-12 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-300 mt-6"
      >
        View All
      </button>
    </div>
  );
};

export default OurBlog;

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
      {/* Divider between navigation and header */}
      <div
        className="w-full h-px bg-white"
        style={{ position: "relative", top: 0, left: 0 }}
      />
      {/* Header Section */}
      <div className="w-full max-w-7xl px-4 pt-16 pb-8">
        <div className="flex flex-col items-start md:items-center">
          <div className="relative mb-2">
            <h2
              className="text-6xl md:text-7xl font-extrabold leading-tight"
              style={{ color: "#090E26" }}
              id="title"
            >
              OUR BLOGS
            </h2>
          </div>
          <h3 className="text-2xl md:text-3xl font-light uppercase text-black tracking-wide text-left md:text-center mb-12">
            Building a community of athletic
          </h3>
        </div>
      </div>
      {/* Blog Images and Content */}
     {/* Blog Images and Content */}
<div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
  {blogPosts.map((post, idx) => (
    <div
      key={idx}
      className="flex flex-col items-start bg-white shadow-md rounded-lg overflow-hidden"
    >
      <div className="relative w-full" style={{ aspectRatio: "4/2.3" }}>
        <img
          src={post?.mainImage?.asset?.url}
          alt={post?.title}
          className="w-full h-full object-cover"
          style={{
            clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
            WebkitClipPath:
              "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
            display: "block",
            aspectRatio: "16/9",
          }}
        />
      </div>
      <div className="mt-6 text-black p-4">
        <h4 className="font-bold text-base md:text-lg mb-2 text-black" style={{ lineHeight: 1.2 }}>
          {post?.title}
        </h4>
        <p className="text-sm text-gray-700">{getShortText(post?.body)}</p>
      </div>
    </div>
  ))}
</div>


      <button
        onClick={() => navigate("/blog")}
        style={{
          backgroundColor: "rgb(249 115 22)",
          color: "white",
          padding: "1rem 3rem",
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          fontSize: "1.4rem",
          fontWeight: "bold",
        }}
      >
        View All
      </button>
    </div>
  );
};

export default OurBlog;

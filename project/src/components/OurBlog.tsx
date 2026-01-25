import React, { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";
import { useNavigate } from "react-router-dom";

const OurBlog: React.FC = () => {
  interface BlogPost {
    _id: string;
    title: string;
    slug: { current: string };
    mainImage: any; 
    body: any[];
  }

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc)[0...6]{
          _id,
          title,
          slug,
          mainImage, 
          body
        }`;

    client
      .fetch(query)
      .then((data) => setBlogPosts(data))
      .catch(console.error);
  }, []);

  interface BlogBodyBlock {
    _type: string;
    children: Array<{ text: string }>;
  }

  const getShortText = (body: BlogBodyBlock[]) => {
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
    <div className="bg-white min-h-screen flex flex-col items-center pb-16 xs:pb-20 sm:pb-24">
      {/* Divider */}
      <div className="w-full h-px bg-gray-200" />

      {/* Header Section */}
      <div className="w-full max-w-7xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 pt-8 xs:pt-10 sm:pt-12 md:pt-16 pb-6 xs:pb-7 sm:pb-8">
        <div className="flex flex-col items-start md:items-center">
          <div className="relative mb-2 sm:mb-3">
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              style={{ color: "#090E26" }}
              id="title"
            >
              OUR BLOGS
            </h2>
          </div>
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase text-black tracking-wide text-left md:text-center mb-8 xs:mb-10 sm:mb-12 px-2">
            Building a community of athletic
          </h3>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 md:gap-8 px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 pb-12 xs:pb-14 sm:pb-16">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="flex flex-col items-start bg-white shadow-lg hover:shadow-xl rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => navigate(`/blog/${post.slug.current}`)}
          >
            {/* Image Container */}
            <div className="relative w-full" style={{ aspectRatio: "16/9" }}>
              <img
                // UPDATED: Uses urlFor to generate the correct image URL
                src={
                  post.mainImage
                    ? urlFor(post.mainImage).width(600).url()
                    : "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={post?.title}
                className="w-full h-full object-cover"
                style={{
                  clipPath:
                    "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
                  WebkitClipPath:
                    "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
                }}
              />
            </div>

            {/* Content */}
            <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 text-black p-3 xs:p-4 sm:p-5 w-full">
              <h4 className="font-bold text-sm xs:text-base sm:text-lg md:text-xl mb-2 sm:mb-3 text-black leading-tight line-clamp-2">
                {post?.title}
              </h4>
              <p className="text-xs xs:text-sm sm:text-base text-gray-700 leading-relaxed line-clamp-3">
                {getShortText(post?.body)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button
        onClick={() => navigate("/blog")}
        className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-6 xs:px-8 sm:px-10 md:px-12 py-2.5 xs:py-3 sm:py-4 rounded-full text-sm xs:text-base sm:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl mt-4 xs:mt-5 sm:mt-6"
      >
        View All
      </button>
    </div>
  );
};

export default OurBlog;

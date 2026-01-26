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
    // 1. CHANGED QUERY: Switched from "post" to "blog" to match your working page
    // If this still doesn't work, check your studio/schemaTypes/blog.js file for the 'name' field.
    const query = `*[_type == "blog"] | order(publishedAt desc)[0...3]{
          _id,
          title,
          slug,
          mainImage, 
          body
        }`;

    client
      .fetch(query)
      .then((data) => {
        console.log("Home Page Blogs Fetched:", data); // Check Console (F12) if this is empty
        setBlogPosts(data);
      })
      .catch((error) => console.error("Sanity Fetch Error:", error));
  }, []);

  // Helper to get short text
  const getShortText = (body: any[]) => {
    if (!body) return "";
    // Safety check: Ensure body is an array before filtering
    if (!Array.isArray(body)) return "";
    
    return body
      .filter((block) => block._type === "block" && block.children)
      .map((block) => block.children.map((child: any) => child.text).join(" "))
      .join(" ")
      .slice(0, 120) + "...";
  };

  // If no blogs are found, hide the section or show a message
  if (blogPosts.length === 0) {
    return null; // Or return <div>Loading...</div>
  }

  return (
    <div className="bg-white flex flex-col items-center pb-16 xs:pb-20 sm:pb-24">
      {/* Divider */}
      <div className="w-full h-px bg-gray-200" />

      {/* Header Section */}
      <div className="w-full max-w-7xl px-3 xs:px-4 sm:px-6 md:px-8 lg:px-10 pt-8 xs:pt-10 sm:pt-12 md:pt-16 pb-6 xs:pb-7 sm:pb-8">
        <div className="flex flex-col items-start md:items-center">
          <div className="relative mb-2 sm:mb-3">
            <h2
              className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
              style={{ color: "#090E26" }}
            >
              OUR BLOGS
            </h2>
          </div>
          <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl font-light uppercase text-black tracking-wide text-left md:text-center mb-8 xs:mb-10 sm:mb-12 px-2">
            Building a community of athletic women
          </h3>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-12">
        {blogPosts.map((post) => (
          <div
            key={post._id}
            className="flex flex-col bg-white shadow-lg hover:shadow-2xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-pointer border border-gray-100"
            onClick={() => navigate(`/blog/${post.slug.current}`)}
          >
            {/* Image Container */}
            <div className="relative w-full h-56 overflow-hidden">
              <img
                src={
                  post.mainImage
                    ? urlFor(post.mainImage).width(600).height(400).url()
                    : "https://via.placeholder.com/600x400?text=No+Image"
                }
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-1">
              <h4 className="font-bold text-xl mb-3 text-gray-900 leading-snug line-clamp-2">
                {post.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                {getShortText(post.body)}
              </p>
              
              <div className="text-orange-500 font-bold text-sm uppercase tracking-wide mt-auto">
                Read Article &rarr;
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button
        onClick={() => navigate("/blog")}
        className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-10 py-3 rounded-full text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl mt-4"
      >
        View All
      </button>
    </div>
  );
};

export default OurBlog;

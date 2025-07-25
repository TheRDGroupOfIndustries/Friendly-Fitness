import React from "react";

const blogPosts = [
  {
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&fit=crop&w=800&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur...",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum porttitor egestas orci, vinec at velit vestibulum.",
  },
  {
    image:
      "https://images.pexels.com/photos/2261482/pexels-photo-2261482.jpeg?auto=compress&fit=crop&w=800&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur...",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum porttitor egestas orci, vinec at velit vestibulum.",
  },
  {
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&fit=crop&w=800&q=80",
    title: "Lorem ipsum dolor sit amet, consectetur...",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum porttitor egestas orci, vinec at velit vestibulum.",
  },
];

const OurBlog: React.FC = () => {
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
      <div className="w-full max-w-7xl flex flex-col md:flex-row justify-center items-stretch gap-8 px-4 pb-16">
        {blogPosts.map((post, idx) => (
          <div
            key={idx}
            className="flex-1 flex flex-col items-start"
            style={{ minWidth: 280 }}
          >
            <div className="relative w-full" style={{ aspectRatio: "4/2.3" }}>
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                style={{
                  clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
                  WebkitClipPath:
                    "polygon(20% 0, 100% 0, 100% 100%, 0% 100%, 0 20%)",
                  display: "block",
                }}
              />
            </div>
            <div className="mt-6 text-black">
              <h4
                className="font-bold text-base md:text-lg mb-2 text-black"
                style={{ lineHeight: 1.2 }}
              >
                {post.title}
              </h4>
              <p className="text-sm text-gray-700">{post.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurBlog;

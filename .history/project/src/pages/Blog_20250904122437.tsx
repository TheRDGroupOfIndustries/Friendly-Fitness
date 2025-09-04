import React, { useEffect, useState } from "react";
// import Footer from '../components/Footer';
import ScrollToTop from "../components/ScrollToTop";
import {
  Play,
  Clock,
  MessageCircle,
  Dumbbell,
  Target,
  Users,
  Zap,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Img3 from "../assets/IMG-3.jpg";
// import Img4 from "../assets/IMG-4.jpg";
// import Img5 from "../assets/IMG-5.jpg";

import { client } from "../sanityClient";
import { Link } from "react-router-dom";
import { PortableText } from "@portabletext/react";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "blog"] | order(publishedAt desc){
          _id,
          title,
          publishedAt,
          slug, 
          author,
          mainImage{
            asset->{url}
          },
          body
        }`;
        const data = await client.fetch(query);
        console.log("Blogs", data)
        
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
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
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero/Header Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 w-full h-full flex items-center justify-center overflow-hidden">
          <img
            src={Img3}
            alt="Blog Hero"
            className="w-full h-full object-contain bg-black"
            style={{ position: "absolute", inset: 0, zIndex: 0 }}
          />
          <div
            className="absolute inset-0 bg-black/70"
            style={{ zIndex: 1 }}
          ></div>
        </div>
        <div className="relative z-10 w-full max-w-5xl px-4 text-center">
          <div className="flex flex-col items-start justify-center h-full">
            <div className="flex items-center mb-2 ">
              {/* <span className="block w-8 h-1 bg-orange-500 mr-2"></span> */}
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white flex items-center justify-center">
                <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
                BLOG
                <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
              </h1>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white mt-2">
              BUILDING A COMMUNITY OF ATHLETIC WOMEN
            </h2>
          </div>
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col lg:flex-row gap-12 w-full flex-1">
        {/* Blog Main Content */}
        <div className="flex-1 min-w-0">
          {/* Featured Blog Post */}
          {blogs.map((blog, index) => {
            const publishedDate = new Date(blog.publishedAt);

            const day = publishedDate.getDate();
            const month = publishedDate.toLocaleString("default", {
              month: "short",
            });

            const hours = publishedDate.getHours();
            const minutes = publishedDate.getMinutes();
            const formattedTime = `${hours % 12 || 12}:${minutes
              .toString()
              .padStart(2, "0")} ${hours >= 12 ? "PM" : "AM"}`;

            return (
              <article className="blog_detail" key={blog?._id}>
                <div className="blog_main_img slass-img" id="imgcut">
                  <img
                    className="img-responsive"
                    src={blog?.mainImage?.asset?.url}
                    alt={blog.title}
                    style={{ aspectRatio: "16/9" }}
                  />
                  <div className="dd-mm">
                    <span className="date">{day}</span>
                    <br />
                    <span className="month">{month}</span>
                  </div>
                </div>
                <div className="blog_intro">
                  <h3 className="blog_title" style={{ marginTop: "1rem" }}>
                    <Link to={`/blog/${blog.slug.current}`}>{blog?.title}</Link>
                  </h3>
                  <div className="info">
                    <p>
                      <span>
                        <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                        {formattedTime}
                      </span>
                    </p>
                  </div>
                </div>
                <p className="blog_pera">{getShortText(blog?.body)}</p>

                <br />
                <div className="read_social col-sm-12 col-xs-12">
                  <div className="read_btm">
                    <div className="left">
                      <Link to={`/blog/${blog.slug.current}`}>
                        Read more
                        <i className="fa fa-arrow-right" aria-hidden="true"></i>
                      </Link>
                    </div>
                    <div className="social-tag">
                      <div className="social">
                        <span className="txt"> Share </span>
                        <a className="circle" href="#">
                          <i className="fa fa-facebook-f"></i>
                        </a>

                        <a className="circle" href="#">
                          <i className="fa fa-instagram"></i>
                        </a>
                        <a className="circle" href="#">
                          <i className="fa fa-bell" aria-hidden="true"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          {/* Pagination */}
          <section className="w-full mb-8">
            <div className="border-t-4 border-orange-500 w-full mb-8"></div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between w-full">
              <div className="flex items-center space-x-4 text-lg font-semibold mb-4 md:mb-0">
                <span>PREV</span>
                <span className="text-gray-400">|</span>
                <span>NEXT</span>
              </div>
              <div className="flex items-center space-x-6 text-xl">
                <span>1</span>
                <span className="border-2 border-orange-500 rounded-full px-3 py-1 text-orange-500">
                  2
                </span>
                <span>3</span>
                <span className="text-gray-400">...</span>
                <span>5</span>
              </div>
            </div>
          </section>
        </div>
        {/* Sidebar */}
        <aside className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-8">
          {/* Search Bar */}
          {/* <div className="rounded-lg shadow-md overflow-hidden mb-2">
            <div className="bg-white px-6 py-4 flex items-center border-b border-gray-200">
              <input
                type="text"
                placeholder="Search"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-lg"
              />
              <svg
                className="w-6 h-6 text-black ml-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div> */}
        </aside>
      </section>

      {/* Footer */}
      <ScrollToTop />
    </div>
  );
};

export default Blog;

// {/* Featured Blog Post 2 */}
// <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 relative">
//   <div className="relative">
//     {/* Orange accent line */}
//     <div
//       className="absolute top-0 left-0 w-12 h-2 bg-orange-500 z-20"
//       style={{ transform: "rotate(-10deg)" }}
//     ></div>
//     <img
//       src={Img4}
//       alt="Featured Blog 2"
//       className="w-full h-96 object-contain bg-white"
//     />
//     <button className="absolute inset-0 flex items-center justify-center">
//       <span className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300">
//         <Play
//           className="w-8 h-8 text-white ml-1"
//           fill="currentColor"
//         />
//       </span>
//     </button>
//   </div>
//   <div className="p-8">
//     <h2 className="text-2xl md:text-3xl font-bold mb-4">
//       Sed do eiusmod tempor incididunt ut labore et dolore magna
//       aliqua.
//     </h2>
//     <div className="flex items-center text-gray-500 text-sm mb-4 space-x-6">
//       <span className="flex items-center">
//         <Clock className="w-4 h-4 mr-1 text-orange-500" />
//         18:30 PM
//       </span>
//       <span className="flex items-center">
//         <MessageCircle className="w-4 h-4 mr-1 text-orange-500" />
//         Comments 2
//       </span>
//     </div>
//     <p className="text-gray-700 mb-6">
//       Sed do eiusmod tempor incididunt ut labore et dolore magna
//       aliqua. Ut enim ad minim veniam, quis nostrud exercitation
//       ullamco laboris nisi ut aliquip ex ea commodo consequat.
//     </p>
//     <a
//       href="#"
//       className="text-orange-500 font-bold flex items-center hover:underline"
//     >
//       READ MORE <span className="ml-2">&rarr;</span>
//     </a>
//     <div className="flex items-center mt-6 space-x-4">
//       <span className="text-gray-600 font-semibold">Share</span>
//       <a
//         href="#"
//         className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M18.36 6.64a9 9 0 11-12.72 0M12 2v10"
//           />
//         </svg>
//       </a>
//       <a
//         href="#"
//         className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M17 8l4 4m0 0l-4 4m4-4H3"
//           />
//         </svg>
//       </a>
//       <a
//         href="#"
//         className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>
//       </a>
//     </div>
//   </div>
// </div>
// {/* Featured Blog Post 3 */}
// <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8 relative">
//   <div className="relative">
//     {/* Orange accent line */}
//     <div
//       className="absolute top-0 left-0 w-12 h-2 bg-orange-500 z-20"
//       style={{ transform: "rotate(-10deg)" }}
//     ></div>
//     <img
//       src={Img5}
//       alt="Featured Blog 3"
//       className="w-full h-96 object-contain bg-white"
//     />
//     <button className="absolute inset-0 flex items-center justify-center">
//       <span className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300">
//         <Play
//           className="w-8 h-8 text-white ml-1"
//           fill="currentColor"
//         />
//       </span>
//     </button>
//   </div>
//   <div className="p-8">
//     <h2 className="text-2xl md:text-3xl font-bold mb-4">
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco.
//     </h2>
//     <div className="flex items-center text-gray-500 text-sm mb-4 space-x-6">
//       <span className="flex items-center">
//         <Clock className="w-4 h-4 mr-1 text-orange-500" />
//         14:15 PM
//       </span>
//       <span className="flex items-center">
//         <MessageCircle className="w-4 h-4 mr-1 text-orange-500" />
//         Comments 5
//       </span>
//     </div>
//     <p className="text-gray-700 mb-6">
//       Ut enim ad minim veniam, quis nostrud exercitation ullamco
//       laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
//       dolor in reprehenderit in voluptate velit esse cillum dolore eu
//       fugiat nulla pariatur.
//     </p>
//     <a
//       href="#"
//       className="text-orange-500 font-bold flex items-center hover:underline"
//     >
//       READ MORE <span className="ml-2">&rarr;</span>
//     </a>
//     <div className="flex items-center mt-6 space-x-4">
//       <span className="text-gray-600 font-semibold">Share</span>
//       <a
//         href="#"
//         className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M18.36 6.64a9 9 0 11-12.72 0M12 2v10"
//           />
//         </svg>
//       </a>
//       <a
//         href="#"
//         className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M17 8l4 4m0 0l-4 4m4-4H3"
//           />
//         </svg>
//       </a>
//       <a
//         href="#"
//         className="w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer"
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 text-black"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//           />
//         </svg>
//       </a>
//     </div>
//   </div>
// </div>

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
  // For collapsible schedule
  const [openDate, setOpenDate] = useState("05.Jun,2018");
  const [activeCategory, setActiveCategory] = useState(0);

  const categories = [
    "Lorem ipsum dolor sit...",
    "Tur adipiscing elites...",
    "Egestas orci, vitae ulla...",
    "Consectetur id onec at...",
    "Lum rutrum massa quis...",
    "Donec et ultricies ipsum...",
    "Aliquam non est a fac...",
    "Erisque eu sed lectus...",
    "Erisque eu sed lectus...",
  ];

  const scheduleData = [
    {
      date: "21,November,2016",
      classes: [
        {
          name: "Intermediate",
          icon: <Dumbbell className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "08:00Am to 09:00Am",
        },
        {
          name: "TRX",
          icon: <Target className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "09:00Am to 10:00Am",
        },
        {
          name: "Begginer",
          icon: <Users className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "10:00Am to 11:00Am",
        },
        {
          name: "Boot Camp",
          icon: <Zap className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "11:00Am to 12:00Am",
        },
      ],
    },
    {
      date: "25,Dec,2017",
      classes: [
        {
          name: "Intermediate",
          icon: <Dumbbell className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "08:00Am to 09:00Am",
        },
        {
          name: "TRX",
          icon: <Target className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "09:00Am to 10:00Am",
        },
        {
          name: "Begginer",
          icon: <Users className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "10:00Am to 11:00Am",
        },
        {
          name: "Boot Camp",
          icon: <Zap className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "11:00Am to 12:00Am",
        },
      ],
    },
    {
      date: "05.Jun,2018",
      classes: [
        {
          name: "Intermediate",
          icon: <Dumbbell className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "08:00Am to 09:00Am",
        },
        {
          name: "TRX",
          icon: <Target className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "09:00Am to 10:00Am",
        },
        {
          name: "Begginer",
          icon: <Users className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "10:00Am to 11:00Am",
        },
        {
          name: "Boot Camp",
          icon: <Zap className="inline w-5 h-5 text-orange-500 mr-2" />,
          time: "11:00Am to 12:00Am",
        },
      ],
    },
  ];

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc){
          _id,
          title,
          publishedAt,
          slug, 
          author,
          mainImage{
            asset->{url}
          },
          body,
          comments[]{name, message, createdAt}
        }`;
        const data = await client.fetch(query);
        console.log("Sanity Data", data);
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  const [commentCounts, setCommentCounts] = useState({});
  useEffect(() => {
    const fetchAllCommentsCount = async () => {
      const counts = {};
      for (const blog of blogs) {
        const comments = await client.fetch(
          `*[_type == "comment" && post._ref == $postId]`,
          { postId: blog._id }
        );
        counts[blog._id] = comments.length;
      }
      setCommentCounts(counts);
    };

    if (blogs.length > 0) fetchAllCommentsCount();
  }, [blogs]);

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
                  {/* <a
                  className="video-link"
                  href="https://www.youtube.com/embed/AulGwjIv3m8"
                  data-width="550"
                  data-height="350"
                >
                  <img
                    className="blogplay"
                    src={blog?.mainImage?.asset?.url}
                    alt={blog.title}
                  />
                </a> */}
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
                      <span>
                        <i className="fa fa-comments"></i>
                        {commentCounts[blog._id] || 0}
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
          <div className="rounded-lg shadow-md overflow-hidden mb-2">
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
          </div>
          {/* Categories */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white text-xl font-bold px-6 py-4">
              CATEGORIES
            </div>
            <ul className="bg-[#f5f5f5] divide-y divide-gray-200">
              {categories.map((cat, idx) => (
                <li
                  key={cat}
                  className={`py-4 flex items-center group cursor-pointer px-8 rounded font-semibold text-base ${
                    idx === activeCategory ? "text-orange-500" : "text-black"
                  }`}
                  onClick={() => setActiveCategory(idx)}
                >
                  <span className="text-orange-500 text-lg mr-2">&rsaquo;</span>
                  {cat}
                </li>
              ))}
            </ul>
          </div>
          {/* Recent Articles */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white text-xl font-bold px-6 py-4">
              RECENT ARTICLES
            </div>
            <ul className="bg-white divide-y divide-gray-200">
              {[
                "Lorem ipsum dolor sit...",
                "Tur adipiscing elites...",
                "Egestas orci, vitae ull...",
                "Consectetur id onec at...",
                "Lum rutrum massa quis p...",
              ].map((cat, idx) => (
                <li
                  key={`${cat}${idx}`}
                  className="py-4 flex items-center justify-between group cursor-pointer hover:bg-orange-50 px-6 rounded"
                >
                  <span className="text-gray-700 group-hover:text-orange-500 font-medium">
                    {cat}
                  </span>
                  <span className="text-orange-500 text-lg">&rsaquo;</span>
                </li>
              ))}
            </ul>
          </div>
          {/* Today's Schedule */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white text-xl font-bold px-6 py-4">
              TODAY'S SCHEDULE
            </div>
            <ul className="bg-white divide-y divide-gray-200">
              {scheduleData.map((day) => (
                <li key={day.date}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
                    onClick={() =>
                      setOpenDate(openDate === day.date ? "" : day.date)
                    }
                  >
                    <span className="text-gray-800 font-medium">
                      {day.date}
                    </span>
                    {openDate === day.date ? (
                      <ChevronUp className="w-5 h-5 text-orange-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-orange-500" />
                    )}
                  </button>
                  {openDate === day.date && (
                    <div className="px-8 pb-4">
                      {day.classes.map((cls, idx) => (
                        <div
                          key={cls.name + idx}
                          className="flex items-center text-orange-500 mb-2"
                        >
                          {cls.icon}
                          <span className="font-semibold mr-2">{cls.name}</span>
                          <span className="text-xs text-orange-400">
                            - {cls.time}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* Popular Tags */}
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white text-xl font-bold px-6 py-4">
              POPULAR TAGS
            </div>
            <div className="bg-white px-6 py-6 flex flex-wrap gap-3">
              {[
                "Yoga Center",
                "Tranning",
                "Fat Loss",
                "Weight Gain",
                "Fitness",
                "Running",
                "Gym",
                "Cardio",
                "Stretching",
                "Workout",
                "Bodybuilding",
                "Bicep",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-4 py-2 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold cursor-pointer hover:bg-orange-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
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

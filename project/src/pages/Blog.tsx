import React, { useEffect, useState } from "react";
import ScrollToTop from "../components/ScrollToTop";
import Img3 from "../assets/IMG-3.jpg";
import { client } from "../sanityClient";
import { Link } from "react-router-dom";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 2; // show 4 per page so grid looks balanced

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const query = `*[_type == "blog"] | order(publishedAt desc){
          _id,
          title,
          publishedAt,
          slug, 
          author,
          mainImage{asset->{url}},
          body
        }`;
        const data = await client.fetch(query);
        setBlogs(data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };
    fetchBlogs();
  }, []);

  const getShortText = (body: any) => {
    if (!body) return "";
    const textBlocks = body
      .filter((block: any) => block._type === "block")
      .map((block: any) =>
        block.children.map((child: any) => child.text).join(" ")
      );
    const combined = textBlocks.join(" ");
    return combined.length > 100
      ? combined.slice(0, 100).trim() + "..."
      : combined;
  };

  //  Search filter
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      getShortText(blog.body).toLowerCase().includes(searchTerm.toLowerCase())
  );

  //  Pagination logic
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <img
          src={Img3}
          alt="Blog Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            BLOG
          </h1>
         
        </div>
      </section>

      {/* Main Blog Content */}
      <section className="max-w-7xl mx-auto px-4 py-16 flex flex-col w-full flex-1">
        {/*  Search Bar */}
        <div className="w-full mb-12">
          <div className="rounded-lg shadow-md overflow-hidden">
            <div className="bg-white px-6 py-4 flex items-center border border-gray-300 w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value);
                  setCurrentPage(1); // reset to page 1 on search
                }}
                placeholder="Search blogs by title..."
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
        </div>

        {/* Blog Grid (2 per row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {currentBlogs.map((blog) => {
            const publishedDate = new Date(blog.publishedAt);
            const day = publishedDate.getDate();
            const month = publishedDate.toLocaleString("default", {
              month: "short",
            });

            return (
              <article key={blog._id} className="border rounded-lg overflow-hidden shadow-sm">
                <div className="w-full h-[300px] md:h-[400px] relative overflow-hidden">
                  <img
                    src={blog.mainImage?.asset?.url}
                    alt={blog.title}
                    className="w-full h-full object-contain"
                    style={{ aspectRatio: "16/9" }}
                  />
                  <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded">
                    {day} {month}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-2xl font-semibold mt-2">
                    <Link to={`/blog/${blog.slug.current}`}>{blog.title}</Link>
                  </h3>
                  <p className="text-gray-600 mt-2">{getShortText(blog.body)}</p>
                  <Link
                    to={`/blog/${blog.slug.current}`}
                    className="text-orange-500 font-semibold mt-3 inline-block"
                  >
                    Read more →
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        {/* ✅ Pagination Controls */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Prev
          </button>
          <div className="space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-3 py-1 rounded ${
                  currentPage === i + 1
                    ? "bg-orange-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </section>

      <ScrollToTop />
    </div>
  );
};

export default Blog;

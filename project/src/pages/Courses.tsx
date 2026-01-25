import React, { useState, useEffect } from "react";
import { client } from "../sanityClient";
import imageUrlBuilder from "@sanity/image-url";
import { Link } from "react-router-dom";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

// Static fallback data with SPECIFIC images matching the title
const staticCourses = [
  {
    title: "CROSSFIT",
    image:
      "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "S & C",
  },
  {
    title: "KETTLEBELL WORKOUT",
    image:
      "https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "S & C",
  },
  {
    title: "STRENGTH TRAINING",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "S & C",
  },
  {
    title: "MEDITATION",
    image:
      "https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "YOGA",
  },
  {
    title: "RECOVERY",
    image:
      "https://images.pexels.com/photos/3759657/pexels-photo-3759657.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "YOGA",
  },
  {
    title: "PRANAYAM",
    image:
      "https://images.pexels.com/photos/3820381/pexels-photo-3820381.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "YOGA",
  },
  {
    title: "HATHA YOGA",
    image:
      "https://images.pexels.com/photos/3822166/pexels-photo-3822166.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "YOGA",
  },
  {
    title: "HIIT",
    image:
      "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "CARDIO",
  },
  {
    title: "FUNCTIONAL WORKOUT",
    image:
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "CARDIO",
  },
  {
    title: "INDOOR CARDIO",
    image:
      "https://images.pexels.com/photos/703014/pexels-photo-703014.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "CARDIO",
  },
  {
    title: "BODY MOVEMENTS",
    image:
      "https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "CARDIO",
  },
  {
    title: "FAT LOSS/ WEIGHT LOSS",
    image:
      "https://images.pexels.com/photos/3775603/pexels-photo-3775603.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "CARDIO",
  },
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [categories, setCategories] = useState<string[]>(["ALL"]);
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch categories from Sanity
    client
      .fetch(`*[_type == "courseCategory"]{title}`)
      .then((cats) => {
        const categoryList = ["ALL", ...cats.map((c: any) => c.title)];
        setCategories(categoryList);
      })
      .catch(() => {
        setCategories(["ALL"]); // Fallback if API fails
      });

    // Fetch courses from Sanity
    client
      .fetch(
        `*[_type == "course"]| order(_createdAt asc){
          title,
          image,
          courseCategory->{
            title
          }
        }`
      )
      .then((data) => {
        if (data.length > 0) {
          setCourses(data);
        } else {
          setCourses(staticCourses); // Use new diverse images if DB is empty
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Using static fallback due to error:", err);
        setCourses(staticCourses);
        setLoading(false);
      });
  }, []);

  const filteredCourses =
    selectedCategory === "ALL"
      ? courses
      : courses.filter(
          (course) =>
            course.courseCategory?.title === selectedCategory ||
            course.category === selectedCategory // fallback logic
        );

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center bg-black">
        <img
          src="https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Courses Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        />
        <div className="relative z-10 text-center text-white w-full px-4">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center mb-2">
              <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                FOCUS & COURSES
              </h1>
              <span className="block w-8 h-1 bg-orange-500 ml-2"></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light mt-2 text-white">
              Emphasize overall well-being, not just hitting a target weight.
            </h2>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full font-semibold text-lg transition-all duration-200 border-none focus:outline-none ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white shadow-lg"
                  : "bg-gray-100 text-black hover:bg-orange-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        {loading ? (
          <p className="text-center text-gray-500">Loading courses...</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-10">
            {filteredCourses.map((course, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-lg bg-white shadow-md"
              >
                <div className="absolute top-0 left-0 w-16 h-1 bg-orange-500 z-20"></div>
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={
                      course.image?.asset
                        ? urlFor(course.image).url()
                        : course.image
                    }
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-black mb-2 uppercase">
                    {course.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {course.courseCategory?.title || course.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Promo Banner */}
      <section className="bg-orange-500 py-12 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fitness Classes This Summer.
          <br />
          Pay Now &amp; GET 35% Discount
        </h2>
        <Link to="/contact">
          <button className="mt-4 px-10 py-4 rounded-full border-2 border-white text-white bg-transparent font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
            Read More
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Courses;

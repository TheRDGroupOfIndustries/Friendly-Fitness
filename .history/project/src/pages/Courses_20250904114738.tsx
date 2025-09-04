import React, { useState } from "react";

const courseCategories = [
  "ALL",
  "BODY BUILDING",
  "WEIGHT LOSS",
  "WEIGHT GAIN",
  "WEIGHT LIFTING",
  "STRETCHING",
];

const courses = [
  {
    title: "KETTLEBELL",
    image:
      "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "BODY BUILDING",
  },
  {
    title: "KETTLEBELL",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "WEIGHT LOSS",
  },
  {
    title: "WEIGHTLIFTING",
    image:
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "WEIGHT LIFTING",
  },
  {
    title: "STRIKING",
    image:
      "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "BODY BUILDING",
  },
  {
    title: "CONJUGATE METHODS",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "WEIGHT GAIN",
  },
  {
    title: "WEIGHTLIFTING",
    image:
      "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "WEIGHT LIFTING",
  },
];

const Courses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredCourses =
    selectedCategory === "ALL"
      ? courses
      : courses.filter((course) => course.category === selectedCategory);

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
                COURSES
              </h1>
              <span className="block w-8 h-1 bg-orange-500 ml-2"></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light mt-2 text-white">
              BUILDING A COMMUNITY OF ATHLETIC WOMEN
            </h2>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {courseCategories.map((cat) => (
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
        <div className="grid md:grid-cols-3 gap-10">
          {filteredCourses.map((course, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md"
            >
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 w-16 h-1 bg-orange-500 z-20"></div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-black mb-2 uppercase">
                  {course.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Promo Banner */}
      <section className="bg-orange-500 py-12 text-center relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Fitness Classes This Summer.
          <br />
          Pay Now &amp; GET 35% Discount
        </h2>
        <button className="mt-4 px-10 py-4 rounded-full border-2 border-white text-white bg-transparent font-bold text-lg hover:bg-white hover:text-orange-500 transition-all duration-300">
          READ MORE
        </button>
      </section>
    </div>
  );
};

export default Courses;

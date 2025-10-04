import React, { useEffect, useState } from "react";
import { client } from "../sanityClient"; // make sure this file is configured

interface Course {
  _id?: string;
  id?: number;
  title: string;
  image: string;
  description: string;
}

const Courses: React.FC = () => {
  const hardcodedCourses: Course[] = [
    {
      id: 1,
      title: "CROSSFIT",
      image:
        "https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Build functional strength and endurance with dynamic kettlebell movements.",
    },
    {
      id: 2,
      title: "KETTLEBELL WORKOUT",
      image:
        "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Advanced training methodology combining max effort and dynamic effort work.",
    },
    {
      id: 3,
      title: "STRENGTH TRAINING",
      image:
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg",
      description:
        "Master the art of kettlebell training for total body conditioning.",
    },
    {
      id: 4,
      title: "MEDITATION",
      image:
        "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Olympic weightlifting techniques for explosive power development.",
    },
    {
      id: 5,
      title: "RECOVERY",
      image:
        "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Develop flexibility, strength, and coordination through gymnastics movements.",
    },
    {
      id: 6,
      title: "PRANAYAM",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Learn striking techniques while building cardiovascular endurance.",
    },
  ];

  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const data: Course[] = await client.fetch(
          `*[_type == "course"]{
            _id,
            title,
            "image": image.asset->url,
            description
          }`
        );
        setCourses(data.length > 0 ? data : hardcodedCourses);
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses(hardcodedCourses);
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 sm:opacity-30"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-14 md:mb-20">
          <div className="relative inline-block">
            <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4">
              OUR COURSES
            </h2>
            <div
              className="absolute -top-3 sm:-top-4 -left-6 sm:-left-8 w-12 sm:w-16 h-1 transform -rotate-45"
              style={{ backgroundColor: "#090E26" }}
            ></div>
            <div
              className="absolute -bottom-3 sm:-bottom-4 -right-6 sm:-right-8 w-12 sm:w-16 h-1 transform -rotate-45"
              style={{ backgroundColor: "#090E26" }}
            ></div>
          </div>
          <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-300 mt-4 sm:mt-6 max-w-2xl mx-auto px-2">
            WE AIM TO TRANSFORM YOUR ABILITIES
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {courses.slice(0, 6).map((course, index) => (
            <div
              key={course._id || course.id || index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 w-10 sm:w-16 h-1 bg-orange-500 z-20"></div>

              {/* Course Image */}
              <div className="relative h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

                {/* Course Title Overlay */}
                <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 right-3 sm:right-5">
                  <h3 className="text-base xs:text-lg sm:text-xl md:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {course.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-10 sm:mt-12">
          <a
            href="/courses"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-md hover:shadow-lg transition duration-300"
          >
            View All Courses
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;

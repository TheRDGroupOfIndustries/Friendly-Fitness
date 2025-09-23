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
    {
      id: 7,
      title: "HATHA YOGA",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Learn striking techniques while building cardiovascular endurance.",
    },
    {
      id: 7,
      title: "HIIT",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Learn striking techniques while building cardiovascular endurance.",
    },
    {
      id: 8,
      title: "FUNCTIONAL WORKOUT",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Learn striking techniques while building cardiovascular endurance.",
    },
    {
      id: 9,
      title: "INDOOR CARDIO",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Learn striking techniques while building cardiovascular endurance.",
    },
    {
      id: 10,
      title: "BODY MOVEMENTS",
      image:
        "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=600",
      description:
        "Learn striking techniques while building cardiovascular endurance.",
    },
    {
      id: 11,
      title: "FAT LOSS/ WEIGHT LOSS",
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

        if (data && data.length > 0) {
          setCourses(data);
        } else {
          setCourses(hardcodedCourses); // fallback
        }
      } catch (error) {
        console.error("Error fetching courses:", error);
        setCourses(hardcodedCourses); // fallback on error
      }
    };

    fetchCourses();
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4">
              OUR COURSES
            </h2>
            <div
              className="absolute -top-4 -left-8 w-16 h-1 transform -rotate-45"
              style={{ backgroundColor: "#090E26" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-8 w-16 h-1 transform -rotate-45"
              style={{ backgroundColor: "#090E26" }}
            ></div>
          </div>
          <p className="text-xl text-gray-300 mt-6 max-w-2xl mx-auto">
            WE AIM TO TRANSFORM YOUR ABILITIES
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {courses.map((course, index) => (
            <div
              key={course._id || course.id || index}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Orange accent line */}
              <div className="absolute top-0 left-0 w-12 sm:w-16 h-1 bg-orange-500 z-20"></div>

              {/* Course Image */}
              <div className="relative h-40 xs:h-56 sm:h-80 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300"></div>

                {/* Course Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                  <h3 className="text-lg sm:text-2xl font-bold text-white mb-1 sm:mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-200 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-orange-500/0 group-hover:bg-orange-500/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;

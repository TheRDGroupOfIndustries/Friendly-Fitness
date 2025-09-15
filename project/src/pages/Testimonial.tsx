import React from "react";

const testimonials = [
  {
    name: "DAVINC ATONE",
    image:
      "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "Praesent aliquet diam et arcu laoreet pellentesque. Integer non euismod eros, vel ornare lorem. Morbi imperdiet tellus sed nulla tempus finibus. Donec sodales ante et nulla egestas, in rutrum arcu viverra.",
  },
  {
    name: "SOPHIA LEE",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "The trainers are amazing and the environment is so motivating! I have achieved my fitness goals faster than I imagined.",
  },
  {
    name: "JASON SMITH",
    image:
      "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "A fantastic gym with top-notch equipment and a friendly community. Highly recommended for anyone serious about fitness.",
  },
  {
    name: "EMILY CLARK",
    image:
      "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    review:
      "I love the variety of classes and the support from the staff. Every session is challenging and fun!",
  },
];

const Testimonial: React.FC = () => (
  <div>
    {/* Hero/Header Section */}
    <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 flex items-center justify-center">
          <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
          <span className="mr-2 text-white">TESTIMONIAL</span>
          <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-light text-white">
          WHAT CLIENT'S SAY
        </h2>
      </div>
    </section>

    {/* Testimonials Grid */}
   <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="relative inline-block">
          <h2
            className="text-5xl md:text-7xl font-bold text-black mb-4"
            id="title"
          >
            <span className="relative z-10">T</span>
            <span className="text-orange-500 relative z-10">ESTIMONIAL</span>
            {/* <span className="absolute -top-4 -left-8 w-16 h-1 bg-orange-500 transform -rotate-45"></span>
                <span className="absolute -bottom-4 -right-8 w-16 h-1 bg-orange-500 transform -rotate-45"></span> */}
          </h2>
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
        </div>
        <h3 className="text-2xl text-gray-800 mb-4">WHAT CLIENT'S SAY</h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestib ulum
          porttitor egestas orci, vinec at velit vestibulum.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              padding: "80px 32px 32px",
              maxWidth: "400px",
              margin: "auto",
              textAlign: "center",
              position: "relative",
            }}
          >
            {/* Overlapping image */}
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                border: "4px solid #f7941d",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={testimonial?.image}
                alt="Client"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </div>

            {/* Name */}
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginTop: "-20px",
                marginBottom: "50px",
              }}
            >
              {testimonial.name}
            </div>

            {/* Quote icon */}
            <div
              style={{
                fontSize: "100px",
                color: "#f7941d",
                margin: "0",
                position: "absolute",
                userSelect: "none",
                top: "20%",
                left: "50%",
                transform: "translateX(-50%)",
              }}
            >
              &ldquo;
            </div>

            {/* Quote Text */}
            <p
              style={{
                color: "#4a4a4a",
                lineHeight: "1.7",
                fontSize: "15px",
              }}
            >
              {testimonial.review}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  </div>
);

export default Testimonial;

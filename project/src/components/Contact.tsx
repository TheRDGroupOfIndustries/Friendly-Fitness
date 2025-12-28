import React, { useState} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser"; 
import newImg3 from "../assets/newImg3.jpg";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Handle submit is called ")
    setLoading(true);

    // 2. Define your IDs (It's better to put these in .env later)
    const SERVICE_ID = "service_04i5dic"; // From your screenshot
    const ADMIN_TEMPLATE_ID = "template_ay3ly0a"; 
    const USER_TEMPLATE_ID = "template_za4i3oj";
    const PUBLIC_KEY = "-jrTC0G9yFVq9YarU";

    try {
      // 3. Send to Admin and User simultaneously
      // We use emailjs.send instead of sendForm since we are using state
      const adminPromise = emailjs.send(
        SERVICE_ID,
        ADMIN_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          reply_to: formData.email, // Useful for admin to reply directly
        },
        PUBLIC_KEY
      );

      const userPromise = emailjs.send(
        SERVICE_ID,
        USER_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      await Promise.all([adminPromise, userPromise]);

      toast.success("Inquiry sent successfully!");
      setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
    } catch (error: any) {
      console.error("EmailJS Error:", error);
      toast.error(error?.text || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-3 sm:px-6 lg:px-8 bg-black text-white">
      {/* Section Title */}
      <div className="w-full max-w-7xl text-center mb-8 sm:mb-10 lg:mb-14">
        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-orange-500 mb-2 sm:mb-3 lg:mb-4 px-2">
          Get in Touch
        </h2>
        <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl px-4">
          We'll get back to you within 24 hours.
        </p>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
        {/* Left: Gym Image and   Info */}
        <div className="flex flex-col justify-start items-center lg:items-start text-center lg:text-left w-full px-2 sm:px-4">
          <img
            src={newImg3}
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-48 xs:h-56 sm:h-64 md:h-72 lg:h-80 rounded-xl sm:rounded-2xl lg:rounded-3xl object-cover border-2 sm:border-4 border-orange-500 shadow-2xl transition-transform duration-300 hover:scale-105 mb-4 sm:mb-6"
          />

          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg text-white space-y-3 sm:space-y-4 px-2">
            <p className="text-gray-200 text-sm sm:text-base lg:text-lg leading-relaxed">
              Get in touch with our team for memberships, training programs, or
              anything else.
            </p>

            <div className="space-y-1">
              <span className="font-bold text-orange-500 text-sm sm:text-base">Email:</span>
              <br />
              <a 
                href="mailto:fitnessevolution108@gmail.com" 
                className="text-gray-200 hover:text-orange-400 transition-colors text-sm sm:text-base break-all"
              >
                fitnessevolution108@gmail.com
              </a>
            </div>

            {/* <div className="space-y-1">
              <span className="font-bold text-orange-500 text-sm sm:text-base">Address:</span>
              <br />
              <p className="text-gray-200 text-sm sm:text-base">
                123 GYM STREET, FITCITY, 456789
              </p>
            </div> */}

            <div className="space-y-1">
              <span className="font-bold text-orange-500 text-sm sm:text-base">Call:</span>
              <br />
              <a 
                href="tel:+919319804497" 
                className="text-gray-200 hover:text-orange-400 transition-colors text-sm sm:text-base"
              >
                +91-931-980-4497
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="bg-white text-black rounded-xl sm:rounded-2xl shadow-2xl p-4 xs:p-6 sm:p-8 lg:p-10 xl:p-12 w-full max-w-xl mx-auto lg:mx-0">
          <form className="flex flex-col gap-3 sm:gap-4 lg:gap-5" onSubmit={handleSubmit} >
            <div>
              <label className="block text-gray-800 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                Name*
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                Email*
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                Phone Number*
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
                placeholder="+91-XXXX-XXXX"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                I am interested in
              </label>
              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
              >
                <option value="">Select an option</option>
                <option value="membership">Membership</option>
                <option value="personal-training">Personal Training</option>
                <option value="group-classes">Group Classes</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1 sm:mb-2 text-sm sm:text-base">
                Message
              </label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all resize-none"
                placeholder="Tell us how we can help you..."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="mt-2 sm:mt-3 bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 disabled:cursor-not-allowed text-white font-semibold rounded-lg py-2.5 sm:py-3 text-base sm:text-lg transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
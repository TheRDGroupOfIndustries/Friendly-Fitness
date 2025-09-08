import React from "react";
import { MapPin, Phone, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const API_URL = import.meta.env.VITE_API_URL;

const ContactUs: React.FC = () => {
const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true); 
      try {
        const response = await fetch(`${API_URL}/send-email`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
  
        const result = await response.json();
       toast.success(result.message);
        setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Something went wrong. Please try again.");
      }finally {
      setLoading(false); //  stop loading
    }
    };

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Hero/Header Section */}
      <section className="relative h-[350px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/416717/pexels-photo-416717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-left w-full max-w-5xl px-4">
          <div className="flex flex-col items-start justify-center h-full">
            <div className="flex items-center mb-2">
              <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white">
                CONTACT US
              </h1>
              <span className="block w-8 h-1 bg-orange-500 mr-2"></span>
            </div>
            <h2 className="text-2xl md:text-3xl font-light text-white mt-2">
              BUILDING A COMMUNITY OF ATHLETIC WOMEN
            </h2>
          </div>
        </div>
      </section>

      {/* Info Cards Section */}
      <section className="max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="bg-white rounded-lg shadow-md flex flex-col md:flex-row items-center justify-between gap-8 py-10 px-6 md:px-16">
          {/* Address */}
          {/* <div className="flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-orange-500 mb-4">
              <MapPin className="w-10 h-10 text-orange-500" />
            </div>
            <div className="text-lg font-semibold text-gray-800">
              13005 Greenville Avenue Califonia, TX 70240
            </div>
          </div> */}
          {/* Phone/Email */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-orange-500 mb-4">
              <Phone className="w-10 h-10 text-orange-500" />
            </div>
            <div className="text-lg font-semibold text-gray-800">
              +91-931-980-4497
            </div>
            <div className="text-md text-gray-600">fitnessevolution108@gmail.com</div>
          </div>
          {/* Hours */}
          <div className="flex flex-col items-center text-center flex-1">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-orange-500 mb-4">
              <Clock className="w-10 h-10 text-white" />
            </div>
            <div className="text-lg font-semibold text-gray-800">
              10:00am to 6:00pm
            </div>
            <div className="text-md text-gray-600">Sunday Closed</div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      {/* <section className="max-w-7xl mx-auto px-4 pb-16 w-full">
        <div className="w-full h-[400px] rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Winchester+Kentucky+40391+USA&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section> */}

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 pb-16 w-full">
        <div className="mb-12">
          <div className="flex items-center mb-2">
            {/* <span className="block w-12 h-1 bg-orange-500 mr-2 -rotate-12"></span> */}
            <h2
              className="text-5xl md:text-6xl font-extrabold tracking-tight text-black"
              id="title"
            >
              CONTACT FORM
            </h2>
          </div>
          <h3 className="text-2xl font-light text-black mt-2">
            FILL THE BELOW FORM
          </h3>
        </div>
        <form className="space-y-8" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="name" value={formData.name} onChange={handleChange} required
              placeholder="Your Name"
              className="flex-1 border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Phone No."
              name="phone" value={formData.phone} onChange={handleChange}
              required
              className="flex-1 border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="email" value={formData.email} onChange={handleChange}
              required
              placeholder="Email Address"
              className="flex-1 border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Your Messge"
            rows={5}
             name="message" value={formData.message} onChange={handleChange}
             required
            className="w-full border border-gray-300 rounded-lg px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white text-xl font-bold px-16 py-4 rounded-full shadow-lg transition-all duration-300"
            >
               {loading ? "Submitting..." : "Submit Now"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;

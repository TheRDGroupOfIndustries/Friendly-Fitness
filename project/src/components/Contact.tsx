// import React from 'react';

// const Contact: React.FC = () => {
//   return (
//     <section className="min-h-screen w-full flex flex-col items-center justify-center py-10 px-2 sm:px-6 bg-gray-50">
//       <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center">
//         {/* Left: Gym Image and Lorem Ipsum Contact Info */}
//         <div className="flex flex-col justify-center items-center h-full">
//           <img
//             src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&fit=crop&w=800&q=80"
//             alt="Gym"
//             style={{ width: 360, height: 260, borderRadius: '2rem', objectFit: 'cover', display: 'block', border: '4px solid #e5e7eb', boxShadow: '0 8px 32px 0 rgba(0,0,0,0.10)' }}
//             className="transition-transform duration-300 hover:scale-105 mb-6"
//           />
//           <div className="w-full max-w-xs text-left">
//             <p className="text-lg text-gray-800 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisi eu consectetur.</p>
//             <div className="mb-2">
//               <span className="font-bold text-gray-900 text-lg">Email:</span><br />
//               <a href="mailto:lorem@ipsum.com" className="text-blue-600 hover:underline text-base">lorem@ipsum.com</a>
//             </div>
//             <div className="mb-2">
//               <span className="font-bold text-gray-900 text-lg">Address:</span><br />
//               <a href="#" className="text-blue-600 hover:underline text-base">123 Lorem Street, Ipsum City, Dolor 45678</a>
//             </div>
//             <div>
//               <span className="font-bold text-gray-900 text-lg">Call:</span><br />
//               <a href="tel:+1234567890" className="text-blue-600 hover:underline text-base">+1-234-567-890</a>
//               <span className="text-gray-400 mx-1">/</span>
//               <a href="tel:+0987654321" className="text-blue-600 hover:underline text-base">+0-987-654-321</a>
//             </div>
//           </div>
//         </div>
//         {/* Right: Styled Contact Form, slightly up */}
//         <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-10 sm:p-16 w-full max-w-2xl mx-auto flex flex-col -mt-8">
//           <h3 className="text-3xl font-bold text-blue-700 mb-2">Get in touch</h3>
//           <p className="text-gray-500 mb-8">You Can Reach Us Anytime.</p>
//           <form className="flex flex-col gap-6">
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Name*</label>
//               <input type="text" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" required />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Email*</label>
//               <input type="email" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" required />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Phone Number*</label>
//               <input type="tel" className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" required />
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">I am interested in</label>
//               <select className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50">
//                 <option value="">Select</option>
//                 <option value="membership">Membership</option>
//                 <option value="personal-training">Personal Training</option>
//                 <option value="group-classes">Group Classes</option>
//                 <option value="other">Other</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-gray-700 font-medium mb-1">Message</label>
//               <textarea rows={4} className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-gray-50" />
//             </div>
//             <button type="submit" className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg py-3 text-lg transition-all shadow-md">Submit</button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen w-full flex flex-col items-center justify-center py-12 px-4 sm:px-8 bg-black text-white">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-center">
        {/* Left: Gym Image and Contact Info */}
        <div className="flex flex-col justify-center items-center text-left">
          <img
            src="https://images.pexels.com/photos/136404/pexels-photo-136404.jpeg?auto=compress&fit=crop&w=800&q=80"
            alt="Gym"
            style={{
              width: 360,
              height: 260,
              borderRadius: "2rem",
              objectFit: "cover",
              display: "block",
              border: "4px solid #f7941d",
              boxShadow: "0 8px 32px 0 rgba(0,0,0,0.5)",
            }}
            className="transition-transform duration-300 hover:scale-105 mb-6"
          />

          <div className="w-full max-w-xs text-white">
            <p className="text-base mb-4 text-gray-200">
              Get in touch with our team for memberships, training programs, or
              anything else.
            </p>

            <div className="mb-2">
              <span className="font-bold text-orange-500 text-base">
                Email:
              </span>
              <br />
              <a
                href="mailto:fitness@yourdomain.com"
                className="text-gray-200 hover:underline"
              >
                fitness@yourdomain.com
              </a>
            </div>

            <div className="mb-2">
              <span className="font-bold text-orange-500 text-base">
                Address:
              </span>
              <br />
              <p className="text-gray-200">123 GYM STREET, FITCITY, 456789</p>
            </div>

            <div>
              <span className="font-bold text-orange-500 text-base">Call:</span>
              <br />
              <a
                href="tel:1231234123"
                className="text-gray-200 hover:underline"
              >
                123 1234 123
              </a>
            </div>
          </div>
        </div>

        {/* Right: Contact Form Styled to Match Theme */}
        <div className="bg-white text-black rounded-2xl shadow-xl p-10 sm:p-12 w-full max-w-xl mx-auto">
          <h3
            className="text-4xl font-extrabold text-orange-600 mb-2 uppercase tracking-wider"
            id="title"
          >
            Get in Touch
          </h3>
          <p className="text-gray-500 mb-8">
            We’ll get back to you within 24 hours.
          </p>

          <form className="flex flex-col gap-5">
            <div>
              <label className="block text-gray-800 font-medium mb-1">
                Name*
              </label>
              <input
                type="text"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1">
                Email*
              </label>
              <input
                type="email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1">
                Phone Number*
              </label>
              <input
                type="tel"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1">
                I am interested in
              </label>
              <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option value="">Select</option>
                <option value="membership">Membership</option>
                <option value="personal-training">Personal Training</option>
                <option value="group-classes">Group Classes</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-800 font-medium mb-1">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <button
              type="submit"
              className="mt-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg py-3 text-lg transition-all shadow-md"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

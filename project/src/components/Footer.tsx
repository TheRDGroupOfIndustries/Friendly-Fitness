import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Company Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-orange-500">Fitness</span>
              <span className="text-white"> Evolution</span>
            </h2>
            <p className="text-gray-400 mb-5 text-sm leading-relaxed">
              Transform your body and mind with our expert-led programs.
              Thousands have achieved their goals with us.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-3 text-orange-500" />
                +91-931-980-4497
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-3 text-orange-500" />
                fitnessevolution108@gmail.com
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-lg text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/aboutus" },
                { name: "Courses", path: "/courses" },
                { name: "Testimonial", path: "/testimonial" },
                { name: "Blog", path: "/blog" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center group text-sm text-gray-400 hover:text-orange-500 transition"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition" />
                    <span className="group-hover:translate-x-1 transition">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Two Columns */}
          <div>
            <h3 className="text-lg text-white font-semibold mb-4">Our Services</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "CrossFit",
                "Kettlebell Workout",
                "Strength Training",
                "Meditation",
                "Recovery",
                "Pranayam",
                "Hatha Yoga",
                "HIIT",
                "Functional Workout",
                "Indoor Cardio",
                "Body Movements",
                "Fat Loss / Weight Loss",
              ].map((service) => (
                <Link
                  key={service}
                  to="/courses"
                  className="flex items-center group text-sm text-gray-400 hover:text-orange-500 transition"
                >
                  <ChevronRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition" />
                  <span className="group-hover:translate-x-1 transition">
                    {service}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Stay Connected - Bottom Section */}
        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50%]">
            {/* Social Media */}
            <div>
              <h4 className="text-lg text-white font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: Facebook,
                    link: "https://www.facebook.com/profile.php?id=100068319542606",
                  },
                  {
                    icon: Instagram,
                    link: "https://www.instagram.com/fitness_evolution7244/",
                  },
                  {
                    icon: Linkedin,
                    link: "https://www.linkedin.com/company/the-fitness-evolution-app",
                  },
                ].map(({ icon: Icon, link }, i) => (
                  <a
                    key={i}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition transform hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Download Apps */}
            <div>
              <h4 className="text-lg text-white font-semibold mb-3">Download Our App</h4>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://play.google.com/store/apps/details?id=com.vikram.fitnessevolution"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-36 hover:scale-105 transition-transform"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/fitness-evolution/id6747019076"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-36 hover:scale-105 transition-transform"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 gap-4">
          <p>© 2025 Fitness Evolution. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link
              to="/privacypolicy"
              className="hover:text-orange-500 transition"
            >
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-orange-500 transition">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


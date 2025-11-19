import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-blue-50 to-blue-100 backdrop-blur-xl shadow-inner border-t border-blue-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Hospital Intro */}
        <div>
          <h2 className="text-2xl font-bold text-blue-700">Sunrise Multi-Speciality Hospital</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Providing advanced, compassionate and affordable healthcare with
            world-class diagnostics and India's leading medical experts.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-5">
            <FaFacebook className="text-blue-700 text-xl cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="text-pink-600 text-xl cursor-pointer hover:scale-110 transition" />
            <FaLinkedin className="text-blue-800 text-xl cursor-pointer hover:scale-110 transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-blue-700 cursor-pointer transition">Home</li>
            <li className="hover:text-blue-700 cursor-pointer transition">About Us</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Departments</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Doctors</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Contact</li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Our Services</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="hover:text-blue-700 cursor-pointer transition">Emergency Care</li>
            <li className="hover:text-blue-700 cursor-pointer transition">OPD & Diagnostics</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Surgery & ICU</li>
            <li className="hover:text-blue-700 cursor-pointer transition">Pharmacy</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-blue-700 mb-4">Contact Us</h3>

          <div className="flex items-center gap-3 text-gray-700 mb-3">
            <MdLocationOn className="text-blue-700 text-xl" />
            <p>Indore, Madhya Pradesh, India</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700 mb-3">
            <FaPhoneAlt className="text-blue-700 text-xl" />
            <p>+91 98765-43210</p>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <MdEmail className="text-blue-700 text-xl" />
            <p>support@sunrisehospital.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center py-4 bg-blue-800 text-white text-sm mt-6">
        © {new Date().getFullYear()} Sunrise Multi-Speciality Hospital — All Rights Reserved.
      </div>
    </footer>
  );
}

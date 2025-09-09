import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white p-2 rounded-full">
                <span className="font-bold text-lg">KB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold font-comic">Kids Buzz Creche</h3>
                <p className="text-sm text-gray-300">Where Little Minds Grow Big</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              Nurturing young minds with love, care, and educational excellence. 
              Creating a foundation for lifelong learning and growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/facilities" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Facilities
                </Link>
              </li>
              <li>
                <Link to="/fee-payment" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Fee Payment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={16} className="text-orange-400 mt-1" />
                <span className="text-gray-300 text-sm">+91-6387659003</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={16} className="text-orange-400 mt-1" />
                <span className="text-gray-300 text-sm">kidsbuzzcreche@gmail.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-orange-400 mt-1" />
                <span className="text-gray-300 text-sm">
                  51A, Fatehabad Rd, opposite Axis Bank, Bansal Nagar, Tajganj, Agra, UP, 282001
                </span>
              </li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-orange-400">Operating Hours</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-orange-400" />
                <span className="text-gray-300 text-sm">Monday - Saturday</span>
              </div>
              <p className="text-gray-300 text-sm ml-6">8:30 AM - 4:30 PM</p>
              <div className="mt-3">
                <span className="text-gray-300 text-sm">Sunday: Closed</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Kids Buzz Creche. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

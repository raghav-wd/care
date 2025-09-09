import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Facilities', href: '/facilities' },
    { name: 'Fee Payment', href: '/fee-payment' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Phone size={14} />
                <span>+91-6387659003</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={14} />
                <span>kidsbuzzcreche@gmail.com</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span>Open Mon-Sat: 8:30 AM - 4:30 PM</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-orange-500 to-blue-500 text-white p-2 rounded-full">
                <span className="font-bold text-xl">KB</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gradient font-comic">
                  Kids Buzz Creche
                </h1>
                <p className="text-xs text-gray-600">Where Little Minds Grow Big</p>
              </div>
            </Link>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    isActive(item.href)
                      ? 'text-orange-500 bg-orange-50'
                      : 'text-gray-700 hover:text-orange-500 hover:bg-orange-50'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;


import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0a1119] to-[#121a24] text-gray-300 border-t border-[#1EAEDB]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white matrix-text">Zillion Arete</h3>
            <p className="mb-4 text-gray-400">
              Your trusted partner in finding exceptional talent and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="text-[#1EAEDB] hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="text-[#1EAEDB] hover:text-white transition-colors duration-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-[#1EAEDB] hover:text-white transition-colors duration-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white matrix-text">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white matrix-text">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#recruiting" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Executive Recruiting</Link>
              </li>
              <li>
                <Link to="/services#staffing" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">IT Staffing</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">HR Consulting</Link>
              </li>
              <li>
                <Link to="/services#training" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Professional Training</Link>
              </li>
              <li>
                <Link to="/services#placement" className="text-gray-400 hover:text-[#1EAEDB] transition-colors duration-300">Permanent Placement</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white matrix-text">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0 text-[#1EAEDB]" />
                <span className="text-gray-400">123 Business Avenue, Suite 500, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0 text-[#1EAEDB]" />
                <span className="text-gray-400">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0 text-[#1EAEDB]" />
                <span className="text-gray-400">info@zillionarete.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1EAEDB]/20">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Zillion Arete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

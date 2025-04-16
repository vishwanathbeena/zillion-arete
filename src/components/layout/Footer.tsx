
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Zillion Arete</h3>
            <p className="mb-4">
              Your trusted partner in finding exceptional talent and opportunities.
            </p>
            <div className="flex space-x-4">
              <a href="https://linkedin.com" className="hover:text-gray-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="https://facebook.com" className="hover:text-gray-300" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com" className="hover:text-gray-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-gray-300">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-300">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-gray-300">Services</Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-gray-300">Careers</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services#recruiting" className="hover:text-gray-300">Executive Recruiting</Link>
              </li>
              <li>
                <Link to="/services#staffing" className="hover:text-gray-300">IT Staffing</Link>
              </li>
              <li>
                <Link to="/services#consulting" className="hover:text-gray-300">HR Consulting</Link>
              </li>
              <li>
                <Link to="/services#training" className="hover:text-gray-300">Professional Training</Link>
              </li>
              <li>
                <Link to="/services#placement" className="hover:text-gray-300">Permanent Placement</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>123 Business Avenue, Suite 500, New York, NY 10001</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 flex-shrink-0" />
                <span>info@zillionarete.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100/20">
          <p className="text-center text-sm">
            &copy; {new Date().getFullYear()} Zillion Arete. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

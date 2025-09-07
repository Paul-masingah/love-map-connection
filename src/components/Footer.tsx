
import { Link } from "react-router-dom";

/**
 * The footer component for the application.
 *
 * This component displays the footer section, which includes links to
 * social media, key resources (such as hosting an event and pricing),
 * and the copyright notice.
 *
 * @returns {JSX.Element} The rendered footer component.
 */
const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Matchbox</h3>
            <p className="text-gray-600 mb-4">EST. 2025</p>
            <p className="text-gray-600">NEW YORK, NY</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-matchbox-purple transition-colors">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-matchbox-purple transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-matchbox-purple transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/create" className="text-gray-600 hover:text-matchbox-purple transition-colors">
                  Host an Event
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-matchbox-purple transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-matchbox-purple transition-colors">
                  Legal
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-10 pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Matchbox. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

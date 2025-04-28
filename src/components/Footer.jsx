import { useLocation } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const location = useLocation();
  const isDashboardPage = location.pathname === "/dashboard";

  return (
    <footer
      className={`${
        isDashboardPage ? "bg-transparent" : "bg-gray-800"
      } ${isDashboardPage ? "text-gray-400" : "text-white"} py-5`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {isDashboardPage ? (
          <div className="flex justify-center">
            <span className="flex text-2xl font-semibold">Influencer Guide</span>
          </div>
        ) : (
          <div className="flex flex-col items-center md:flex-row md:justify-between md:space-x-16">
            {/* Company Information */}
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="font-semibold mt-4 text-4xl">Influencers Guide</h2>
              <p className="mt-2 text-gray-400">
                1234 Street Name, City, State, 12345
              </p>
              <p className="mt-2 text-gray-400">Email: info@yourcompany.com</p>
              <p className="mt-2 text-gray-400">Phone: (123) 456-7890</p>
            </div>
            {/* Quick Links */}
            <div className="flex flex-row space-x-16 items-center md:flex-row md:space-x-16">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-xl font-semibold">Quick Links</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a href="/" className="text-gray-400 hover:text-white">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="text-gray-400 hover:text-white">
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/services"
                      className="text-gray-400 hover:text-white"
                    >
                      Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact"
                      className="text-gray-400 hover:text-white"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center md:text-left">
                <h2 className="text-xl font-semibold">Follow Us</h2>
                <ul className="mt-2 space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center"
                    >
                      <FaFacebook className="mr-2" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center"
                    >
                      <FaTwitter className="mr-2" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center"
                    >
                      <FaInstagram className="mr-2" /> Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white flex items-center"
                    >
                      <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {!isDashboardPage && (
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; 2023 Your Company. All rights reserved.</p>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;
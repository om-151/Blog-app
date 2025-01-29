import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className="border py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Our Products</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  My blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Read blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  New 2025
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Trending topics
                </Link>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Topics</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Travelling
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Reading
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Health
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Wealth
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Books
                </Link>
              </li>
            </ul>
          </div>

          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Best blog</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  DhiWise Anima
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Myth Appsmith
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Dare to dam
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Special blogs
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Dilwale
                </Link>
              </li>
            </ul>
          </div>
          <div className=" text-center md:text-start">
            <h2 className="text-lg font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Career
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-400 hover:text-gray-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className=" container mx-auto  flex flex-col md:flex-row justify-between items-center">
        <div className="text-xl font-semibold hidden md:flex">
          <p className="font-semibold m-3">Blogger</p>
        </div>
        <div className="text-gray-400 text-sm hidden md:flex">
          <p>&copy; 2025 Blogger PVT. LTD. All rights reserved</p>
        </div>
        <div className="mt-4 md:mt-0 flex space-x-5">
          <Link to="https://github.com/" target="_blank">
            <FaGithub className="h-6" />
          </Link>
          <Link to="https://www.youtube.com/" target="_blank">
            <BsYoutube className="h-6" />
          </Link>
          <Link to="https://www.linkedin.com/" target="_blank">
            <FaLinkedin className="h-6" />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

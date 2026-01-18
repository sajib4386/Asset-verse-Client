import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaRegCopyright } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-black text-base-content p-10">

      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-4 md:justify-items-center justify-items-start">

        {/* Logo & Contact */}
        <div className="md:col-span-2 p-6 rounded-xl bg-[#111111] border border-gray-800 shadow-lg">

          {/* Logo */}
          <Link to="/" className="flex items-center mb-3">
            <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
              <span className="text-white">A</span>
              <span className="text-yellow-300 -ml-1">V</span>
            </div>
            <div className="ml-3 text-2xl font-bold text-white">
              <span className="text-rose-600">A</span>sset
              <span className="text-rose-600">V</span>erse
            </div>
          </Link>

          {/* Short Description */}
          <p className="text-sm text-gray-300 mb-5">
            AssetVerse helps companies easily manage and track physical assets like
            laptops, keyboards, and chairs — reducing loss and improving workflow efficiency.
          </p>

          {/* Contact */}
          <h4 className="text-white font-semibold mb-2">CONTACT</h4>
          <p className="text-gray-300">
            Email: <a className="link hover:text-rose-600 transition" href="mailto:assetverse@gmail.com">assetverse@gmail.com</a>
          </p>
          <p className="text-gray-300">
            Phone: <a className="link hover:text-rose-600 transition" href="tel:+880123456789">+880 1234 567 89</a>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="footer-title text-white mb-3">Quick Links</h3>
          <ul className="flex flex-col gap-2 text-gray-300">
            <li><a href="/" className="link link-hover hover:text-rose-600 transition">Home</a></li>
            <li><a href="/all-assets" className="link link-hover hover:text-rose-600 transition">Assets</a></li>
            <li><a href="/blogs" className="link link-hover hover:text-rose-600 transition">Blogs</a></li>
            <li><a href="/contacts" className="link link-hover hover:text-rose-600 transition">Contacts</a></li>
          </ul>
        </div>

        {/* Newsletter & Socials */}
        <div>
          <h3 className="footer-title text-white mb-3">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-3">
            Subscribe to get the latest updates and news from AssetVerse.
          </p>

          <div className="flex gap-2 mt-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-auto bg-gray-900 text-white border-gray-700 focus:border-rose-600"
            />
            <button className="btn bg-rose-600 border-none hover:bg-rose-700 px-5 text-white">
              Join
            </button>
          </div>

          {/* Social media links */}
          <div className="flex gap-4 mt-5 text-2xl text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition"><FaFacebook /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition"><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition"><FaSquareXTwitter /></a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-rose-600 transition"><FaGithub /></a>
          </div>
        </div>

      </div>

      {/* Copyright */}
      <div className="flex justify-center items-center gap-2 mt-12 pt-6 border-t border-gray-800 text-sm text-white">
        <FaRegCopyright />
        <p>2025 AssetVerse — All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <footer className="bg-black text-base-content p-10">

      <div className="max-w-10/12 mx-auto grid grid-cols-1 md:grid-cols-5 gap-10 px-4">

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
          <p className="text-gray-300">Email: <a className="link" href="#">assetverse@gmail.com</a></p>
          <p className="text-gray-300">Phone: <a className="link" href="#">+880 1234 567 89</a></p>
        </div>


        {/* Quick Links & Company */}
        <div className="grid grid-cols-2 gap-6 md:col-span-2">

          <div>
            <h3 className="footer-title text-white mb-3">Quick Links</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li><a className="link link-hover">Dashboard</a></li>
              <li><a className="link link-hover">Assets</a></li>
              <li><a className="link link-hover">Employees</a></li>
              <li><a className="link link-hover">Reports</a></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title text-white mb-3">Company</h3>
            <ul className="flex flex-col gap-2 text-gray-300">
              <li><a className="link link-hover">About Us</a></li>
              <li><a className="link link-hover">Blog</a></li>
              <li><a className="link link-hover">Careers</a></li>
              <li><a className="link link-hover">Privacy Policy</a></li>
            </ul>
          </div>

        </div>


        {/* NewsLetter */}
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
            <a className="hover:text-rose-600 transition"><FaFacebook /></a>
            <a className="hover:text-rose-600 transition"><FaLinkedin /></a>
            <a className="hover:text-rose-600 transition"><FaSquareXTwitter /></a>
            <a className="hover:text-rose-600 transition"><FaGithub /></a>
          </div>
        </div>

      </div>

      {/* Copyright information */}
      <div className="text-center mt-12 pt-6 border-t border-gray-800">
        <p className="text-sm text-white">
          © 2025 AssetVerse — All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
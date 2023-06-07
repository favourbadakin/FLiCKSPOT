import React from 'react'
import { AiOutlineTwitter, AiFillYoutube, AiFillFacebook } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="text-white px-5">
        <div className="flex items-center justify-between border-y py-3 border-white/40">
          <div>
            <h2 className="md:text-lg hover:text-[#00425A] font-bold text-[#146C94]">
              <Link to="/">FLiCKSPOT</Link>
            </h2>
          </div>
          <ul className="sm:flex items-center gap-x-4 hidden">
            <li>
              <Link to="/" className="hover:text-white/40 transition">
                Home
              </Link>
            </li>
            <li>
              <a href="/#" className="hover:text-white/40 transition">
                Movies
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-white/40 transition">
                Terms
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-white/40 transition">
                Contact Us
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-x-4">
            <span>
              <a href="/#" className="hover:text-white/40 transition">
                <AiOutlineTwitter />
              </a>
            </span>
            <span>
              <a href="/#" className="hover:text-white/40 transition">
                <AiFillYoutube />
              </a>
            </span>
            <span>
              <a href="/#" className="hover:text-white/40 transition">
                <AiFillFacebook />
              </a>
            </span>
          </div>
        </div>
        <div className="text-center py-3 text-xs sm:text-base text-white/40">
          <p>
            &copy; Design inspired by{" "}
            <a
              href="https://www.twitter.com/human_eiffel"
              target="_blank"
              className="border-b border-white/70 pb-1 hover:text-white"
            >
              Nathanael
            </a>{" "}
            and Implemented by{" "}
            <a
              href="https://www.twitter.com/fav_bdk"
              target="_blank"
              className="border-b border-white/70 pb-1 hover:text-white"
            >
              Favour
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer
import React from 'react'
import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <>
      <nav className="absolute top-0 flex justify-between w-full items-center z-10 md:text-lg px-3 my-3">
        <div>
          <h1 className="text-[#146C94] text-2xl font-bold cursor-pointer">
            FLiCKSPOT
          </h1>
        </div>
        <ul className="md:flex text-white gap-x-4 hidden">
          <li className="hover:text-white/70 transition">
            <a href="/#">Home</a>
          </li>
          <li className="hover:text-white/70 transition">
            <a href="/#">Favorites</a>
          </li>
          <li className="hover:text-white/70 transition">
            <a href="/#">Movies</a>
          </li>
        </ul>
        <div className="hidden md:block">
          <button className="bg-[#00425A] py-2 px-4 inline-block text-white font-bold gap-x-2 rounded-3xl hover:bg-[#146C94] transition">
            Log In
          </button>
        </div>
        <div className='md:hidden'>
          <MobileNav />
        </div>
      </nav>
    </>
  );
}
 
export default Navbar
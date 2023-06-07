import React, { useState } from 'react'
import { RxHamburgerMenu } from 'react-icons/rx';
import { GrClose } from 'react-icons/gr';
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Link } from 'react-router-dom';

const MobileNav = () => {
    const [menu, setMenu] = useState({
      isPaneOpen: false,
      isPaneOpenLeft: false,
    });
const openMenu = () =>{
setMenu({ isPaneOpen: true });
}
    const closeMenu = () => {
        setMenu({ isPaneOpen: false})
    }
  return (
    <>
      <div className="text-white">
        <button className="font-extrabold" onClick={openMenu}>
          <RxHamburgerMenu size={28} />
        </button>
      </div>
      <SlidingPane
        className="some-custom-class overflow-hidden whitespace-nowrap"
        overlayClassName="some-custom-overlay-class bg-blue-100 absolute z-10"
        isOpen={menu.isPaneOpen}
        hideHeader
        onRequestClose={closeMenu}
      >
        <button onClick={closeMenu}>
          <GrClose size={18} />
        </button>
        <div className="text-center">
          <ul className="text-lg font-bold mt-5">
            <li onClick={closeMenu}>
              <a href="/#">Home</a>
            </li>
            <li className="my-2" onClick={closeMenu}>
              <a href="/#">Favorites</a>
            </li>
            <li onClick={closeMenu}>
              <a href="/#">Movies</a>
            </li>
            <li className="my-2" onClick={closeMenu}>
              <a href="/#">Terms</a>
            </li>
            <li onClick={closeMenu}>
              <a href="/#">Contact Us</a>
            </li>
          </ul>
          <Link to='/login'>
            <button
              onClick={closeMenu}
              className="bg-[#00425A] w-full mt-12 py-2 px-4 inline-block text-white font-bold gap-x-2 rounded-3xl hover:bg-[#146C94] transition"
            >
              Log In
            </button>
          </Link>
        </div>
        <br />
      </SlidingPane>
    </>
  );
}

export default MobileNav
import React from 'react'
import { IoLogoGooglePlaystore } from 'react-icons/io5'
import { RiAppleLine } from "react-icons/ri";

const Download = () => {
  return (
    <>
      <div className="p-5 my-3">
        <div className="text-white border-2 border-[#DC8449]/30 py-3  fix">
          <h3 className="text-center mb-3 font-bold md:text-lg">
            Download Our Mobile Application
          </h3>
          <div className="flex gap-x-4 justify-center mb-1">
            <button className="border px-3 py-1 inline-flex items-center gap-x-2 rounded hover:bg-white hover:text-black transition">
              {" "}
              <IoLogoGooglePlaystore /> Google Play
            </button>
            <button className="border px-3 py-1 inline-flex items-center gap-x-2 rounded hover:bg-white hover:text-black transition">
              <RiAppleLine /> App Store
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

 export default Download
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { RxDividerVertical } from "react-icons/rx";
import { Link } from "react-router-dom";
import Movie from "./Movie";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);

  const slider = useRef();
  const slideLeft = () => {
    slider.current.scrollLeft = slider.current.scrollLeft - 500;
  };
   const slideRight = () => {
     slider.current.scrollLeft = slider.current.scrollLeft + 500;
   };

  return (
    <>
      <div className="text-white px-3">
        <div>
          <div className="flex items-center">
            <span className="text-xl">
              <RxDividerVertical className="text-xl text-[#00425A]" size={25} />
            </span>

            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <Link to='/ViewAll' className="underline ml-5">View All</Link>
        </div>
        <div className="flex items-center group relative">
          <BsArrowLeft
            onClick={slideLeft}
            size={28}
            className="rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
          <div
            ref={slider}
            className="w-full h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {movies.map((item, index) => (
              <Movie key={index} item={item} />
            ))}
          </div>
          <BsArrowRight
            onClick={slideRight}
            size={28}
            className="rounded-full absolute right-0  opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
        </div>
      </div>
    </>
  );
};

export default Row;

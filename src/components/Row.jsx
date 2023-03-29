import React, { useState, useEffect } from "react";
import axios from "axios";
import { RxDividerVertical } from "react-icons/rx";
import Movie from "./Movie";

const Row = ({ title, url }) => {
  const [movies, setMovies] = useState([]);
 

  useEffect(() => {
    axios.get(url).then((res) => {
      setMovies(res.data.results);
    });
  }, [url]);

  return (
    <>
      <div className="text-white px-3">
        <div>
          <div className="flex items-center">
            <span className="text-xl">
              <RxDividerVertical
                className="text-xl text-[#00425A]"
                size={25}
              />
            </span>

            <h3 className="font-bold text-lg">{title}</h3>
          </div>
          <p className="underline ml-5">View All</p>
        </div>
        <div className="w-full h-full overflow-y-hidden overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
          {movies.map((item, index) => (
            <Movie key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Row;

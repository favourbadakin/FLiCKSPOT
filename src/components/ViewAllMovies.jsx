import React, { useState, useEffect } from "react";
import axios from "axios";

const Charts1 = ({ url }) => {
  const [movies, setMovies] = useState([]);

  const imgUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    axios.get(url.popular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

  return (
    <>
      <div className="pt-14 md:pt-[4.2rem]">
        <div className="px-4 pb-4 sm:grid grid-cols-2 md:w-full md:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <div
              className="pb-5 hover:bg-black/80 cursor-pointer"
              key={movie?.id}
            >
              <div className="relative top-0 left-0 w-full h-full hover:bg-black/80 hover:opacity-30 opacity-100 text-white">
                <img
                  src={`${imgUrl}${movie?.backdrop_path}`}
                  alt={movie?.title}
                />
                <p className="text-center mt-2">{movie?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Charts1;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsPlayCircleFill } from 'react-icons/bs';

const Header = ({ url }) => {
  const [movie, setMovie] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const randomMovie = movie[Math.floor(Math.random() * movie.length)];
  const truncateString = (str, limit) => {
    if (str?.length > limit) {
      return str.slice(0, limit) + "...";
    } else {
      return str;
    }
  };
  
  useEffect(() => {
    axios.get(url).then((res) => {
      setMovie(res.data.results);
    });
  }, []);
 

  return (
    <>
      <div className="text-white h-[550px] w-full mb-3">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            src={`${imgUrl}${randomMovie?.backdrop_path}`}
            className="object-cover w-full h-full"
            alt={randomMovie?.title}
          />
          <div className="absolute top-36 px-4">
            <h2 className="pb-4 text-xl lg:text-2xl font-bold">
              {randomMovie?.title}
            </h2>
            <div className="border-y border-white/40 w-[60%] py-2 flex gap-x-4 md:gap-x-8 lg:gap-x-40">
              <span>
                {randomMovie?.genre_ids[0] === 28
                  ? "Action"
                  : randomMovie?.genre_ids[0] === 12
                  ? "Adventure"
                  : randomMovie?.genre_ids[0] === 16
                  ? "Animation"
                  : randomMovie?.genre_ids[0] === 35
                  ? "Comedy"
                  : randomMovie?.genre_ids[0] === 80
                  ? "Crime"
                  : randomMovie?.genre_ids[0] === 99
                  ? "Documentary"
                  : randomMovie?.genre_ids[0] === 18
                  ? "Drama"
                  : randomMovie?.genre_ids[0] === 10751
                  ? "Family"
                  : randomMovie?.genre_ids[0] === 14
                  ? "Fantasy"
                  : randomMovie?.genre_ids[0] === 36
                  ? "History"
                  : randomMovie?.genre_ids[0] === 27
                  ? "Horror"
                  : randomMovie?.genre_ids[0] === 10402
                  ? "Music"
                  : randomMovie?.genre_ids[0] === 9648
                  ? "Mystery"
                  : randomMovie?.genre_ids[0] === 10749
                  ? "Romance"
                  : randomMovie?.genre_ids[0] === 878
                  ? "Science Fiction"
                  : randomMovie?.genre_ids[0] === 10770
                  ? "TV Movie"
                  : randomMovie?.genre_ids[0] === 53
                  ? "Thriller"
                  : randomMovie?.genre_ids[0] === 10752
                  ? "War"
                  : randomMovie?.genre_ids[0] === 37
                  ? "Western"
                  : null}
              </span>
              <span className="text-white/40">|</span>
              <span>
                Released - {randomMovie?.release_date.substring(0, 4)}
              </span>
            </div>
            <p className="my-4 w-full md:w-[60%]">
              {truncateString(randomMovie?.overview, 180)}
            </p>
            <div className="font-semibold">
              <button className="bg-[#00425A] py-2 px-4 inline-flex items-center gap-x-2 rounded-full hover:bg-[#146C94] transition">
                Watch Now
                <span>
                  <BsPlayCircleFill />
                </span>
              </button>
              <button className="bg-white/10 px-4 py-2 inline-block ml-4 rounded-full hover:bg-[#00425A] transition">
                Watch Later
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;

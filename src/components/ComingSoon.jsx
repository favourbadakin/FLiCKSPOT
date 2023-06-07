import React, { useEffect, useState, useRef } from "react";
import endpoint from "../Endpoints";
import axios from "axios";
import { RxDividerVertical } from "react-icons/rx";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";

const ComingSoon = () => {
  const [movie, setMovie] = useState([]);
  const imgUrl = "https://image.tmdb.org/t/p/original/";
  const randomMovie = movie[Math.floor(Math.random() * movie?.length)]

  useEffect(() => {
    axios.get(endpoint.nowPlaying).then((res) => {
      setMovie(res.data.results);
    });
  }, []);
  
  const slider = useRef();
  const slideUp = () => {
    slider.current.scrollUp = slider.current.scrollTo(0, -800);
    
  };
  const slideDown = () => {
 slider.current.scrollUp = slider.current.scrollTo(0, 100);
  }
  
  return (
    <>
      <div className="text-white px-3 my-4">
        <div className="flex items-center mb-2">
          <span className="text-xl">
            <RxDividerVertical className="text-xl text-[#00425A]" size={25} />
          </span>

          <h3 className="font-bold text-lg">Coming Soon</h3>
        </div>
        <div className="grid sm:grid-cols-2 px-3">
          <div className="relative cursor-pointer">
            <div className="w-full h-full">
              <div className="absolute w-full h-full bg-gradient-to-l from-black"></div>
              <img
                src={`${imgUrl}${randomMovie?.backdrop_path}`}
                alt={randomMovie?.title}
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute bg-black/70 bottom-0 w-full py-2 md:py-3 px-3">
              <h4 className="text-base lg:text-lg">{randomMovie?.title}</h4>
              <p className="text-xs">
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
              </p>

              <p className="text-sm">
                {randomMovie?.release_date.substring(0, 4)}
              </p>
            </div>
          </div>
          <div
            className="h-48 md:h-96 overflow-y-scroll scroll-smooth scrollbar-hide relative"
            ref={slider}
          >
            <BsArrowUp onClick={slideUp} className="absolute" />
            {movie.map((mov) => (
              <div
                className="flex items-center py-2 gap-x-4 text-[#146C94] border-[#00425A]/30 border-b font-bold"
                key={mov?.id}
                
              >
                <a href="/#">
                  <img
                    src={`${imgUrl}${mov.backdrop_path}`}
                    alt={mov?.title}
                    className="w-36"
                  />
                </a>
                <div className="cursor-pointer">
                  <h4 className="text-sm">
                    <a href="/#">{mov?.title}</a>
                  </h4>
                  <p className="text-sm md:text-lg">
                    {mov?.genre_ids[0] === 28
                      ? "Action"
                      : mov?.genre_ids[0] === 12
                      ? "Adventure"
                      : mov?.genre_ids[0] === 16
                      ? "Animation"
                      : mov?.genre_ids[0] === 35
                      ? "Comedy"
                      : mov?.genre_ids[0] === 80
                      ? "Crime"
                      : mov?.genre_ids[0] === 99
                      ? "Documentary"
                      : mov?.genre_ids[0] === 18
                      ? "Drama"
                      : mov?.genre_ids[0] === 10751
                      ? "Family"
                      : mov?.genre_ids[0] === 14
                      ? "Fantasy"
                      : mov?.genre_ids[0] === 36
                      ? "History"
                      : mov?.genre_ids[0] === 27
                      ? "Horror"
                      : mov?.genre_ids[0] === 10402
                      ? "Music"
                      : mov?.genre_ids[0] === 9648
                      ? "Mystery"
                      : mov?.genre_ids[0] === 10749
                      ? "Romance"
                      : mov?.genre_ids[0] === 878
                      ? "Science Fiction"
                      : mov?.genre_ids[0] === 10770
                      ? "TV Movie"
                      : mov?.genre_ids[0] === 53
                      ? "Thriller"
                      : mov?.genre_ids[0] === 10752
                      ? "War"
                      : mov?.genre_ids[0] === 37
                      ? "Western"
                      : null}
                  </p>
                  <p className="text-xs">{mov?.release_date.substring(0, 4)}</p>
                </div>
              </div>
            ))}
            <BsArrowDown onClick={slideDown} className="absolute top-[10rem]" />
          </div>
        </div>
      </div>
    </>
  );};

export default ComingSoon;

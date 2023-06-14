import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Charts1 = ({ url }) => {
  const [like, setLike] = useState(false);
  const [movies, setMovies] = useState([]);

  const imgUrl = "https://image.tmdb.org/t/p/original/";

   const truncateString = (str, limit) => {
     if (str?.length > limit) {
       return str.slice(0, limit) + "...";
     } else {
       return str;
     }
   };

  useEffect(() => {
    axios.get(url.popular).then((res) => {
      setMovies(res.data.results);
    });
  }, []);

 const handleLike = () => {
   setLike(!like);
 };

  return (
    <>
      <div className="pt-14 md:pt-[4.2rem]">
        <div className="px-4 pb-4 sm:grid grid-cols-2 md:w-full md:grid-cols-4 gap-5">
          {movies.map((movie) => (
            <div
              className="pb-5 hover:bg-black/80 cursor-pointer"
              key={movie?.id}
            >
              <div className="relative top-0 left-0 w-full h-full text-white">
                <img
                  src={`${imgUrl}${movie?.backdrop_path}`}
                  alt={movie?.title}
                  className="hover:bg-black/80 hover:opacity-30 opacity-100"
                />
                <div>
                  <div className="bg-black/70 w-full absolute bottom-0 left-0 p-2 flex items-center justify-between">
                    <div className="text-xs">
                      <h4 className="bold">{truncateString(movie?.title, 26)}</h4>
                      <p>
                        {movie?.genre_ids[0] === 28
                          ? "Action"
                          : movie?.genre_ids[0] === 12
                          ? "Adventure"
                          : movie?.genre_ids[0] === 16
                          ? "Animation"
                          : movie?.genre_ids[0] === 35
                          ? "Comedy"
                          : movie?.genre_ids[0] === 80
                          ? "Crime"
                          : movie?.genre_ids[0] === 99
                          ? "Documentary"
                          : movie?.genre_ids[0] === 18
                          ? "Drama"
                          : movie?.genre_ids[0] === 10751
                          ? "Family"
                          : movie?.genre_ids[0] === 14
                          ? "Fantasy"
                          : movie?.genre_ids[0] === 36
                          ? "History"
                          : movie?.genre_ids[0] === 27
                          ? "Horror"
                          : movie?.genre_ids[0] === 10402
                          ? "Music"
                          : movie?.genre_ids[0] === 9648
                          ? "Mystery"
                          : movie?.genre_ids[0] === 10749
                          ? "Romance"
                          : movie?.genre_ids[0] === 878
                          ? "Science Fiction"
                          : movie?.genre_ids[0] === 10770
                          ? "TV Movie"
                          : movie?.genre_ids[0] === 53
                          ? "Thriller"
                          : movie?.genre_ids[0] === 10752
                          ? "War"
                          : movie?.genre_ids[0] === 37
                          ? "Western"
                          : null}
                      </p>
                    </div>
                    <span onClick={handleLike}>
                      {like ? (
                        <AiFillHeart color="#FF0000" />
                      ) : (
                        <AiOutlineHeart />
                      )}
                    </span>
                  </div>
                </div>
     
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Charts1;

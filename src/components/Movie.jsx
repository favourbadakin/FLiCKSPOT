import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const imgUrl = "https://image.tmdb.org/t/p/w500/";

  const truncateString = (str, limit) => {
    if(str?.length > limit){
        return str.slice(0, limit) + '...'
    } else{
        return str
    }
  }

  const handleLike = () => {
    setLike(!like);
  };
  return (
    <>
      <div className="inline-block relative cursor-pointer m-2 w-[240px] sm:w-[280px] lg:w-[280px]">
        <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
        <img
          className="h-auto block w-full"
          src={`${imgUrl}${item?.backdrop_path}`}
          alt={item?.title}
        />

        <div className="text-xs flex items-center justify-between py-2 px-4 absolute left-0 bottom-0 bg-black/70 w-full">
          <div>
            <h4 className="font-bold">
            
              {truncateString(item?.title, 30)}
            </h4>
            <p>
              {item?.genre_ids[0] === 28
                ? "Action"
                : item?.genre_ids[0] === 12
                ? "Adventure"
                : item?.genre_ids[0] === 16
                ? "Animation"
                : item?.genre_ids[0] === 35
                ? "Comedy"
                : item?.genre_ids[0] === 80
                ? "Crime"
                : item?.genre_ids[0] === 99
                ? "Documentary"
                : item?.genre_ids[0] === 18
                ? "Drama"
                : item?.genre_ids[0] === 10751
                ? "Family"
                : item?.genre_ids[0] === 14
                ? "Fantasy"
                : item?.genre_ids[0] === 36
                ? "History"
                : item?.genre_ids[0] === 27
                ? "Horror"
                : item?.genre_ids[0] === 10402
                ? "Music"
                : item?.genre_ids[0] === 9648
                ? "Mystery"
                : item?.genre_ids[0] === 10749
                ? "Romance"
                : item?.genre_ids[0] === 878
                ? "Science Fiction"
                : item?.genre_ids[0] === 10770
                ? "TV Movie"
                : item?.genre_ids[0] === 53
                ? "Thriller"
                : item?.genre_ids[0] === 10752
                ? "War"
                : item?.genre_ids[0] === 37
                ? "Western"
                : null}
            </p>
          </div>
          <div>
            <span onClick={handleLike} className='text-base md:text-lg'>
              {like ? <AiFillHeart color="#FF0000" /> : <AiOutlineHeart />}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Movie;

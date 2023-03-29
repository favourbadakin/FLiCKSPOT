const key = import.meta.env.VITE_APIKEY
const number = Math.floor(Math.random() * 11 + 1)

const endpoint = {
  popular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=${number}`,
  latest: `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`,
  comingSoon: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=${number}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=${number}`,
  nowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
};

export default endpoint;
import React from 'react'
import Header from "../components/Header";
import Row from '../components/Row';
import endpoint from "../Endpoints";
import Pricing from "../components/Pricing";
import Download from "../components/Download";
import ComingSoon from '../components/ComingSoon';

const Home = () => {
  
  return (
    <>
      <Header url={endpoint.nowPlaying} />
      <Row title="Popular Movies" url={endpoint.popular} />
      <Row title="Top Rated Movies" url={endpoint.topRated} />
      <ComingSoon />
      <Pricing />
       <Download />
           </>
  );
}

export default Home
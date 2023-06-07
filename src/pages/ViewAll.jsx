import React from "react";
import ViewAllMovies from "../components/ViewAllMovies";
import endpoint from "../Endpoints";

const ViewAll = () => {
    
  return (
    <>
      <div className="text-white">
        <ViewAllMovies url={endpoint} />
      </div>
    </>
  );
};

export default ViewAll;

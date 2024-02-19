import React from "react";

const Shimmer = () => {
  return (
    <div data-testid="shimmer" className="shimmer-container" >
      {/* {
        Array(10).fill("").map((e,index)=>(
          <div className="shimmer-card" key={index}></div>
        ))
      } */}
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div> 
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div> 
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div> 
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div>
      <div className="shimmer-card"></div> 
    </div>
  );
};

export default Shimmer;

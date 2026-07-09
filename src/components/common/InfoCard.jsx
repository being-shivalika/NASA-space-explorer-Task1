import React from "react";

const InfoCard = (tag, title, img, description) => {
  return (
    <>
      <div className="h-90 w-full flex flex-wrap justify-center">
        <h1>dive container</h1>
        <div className="imgC1 h-90 w-2xl ">
          <img src={img} />
        </div>
        <div className="details flex flex-col justify-center align-middle">
          <h1 className="playfair-display">{title}</h1>
        </div>
      </div>
    </>
  );
};

export default InfoCard;

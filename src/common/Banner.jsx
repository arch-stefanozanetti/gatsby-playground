import React from "react";

const Banner = ({ id, title, content, button, image, Alignement }) => {
  return (
    <div className={`"BannerWrapper" ${Alignement}`} id={id}>
      <div className={`"textWrapper" ${Alignement}`}>
        <h2>{title}.</h2>
        <p className="paragraph">{content}</p>
        <button className="buttons">{button} > </button>
      </div>
      <div>{image}</div>
    </div>
  );
};
export default Banner;

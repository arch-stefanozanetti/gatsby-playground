import React from "react";

const Banner = ({ id, title, content, button, image, Alignement }) => {
  return (
    <div className={`BannerWrapper ${Alignement}`} id={id}>
      <div className={`textWrapper ${Alignement}`}>
        <h2>{title}.</h2>
        <div className="paragraph">{content}</div>
        <button className="buttons">{button} > </button>
      </div>
      <div className="bannerImage">{image}</div>
    </div>
  );
};
export default Banner;

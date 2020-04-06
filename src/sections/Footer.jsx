import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";


const Footer = ({ data }) => {
  const links = data.map((link, index) => {
    return <AnchorLink href={`#${link.id}`}>{link.name}</AnchorLink>;
  });

  return (
    <div className="footer">
      <a href="#top" className="logo" />
      <div className="AnchorLinkWrapper">{links}</div>
      <div className="socialIconsWrapper">
        <div className="socialIcon Fabebook" />
        <div className="socialIcon linkedin" />
        <div className="socialIcon instagram" />
      </div>
    </div>
  );
};
export default Footer;

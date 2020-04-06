import React, { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerButton from '../common/HamburgerButton';

const Header = ({ data }) => {
    const [IsOpen, setIsOpen] = useState(false)

    const links = data.map((link, index) => {
        return (<AnchorLink href={`#${link.id}`}>{link.name}</AnchorLink>)
    })
    

    return (
      <div className="navbar">
        <div className="logo" />
        <div className={`"AnchorLinkWrapper ${IsOpen && "active"}`}>{links}</div>
        <HamburgerButton IsOpen={IsOpen} setIsOpen={setIsOpen} />
      </div>
    );
}
export default Header
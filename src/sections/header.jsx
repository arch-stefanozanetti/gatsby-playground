import React, { useState, useEffect} from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import HamburgerButton from '../common/HamburgerButton';

const Header = ({ data }) => {
    const [IsOpen, setIsOpen] = useState(false)
    const [NavStyle, setNavStyle] = useState("");
    
 const listenScrollEvent = e => {
    if (window.scrollY > 400) {
      setNavStyle("scroll");
    } else {
      setNavStyle("");
    }
  }

    
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent)
  }, [])


    const links = data.map((link, index) => {
        return (<AnchorLink className="linkElement" href={`#${link.id}`}>{link.name}</AnchorLink>)
    })
    

    return (
      <div className={`navbar ${NavStyle}`}>
        <div className="logo" />
        <div className={`"AnchorLinkWrapper ${IsOpen && "active"}`}>
          {links}
        </div>
        <HamburgerButton IsOpen={IsOpen} setIsOpen={setIsOpen} />
      </div>
    );
}
export default Header
import React from "react";

const HamburgerButton = ({IsOpen, setIsOpen}) => {
    return (
        <div className="burgerWrapper" onClick={()=> setIsOpen(!IsOpen) }>
            <div className={`burger top ${IsOpen && "active"}`}/>
            <div className={`burger center ${IsOpen && "active"}`}/>
            <div className={`burger bottom ${IsOpen && "active"}`} />
        </div>
    )
}

export default HamburgerButton;
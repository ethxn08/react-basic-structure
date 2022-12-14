import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    //cuando esta true lo pasa a false y vice versa
    setClicked(!clicked);
  };
  return (
    <>
      <NavContainer>
        <h2 className="activeTitle">
          Navbar <span>Responsive</span>
        </h2>
        <div className={`links ${clicked ? "active" : ""}`}>
          <Link onClick={handleClick} to="/" className="a">
            Home
          </Link>
          <Link onClick={handleClick} to="/about-us" className="a">
            About-Us
          </Link>
          <Link onClick={handleClick} to="/services" className="a">
            Services
          </Link>
          <Link onClick={handleClick} to="/contact" className="a">
            Contact
          </Link>
          <Link onClick={handleClick} to="/blog" className="a">
            Blog
          </Link>
        </div>
        <div className={`${clicked ? "burguerActive" : "burguer"}`}>
          <BurguerButton clicked={clicked} handleClick={handleClick} />
        </div>
        <BgDiv className={`initial ${clicked ? " active" : ""}`}></BgDiv>
      </NavContainer>
    </>
  );
}

export default Navbar;

const NavContainer = styled.nav`
  h2 {
    color: white;
    font-weight: 400;
    span {
      font-weight: bold;
    }
  }
  padding: 0.4rem;
  background-color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .a {
    color: white;
    text-decoration: none;
    margin-right: 1.4rem;
  }
  .links {
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all 0.5s ease;
    a {
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media (min-width: 768px) {
      position: initial;
      margin: 0;
      a {
        font-size: 1rem;
        color: white;
        display: inline;
      }
      display: block;
    }
  }
  .links.active {
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 20%;
    left: 0;
    right: 0;
    text-align: center;
    z-index: 1;
    a {
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }
  .burguer {
    z-index: 1;
    @media (min-width: 768px) {
      display: none;
    }
  }
  @keyframes intro{
    from {
      opacity: 0
    }

    to {
      opacity: 1
    }
  }
  .burguerActive {
    z-index: 1;
    display: block;
    animation-duration: 3s;
    animation-name: intro;
`;

const BgDiv = styled.div`
  background-color: #222;
  position: absolute;
  top: -1000px;
  left: -1000px;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: all 0.6s ease;

  &.active {
    border-radius: 0 0 80% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

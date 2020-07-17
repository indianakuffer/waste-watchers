import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import "../../../App.css";

const NavBar = styled.nav`
  background-color: #dadada;
  width: 100%;
  height: 90px;
  text-decoration: none;
  font-family: Nunito;
`;

const LogRecycling = styled(NavLink)`
  width: 110px;
  height: 23px;
  font-size: 17px;
  color: #000000;
  text-decoration: none;
`;

const Links = styled(NavLink)`
display: flex;
flex-direction: row;
justify-content: flex-end;
align-items: center;
text-decoration: none;
font-family: Nunito;
color: #000000;
background-color: red;
font-size: 17px;
height: 23px;
width: 110px;
`

export default function Nav() {
  return (
    <NavBar>
      <nav>
        <div className="nav">
          <NavLink classname="logo" to="/">
            Waste Wasters
          </NavLink>
          <div className="links">
            <Links className="log-recycling" to="/log">
              Log Recycling
            </Links>
            <Links className="link" to="/progress">
              My Progress
            </Links>
            <Links className="link" to="/about">
              About Us
            </Links>
          </div>
        </div>
      </nav>
    </NavBar>
  );
}

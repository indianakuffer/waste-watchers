import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Nav() {
  return (
    <nav>
      <div className="nav">
        <NavLink classname="logo" to="/">
          Waste Wasters
        </NavLink>
        <div className="links">
          <NavLink className="link" to="/log">
            Log Recycling
          </NavLink>
          <NavLink className="link" to="/progress">
            My Progress
          </NavLink>
          <NavLink className="link" to="/about">
            About Us
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

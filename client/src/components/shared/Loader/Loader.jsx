import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useSpring, animated } from 'react-spring'

const SpinnerContainer = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
`;

const Spinner = styled.div`
  width: 75px;
  height: 75px;
  margin: 0;
  background: transparent;
  border-top: 4px solid blue;
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`;

export default function Loader() {
  const [isLoading, setIsLoading] = useState(false);
  const contentProps = useSpring({
    opacity: isLoading ? 1 : 0,
    marginTop: isLoading ? 0 : -500 })

  return (
    <>
      <button onClick={() => setIsLoading(a => !a)}>
        Click here!
      </button>
      {!isLoading ? (<div className="Intro">Some Text</div>) : (<animated.div className="box" style={contentProps}><Spinner /></animated.div>)}
      </>
  );
}

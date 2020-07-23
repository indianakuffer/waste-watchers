import React, { useState, useEffect } from "react";
import styled from "styled-components";
import UseSpring from 'react-spring'

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

export default function Loader({ isLoading, children, ...props}) {
  const [showLoader, setShowLoader] = useState(false);
  const fadeOutProps = useSpring({ opacity: showLoader ? 1 : 0 });
  const fadeInProps = useSpring({ opacity: showLoader ? 0 : 1})
  

  useEffect(() => {
    if (isLoading) {
      setShowLoader(true);
    }

    if (!isLoading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [isLoading, showLoader]);

  


  return (
    <SpinnerContainer>
      <Spinner />
    </SpinnerContainer>
  );
}

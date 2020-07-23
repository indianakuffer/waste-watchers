import React, { useState } from "react";
import styled from "styled-components";

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
    to {transform: rotate(360deg); 
    }
  }
`;

export default function Loader() {
  return (
    <>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </>
  );
}

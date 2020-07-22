import React from "react";
import styled from "styled-components";

const SpinnerContainer = styled.div`
  border: 3px dashed black;
  width: 300px;
  height: 300px;
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
`;

export default function Loader() {
  return (
    <div>
      <SpinnerContainer>
        <Spinner />
      </SpinnerContainer>
    </div>
  );
}

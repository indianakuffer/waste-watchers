import React from "react";
import Button from "../shared/Button/Button";
import styled from "styled-components";

const ButtonContainer = styled.div`
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 160px;
  width: 180px;
`;



export default function NavMenu(props) {
  return (
    <ButtonContainer>
      <Button
        color="#5A83EC"
        buttonText="Manage My Account"
        buttonLink="/account/:id/edit"
      />

      <Button color="#FF7373" buttonText="Sign Out" buttonLink="/" />
    </ButtonContainer>
  );
}

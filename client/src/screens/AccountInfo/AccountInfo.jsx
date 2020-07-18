import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import styled from "styled-components";
import Button from "../../components/shared/Button/Button";

const ScreenContainer = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .squiggle {
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -10;
    background: url("https://i.imgur.com/JqlYCOL.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

const AccountDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  button {
    margin: 10px 0;
    font-size: 18px;
  }
`;

const TopImage = styled.div`
  top: 0;
`;

const BottomImage = styled.div`
  bottom: 0;
  transform: scaleY(-1) scaleX(-1);
`;

export default function AccountInfo(props) {
  return (
    <Layout loggedIn={props.loggedIn}>
      <ScreenContainer>
        <TopImage className="squiggle" />
        <AccountDiv>
          <h1>Manage My Account</h1>
          <h3>
            Welcome, Dakota! <br /> What would you like to do next?{" "}
          </h3>
          <Button color="#5a83ec" buttonText="Edit Account Information" />
          <Button color="#aeaeae" buttonText="Settings" buttonLink="#" />

          <Button
            color="#ff7373"
            buttonText="Delete My Account"
            buttonLink="/"
          />
        </AccountDiv>
        <BottomImage className="squiggle" />
      </ScreenContainer>
    </Layout>
  );
}

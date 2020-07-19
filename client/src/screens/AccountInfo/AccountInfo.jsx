import React, { useEffect, useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import styled from "styled-components";
import Button from "../../components/shared/Button/Button";
import { getUser } from '../../services/users'

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
`
const AccountDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;

  button {
    margin: 10px 0;
    font-size: 18px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
`
const UserPhoto = styled.img`
margin: -10px;
border-radius: 50%;
background-color: transparent;

`
const TopImage = styled.div`
  top: 0;
`
const BottomImage = styled.div`
  bottom: 0;
  transform: scaleY(-1) scaleX(-1);
`

export default function AccountInfo(props) {
  let [userData, setUserData] = useState(null)

  useEffect(() => {
    const helper = async id => {
      const response = await getUser(id)
      setUserData(response.accountInfo)
    }
    helper(props.loggedIn)
  }, [])

  return (
    <Layout loggedIn={props.loggedIn}>
      <ScreenContainer>
        <TopImage className="squiggle" />
        <AccountDiv>
          <h1>Manage My Account</h1>
          {userData &&
            <>
              <UserPhoto src={userData.profileImg} />
              <h3>Welcome, {userData.username}!<br />What would you like to do next?{" "}</h3>
            </>
          }
          <Button color="#5a83ec" buttonText="Edit Account Information" buttonLink={`/account/${props.loggedIn}/edit`} />
          <Button color="#aeaeae" buttonText="Settings" />
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

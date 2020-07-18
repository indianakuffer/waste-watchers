import React, { useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import Button from "../../components/shared/Button/Button";
import styled from "styled-components";
import { deleteUser } from '../../services/users'
import { Redirect } from 'react-router-dom'

const ScreenContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .squiggle {
    position: absolute;
    width: 100%;
    height: 50%;
    z-index: -10;
    background: url("https://i.imgur.com/lVYqloz.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`
const ScreenDiv = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 0;
  padding: 50px;

  button {
    margin: 10px 0;
  }
`
const TopSquiggle = styled.div`
  top: 0;
`
const BottomSquiggle = styled.div`
  bottom: 0;
  transform: scaleY(-1) scaleX(-1);
`

export default function DeleteAccount(props) {
  let [deleted, setDeleted] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    const response = await deleteUser(props.loggedIn)
    props.setLoggedIn(null)
    setDeleted(true)
  }

  if (deleted) return <Redirect to='/' />

  return (
    <Layout loggedIn={props.loggedIn}>
      <ScreenContainer>
        <TopSquiggle className="squiggle" />
        <ScreenDiv>
          <h1>
            Are you sure you want to delete your account? <br /> This action
            cannot be undone.
          </h1>
          <Button
            color="#5A83EC"
            buttonText="Cancel"
            buttonLink={`/account/${props.loggedIn}`}
          />
          <Button
            color="#FF7373"
            buttonText="Yes, Delete My Account"
            buttonLink="/"
            onClick={handleSubmit}
          />
        </ScreenDiv>
        <BottomSquiggle className="squiggle" />
      </ScreenContainer>
    </Layout>
  );
}

import React, { useEffect, useState } from "react"
import { getUser } from '../../services/users'
import styled from "styled-components"
import Layout from "../../components/shared/Layout/Layout"
import ProfilePicCircle from '../../components/shared/ProfilePicCircle/ProfilePicCircle'
import Button from "../../components/shared/Button/Button"
import Card from "../../components/shared/Card/Card"
import Loader from '../../components/shared/Loader/Loader'

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
const Welcome = styled.div`
  font-size: 18px;
  font-weight: bold;
`

export default function AccountInfo(props) {
  let [userData, setUserData] = useState(null)
  let [loading, setLoading] = useState(false)

  useEffect(() => {
    const helper = async id => {
      setLoading(true)
      const response = await getUser(id)
      setLoading(false)
      setUserData(response.accountInfo)
    }
    helper(props.loggedIn)
  }, [])

  return (
    <Layout waves={true} loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Card>
        <AccountDiv>
          <h1>Manage My Account</h1>
          {userData &&
            <>
              <ProfilePicCircle profileImg={userData.profileImg} />
              <Welcome>Welcome, {userData.username}!<br />What would you like to do next?{" "}</Welcome>
            </>
          }
          <Button
            color="#5a83ec"
            buttonText="Edit Account Information"
            buttonLink={`/account/${props.loggedIn}/edit`}
            image='images/button-icons/right-arrow.svg'
          />
          <Button
            color="#aeaeae"
            buttonText="Settings"
            image='images/button-icons/right-arrow.svg'
          />
          <Button
            color="#ff7373"
            buttonText="Delete My Account"
            buttonLink={`/account/${props.loggedIn}/delete`}
            image='images/button-icons/right-arrow.svg'
          />
        </AccountDiv>
      </Card>
      {loading && <Loader />}
    </Layout>
  );
}
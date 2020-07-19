import React from 'react'
import styled from 'styled-components'

const ProfilePic = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-image: url(${props => props.profileImg});
  background-size: cover;
  background-position: center;
  margin-bottom: 30px;
`

export default function ProfilePicCircle(props) {
  return (
    <ProfilePic profileImg={props.profileImg}></ProfilePic>
  )
}

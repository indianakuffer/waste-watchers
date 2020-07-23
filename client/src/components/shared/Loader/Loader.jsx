import React from "react"
import styled from "styled-components"

const Spinner = styled.div`
  position: fixed;
  top: 40vh;
  width: 75px;
  height: 75px;
  background: transparent;
  border-top: 4px solid #5a83ec;
  border-right: 4px solid transparent;
  border-radius: 50%;
  animation: 1s spin linear infinite;
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
`

export default function Loader() {
  return (
    <Spinner />
  )
}

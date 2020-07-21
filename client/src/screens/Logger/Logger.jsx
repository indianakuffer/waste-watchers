import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'
import ItemCategory from '../../components/ItemCategory/ItemCategory'
import Button from '../../components/shared/Button/Button'
import styled from 'styled-components'
import { getUser, updateUser } from '../../services/users'
import { Redirect } from 'react-router-dom'
import itemList from '../../item-list.json'

const ItemList = styled.div`
  display: flex;
  flex-flow: column;
  padding: 40px 10%;
  .btn {
    width: 300px;
    align-self: center;
  }
`
const Squiggle = styled.img`
  width: 100%;
  z-index: -10;
`

export default function Logger(props) {
  let [loggedList, setLoggedList] = useState({ metal: 0, glass: 0, plastic: 0, cartons: 0, paper: 0, cardboard: 0 })
  let [retrievedData, setRetrievedData] = useState(null)
  let [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const helper = async () => {
      const response = await getUser(props.loggedIn)
      setRetrievedData({ points: response.points, itemCategories: response.itemCategories })
    }
    if (props.loggedIn) helper()
  }, [])

  const changeItem = (category, amount) => {
    const current = loggedList[category]
    setLoggedList({ ...loggedList, [category]: current + amount })
  }

  const handleSubmit = async () => {
    let loggedTotal = 0
    Object.keys(loggedList).forEach(category => loggedTotal += loggedList[category])
    if (loggedTotal <= 0) {
      alert('No items logged.')
      return
    }

    const updateObject = {
      points: retrievedData.points += loggedTotal,
      itemCategories: {
        metal: retrievedData.itemCategories.metal + loggedList.metal,
        glass: retrievedData.itemCategories.glass + loggedList.glass,
        plastic: retrievedData.itemCategories.plastic + loggedList.plastic,
        cartons: retrievedData.itemCategories.cartons + loggedList.cartons,
        paper: retrievedData.itemCategories.paper + loggedList.paper,
        cardboard: retrievedData.itemCategories.cardboard + loggedList.cardboard
      }
    }

    const response = await updateUser(props.loggedIn, updateObject)
    setSubmitted(true)
  }

  if (submitted) return <Redirect to='/progress' />

  return (
    <Layout loggedIn={props.loggedIn} setLoggedIn={props.setLoggedIn}>
      <Jumbotron
        imageUrl='https://i.imgur.com/Oj8yaYf.png'
        color='#31c96e'
        bigText='Earn points for each item you recycle.'
        smallText={`For every 100 points you earn, we'll plant a tree in your name.`}
      />
      <Squiggle src='https://i.imgur.com/2d7CEc0.png' />
      <ItemList>
        {Object.keys(itemList).map(category => {
          return <ItemCategory name={category} contents={itemList[category]} changeItem={changeItem} />
        })}
        <Button
          color="#31C96E"
          buttonText="Submit"
          onClick={handleSubmit}
        />
      </ItemList>
    </Layout>
  )
}
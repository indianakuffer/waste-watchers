import React, { useState, useEffect } from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'
import ItemCategory from '../../components/ItemCategory/ItemCategory'
import Item from '../../components/Item/Item'
import Button from '../../components/shared/Button/Button'
import styled from 'styled-components'
import { getUser, updateUser } from '../../services/users'
import { Redirect } from 'react-router-dom'

const Squiggle = styled.img`
  width: 100%;
  z-index: -10;
`
const ItemList = styled.div`
  display: flex;
  flex-flow: column;
  padding: 40px 10%;
  ${Button} {
    width: 300px;
    align-self: center;
  }
`
const NotLoggedIn = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin: 50px;
  a {
    width: 150px;
  }
`

export default function Logger(props) {
  let [loggedList, setLoggedList] = useState({
    metal: 0, glass: 0, plastic: 0, cartons: 0, paper: 0, cardboard: 0
  })
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
      {props.loggedIn &&
        <ItemList>
          <ItemCategory name='Metal'>
            <Item name='Cans' image='https://i.imgur.com/k7es9ya.png' category='metal' changeItem={changeItem} />
            <Item name='Aluminum' image='https://i.imgur.com/qHRiy7n.png' category='metal' changeItem={changeItem} />
            <Item name='Bulk' image='https://i.imgur.com/dfEssGp.png' category='metal' changeItem={changeItem} />
            <Item name='Caps' image='https://i.imgur.com/uIwZWW6.png' category='metal' changeItem={changeItem} />
            <Item name='Household' image='https://i.imgur.com/piAJEIr.png' category='metal' changeItem={changeItem} />
          </ItemCategory>
          <ItemCategory name='Glass'>
            <Item name='Bottles' image='https://i.imgur.com/Ze3Sdkf.png' category='glass' changeItem={changeItem} />
            <Item name='Jars' image='https://i.imgur.com/V4qnx4b.png' category='glass' changeItem={changeItem} />
          </ItemCategory>
          <ItemCategory name='Plastic'>
            <Item name='Bottles' image='https://i.imgur.com/Nty0H2E.png' category='plastic' changeItem={changeItem} />
            <Item name='Containers' image='https://i.imgur.com/tOEwiXi.png' category='plastic' changeItem={changeItem} />
            <Item name='Appliances' image='https://i.imgur.com/hmxHO87.png' category='plastic' changeItem={changeItem} />
            <Item name='Bulk' image='https://i.imgur.com/RFaz0uo.png' category='plastic' changeItem={changeItem} />
          </ItemCategory>
          <ItemCategory name='Cartons'>
            <Item name='Beverage' image='https://i.imgur.com/H5SGnUq.png' category='cartons' changeItem={changeItem} />
            <Item name='Food' image='https://i.imgur.com/ZZk8tRx.png' category='cartons' changeItem={changeItem} />
            <Item name='Aseptics' image='https://i.imgur.com/Yh6SF1b.png' category='cartons' changeItem={changeItem} />
          </ItemCategory>
          <ItemCategory name='Paper'>
            <Item name='Newspaper' image='https://i.imgur.com/DYkch9B.png' category='paper' changeItem={changeItem} />
            <Item name='Colored' image='https://i.imgur.com/WkmANVv.png' category='paper' changeItem={changeItem} />
            <Item name='Envelopes' image='https://i.imgur.com/AnIbQFa.png' category='paper' changeItem={changeItem} />
            <Item name='Receipts' image='https://i.imgur.com/F4nF1QH.png' category='paper' changeItem={changeItem} />
            <Item name='Bags' image='https://i.imgur.com/TCfF7Ga.png' category='paper' changeItem={changeItem} />
            <Item name='Wrapping' image='https://i.imgur.com/8uguGoJ.png' category='paper' changeItem={changeItem} />
            <Item name='Paperbacks' image='https://i.imgur.com/lGp6wEF.png' category='paper' changeItem={changeItem} />
          </ItemCategory>
          <ItemCategory name='Cardboard'>
            <Item name='Egg Carton' image='https://i.imgur.com/Xb3MaPR.png' category='cardboard' changeItem={changeItem} />
            <Item name='Trays' image='https://i.imgur.com/3lgZpM3.png' category='cardboard' changeItem={changeItem} />
            <Item name='Smooth' image='https://i.imgur.com/BzRudUL.png' category='cardboard' changeItem={changeItem} />
            <Item name='Pizza Box' image='https://i.imgur.com/87zCQF6.png' category='cardboard' changeItem={changeItem} />
            <Item name='Cups' image='https://i.imgur.com/Ny05v7i.png' category='cardboard' changeItem={changeItem} />
            <Item name='Corrugated' image='https://i.imgur.com/D2uZvkf.png' category='cardboard' changeItem={changeItem} />
          </ItemCategory>
          <Button
            color="#31C96E"
            buttonText="Submit"
            onClick={handleSubmit}
          />
        </ItemList>

      }
      {!props.loggedIn &&
        <NotLoggedIn>
          <h1>Please sign in to add items.</h1>
          <Button
            color="#31C96E"
            buttonText="Sign In"
            buttonLink="/signin"
          />
        </NotLoggedIn>
      }
    </Layout>
  )
}
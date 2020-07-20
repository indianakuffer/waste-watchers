import React from 'react'
import Layout from '../../components/shared/Layout/Layout'
import Jumbotron from '../../components/shared/Jumbotron/Jumbotron'
import ItemCategory from '../../components/ItemCategory/ItemCategory'
import Item from '../../components/Item/Item'
import styled from 'styled-components'

const Squiggle = styled.img`
  width: 100%;
  z-index: -10;
`
const ItemList = styled.div`
  display: flex;
  flex-flow: column;
  padding: 40px 10%;
`


export default function Logger(props) {
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
        <ItemCategory name='Metal'>
          <Item name='Cans' image='https://i.imgur.com/k7es9ya.png' category='metal' />
          <Item name='Aluminum' image='https://i.imgur.com/qHRiy7n.png' category='metal' />
          <Item name='Bulk' image='https://i.imgur.com/dfEssGp.png' category='metal' />
          <Item name='Caps' image='https://i.imgur.com/uIwZWW6.png' category='metal' />
          <Item name='Household' image='https://i.imgur.com/piAJEIr.png' category='metal' />
        </ItemCategory>
        <ItemCategory name='Glass'>
          <Item name='Bottles' image='https://i.imgur.com/Ze3Sdkf.png' category='glass' />
          <Item name='Jars' image='https://i.imgur.com/V4qnx4b.png' category='glass' />
        </ItemCategory>
        <ItemCategory name='Plastic'>
          <Item name='Bottles' image='https://i.imgur.com/Nty0H2E.png' category='plastic' />
          <Item name='Containers' image='https://i.imgur.com/tOEwiXi.png' category='plastic' />
          <Item name='Appliances' image='https://i.imgur.com/hmxHO87.png' category='plastic' />
          <Item name='Bulk' image='https://i.imgur.com/RFaz0uo.png' category='plastic' />
        </ItemCategory>
        <ItemCategory name='Cartons'>
        </ItemCategory>
        <ItemCategory name='Paper'>
        </ItemCategory>
        <ItemCategory name='Cardboard'>
        </ItemCategory>
      </ItemList>
    </Layout>
  )
}
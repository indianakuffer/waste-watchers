# [Waste Watchers](https://waste-watchers.netlify.app/)

## Overview

Waste Watcher is a web and mobile application that makes recycling fun. It provides a way to track what and how often users recycle and shows users the impact they're making on the environment. Points are awarded for every item recycled-- every 100 points a digital tree is planted. The ultimate goal of the app is to spread awareness of how important recycling is for the environment, and make recycling more accessible for everyone.

## Team Expectations

[Google Doc](https://docs.google.com/document/d/1O-zjZAKcJTJR14RA9ZMhot3hkqDBCG8n-wa7dcrkIOU/edit?usp=sharing)

## MVP

[SEI Trello](https://trello.com/b/fFDYCoZX/waste-watchers)

[UXDI Trello](https://trello.com/b/MUBISn2p/waste-watchers-sei-uxdi)

### Backend
- Set up NodeJS and Express backend file architecture.
- Installed dependecies such as Mongoose for MongoDB, Express, etc.
- Built out the schema to store user information and recycled items.
- Imported and connected files to make sure they perform full CRUD functionality.
- Deployed to Heruko and connected to MongoDB Atlas, tested CRUD functionality using MongoDB Compass and Postman.

### Front-End
- Created a well-designed front-end experience based off of collaboration with UXDI team.
- Set up the front-end file architecture (components, images, services, and screens) and made sure files were connected to appropriate routes.
- Used Styled Components library for styling of all components.
- Built out the ability to create, edit, and delete user account information.
- Deployed site using Netlify.


## Post MVP

- Created a fully-functional screen that allows users to log recycled items.
- Created a metrics page that shows user progress with an animated progress bar.
- Created total digital tree count based off of user points.
- Created a statistics chart using the D3 library, displaying a percentage of recycled items by category.
- Created an animated loader to display while API calls are in progress.
- Built pop ups based off of app design, for user errors and confirmations.
- Implemented mobile-friendly styling.


## Component Tree

[Whimsical Diagram](https://whimsical.com/SfvYWhv4nKQ6PJXS2z7MVT)

## UXD Design

[Zeplin](https://app.zeplin.io/project/5f0e5672133b1a7efea78be1/dashboard?sid=5f0f134e1434157d8c52912c)

[Imgur Album](https://imgur.com/a/6i4OkzX)

## Schema

```JS
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
  {
    accountInfo: {
      username: { type: String, required: true },
      email: { type: String, required: true },
      password: { type: String, required: true },
      profileImg: { type: String, required: true }
    },
    points: { type: Number, required: true },
    itemCategories: [
      {
        metal: {
          cans: { type: Number, required: true },
          aluminum: { type: Number, required: true },
          caps: { type: Number, required: true },
          household: { type: Number, required: true },
          bulk: { type: Number, required: true }
        }
      },
      {
        glass: {
          bottles: { type: Number, required: true },
          jars: { type: Number, required: true }
        }
      },
      {
        plastic: {
          bottles: { type: Number, required: true },
          containers: { type: Number, required: true },
          appliances: { type: Number, required: true },
          bulk: { type: Number, required: true }
        }
      },
      {
        cartons: {
          beverage: { type: Number, required: true },
          food: { type: Number, required: true },
          aseptics: { type: Number, required: true }
        }
      },
      {
        paper: {
          newspaper: { type: Number, required: true },
          colored: { type: Number, required: true },
          envelopes: { type: Number, required: true },
          receipts: { type: Number, required: true },
          bags: { type: Number, required: true },
          wrapping: { type: Number, required: true },
          paperbacks: { type: Number, required: true }
        }
      },
      {
        cardboard: {
          eggCarton: { type: Number, required: true },
          trays: { type: Number, required: true },
          smooth: { type: Number, required: true },
          pizzaBox: { type: Number, required: true },
          cups: { type: Number, required: true },
          corrugated: { type: Number, required: true }
        }
      }
    ]
},
  { timestamps: true }
)

module.exports = mongoose.model('users', User)
```

Brought to you by:
![Team Don't Over ReactJS logo](https://i.imgur.com/RN00IOk.png)

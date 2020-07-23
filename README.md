[![Waste Watchers Logo](https://i.imgur.com/EVrCiu8.png)](https://waste-watchers.netlify.app/)

[waste-watchers.netlify.app](https://waste-watchers.netlify.app/)

## Overview

Waste Watcher is a web and mobile application that makes recycling fun. It provides a way to track what and how often users recycle and shows users the impact they're making on the environment. Points are awarded for every item recycled-- every 100 points a digital tree is planted. The ultimate goal of the app is to spread awareness of how important recycling is for the environment, and make recycling more accessible for everyone.

## Team
- [Indiana Kuffer](https://github.com/indianakuffer/)
- [Zahra Khan](https://github.com/zahrakhadijha)
- [David Khananov](https://github.com/DavidKhanTech)

[Team Expectations](https://docs.google.com/document/d/1O-zjZAKcJTJR14RA9ZMhot3hkqDBCG8n-wa7dcrkIOU/edit?usp=sharing)

## MVP

[SEI Trello](https://trello.com/b/fFDYCoZX/waste-watchers)

[UXDI Trello](https://trello.com/b/MUBISn2p/waste-watchers-sei-uxdi)

- Backend storing user information.
- Well-designed frontend experience.
- Ability to create / edit / delete account information.

## Post MVP

- Ability to log recycled items.
- Metrics page that shows total digital tree count and progress, plus statistics chart.

## Component Tree
![Component Tree](https://i.imgur.com/K3abjD8.png)
[Whimsical Diagram](https://whimsical.com/SfvYWhv4nKQ6PJXS2z7MVT)

## UXD Design Collaboration

[Zeplin](https://app.zeplin.io/project/5f0e5672133b1a7efea78be1/dashboard?sid=5f0f134e1434157d8c52912c)

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
    itemCategories: {
      metal: { type: Number, required: true },
      glass: { type: Number, required: true },
      plastic: { type: Number, required: true },
      cartons: { type: Number, required: true },
      paper: { type: Number, required: true },
      cardboard: { type: Number, required: true }
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('users', User)
```

Brought to you by:
![Team Don't Over ReactJS logo](https://i.imgur.com/RN00IOk.png)

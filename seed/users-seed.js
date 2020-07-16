const db = require('../db/connection')
const User = require('../models/user')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const seedData = [
    {
      "accountInfo": {
        "username": "indianakuffer",
        "email": "indiana@indianakuffer.com",
        "password": "password",
        "profileImg": "https://i.imgur.com/RGYrBme.jpg"
      },
      "points": 10,
      "itemCategories": {
        "metal": 2,
        "glass": 3,
        "plastic": 4,
        "cartons": 0,
        "paper": 1,
        "cardboard": 0
      }
    },
    {
      "accountInfo": {
        "username": "bugsBunny27",
        "email": "bugsB@warnerbros.com",
        "password": "passw0rd",
        "profileImg": "https://rlv.zcache.com/bugs_bunny_smiling_face_classic_round_sticker-r7049e52aa7e842aebc29eddfaff2f344_0ugmp_8byvr_704.jpg"
      },
      "points": 57,
      "itemCategories": {
        "metal": 0,
        "glass": 0,
        "plastic": 0,
        "cartons": 49,
        "paper": 0,
        "cardboard": 8
      }
    }
  ]

  await User.insertMany(seedData)
  console.log('Created seed user data!')
}

const run = async () => {
  await main()
  db.close()
}

run()
const mongoose = require('mongoose')

let MONGODB_URI = process.env.PROD_MONGODB || 'mongodb://127.0.0.1:27017/wasteWatchersUsers'

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log("Successfully Connected to MongoDB."))
  .catch(e => console.error("Connection Error", e.message))

module.exports = mongoose.connection
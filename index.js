const http = require('http')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongo = require('mongoose')
const blogRouter = require('./controllers/blog.js')
const config = require('./utils/config')


mongo.connect(config.mongo_url, { useNewUrlParser: true  ,useUnifiedTopology: true})

app.use(cors())
app.use(bodyParser.json())

app.use(blogRouter)


app.listen(config.PORT, () => {
  console.log(`Server running on port ${config.PORT}`)
})
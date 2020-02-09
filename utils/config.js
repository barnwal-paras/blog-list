const dotenv = require('dotenv').config()

const PORT = process.env.PORT
const mongo_url = process.env.MONGODB_URL

module.exports = {
	PORT,
	mongo_url
}
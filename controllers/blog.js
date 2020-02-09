const router = require('express').Router()
const db = require('../models/blog.js')


router.get('/api/blogs', (request, response) => {
  db
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

router.post('/api/blogs', (request, response) => {
  const blog = new db(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

module.exports = router

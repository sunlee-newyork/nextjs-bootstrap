require('isomorphic-unfetch')

const express = require('express')
const router = express.Router()

const { blogs } = require('../../mock/blogs')

router.get('/', (req, res) => {
	try {
		// Do something here
		return res.status(200).send(JSON.stringify(blogs))
	} catch (e) {
		console.error("[API] /blogs exception: ", e)
		res.statusMessage = 'Failed to retrieve blogs'
		return res.status(500).end()
	}
})

router.get('/:slug', (req, res) => {
	try {
		// Do something here
		const post = blogs.find(post => post.slug === req.params.slug)
		return res.status(200).send(JSON.stringify(post))
	} catch (e) {
		console.error("[API] /blogs/:slug exception: ", e)
		res.statusMessage = 'Failed to retrieve blogs'
		return res.status(500).end()
	}
})

module.exports = router
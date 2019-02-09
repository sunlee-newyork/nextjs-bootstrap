require('isomorphic-unfetch')

const express = require('express')
const router = express.Router()

const { content } = require('../../mock/content')

router.get('/', (req, res) => {
	try {
		// Do something here
		res.status(200).send(JSON.stringify(content))
	} catch (e) {
		console.error("[API] /content exception: ", e)
		res.statusMessage = 'Failed to retrieve content'
		res.status(500).end()
	}
})

module.exports = router
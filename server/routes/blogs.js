const { renderAndCache } = require('../lib/ssr')

exports.index = (app) => (req, res) => {
	const actualPage = '/blogs'
	return renderAndCache(app, req, res, actualPage)
}

exports.post = (app) => (req, res) => {
	const actualPage = '/blogs/post'
	return renderAndCache(app, req, res, actualPage, {slug: req.params.slug})
}
const { renderAndCache } = require('../lib/ssr')

exports.index = (app) => (req, res) => {
	const actualPage = '/about'
	return renderAndCache(app, req, res, actualPage)
}
const defaultError = { status: 400, message: 'Something went wrong.' }

export const formatError = err => {
	if (!err || !err.response) return defaultError

	if (err instanceof ReferenceError) {
		console.error('[UTILS] formatError() ReferenceError: ', err)
		return defaultError
	}

	try {
		err = JSON.parse(JSON.stringify(err))
		console.error('[UTILS] formatError() err: ', err)

		let error = { status: err.response.status || 400 }


		if (!!err.response.data) error.message = err.response.data
		else if (err.response.statusText) error.message = err.response.statusText
		else if (err.response.statusMessage) error.message = err.response.statusMessage
		else error.message = 'Something went wrong'

		return error
	} catch (e) {
		console.error('[UTILS] formatError() exception: ', e)
		return defaultError
	}
}
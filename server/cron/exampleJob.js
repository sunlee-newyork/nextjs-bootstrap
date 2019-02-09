const CronJob = require('cron').CronJob

class ExampleJob {
	constructor() {
		// Set simpleton instance here
	}

	doSomething() {
		console.log('[CRON] EXAMPLE_JOB: Doing something...')
	}

	start() {
		// Every hour = 0 0 0/1 1/1 * * *
		const job = new CronJob('0 0 0/1 1/1 * * *', () => {
			console.log('[CRON] EXAMPLE_JOB: Starting job at', new Date())

			this.doSomething()
		})

		job.start()

		console.log('[CRON] EXAMPLE_JOB: Initialized example job.')

		return job
	}
}

module.exports = new ExampleJob()
const exampleJob = require('./exampleJob')

class Cron {
	constructor() {
		this.jobsRunning = new Map()
	}

	start() {
		this.jobsRunning.set('example_job', exampleJob.start())
	}

	stop() {
		this.jobsRunning.forEach(job => job.stop())
		this.jobsRunning.clear()
	}
}

module.exports = new Cron()
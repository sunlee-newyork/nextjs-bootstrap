import React from 'react'
import App, { Container } from 'next/app'
import NProgress from 'next-nprogress/component'
import { Provider } from 'react-redux'
import { withReduxStore } from '../lib/redux.js'

import { getContent } from '../store/actions/content'

import './index.css'

class MyApp extends App {
	constructor(props) {
		super(props)
	}

	static async getInitialProps({Component, router, ctx}) {
		// global data
		await ctx.reduxStore.dispatch(getContent())

		let pageProps = {}

		if (Component.getInitialProps) {
			pageProps = await Component.getInitialProps(ctx)
		}

		return {pageProps}
	}

	render () {
		const {Component, pageProps, reduxStore} = this.props

		return (
			<Container>
				<NProgress color="#fff" spinner={false} />

				<Provider store={reduxStore}>
					<Component {...pageProps} />
				</Provider>
			</Container>
		)
	}
}

export default withReduxStore(MyApp)
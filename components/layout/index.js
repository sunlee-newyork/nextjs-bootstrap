import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import Link from 'next/link'
import { withRouter } from 'next/router'

import './index.css'

class Layout extends React.Component {
	render() {
		return (
			<div className="layout">
				<Head>
					{!!this.props.title && <title>{this.props.title}</title>}
					{!!this.props.description && <meta name='description' content={this.props.description} />}
				</Head>

				<header>
					<Link href="/"><a>Home</a></Link>
					<Link href="/about"><a>About</a></Link>
					<Link href="/blog"><a>Blog</a></Link>
				</header>

				<main>
					{this.props.children}
				</main>

				<footer className="footer">
					<p>Footer content here</p>
				</footer>
			</div>
		)
	}
}

Layout.propTypes = {
	router: PropTypes.object.isRequired,
	title: PropTypes.string,
	description: PropTypes.string,
}

export default withRouter(Layout)
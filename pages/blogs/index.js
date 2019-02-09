import React from 'react'
import Link from 'next/link'
import { connect } from 'react-redux'

import Layout from '../../components/layout'
import Loading from '../../components/common/Loading'
import ErrorMessage from '../../components/common/ErrorMessage'

import { getBlogPosts } from '../../store/actions/blogs'

class BlogPosts extends React.Component {
	static async getInitialProps({reduxStore}) {
		await reduxStore.dispatch(getBlogPosts())
	}

	renderEntry = (blog, i) => {
		return (
			<div key={i} className="mb4">
				<p><strong>{blog.title}</strong> by {blog.author}</p>
				<p><Link href={`/blog/${blog.slug}`}>View post</Link></p>
			</div>
		)
	}

	render() {
		const { getBlogsLoading, getBlogsError, blogPosts } = this.props

		if (getBlogsLoading) return <Loading />
		if (getBlogsError) return <ErrorMessage error={getBlogsError} />

		return (
			<Layout title="NextJS Bootstrap | Blogs" description="NextJS Bootstrap web application">
				<div className="blogs container">
					<h1 className="mb5">Blogs</h1>

					{blogPosts.map(this.renderEntry)}
				</div>
			</Layout>
		)
	}
}

const mapStateToProps = state => ({
	...state.blogs,
})

export default connect(mapStateToProps)(BlogPosts)
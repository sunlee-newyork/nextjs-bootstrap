import React from 'react'
import { connect } from 'react-redux'

import Layout from '../../components/layout'
import Loading from '../../components/common/Loading'
import ErrorMessage from '../../components/common/ErrorMessage'

import { getBlogPost } from '../../store/actions/blogs'

class BlogPost extends React.Component {
	static async getInitialProps({reduxStore, query}) {
		await reduxStore.dispatch(getBlogPost(query.slug))
	}

	render() {
		const { getBlogLoading, getBlogError, currentPost } = this.props

		if (getBlogLoading) return <Loading />
		if (getBlogError) return <ErrorMessage error={getBlogError} />

		return (
			<Layout title="NextJS Bootstrap | Blogs" description="NextJS Bootstrap web application">
				<div className="blogs container">
					<h1>{currentPost.title}</h1>

					<p>{currentPost.content}</p>
				</div>
			</Layout>
		)
	}
}

const mapStateToProps = state => ({
	...state.blogs,
})

export default connect(mapStateToProps)(BlogPost)
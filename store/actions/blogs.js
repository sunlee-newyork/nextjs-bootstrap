import 'isomorphic-unfetch'

import { blogsTypes } from '../types.js'
import { pending, rejected, fulfilled } from '../helpers/asyncActionGenerator.js'

export const getBlogPosts = () => {
	return async (dispatch, getState) => {
		dispatch(pending(blogsTypes.GET_BLOG_POSTS))

		await fetch(`${process.env.ROOT}/api/blogs`)
			.then(res => res.json())
			.then(posts => dispatch(fulfilled(blogsTypes.GET_BLOG_POSTS, posts)))
			.catch(err => dispatch(rejected(blogsTypes.GET_BLOG_POSTS, err)))
	}
}

export const getBlogPost = slug => {
	return async (dispatch, getState) => {
		dispatch(pending(blogsTypes.GET_BLOG_POST))

		await fetch(`${process.env.ROOT}/api/blogs/${slug}`)
			.then(res => res.json())
			.then(post => dispatch(fulfilled(blogsTypes.GET_BLOG_POST, post)))
			.catch(err => dispatch(rejected(blogsTypes.GET_BLOG_POST, err)))
	}
}
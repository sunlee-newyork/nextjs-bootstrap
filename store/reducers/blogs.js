import { blogsTypes } from '../types.js'
import { pending, rejected, fulfilled } from '../helpers/asyncStatusGenerator.js'
import initialState from '../initialState.js'

export default function reducer(state = initialState, action) {
	switch (action.type) {
		/* GET_BLOG_POSTS */
		case pending(blogsTypes.GET_BLOG_POSTS):
			return {
				...state,
				getBlogPostsLoading: true,
			}
		case rejected(blogsTypes.GET_BLOG_POSTS):
			return {
				...state,
				getBlogPostsLoading: false,
				getBlogPostsError: action.payload,
			}
		case fulfilled(blogsTypes.GET_BLOG_POSTS):
			return {
				...state,
				getBlogPostsLoading: false,
				getBlogPostsError: null,
				blogPosts: action.payload,
			}

		/* GET_BLOG_POST */
		case pending(blogsTypes.GET_BLOG_POST):
			return {
				...state,
				getBlogPostLoading: true,
			}
		case rejected(blogsTypes.GET_BLOG_POST):
			return {
				...state,
				getBlogPostLoading: false,
				getBlogPostError: action.payload,
			}
		case fulfilled(blogsTypes.GET_BLOG_POST):
			return {
				...state,
				getBlogPostLoading: false,
				getBlogPostError: null,
				currentPost: action.payload,
			}
	}

	return state
}

import { combineReducers } from 'redux'
import content from './content'
import blogs from './blogs'
import view from './view'

const reducer = combineReducers({
	content,
	blogs,
	view,
})

export default reducer

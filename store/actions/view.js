import { viewTypes } from '../types.js'
import { pending, rejected, fulfilled } from '../helpers/asyncActionGenerator.js'

export const toggleMainMenu = (isOpen) => {
	return (dispatch, getState) => {
		dispatch({
			type: viewTypes.TOGGLE_MAIN_MENU, 
			payload: isOpen instanceof Boolean ? isOpen : !getState().view.mainMenuOpened
		})
	}
}
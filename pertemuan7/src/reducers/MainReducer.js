import { combineReducers } from 'redux'
import todos from './namaTodoReducer'
import visibilityFilter from './FilterReducer'
export default combineReducers({
 todos,
 visibilityFilter
})

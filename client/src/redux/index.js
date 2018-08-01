import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, combineReducers, applyMiddleware } from 'redux'

// @TODO: Import your reducers
import newItemReducer from './modules/newitems';
import newItems from './modules/newitems';


const middleware = []

const store = createStore(
  combineReducers(newItems, newItemReducer),
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store

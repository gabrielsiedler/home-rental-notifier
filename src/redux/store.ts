import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'

import { sources } from './sources'

const ducks = combineReducers({
  sources,
})

const configureStore = () => createStore(ducks, applyMiddleware(thunk))

export { configureStore }

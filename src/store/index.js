import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import generateId from '../middlewares/generateId'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = applyMiddleware(generateId)
const store = createStore(reducer, {}, composeEnhancers(enhancer))

window.store = store

export default store

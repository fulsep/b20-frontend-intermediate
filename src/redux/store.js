import {createStore, applyMiddleware, compose} from 'redux'
import rootReducer from './reducers'

const composeEnchancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnchancer(
        applyMiddleware()
    )
)

export default store
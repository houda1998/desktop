import {createStore,combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import models from "./reducers/models"

 const composeEnhancers = compose//window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(combineReducers({
    models
}),applyMiddleware(thunk))

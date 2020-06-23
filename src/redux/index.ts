import {createStore,combineReducers, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import models from "./reducers/models"

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default createStore(combineReducers({
    models
}),composeEnhancers(applyMiddleware(thunk)))

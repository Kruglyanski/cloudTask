import {applyMiddleware, compose, createStore} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {TypedUseSelectorHook, useSelector} from 'react-redux'
import {Reducer} from './Reducer'

const middlewares = [thunk, logger]

export const store = compose(applyMiddleware(...middlewares))(createStore)(Reducer)

export type RootStateType = ReturnType<typeof Reducer>
export type AppDispatch = typeof store.dispatch

export const useTypedSelector: TypedUseSelectorHook<RootStateType> = useSelector

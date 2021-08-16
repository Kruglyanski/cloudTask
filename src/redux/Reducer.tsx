import * as ActionTypes from './ActionTypes'
import {Action} from './Actions'
import {ListType} from '../utils/dataTypes'

type StateType = {
  lists: ListType[],
  isLoading: boolean,
  error: string
}

const initialState: StateType = {
  lists: [],
  isLoading: false,
  error: ''
}

export const Reducer = (state = initialState, action: Action): StateType => {
  switch (action.type) {

    case (ActionTypes.GET_LIST_START): {
      return {...state, isLoading: true}
    }

    case (ActionTypes.GET_LIST_SUCCESS): {
      return {...state, ...action.payload, isLoading: false}
    }

    case ActionTypes.POST_LIST_SUCCESS: {
      const {list} = action.payload
      list.todos = []
      return {...state, lists: [...state.lists, list]}
    }

    case ActionTypes.DELETE_LIST_SUCCESS: {
      const {id} = action.payload
      const filteredLists = state.lists.filter((l) => l.id !== id)
      return {...state, lists: filteredLists}
    }

    case ActionTypes.POST_TASK_SUCCESS: {
      const {todo} = action.payload

      const list = state.lists.map(i => ({...i})).find((l) => l.id === todo.listId)
      list && (list.todos = [...list.todos, todo])

      let filteredLists = state.lists.filter((l) => l.id !== todo.listId)
      filteredLists && list && (filteredLists = [...filteredLists, list])

      return {...state, lists: filteredLists}
    }

    case ActionTypes.DELETE_TASK_SUCCESS: {
      const {id, listId} = action.payload
      const list = state.lists.map(i => ({...i})).find((l) => l.id == listId)
      list && (list.todos = list.todos.filter((t) => t.id !== id))

      let filteredLists = state.lists.filter((l) => l.id !== listId)
      filteredLists && list && (filteredLists = [...filteredLists, list])
      return {...state, lists: filteredLists}
    }

    case ActionTypes.PATCH_TASK_SUCCESS: {
      const {todo, id} = action.payload

      let list = state.lists.map(i => ({...i})).find((l) => l.id == todo.listId)
      list && (list.todos = list.todos.filter((t) => t.id !== id))
      list && (list.todos = [...list.todos, todo])
      let filteredLists = state.lists.filter((l) => l.id !== todo.listId)
      filteredLists && list && (filteredLists = [...filteredLists, list])

      return {...state, lists: filteredLists}
    }

    case ActionTypes.CHECK_TASK_SUCCESS: {
      const {todo} = action.payload
      const list = state.lists.map(i => ({...i})).find((l) => l.id == todo.listId)

      list && (list.todos = list.todos.filter((t) => t.id !== todo.id))
      list && (list.todos = [...list.todos, todo])

      let filteredLists = state.lists.filter((l) => l.id !== todo.listId)
      filteredLists && list && (filteredLists = [...filteredLists, list])

      return {...state, lists: filteredLists}
    }

    case (ActionTypes.SET_ERROR): {
      console.error(action.payload.error)
      return {...state, error: action.payload.error, isLoading: false}
    }

    default: {
      return state
    }
  }
}

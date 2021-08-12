import * as ActionTypes from './ActionTypes'
import {Action} from './Actions'
import {ListType} from '../utils/dataTypes'


type StateType = {
  lists: ListType[],
  isLoading: boolean,
  error: object
}

const initialState: StateType = {
  lists: [],
  isLoading: false,
  error: {}
}

export const Reducer = (state = initialState, action: Action): StateType => {
  switch (action.type) {

    case (ActionTypes.GET_LIST_START): {
      return {...state, isLoading: true}
    }

    case (ActionTypes.GET_LIST_SUCCESS): {
      return {...state, ...action.payload, isLoading: false}
    }

    case (ActionTypes.GET_LIST_ERROR): {
      return {...state, error: action.payload.error, isLoading: false}
    }


    case (ActionTypes.POST_LIST_START): {
      return state
    }

    case ActionTypes.POST_LIST_SUCCESS: {
      const {list} = action.payload
      list.todos = []
      console.log('action.payload.list', list)
      return {...state, lists: [...state.lists, list]}
    }

    case (ActionTypes.POST_LIST_ERROR): {
      return {...state, error: action.payload.error}
    }


    case (ActionTypes.DELETE_LIST_START): {
      return state
    }

    case ActionTypes.DELETE_LIST_SUCCESS: {
      const {id} = action.payload
      const filteredLists = state.lists.filter((l) => l.id !== id)
      return {...state, lists: filteredLists}
    }

    case (ActionTypes.DELETE_LIST_ERROR): {
      return {...state, error: action.payload.error}
    }


    case (ActionTypes.POST_TASK_START): {
      return state
    }

    case ActionTypes.POST_TASK_SUCCESS: {
      const {todo} = action.payload

      const list = state.lists.find((l) => l.id === todo.listId)
      list && list.todos.push(todo)

      const lists = state.lists.filter((l) => l.id !== todo.listId)
      lists && list && lists.push(list)

      return {...state, lists}
    }

    case (ActionTypes.POST_TASK_ERROR): {
      return {...state, error: action.payload.error}
    }


    case (ActionTypes.DELETE_TASK_START): {
      return state
    }

    case ActionTypes.DELETE_TASK_SUCCESS: {
      const {id, listId} = action.payload
      const list = state.lists.find((l) => l.id == listId)
      list && (list.todos = list.todos.filter((t) => t.id !== id))
      const lists = state.lists.filter((l) => l.id !== listId)
      lists && list && lists.push(list)
      return {...state, lists}
    }

    case (ActionTypes.DELETE_TASK_ERROR): {
      return {...state, error: action.payload.error}
    }


    case (ActionTypes.PATCH_TASK_START): {
      return state
    }

    case ActionTypes.PATCH_TASK_SUCCESS: {
      const {todo, prevListId} = action.payload
      const prevList = state.lists.find((l) => l.id === prevListId)

      prevList && (prevList.todos = prevList.todos.filter((t) => t.id !== todo.id))
      const list = state.lists.find((l) => l.id == todo.listId)

      list && list.todos.push(todo)
      const lists = state.lists.filter((l) => l.id !== todo.listId)

      lists && list && lists.push(list)
      if (prevList && (prevListId !== todo.listId)) {
        lists.push(prevList)
      }

      return {...state, lists}
    }

    case (ActionTypes.PATCH_TASK_ERROR): {
      return {...state, error: action.payload.error}
    }

    case (ActionTypes.CHECK_TASK_START): {
      return state
    }

    case ActionTypes.CHECK_TASK_SUCCESS: {
      const {todo} = action.payload
      const list = state.lists.find((l) => l.id == todo.listId)

      list && (list.todos = list.todos.filter((t) => t.id !== todo.id))
      list && list.todos.push(todo)

      const lists = state.lists.filter((l) => l.id !== todo.listId)
      lists && list && lists.push(list)

      return {...state, lists}
    }

    case (ActionTypes.CHECK_TASK_ERROR): {
      return {...state, error: action.payload.error}
    }

    default: {
      return state
    }
  }
}

import * as ActionTypes from './ActionTypes'

import {ListType, TodoType} from '../utils/dataTypes'

export type Action = getListStartActionType | getListSuccessActionType | sendListSuccessActionType |
  deleteListSuccessActionType | sendTaskSuccessActionType | deleteTaskSuccessActionType |  patchTaskSuccessActionType |
  checkTaskSuccessActionType | setErrorType

export type getListStartActionType = {
  type: typeof ActionTypes.GET_LIST_START
}

export type getListSuccessActionType = {
  type: typeof ActionTypes.GET_LIST_SUCCESS,
  payload: { lists: Array<ListType> }
}


export const getListStart = (): Action => ({
  type: ActionTypes.GET_LIST_START

})

export const getListSuccess = (lists: Array<ListType>): Action => ({
  type: ActionTypes.GET_LIST_SUCCESS,
  payload: {
    lists
  }
})

export type sendListSuccessActionType = {
  type: typeof ActionTypes.POST_LIST_SUCCESS,
  payload: { list: ListType }
}

export const sendListSuccess = (list: ListType): Action => ({
  type: ActionTypes.POST_LIST_SUCCESS,
  payload: {
    list
  }
})

export type deleteListSuccessActionType = {
  type: typeof ActionTypes.DELETE_LIST_SUCCESS,
  payload: { id: number }
}

export const deleteListSuccess = (id: number): Action => ({
  type: ActionTypes.DELETE_LIST_SUCCESS,
  payload: {
    id
  }
})

export type sendTaskSuccessActionType = {
  type: typeof ActionTypes.POST_TASK_SUCCESS,
  payload: { listId: string, todo: TodoType }
}


export const sendTaskSuccess = ({listId, todo}: { listId: string, todo: TodoType }): Action => ({
  type: ActionTypes.POST_TASK_SUCCESS,
  payload: {
    listId,
    todo
  }
})

export type deleteTaskSuccessActionType = {
  type: typeof ActionTypes.DELETE_TASK_SUCCESS,
  payload: { id: number, listId: number }
}

export const deleteTaskSuccess = (id: number, listId: number): Action => ({
  type: ActionTypes.DELETE_TASK_SUCCESS,
  payload: {
    id, listId
  }
})


export type patchTaskSuccessActionType = {
  type: typeof ActionTypes.PATCH_TASK_SUCCESS,
  payload: { todo: TodoType, id: number }
}

export const patchTaskSuccess = (todo: TodoType, id: number): Action => ({
  type: ActionTypes.PATCH_TASK_SUCCESS,
  payload: {
    todo,
    id
  }
})

export type checkTaskSuccessActionType = {
  type: typeof ActionTypes.CHECK_TASK_SUCCESS,
  payload: { todo: TodoType }
}

export const checkTaskSuccess = (todo: TodoType): Action => ({
  type: ActionTypes.CHECK_TASK_SUCCESS,
  payload: {
    todo
  }
})

export type setErrorType = {
  type: typeof ActionTypes.SET_ERROR,
  payload: { error: string }
}

export const setError = (error: string): Action => ({
  type: ActionTypes.SET_ERROR,
  payload: {
    error
  }
})




import * as ActionTypes from './ActionTypes'

import {ListType, TodoType} from '../utils/dataTypes'

export type Action = getListStartActionType | getListSuccessActionType | getListErrorActionType |
  sendListStartActionType | sendListSuccessActionType | sendListErrorActionType | deleteListStartActionType |
  deleteListSuccessActionType | deleteListErrorActionType | sendTaskStartActionType | sendTaskSuccessActionType |
  sendTaskErrorActionType | deleteTaskStartActionType | deleteTaskSuccessActionType | deleteTaskErrorActionType |
  patchTaskStartActionType | patchTaskSuccessActionType | patchTaskErrorActionType | checkTaskStartActionType |
  checkTaskSuccessActionType | checkTaskErrorActionType

export type getListStartActionType = {
  type: typeof ActionTypes.GET_LIST_START
}

export type getListSuccessActionType = {
  type: typeof ActionTypes.GET_LIST_SUCCESS,
  payload: { lists: Array<ListType> }
}

export type getListErrorActionType = {
  type: typeof ActionTypes.GET_LIST_ERROR,
  payload: { error: object }
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

export const getListError = (error: object): Action => ({
  type: ActionTypes.GET_LIST_ERROR,
  payload: {
    error
  }
})

export type sendListStartActionType = {
  type: typeof ActionTypes.POST_LIST_START
}

export type sendListSuccessActionType = {
  type: typeof ActionTypes.POST_LIST_SUCCESS,
  payload: { list: ListType }
}

export type sendListErrorActionType = {
  type: typeof ActionTypes.POST_LIST_ERROR,
  payload: { error: object }
}

export const sendListStart = (): Action => ({
  type: ActionTypes.POST_LIST_START
})

export const sendListSuccess = (list: ListType): Action => ({
  type: ActionTypes.POST_LIST_SUCCESS,
  payload: {
    list
  }
})

export const sendListError = (error: object): Action => ({
  type: ActionTypes.POST_LIST_ERROR,
  payload: {
    error
  }
})

export type deleteListStartActionType = {
  type: typeof ActionTypes.DELETE_LIST_START
}

export type deleteListSuccessActionType = {
  type: typeof ActionTypes.DELETE_LIST_SUCCESS,
  payload: { id: number }
}

export type deleteListErrorActionType = {
  type: typeof ActionTypes.DELETE_LIST_ERROR,
  payload: { error: object }
}

export const deleteListStart = (): Action => ({
  type: ActionTypes.DELETE_LIST_START
})

export const deleteListSuccess = (id: number): Action => ({
  type: ActionTypes.DELETE_LIST_SUCCESS,
  payload: {
    id
  }
})

export const deleteListError = (error: object): Action => ({
  type: ActionTypes.DELETE_LIST_ERROR,
  payload: {
    error
  }
})

export type sendTaskStartActionType = {
  type: typeof ActionTypes.POST_TASK_START
}

export type sendTaskSuccessActionType = {
  type: typeof ActionTypes.POST_TASK_SUCCESS,
  payload: { listId: string, todo: TodoType }
}

export type sendTaskErrorActionType = {
  type: typeof ActionTypes.POST_TASK_ERROR,
  payload: { error: object }
}

export const sendTaskStart = (): Action => ({
  type: ActionTypes.POST_TASK_START

})

export const sendTaskSuccess = ({listId, todo}: { listId: string, todo: TodoType }): Action => ({
  type: ActionTypes.POST_TASK_SUCCESS,
  payload: {
    listId,
    todo
  }
})

export const sendTaskError = (error: object): Action => ({
  type: ActionTypes.POST_TASK_ERROR,
  payload: {
    error
  }
})

export type deleteTaskStartActionType = {
  type: typeof ActionTypes.DELETE_TASK_START
}

export type deleteTaskSuccessActionType = {
  type: typeof ActionTypes.DELETE_TASK_SUCCESS,
  payload: { id: number, listId: number }
}

export type deleteTaskErrorActionType = {
  type: typeof ActionTypes.DELETE_TASK_ERROR,
  payload: { error: object }
}

export const deleteTaskStart = (): Action => ({
  type: ActionTypes.DELETE_TASK_START
})

export const deleteTaskSuccess = (id: number, listId: number): Action => ({
  type: ActionTypes.DELETE_TASK_SUCCESS,
  payload: {
    id, listId
  }
})

export const deleteTaskError = (error: object): Action => ({
  type: ActionTypes.DELETE_TASK_ERROR,
  payload: {
    error
  }
})

export type patchTaskStartActionType = {
  type: typeof ActionTypes.PATCH_TASK_START
}

export type patchTaskSuccessActionType = {
  type: typeof ActionTypes.PATCH_TASK_SUCCESS,
  payload: { todo: TodoType, prevListId: number }
}

export type patchTaskErrorActionType = {
  type: typeof ActionTypes.PATCH_TASK_ERROR,
  payload: { error: object }
}

export const patchTaskStart = (): Action => ({
  type: ActionTypes.PATCH_TASK_START
})

export const patchTaskSuccess = (todo: TodoType, prevListId: number): Action => ({
  type: ActionTypes.PATCH_TASK_SUCCESS,
  payload: {
    todo,
    prevListId
  }
})

export const patchTaskError = (error: object): Action => ({
  type: ActionTypes.PATCH_TASK_ERROR,
  payload: {
    error
  }
})

export type checkTaskStartActionType = {
  type: typeof ActionTypes.CHECK_TASK_START
}

export type checkTaskSuccessActionType = {
  type: typeof ActionTypes.CHECK_TASK_SUCCESS,
  payload: { todo: TodoType }
}

export type checkTaskErrorActionType = {
  type: typeof ActionTypes.CHECK_TASK_ERROR,
  payload: { error: object }
}

export const checkTaskStart = (): Action => ({
  type: ActionTypes.CHECK_TASK_START
})

export const checkTaskSuccess = (todo: TodoType): Action => ({
  type: ActionTypes.CHECK_TASK_SUCCESS,
  payload: {
    todo
  }
})

export const checkTaskError = (error: object): Action => ({
  type: ActionTypes.CHECK_TASK_ERROR,
  payload: {
    error
  }
})




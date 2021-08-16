import {plainToClass} from 'class-transformer'
import {
  checkTaskSuccess,
  deleteListSuccess, deleteTaskSuccess,
  getListStart,
  getListSuccess, patchTaskSuccess,
  sendListSuccess, sendTaskSuccess, setError
} from './Actions'
import {AppDispatch} from './Store'
import {TodoType} from '../utils/dataTypes'
import {List, Todo} from '../utils/classes'
import {api} from '../api/api'

export function GetList() {
  return async (dispatch: AppDispatch) => {
    dispatch(getListStart())
    try {
      const lists = await api.getList()
      const data = plainToClass(List, [...lists.data])
      dispatch(getListSuccess(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function SendList(title: string) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api.sendList(title)
      const data = plainToClass(List, response.data)
      dispatch(sendListSuccess(data))
    } catch (error) {
      dispatch(setError(error))
    }
  }

}

export function DeleteList(id: number) {
  return async (dispatch: AppDispatch) => {
    try {
      await api.deleteList(id)
      dispatch(deleteListSuccess(id))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function SendTask(listId: string, title: string) {
  return async (dispatch: AppDispatch) => {

    try {
      const response = await api.sendTask(listId, title)
      const todo = plainToClass(Todo, response.data)
      dispatch(sendTaskSuccess({listId, todo}))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function DeleteTask(id: number, listId: number) {
  return async (dispatch: AppDispatch) => {
    try {
      await api.deleteTask(id, listId)
      dispatch(deleteTaskSuccess(id, listId))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function PatchTask(listId: string, title: string, id: number) {
  return async (dispatch: AppDispatch) => {
    try {
      const response = await api.patchTask(listId, title, id, false)
      const todo = plainToClass(Todo, response.data)
      dispatch(patchTaskSuccess(todo, id))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}

export function CheckToggleTask(item: TodoType, isChecked: boolean) {

  const {listId, id, text} = item

  return async (dispatch: AppDispatch) => {
    try {
      const response = await api.patchTask(listId.toString(), text, id, isChecked)
      const todo = plainToClass(Todo, response.data)
      dispatch(checkTaskSuccess(todo))
    } catch (error) {
      dispatch(setError(error))
    }
  }
}


import {plainToClass} from 'class-transformer'
// @ts-ignore
import {BASE_URL} from 'react-native-dotenv'

import {
  checkTaskError, checkTaskStart, checkTaskSuccess,
  deleteListError,
  deleteListStart, deleteListSuccess, deleteTaskError, deleteTaskStart, deleteTaskSuccess,
  getListError,
  getListStart,
  getListSuccess, patchTaskError, patchTaskStart, patchTaskSuccess,
  sendListError,
  sendListStart,
  sendListSuccess, sendTaskError, sendTaskStart, sendTaskSuccess
} from './Actions'
import {AppDispatch} from './Store'
import {TodoType} from '../utils/dataTypes'
import {List, Todo} from '../utils/classes'

export function GetList() {
  return async (dispatch: AppDispatch) => {

    dispatch(getListStart())

    try {
      const lists = await fetch(
        `${BASE_URL}/list`,
        {method: 'GET'}
      ).then(res => res && res.json())

      const data = plainToClass(List, [...lists])

      dispatch(getListSuccess(data))

    } catch (error) {

      dispatch(getListError(error))
    }
  }
}

export function SendList(title: string) {
  return async (dispatch: AppDispatch) => {

    dispatch(sendListStart())

    try {
      const response = await fetch(
        `${BASE_URL}/list`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            title: title
          })
        }
      ).then(res => res && res.json())

      const data = plainToClass(List, response)

      dispatch(sendListSuccess(data))

    } catch (error) {

      dispatch(sendListError(error))

    }
  }

}

export function DeleteList(id: number) {
  return async (dispatch: AppDispatch) => {

    dispatch(deleteListStart())

    try {
      const response = await fetch(
        `${BASE_URL}/list/${id}`,
        {method: 'DELETE'}
      )

      dispatch(deleteListSuccess(id))

    } catch (error) {

      dispatch(deleteListError(error))

    }
  }
}

export function SendTask(listId: string, title: string) {
  return async (dispatch: AppDispatch) => {

    dispatch(sendTaskStart())
    try {

      const response = await fetch(
        `${BASE_URL}/list/${listId}/todo`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: title,
            checked: true
          })
        }
      ).then(res => res && res.json()) as TodoType

      const todo = plainToClass(Todo, response)

      dispatch(sendTaskSuccess({listId, todo}))

    } catch (error) {

      dispatch(sendTaskError(error))
    }
  }
}


export function DeleteTask(id: number, listId: number) {
  return async (dispatch: AppDispatch) => {

    dispatch(deleteTaskStart())

    try {
      const response = await fetch(
        `${BASE_URL}/list/${listId}/todo/${id}`,
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          }
        }
      )
      dispatch(deleteTaskSuccess(id, listId))

    } catch (error) {

      dispatch(deleteTaskError(error))

    }
  }
}


export function PatchTask(listId: string, title: string, id: number, prevListId: number) {
  return async (dispatch: AppDispatch) => {

    dispatch(patchTaskStart())

    try {
      const response = await fetch(
        `${BASE_URL}/list/${listId}/todo/${id}`,
        {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: title,
            checked: false
          })
        }
      ).then(res => res && res.json())

      const todo = plainToClass(Todo, response)

      dispatch(patchTaskSuccess(todo, prevListId))

    } catch (error) {

      dispatch(patchTaskError(error))

    }
  }
}

export function CheckToggleTask(item: TodoType, isChecked: boolean) {

  const {listId, id} = item

  return async (dispatch: AppDispatch) => {

    dispatch(checkTaskStart())

    try {
      const response = await fetch(
        `${BASE_URL}/list/${listId}/todo/${id}`,
        {
          method: 'PATCH',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            text: item.text,
            checked: isChecked
          })
        }
      ).then(res => res && res.json())

      const todo = plainToClass(Todo, response)

      dispatch(checkTaskSuccess(todo))
    } catch (error) {

      dispatch(checkTaskError(error))

    }
  }
}


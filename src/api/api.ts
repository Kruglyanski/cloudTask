import axios from 'axios'
// @ts-ignore
import {BASE_URL} from 'react-native-dotenv'

const instance = axios.create({
  baseURL: BASE_URL,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json'
  }
})

export const api = {
  getList() {
    return instance.get('/list')
  },

  sendList(title: string) {
    return instance.post('/list', {
      title: title
    })
  },

  deleteList(id: number) {
    return instance.delete(`/list/${id}`)
  },

  sendTask(listId: string, title: string) {
    return instance.post(`/list/${listId}/todo`, {
      text: title,
      checked: true
    })
  },

  deleteTask(id: number, listId: number) {
    return instance.delete(`/list/${listId}/todo/${id}`)
  },

  patchTask(listId: string, title: string, id: number, isChecked: boolean) {
    return instance.patch(`/list/${listId}/todo/${id}`, {
      text: title,
      checked: isChecked
    })
  }
}

export type TodoType = {
  checked: boolean
  createdAt: Date
  id: number
  listId: number
  text: string
  updatedAt: Date
}
export type ListType = {
  candidateId: number
  createdAt: Date
  id: number
  title: string
  todos: Array<TodoType>
  updatedAt: Date
}



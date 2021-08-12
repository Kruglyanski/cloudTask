import React from 'react'
import {View} from 'react-native'
import {useTypedSelector} from '../redux/Store'
import Styles from '../styles/StyleSheets'
import {ToDoListItem} from './ToDoLIstItem'

export const ToDoList = () => {
  const lists = useTypedSelector(state => state.lists)

  return (
    <View style={Styles.list}>
      {
        lists && lists.sort((a: any, b: any) => (a.updatedAt - b.updatedAt)).map(item => {
          return <ToDoListItem key={item.id} title={item.title} todos={item.todos}/>
        })
      }
    </View>
  )
}

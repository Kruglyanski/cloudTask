import React from 'react'
import {View} from 'react-native'
import {ModalListItem} from './ModalListItem'
import {useTypedSelector} from '../redux/Store'

export const ModalList = () => {
  const lists = useTypedSelector(state => state.lists)
  return (
    <View>
      {lists && lists.map((item) => <ModalListItem key={item.id} id={item.id} title={item.title}/>)}
    </View>
  )
}


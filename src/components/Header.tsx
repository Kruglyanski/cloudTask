import React, {useState} from 'react'
import {View, Text} from 'react-native'
import {IconButton } from 'react-native-paper'
import Styles from '../styles/StyleSheets'
import {ModalCreateCategory} from './ModalCreateCategory'

export default function Header() {

  const [editLists, setEditLists] = useState(false)

  return (
    <View>
      <View style={Styles.header}>
        <Text style={Styles.headerTitle}>Задачи</Text>
        <IconButton icon="shape-outline" onPress={() => setEditLists(true) }/>
      </View>
     <ModalCreateCategory editLists={editLists} setEditLists={setEditLists}/>
    </View>
  )
}

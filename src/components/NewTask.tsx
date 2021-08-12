import React, {useState} from 'react'
import {View} from 'react-native'
import {FAB} from 'react-native-paper'
import Styles from '../styles/StyleSheets'
import {ModalCreateTask} from './ModalCreateTask'

export default function NewTask() {

  const [isVisible, setIsVisible] = useState(false)

  return (
    <View>
      <FAB visible={!isVisible} style={Styles.fab}  icon="plus" onPress={() => setIsVisible(true)}/>
      <ModalCreateTask setIsVisible={setIsVisible} isVisible={isVisible}/>
    </View>
  )
}

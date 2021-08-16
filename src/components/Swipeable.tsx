import React, {ReactNode, useState} from 'react'
import {View} from 'react-native'
import {useDispatch} from 'react-redux'
import {IconButton} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'
import Styles from '../styles/StyleSheets'
// @ts-ignore
import Swipeable from 'react-native-swipeable'
import {DeleteTask} from '../redux/AsyncActionCreators'
import {CreateTask} from '../screens/CreateTask'
import {TodoType} from '../utils/dataTypes'
import {CreateTaskScreenNavigationProp} from '../Main'

type PropsType = {
  children: ReactNode
  item: TodoType,
  taskType: 'completed' | 'current'
}

export const SwipeableCustom: React.FC<PropsType> = ({children, item, taskType}) => {
const navigation = useNavigation<CreateTaskScreenNavigationProp>()
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentListId, setCurrentListId] = useState(0)
  const [currentId, setCurrentId] = useState(0)

  const dispatch = useDispatch()

  const deleteHandler = (id: number, listId: number) => {
    dispatch(DeleteTask(id, listId))
  }

  const leftActionHandler = (title: string, listId: number, id: number) => {
    title && setCurrentTitle(title)
    listId && setCurrentListId(listId)
    id && setCurrentId(id)
  }

  const changeTaskHandler = () => {
    navigation.navigate('CreateTask', {
      currentListId,
      currentTitle,
      currentId
    })
  }

  return (
    <View>
      <Swipeable
        leftActionActivationDistance={70}
        onLeftActionRelease={() =>leftActionHandler(item.text, item.listId, item.id)}
        rightButtons={[
          <View style={Styles.rightSwipeButton}>
            <IconButton
              icon="trash-can-outline"
              color={'rgb(178,34,34)'}
              onPress={() => deleteHandler(item.id, item.listId)}
            />
          </View>
        ]}
        leftButtons={
          (taskType ==='current')
            ?
            [
          <View style={Styles.leftSwipeButton}>
            <IconButton
              icon="pencil"
              color={'rgb(178,34,34)'}
              onPress={changeTaskHandler}
            />
          </View>
        ]: null}
      >
        {children}
      </Swipeable>
    </View>
  )
}


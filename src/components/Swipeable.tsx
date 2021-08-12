import React, {ReactNode, useState} from 'react'
import {View} from 'react-native'
import {useDispatch} from 'react-redux'
import {IconButton} from 'react-native-paper'
import Styles from '../styles/StyleSheets'
// @ts-ignore
import Swipeable from 'react-native-swipeable'
import {DeleteTask} from '../redux/AsyncActionCreators'
import {ModalCreateTask} from './ModalCreateTask'
import {TodoType} from '../utils/dataTypes'

type PropsType = {
  children: ReactNode
  item: TodoType
}
export const SwipeableCustom: React.FC<PropsType> = ({children, item}) => {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTitle, setCurrentTitle] = useState('')
  const [currentListId, setCurrentListId] = useState(0)
  const [currentId, setCurrentId] = useState(0)

  const dispatch = useDispatch()

  const deleteHandler = (id: number, listId: number) => {
    dispatch(DeleteTask(id, listId))
  }

  const changeTaskHandler = (title: string, listId: number, id: number) => {
    title && setCurrentTitle(title)
    listId && setCurrentListId(listId)
    id && setCurrentId(id)
    setIsVisible(true)
  }

  return (
    <View>
      <Swipeable
        rightButtons={[
          <View style={Styles.rightSwipeButton}>
            <IconButton
              icon="trash-can-outline"
              color={'rgb(178,34,34)'}
              onPress={() => deleteHandler(item.id, item.listId)}
            />
          </View>
        ]}
        leftButtons={[
          <View style={Styles.leftSwipeButton}>
            <IconButton
              icon="pencil"
              color={'rgb(178,34,34)'}
              onPress={() => changeTaskHandler(item.text, item.listId, item.id)}
            />
          </View>
        ]}
      >
        {children}
      </Swipeable>
      <ModalCreateTask
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        currentTitle={currentTitle}
        currentListId={currentListId}
        currentId={currentId}
      />
    </View>
  )
}


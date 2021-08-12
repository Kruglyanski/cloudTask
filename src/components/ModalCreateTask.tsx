import React, {useEffect, useState} from 'react'
import {IconButton, Modal, Portal, RadioButton, Text} from 'react-native-paper'
import Styles from '../styles/StyleSheets'
import {TextInput, View} from 'react-native'
import {useDispatch} from 'react-redux'
import {PatchTask, SendTask} from '../redux/AsyncActionCreators'
import {useTypedSelector} from '../redux/Store'
import {ADDITIONAL_COLOR, ADDITIONAL_TEXT_COLOR} from '../utils/colors'

type PropsType = {
  setIsVisible: (arg: boolean) => void
  isVisible: boolean
  currentListId?: number | null
  currentId?: number | null
  currentTitle?: string | null

}
export const ModalCreateTask: React.FC<PropsType> = ({
                                                       setIsVisible,
                                                       isVisible,
                                                       currentListId,
                                                       currentTitle,
                                                       currentId

                                                     }) => {

  const lists = useTypedSelector(state => state.lists)

  const [textInputValue, setTextInputValue] = useState('')
  const [value, setValue] = useState('')
  const [messageVisibility, setMessageVisibility] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    currentListId && setValue(currentListId.toString())
    currentTitle && setTextInputValue(currentTitle)
  }, [currentTitle, currentListId])

  const inputHandler = (text: string) => {
    value && setMessageVisibility(false)
    setTextInputValue(text)
  }

  const radioHandler = (newValue: string) => {
    textInputValue && setMessageVisibility(false)
    setValue(newValue)
  }

  const createTask = () => {
    if (value && textInputValue) {
      currentId && currentListId
        ?
        dispatch(PatchTask(value, textInputValue, currentId, currentListId))
        :
        dispatch(SendTask(value, textInputValue))
      setValue('')
      setTextInputValue('')
      setIsVisible(false)
    } else {
      setMessageVisibility(true)
    }
  }

  return (
    <Portal>
      <Modal
        visible={isVisible}
        onDismiss={() => setIsVisible(false)}
        contentContainerStyle={Styles.modalNewTask}
      >
        <View style={Styles.newTaskElement}>
          <IconButton icon="arrow-left" onPress={() => setIsVisible(false)}/>
          <IconButton icon="check" color={ADDITIONAL_COLOR} onPress={createTask}/>
        </View>
        <TextInput
          style={Styles.newTaskInput}
          placeholder="Название задачи"
          placeholderTextColor={ADDITIONAL_TEXT_COLOR}
          value={textInputValue}
          onChangeText={inputHandler}
          onSubmitEditing={createTask}
        />
        {messageVisibility &&
        <Text style={Styles.validationMessage}>Введите название задачи и выберите категорию!</Text>}
        <Text style={Styles.newTaskCategory}>КАТЕГОРИЯ</Text>
        <View>
          <RadioButton.Group
            onValueChange={newValue => radioHandler(newValue)}
            value={value}
          >
            {
              lists && lists.map((item) => <View
                  key={item.id}
                >
                  <View style={Styles.addTaskCategoryItem}>
                    <Text>{item.title}</Text>
                    <RadioButton value={item.id.toString()} color={ADDITIONAL_COLOR}/>
                  </View>
                </View>
              )
            }
          </RadioButton.Group>
        </View>
      </Modal>
    </Portal>
  )
}

import React, {useRef, useState} from 'react'
import {useDispatch} from 'react-redux'
import {IconButton, Modal, Portal} from 'react-native-paper'
import {Text, TextInput, View} from 'react-native'
import {SendList} from '../redux/AsyncActionCreators'
import Styles from '../styles/StyleSheets'
import {ModalList} from './ModalList'
import {ADDITIONAL_TEXT_COLOR} from '../utils/colors'

type PropsType = {
  editLists: boolean
  setEditLists: (arg: boolean) => void
}

export const ModalCreateCategory: React.FC<PropsType> = ({editLists, setEditLists}) => {

  const [inputValue, setInputValue] = useState('')
  const textInput = useRef<TextInput>(null)
  const [messageVisibility, setMessageVisibility] = useState(false)
  const dispatch = useDispatch()

  const addCategory = () => {
    if (inputValue) {
      dispatch(SendList(inputValue))
      setEditLists(false)
      setInputValue('')
    } else {
      setMessageVisibility(true)
      textInput.current && textInput.current.focus()
    }
  }

  const inputHandler = (text: string) => {
    setMessageVisibility(false)
    setInputValue(text)
  }

  const focusHandler = () => {
    textInput.current && textInput.current.focus()
  }

  return (
    <Portal>
      <Modal
        visible={editLists}
        onDismiss={() => setEditLists(false)}
        contentContainerStyle={Styles.modalContainer}
      >
        <ModalList/>
        {messageVisibility && <Text style={Styles.validationMessage}>Введите название категории!</Text>}
        <View style={Styles.modalInput}>
          <TextInput
            ref={textInput}
            placeholder="Новая категория"
            placeholderTextColor={ADDITIONAL_TEXT_COLOR}
            value={inputValue}
            onChangeText={inputHandler}
            onSubmitEditing={addCategory}
            blurOnSubmit={false}
          />
          <IconButton
            icon="plus"
            color={ADDITIONAL_TEXT_COLOR}
            onPress={focusHandler}
          />
        </View>
      </Modal>
    </Portal>
  )
}

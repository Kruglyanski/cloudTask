import React, {useEffect, useState} from 'react'
import {IconButton, RadioButton, Text} from 'react-native-paper'
import Styles from '../styles/StyleSheets'
import {ScrollView, TextInput, View} from 'react-native'
import {useDispatch} from 'react-redux'
import {PatchTask, SendTask} from '../redux/AsyncActionCreators'
import {useTypedSelector} from '../redux/Store'
import {ADDITIONAL_COLOR, ADDITIONAL_TEXT_COLOR} from '../utils/colors'
import {CreateTaskScreenNavigationProp, CreateTaskScreenRouteProp} from '../Main'
import {useNavigation, useRoute} from '@react-navigation/native'


export const CreateTask = () => {
  const navigation = useNavigation<CreateTaskScreenNavigationProp>()
  const route = useRoute<CreateTaskScreenRouteProp>()

  const lists = useTypedSelector(state => state.lists)

  const [textInputValue, setTextInputValue] = useState('')
  const [value, setValue] = useState('')
  const [messageVisibility, setMessageVisibility] = useState(false)

  const dispatch = useDispatch()

  useEffect(() => {
    route.params && setValue(route.params.currentListId.toString())
    route.params && setTextInputValue(route.params.currentTitle)
  }, [route.params])

  const inputHandler = (text: string) => {
    value && setMessageVisibility(false)
    setTextInputValue(text)
  }

  const radioHandler = (newValue: string) => {
    textInputValue && setMessageVisibility(false)
    setValue(newValue)
  }

  const createTask = () => {
    const trimmedTextInputValue = textInputValue.trim()
    if (value && trimmedTextInputValue) {
      route.params && route.params.currentId && route.params.currentListId
        ?
        dispatch(PatchTask(value, trimmedTextInputValue, route.params.currentId))
        :
        dispatch(SendTask(value, trimmedTextInputValue))
      setValue('')
      setTextInputValue('')
      navigation.navigate('Home')

    } else {
      setMessageVisibility(true)
    }
  }

  return (
    <View style={Styles.createTaskContainer}>
      <View style={Styles.newTaskElement}>
        <IconButton icon="arrow-left" onPress={() => navigation.navigate('Home')}/>
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

      <RadioButton.Group
        onValueChange={radioHandler}
        value={value}
      >
        <View>
          <ScrollView>
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
          </ScrollView>
        </View>
      </RadioButton.Group>
    </View>
  )
}

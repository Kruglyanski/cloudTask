import React from 'react'
import {View} from 'react-native'
import {IconButton, RadioButton, Text} from 'react-native-paper'
import Styles from '../styles/StyleSheets'
import {CompletedList} from './CompletedList'
import {SwipeableCustom} from './Swipeable'
import {CheckContainer} from './CheckContainer'
import {TodoType} from '../utils/dataTypes'
import {ADDITIONAL_TEXT_COLOR} from '../utils/colors'

type PropsType = {
  title: string
  todos: Array<TodoType>

}

export const ToDoListItem: React.FC<PropsType> = ({title, todos}) => {

  return (
    <View>
      <Text style={Styles.todoListTitle}>{title.toUpperCase()}</Text>
      <View style={Styles.todoListView}>
        {todos.length ? todos.map((item) => !item.checked && <RadioButton.Group
            key={item.id}
            onValueChange={() => null}
            value={'second'}
          >
            <SwipeableCustom item={item} taskType='current' >
              <CheckContainer item={item} isChecked={true}>
                <View style={Styles.todoTitleContainer}>
                  <IconButton
                    icon="circle-outline"
                    color={ADDITIONAL_TEXT_COLOR}
                  />
                  <Text style={Styles.todoText}>{item.text}</Text>
                </View>
              </CheckContainer>
            </SwipeableCustom>
          </RadioButton.Group>)
          :
          <Text style={Styles.noTasksText}>В этой категории задач пока нет</Text>
        }
      </View>
      <CompletedList todos={todos}/>
    </View>
  )
}

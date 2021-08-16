import React, {useEffect, useState} from 'react'
import {TouchableOpacity, View} from 'react-native'
import {IconButton, Text} from 'react-native-paper'
import Styles from '../styles/StyleSheets'
import {ADDITIONAL_COLOR, ADDITIONAL_TEXT_COLOR} from '../utils/colors'
import {SwipeableCustom} from './Swipeable'
import {CheckContainer} from './CheckContainer'
import {TodoType} from '../utils/dataTypes'

type PropsType = {
  todos: Array<TodoType>
}

export const CompletedList: React.FC<PropsType> = ({todos}) => {

  const [checkedTodos, setCheckedTodos] = useState<Array<TodoType>>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const checked = todos && todos.filter((todo) => todo.checked)
    checked && setCheckedTodos(checked)
  }, [todos])

  return (
    <View>
      {
        checkedTodos.length
          ?
          <View>
            <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
              <View style={Styles.completedListToggle}>
                {
                  isOpen
                    ?
                    <IconButton
                      icon="chevron-down"
                      color={ADDITIONAL_TEXT_COLOR}
                    />
                    :
                    <IconButton
                      icon="chevron-up"
                      color={ADDITIONAL_TEXT_COLOR}
                    />
                }
                <Text style={Styles.completedListCompleted}>Завершенные</Text>

              </View>
            </TouchableOpacity>
            {
              isOpen
                ?
                <View>
                  {
                    checkedTodos && checkedTodos.map(item => <SwipeableCustom item={item} taskType='completed'>
                        <CheckContainer item={item} isChecked={false}>
                          <View style={Styles.completedListWrapper} key={item.id}>
                            <IconButton
                              icon="check" color={ADDITIONAL_COLOR}
                            />
                            <Text style={Styles.completedListText}>{item.text}</Text>
                          </View>
                        </CheckContainer>
                      </SwipeableCustom>
                    )
                  }
                </View>
                :
                null
            }
          </View>
          :
          null
      }
    </View>
  )
}




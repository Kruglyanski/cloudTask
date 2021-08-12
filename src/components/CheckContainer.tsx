import React, {ReactNode} from 'react'
import {useDispatch} from 'react-redux'
import {TouchableOpacity} from 'react-native'
import {CheckToggleTask} from '../redux/AsyncActionCreators'
import {TodoType} from '../utils/dataTypes'

type PropsType = {
  children: ReactNode
  item: TodoType
  isChecked: boolean
}
export const CheckContainer: React.FC<PropsType> = ({children, item, isChecked}) => {

  const dispatch = useDispatch()

  const checkToggleHandler = (item: TodoType) => {
    dispatch(CheckToggleTask(item, isChecked))
  }

  return (
    <TouchableOpacity onPress={() => checkToggleHandler(item)}>
      {children}
    </TouchableOpacity>
  )
}


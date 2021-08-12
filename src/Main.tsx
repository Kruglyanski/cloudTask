import React, {useEffect} from 'react'
import {ScrollView, Text, View} from 'react-native'
import Header from './components/Header'
import {ToDoList} from './components/ToDoList'
import MainStyle from './styles/MainStyle'
import NewTask from './components/NewTask'
import {GetList} from './redux/AsyncActionCreators'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from './redux/Store'

export default function Main() {
  const isLoading = useSelector((state: RootStateType) => state.isLoading)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetList())
  }, [])

  return (
    <View style={MainStyle.mainContainer}>
      <Header/>
      {
        isLoading
          ?
          <Text style={MainStyle.text}>Loading...</Text>
          :
          <ScrollView>
            <ToDoList/>
          </ScrollView>
      }
      <NewTask/>
    </View>
  )
}

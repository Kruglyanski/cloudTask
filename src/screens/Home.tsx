import React, {useEffect} from 'react'
import Header from '../components/Header'
import { ScrollView, Text, View} from 'react-native'
import MainStyle from '../styles/MainStyle'
import {Error} from '../components/Error'
import {ToDoList} from '../components/ToDoList'
import {useDispatch, useSelector} from 'react-redux'
import {RootStateType} from '../redux/Store'
import {GetList} from '../redux/AsyncActionCreators'
import Styles from '../styles/StyleSheets'
import {FAB} from 'react-native-paper'
import {CreateTask} from './CreateTask'

export const Home = ({navigation}: any) => {
  const isLoading = useSelector((state: RootStateType) => state.isLoading)
  const error = useSelector((state: RootStateType) => state.error)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(GetList())
  }, [])

  return (
    <View style={{flex: 1}}>
      <Header/>
      {
        isLoading
          ?
          <Text style={MainStyle.text}>Loading...</Text>
          :
          error
            ?
            <Error/>
            :
            <ScrollView>
              <ToDoList/>
            </ScrollView>
      }
      <FAB  style={Styles.fab}  icon="plus" onPress={() => navigation.navigate('CreateTask')}/>
    </View>
  )
}


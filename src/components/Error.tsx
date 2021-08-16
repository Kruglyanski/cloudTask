import React from 'react'
import {Text, View} from 'react-native'
import MainStyle from '../styles/MainStyle'
import {IconButton} from 'react-native-paper'
import {setError} from '../redux/Actions'
import {useDispatch} from 'react-redux'
import {useNavigation} from '@react-navigation/native'
import {CreateTaskScreenNavigationProp} from '../Main'

export const Error = () => {
  const navigation = useNavigation<CreateTaskScreenNavigationProp>()
  const dispatch = useDispatch()

  const reload = () => {
    navigation.navigate('Home')
    dispatch(setError(''))
  }

  return (
    <View style={MainStyle.error}>
      <Text style={MainStyle.errorText}>Что-то пошло не так!</Text>
      <IconButton
        icon="reload"
        color={'rgb(178,34,34)'}
        onPress={reload}
      />
    </View>
  )
}


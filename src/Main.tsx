import React from 'react'
import {createStackNavigator, StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'
import {Home} from './screens/Home'
import {View} from 'react-native'
import MainStyle from './styles/MainStyle'
import {CreateTask} from './screens/CreateTask'

type RootStackParamList = {
  Home: undefined
  CreateTask: {
    currentListId: string,
    currentTitle: string,
    currentId: number
  } | undefined
}

const {Screen, Navigator} = createStackNavigator<RootStackParamList>()

export type CreateTaskScreenRouteProp = RouteProp<RootStackParamList, 'CreateTask'>

export type CreateTaskScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateTask'>

export const Main: React.FC = () => {

  return (
    <View style={MainStyle.mainContainer}>
      <Navigator initialRouteName='Home'>
        <Screen
          name='Home'
          component={Home}
          options={{
            title: 'Home',
            headerShown: false
          }}
        />
        <Screen
          name='CreateTask'
          component={CreateTask}
          options={{
            title: 'CreateTask',
            headerShown: false
          }}
        />
      </Navigator>
    </View>
  )
}

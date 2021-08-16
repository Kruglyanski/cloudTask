import React from 'react'
import 'reflect-metadata'
import {Colors, DefaultTheme, Provider as PaperProvider} from 'react-native-paper'
import {LogBox} from 'react-native'
import {Provider as StoreProvider} from 'react-redux'
import {Main} from './src/Main'
import {store} from './src/redux/Store'
import {NavigationContainer} from '@react-navigation/native'

LogBox.ignoreAllLogs() //Swipeable выдаёт warnings

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.white,
    text: Colors.black
  }
}

export default function App() {
  return (
    <StoreProvider store={store}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <Main/>
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  )
}

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { HomeNavigator } from './src/navigators/homeNavigator/HomeNavigator'

export const App = () => {

  return (
    <NavigationContainer>
      <HomeNavigator></HomeNavigator>
    </NavigationContainer>
  )
}

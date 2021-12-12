import CheckBox from '@react-native-community/checkbox'
import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { TurnCard } from './components/TurnCard/TurnCard'

export const App = () => {

  return (
    <View>
      <Text>Hello World</Text>

      <TurnCard></TurnCard>

    </View>
  )
}

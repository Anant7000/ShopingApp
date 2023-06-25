import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BottomScreen from './BottomScreen'
import CheckingScreen from './CheckingScreen'

const Stack=createNativeStackNavigator();
const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }} name="Bottom" component={BottomScreen} />
      <Stack.Screen name="Check" component={CheckingScreen} />
    </Stack.Navigator>
  </NavigationContainer>

  )
}

export default Main

const styles = StyleSheet.create({})
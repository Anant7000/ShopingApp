import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Main from './Screens/Main'
import {Provider} from 'react-redux';
import { store } from './Screens/Redux/Store';

const App = () => {
  return (
    <Provider store={store}>
    <Main/>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CheckingScreen = () => {
  return (
    <View style={styles.Container}>
      <Text>CheckingScreen</Text>
    </View>
  )
}

export default CheckingScreen

const styles = StyleSheet.create({
    Container:{
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        backgroundColor:'blue',
    }
})
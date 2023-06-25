import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'



const UserScreen = ({navigation}) => {
  return (
    <View style={styles.Container} >
      <Text >UserScreen</Text>
    </View>
  )
}

export default UserScreen

const styles = StyleSheet.create({
  Container:{
    justifyContent:'center',
    alignItems:'center',
    padding:10,
    backgroundColor:'blue',
  }
})
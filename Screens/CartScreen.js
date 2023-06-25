/* eslint-disable react-native/no-inline-styles */
import { StyleSheet, Text, View,FlatList,Image,TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { removeFromCart} from './Redux/Action';

const CartScreen = () => {

  const cartData = useSelector(state => state.Reducers);

  const dispatch = useDispatch();

  return (
    <View style={{flex: 1}}>
    {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item,index }) => (
            <View >
               <Image style={{width:80,height:80}} source={{ uri: item.image }} />
              <Text >product</Text>
              <Text>${item.price}</Text>
              <Text>{index}</Text>
              <TouchableOpacity onPress={() =>  dispatch(removeFromCart(index))}  style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,paddingVertical:5,backgroundColor:'violet',borderRadius:5}}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>  )}
        />
      ) : (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text>No Items Added in Cart</Text>
        </View>
      )}
  </View>
  )
}

export default CartScreen

const styles = StyleSheet.create({


})
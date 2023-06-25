import { faClose,  faSearch,} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import LinearGradient from 'react-native-linear-gradient';

import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Text,Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { View, TextInput, Animated, StyleSheet, Pressable, Dimensions } from 'react-native';
import {useDispatch} from 'react-redux';
import {addItemToCart} from './Redux/Action';

const winw = Dimensions.get('screen').width;
//const winh = Dimensions.get('screen').height;

const HomeScreen = ({navigation}) => {
    const [isOpen2, setIsOpen2] = useState(false);
    
    const animatedWidth = useRef(new Animated.Value(40)).current;
    const animatedheight = useRef(new Animated.Value(40)).current;
    const [products, setProducts] = useState([]);
    const [loading, setloading] = useState(true);

    const dispatch = useDispatch();


     useEffect(() => {
        fetchData();
      }, []);
    useEffect(() => {
        animateWidth();
        animateheight();

    }, [isOpen2]);

    const fetchData = async () => {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          const data = await response.json();
          setProducts(data);
          setloading(false)
        } catch (error) {
          console.error(error);
        }
      };

    const animateWidth = () => {
        Animated.timing(animatedWidth, {
            toValue: isOpen2 ? winw - 20 : 45,
            duration: 300,
            useNativeDriver: false,
        }).start();


    };

    const animateheight = () => {
        Animated.spring(animatedheight, {
            toValue: isOpen2 ? 50 : 45,
            duration: 300,
            useNativeDriver: false,
        }).start();
    };



    const data = [
        { id: 'gadget', imageUri:require('../assets/gadget.png') },
        { id: 'appliances', imageUri:require('../assets/appliances.png') },
        { id: 'Beuty', imageUri: require('../assets/Beuty.png'), },
        { id: 'fashion', imageUri:require('../assets/fashion.png'), },
        { id: 'furniture', imageUri:require('../assets/furniture.png'), },
        { id: 'grocery', imageUri: require('../assets/grocery.png'), },
        { id: 'pharmacy', imageUri:require('../assets/pharmacy.webp'), },
        { id: 'smartphone', imageUri:require('../assets/smartphone.png'), },
        { id: 'toy', imageUri: require('../assets/toy.png'), },
        // Add more image objects here
      ];
    // const animatedStyle = {
    //   width: animatedWidth,
    //   // left: animatedWidth.interpolate({
    //   //   inputRange: [0, 200],
    //   //   outputRange: ['0%', '50%'], // Adjust the percentage values as needed
    //   // }),
    // };


    

  
    return (
        <View style={styles.container}>


            <LinearGradient start={{x: 0, y: 1}} end={{x: 1, y: 0.5}}  colors={['#5A96E3','green']} style={styles.headerView}>

                <View style={styles.Searchview}>
                    {isOpen2 ? '' : <Text style={styles.Codercart}>Coder Cart</Text>}
                    <Animated.View style={[styles.box, { width: animatedWidth, height: animatedheight, borderRadius: isOpen2 ? 20 : 100, }]} >
                        {isOpen2 && <TextInput style={{ fontSize: 20, width: 270, }} placeholder='Search' ></TextInput>}
                        <Pressable onPress={() => setIsOpen2(!isOpen2)}>
                            <FontAwesomeIcon style={{}} size={30} icon={isOpen2 ? faClose : faSearch} />
                        </Pressable>
                    </Animated.View>
                </View>
            </LinearGradient>
            
            <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
         <View style={{justifyContent:'center',alignItems:'center',height:80,marginBottom:15}}>
          <Image source={item.imageUri} style={styles.headerImages} />
          <Text>{item.id}</Text>
          </View>
        )}
      />


  {loading ? (
      <ActivityIndicator size={50} />
      ) : (
        <FlatList
        data={products}
        
        renderItem={({ item }) => (
          <View style={styles.productItem}>
             <Image style={styles.productImage} source={{ uri: item.image }} />
            <Text style={styles.productName}>product</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity  onPress={() =>  dispatch(addItemToCart(item))} style={{justifyContent:'center',alignItems:'center',paddingHorizontal:10,paddingVertical:5,backgroundColor:'violet',borderRadius:5}}>
              <Text>Add to cart</Text>
            </TouchableOpacity>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
       />
    )}

      

          
   
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingTop:60,
        flex: 1,
        //alignItems: 'center',

    },
    headerView:{
        paddingRight: 10,
         paddingLeft: 10,
         height:70,
         justifyContent:'center',
         //backgroundColor:'green',
    },
    headerImages:{
        width: 38,
        height: 38,
        marginHorizontal: 15,
    },
    Searchview: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        // backgroundColor:'pink',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    box: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#fff',
        position: 'absolute',
        flexDirection: 'row',
        right: 0,
    },
    Codercart: {
        fontSize: 25,
        fontWeight: '500',
        color:'black',
        padding:5,
       borderColor:'yellow',
       borderWidth:1,
       borderRadius:10     
    },
    productItem: {
        //borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 10,
        width:winw/2,
       // height:170,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        marginTop:5,
        
         
      },
      productName: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      productPrice: {
        fontSize: 14,
        color: 'gray',
      },
      productImage: {
        width: 100,
        height: 100,
        marginRight: 10,
      },
   

});
export default HomeScreen
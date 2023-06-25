import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import UserScreen from './UserScreen';
import CartScreen from './CartScreen';
import ExtraScreen from './ExtraScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faHome, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';


const Tab = createMaterialTopTabNavigator();

const tabScreens = [
    { name: 'Home', component: HomeScreen,icon: faHome  },
    { name: 'User', component: UserScreen,icon: faUser  },
    { name: 'Cart', component: CartScreen,icon: faShoppingCart  },
    { name: 'Extra', component: ExtraScreen,icon: faBars  },
   
  ];
const BottomScreen = () => {
  return (
    
       <Tab.Navigator
       tabBarPosition='bottom'

       screenOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          style: { backgroundColor: 'white' },
          labelStyle: { fontWeight: 'bold' },
          tabBarIndicatorStyle: {
            position:'absolute',
            height: 8, 
            top:0,
           borderBottomRightRadius:10,
           borderBottomLeftRadius:10,
           width:60,
           left:19
            
          },
          
        }}>

        {tabScreens.map((tabScreen) => (
          <Tab.Screen
            key={tabScreen.name}
            name={tabScreen.name}
            component={tabScreen.component}
            options={{
             tabBarLabel:() => null,
             
              tabBarIcon: ({}) => (
                <FontAwesomeIcon icon={tabScreen.icon} color={'black'} size={25} />
              ),
            }}
          />
        ))}
      </Tab.Navigator>
  )
}

export default BottomScreen

const styles = StyleSheet.create({})
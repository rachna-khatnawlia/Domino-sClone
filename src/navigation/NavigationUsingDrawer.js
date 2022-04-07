import * as React from 'react';

import styles from '../styles/styles';
import navigationStrings from './navigationStrings';

import Home from '../Screens/Home';
import Menu from '../Screens/Menu/Menu';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';
import DeliverOnTrain from '../Screens/DeliverOnTrain/DeliverOnTrain';
import Cart from '../Screens/cart/Cart';

import { Image } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function NavigationUsingDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>

      <Drawer.Screen name={navigationStrings.HOME} component={Home}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/images/home.png')}
              style={[focused ? styles.footerImg : styles.drawerInActive, { height: size, width: size }]}
            />
          ),
        }}
      />
      <Drawer.Screen name={navigationStrings.MENU} component={Menu}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/images/menu.png')}
              style={[focused ? styles.footerImg : styles.drawerInActive, { height: size, width: size }]}
            />
          ),
        }}
      />
      <Drawer.Screen name={navigationStrings.DELIVER_ON_TRAIN} component={DeliverOnTrain}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/images/train.png')}
              style={[focused ? styles.footerImg : styles.drawerInActive, { height: size, width: size }]}
            />
          ),
        }}
      />

      <Drawer.Screen name={navigationStrings.CART} component={Cart}
        options={{
          headerShown: false,
          drawerIcon: ({ focused, size }) => (
            <Image
              source={require('../assets/images/cart.png')}
              style={[focused ? styles.footerImg : styles.drawerInActive, { height: size, width: size }]}
            />
          ),
        }}
      />


      {/* <Drawer.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Drawer.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/> */}


    </Drawer.Navigator>
  );
}
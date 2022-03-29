import * as React from 'react';

import Home from '../Screens/Home';
import Menu from '../Screens/Menu/Menu';
import Login from '../Screens/Login/Login';
import SignUp from '../Screens/SignUp/SignUp';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function NavigationUsingDrawer() {
  return (
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
        <Drawer.Screen name="Login" component={Login} options={{headerShown:false}}/>
        <Drawer.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>


      </Drawer.Navigator>
  );
}
import * as React from 'react';

import Home from '../Screens/Home';
import Menu from '../Screens/Menu/Menu';

import { createDrawerNavigator } from '@react-navigation/drawer';
const Drawer = createDrawerNavigator();

export default function NavigationUsingDrawer() {
  return (
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Menu" component={Menu} options={{headerShown:false}}/>

      </Drawer.Navigator>
  );
}
import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './Home';
import Menu from './Menu/Menu';

const Drawer = createDrawerNavigator();

export default function NavigationUsingDrawer() {
  return (
      <Drawer.Navigator screenOptions={{headerShown:false}}>
        <Drawer.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Drawer.Screen name="Menu" component={Menu} options={{headerShown:false}}/>

      </Drawer.Navigator>
  );
}
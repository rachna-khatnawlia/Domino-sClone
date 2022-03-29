import React from 'react';
import Footer from '../Screens/Footer';

import Menu from '../Screens/Menu/Menu';
import Cart from'../Screens/cart/Cart';
import Evd from '../Screens/EVD/Evd';
import Home from '../Screens/Home';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NavigationUsingDrawer from './NavigationUsingDrawer';

import App from '../../App';

const Stack = createNativeStackNavigator();

function NavigationUsingStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Drawer'>
                <Stack.Screen name='Drawer' component={NavigationUsingDrawer} options={{headerShown:false}}/>
                <Stack.Screen name="Footer" component={Footer} options={{headerShown:false}}/>
                <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
                <Stack.Screen name="Evd" component={Evd} options={{headerShown:false}}/>
                <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>

                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>

            </Stack.Navigator>
        </NavigationContainer>
      );
}
export default NavigationUsingStack;
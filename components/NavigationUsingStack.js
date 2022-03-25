import React from 'react';
import Footer from './Footer';

import Menu from './Menu/Menu';
import Evd from './EVD/Evd';
import Cart from './cart/Cart';

import MenuHeader from './Menu/MenuHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';

import App from '../App';

const Stack = createNativeStackNavigator();

function FooterNavigationUsingStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Footer" component={Footer} options={{headerShown:false}}/>
                <Stack.Screen name="Menu" component={Menu} options={{headerShown:false}}/>
                <Stack.Screen name="Evd" component={Evd} options={{headerShown:false}}/>
                <Stack.Screen name="Cart" component={Cart} options={{headerShown:false}}/>

                <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>


            </Stack.Navigator>
        </NavigationContainer>
      );
}
export default FooterNavigationUsingStack;
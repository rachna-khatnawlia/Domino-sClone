import React from 'react';
import Footer from './Footer';

import Menu from './Menu/Menu';
import Evd from './EVD/Evd';
import Cart from './cart/Cart';

import MenuHeader from './Menu/MenuHeader';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigationUsingDrawer from './NavigationUsingDrawer';
import Home from './Home';

import App from '../App';

const Stack = createNativeStackNavigator();

function FooterNavigationUsingStack(){
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Drawer'>
            {/* <Stack.Navigator> */}
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
export default FooterNavigationUsingStack;

// import * as React from 'react';
// import { Button, View } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }
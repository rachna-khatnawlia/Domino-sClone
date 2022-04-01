import React from 'react';
import Footer from '../Screens/Footer';

import Menu from '../Screens/Menu/Menu';
import Cart from '../Screens/cart/Cart';
import Evd from '../Screens/EVD/Evd';
import Home from '../Screens/Home';
import DeliverOnTrain from '../Screens/DeliverOnTrain/DeliverOnTrain';
import navigationStrings from './navigationStrings';

import NavigationUsingDrawer from './NavigationUsingDrawer';

function MainStack(Stack) {
    return (
        <>
            <Stack.Screen name='Drawer' component={NavigationUsingDrawer} options={{ headerShown: false }} />
            <Stack.Screen name="Footer" component={Footer} options={{ headerShown: false }} />
            <Stack.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name="Evd" component={Evd} options={{ headerShown: false }} />
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />

            <Stack.Screen name={navigationStrings.HOME} component={Home} options={{ headerShown: false }} />

            {/* <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/> */}

            <Stack.Screen name="DeliverOnTrain" component={DeliverOnTrain} options={{ headerShown: false }} />
        </>
    );
}
export default MainStack;
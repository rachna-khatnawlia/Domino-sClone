import React from 'react';
import Footer from '../Screens/Footer';

import Menu from '../Screens/Menu/Menu';
import Cart from '../Screens/cart/Cart';
import Evd from '../Screens/EVD/Evd';
import Home from '../Screens/Home';
import DeliverOnTrain from '../Screens/DeliverOnTrain/DeliverOnTrain';
import navigationStrings from './navigationStrings';

import NavigationUsingDrawer from './NavigationUsingDrawer';
import SearchMenu from '../Screens/Menu/SearchMenu';

function MainStack(Stack) {
    return (
        <>
            <Stack.Screen name={navigationStrings.DRAWER} component={NavigationUsingDrawer} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.FOOTER} component={Footer} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.MENU} component={Menu} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.EVD} component={Evd} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.CART} component={Cart} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.HOME} component={Home} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.DELIVER_ON_TRAIN} component={DeliverOnTrain} options={{ headerShown: false }} />
            <Stack.Screen name={navigationStrings.SEARCH_MENU} component={SearchMenu} options={{ headerShown: true }} />
            <Stack.Screen name={navigationStrings.EVD} component={SearchMenu} options={{ headerShown: true }} />

        </>
    );
}
export default MainStack;
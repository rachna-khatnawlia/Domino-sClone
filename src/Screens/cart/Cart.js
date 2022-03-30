import React from 'react';

//importing externnal file
import styles from "../../styles/styles";

import {
    SafeAreaView,
    StatusBar,
    Text, View, Image, TouchableOpacity
} from 'react-native';
import CartHeader from '../../Components/CartHeader';
import CartBody from '../../Components/CartBody';

const Cart = ({ navigation }) => {
    return (
        <SafeAreaView>
            <StatusBar />

            {/* ---------->Cart header------------------ */}
            <CartHeader navigation={navigation} />

            {/* ---------->Cart Body------------------ */}
           <CartBody navigation={navigation} />
           
        </SafeAreaView>
    );
};

export default Cart;
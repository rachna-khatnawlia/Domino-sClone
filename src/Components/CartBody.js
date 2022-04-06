import React from 'react';

//importing externnal file
import styles from "../styles/styles";

import {
    SafeAreaView,
    StatusBar,
    Text, View, Image, TouchableOpacity
} from 'react-native';

const CartBody = ({ navigation }) => {
    return (

        // ---------->Cart Body------------------
        <View style={[styles.cartBody]}>

            {/* cart Image */}
            <Image
                source={require('../assets/images/cart/cartImg.jpeg')}
                style={{ borderRadius: 75, height: 150, width: 150, alignSelf: 'center', marginBottom: 25 }}
            />

            {/* cart Text */}
            <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: "100" }}>YOUR CART IS EXMPTY</Text>
            <Text style={{ textAlign: 'center', fontSize: 14, paddingVertical: 5, fontWeight: "300" }}>Please add some items from the menu</Text>

            {/* cart Explore Button */}
            <TouchableOpacity onPress={() => { navigation.navigate('Menu') }}>
                <View style={{ backgroundColor: '#479e48', borderRadius: 4, alignSelf: 'center', marginTop: 15 }}>
                    <Text style={{ paddingVertical: 8, paddingHorizontal: 15, color: 'white', fontWeight: 'bold' }}>EXPLORE MENU</Text>
                </View>
            </TouchableOpacity>

        </View>

    );
};

export default CartBody;
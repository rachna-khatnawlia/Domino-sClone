import React from 'react';

//importing externnal file
import styles from "../styles/styles";
import ImagePath from '../constants/ImagePath';

import{
    Text, View, Image, TouchableOpacity
} from 'react-native';

const CartBody = ({ navigation }) => {
    return (

        // ---------->Cart Body------------------
        <View style={[styles.cartBody]}>

            {/* cart Image */}
            <Image
                source={ImagePath.cartImg}
                style={styles.cartImgStyle}
            />

            {/* cart Text */}
            <Text style={styles.cartPageText1}>YOUR CART IS EXMPTY</Text>
            <Text style={styles.cartPageText2}>Please add some items from the menu</Text>

            {/* cart Explore Button */}
            <TouchableOpacity onPress={() => { navigation.navigate('Menu') }}>
                <View style={styles.logSignBtn}>
                    <Text style={styles.logBtntxt}>EXPLORE MENU</Text>
                </View>
            </TouchableOpacity>

        </View>

    );
};

export default CartBody;
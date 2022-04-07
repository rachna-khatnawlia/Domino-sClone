import React from 'react';

//importing externnal file
import styles from "../styles/styles";

import {
    SafeAreaView,
    StatusBar,
    Text, View, Image, TouchableOpacity
} from 'react-native';
import ImagePath from '../constants/ImagePath';

const CartHeader = ({ navigation }) => {
    return (
      
            // ---------->Cart header------------------ 
            <View style={styles.expMenu}>
                <View style={styles.Headsection1}>

                    <View style={styles.Headsection1a}>
                        <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                            <Image
                                source={ImagePath.backwardArrow}
                                style={styles.Headsection1Img}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={styles.Headsection1b}>
                        <Text style={styles.headerText}>Empty Cart</Text>
                    </View>
                    
                </View>
            </View>


    );
};

export default CartHeader;
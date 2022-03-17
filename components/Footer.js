import React from 'react';
import styles from '../styles.js';

import { View, Text, Image,
} from 'react-native';

const Footer = () => {
    return (
        <View style={styles.bottomView}>
            <View style={styles.footerbox}>
                <Image source={require('./Images/menu.png')} style={styles.footerImg} />
                <Text style={styles.footertext}>Menu</Text>
            </View>
            <View style={styles.footerbox}>
                <Image source={require('./Images/tag.png')} style={styles.footerImg} />
                <Text  style={styles.footertext}>EDV</Text>
            </View>
            <View style={styles.footerbox}>
                <Image source={require('./Images/pizza.png')} style={styles.footerImg} />
                <Text  style={styles.footertext}>Pizza Pals</Text>
            </View>
            <View style={styles.footerbox}>
                <Image source={require('./Images/cart1.png')} style={styles.footerImg} />
                <Text  style={styles.footertext}>Cart</Text>
            </View>
        </View>
    );
};
export default Footer;

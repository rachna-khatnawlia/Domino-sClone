import React from 'react';
import styles from '../styles/styles';

import { 
    Image, 
    View, 
    Text, 
    TouchableOpacity
} from 'react-native';

function Footer({navigation}){
    return (
        <View style={styles.bottomView}>
            <View style={styles.footerbox}>
                <TouchableOpacity onPress={()=>navigation.navigate('Menu')}>
                    {/* <Image source={require('.../assets/images/menu.png')} style={styles.footerImg} /> */}
                    <Image source={require('../assets/images/menu.png')} style={styles.footerImg} />
                    <Text style={styles.footertext}>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerbox}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Evd')}}>
                    <Image source={require('../assets/images/tag.png')} style={styles.footerImg} />
                    <Text  style={styles.footertext}>EDV</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerbox}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                    <Image source={require('../assets/images/cart1.png')} style={styles.footerImg} />
                    <Text  style={styles.footertext}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>       
    );
};
export default Footer;
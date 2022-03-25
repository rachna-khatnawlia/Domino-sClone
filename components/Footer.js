import React from 'react';
import styles from '../styles';

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
                    <Image source={require('./Images/menu.png')} style={styles.footerImg} />
                    <Text style={styles.footertext}>Menu</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerbox}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Evd')}}>
                    <Image source={require('./Images/tag.png')} style={styles.footerImg} />
                    <Text  style={styles.footertext}>EDV</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footerbox}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Cart')}}>
                    <Image source={require('./Images/cart1.png')} style={styles.footerImg} />
                    <Text  style={styles.footertext}>Cart</Text>
                </TouchableOpacity>
            </View>
        </View>       
    );
};
export default Footer;
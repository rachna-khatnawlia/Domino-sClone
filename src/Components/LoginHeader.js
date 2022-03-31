import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';

export default function LoginHeader({ navigation }) {
    return (
        <View style={styles.expMenu}>
            <View style={[styles.Headsection1]}>
                <View style={styles.Headsection1a}>
                    {/* <TouchableOpacity onPress={() => { navigation.navigate('Home') }}>
                        <Image
                            source={require('../assets/images/HeaderImages/backwardArrow.png')}
                            style={styles.Headsection1Img}
                        />
                    </TouchableOpacity> */}
                </View>

                <View style={[styles.Headsection1b]}>
                    <Text style={{ fontSize: 16, color: '#fff', fontWeight: '500', textAlign: 'center' }}>Login Screen</Text>
                </View>
            </View>
        </View>
    );
}

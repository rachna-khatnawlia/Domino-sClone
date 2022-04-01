import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import GreenBtn from './GreenBtn';

export default function LoginBody({ navigation, value }) {
    return (
        <View style={styles.LoginBody}>

            <Image
                source={require('../assets/images/login/bg.jpeg')}
                style={styles.loginBgImg}
            />

            <View style={styles.blockUnderLoginImg}>
                <Text style={styles.blockUnderLoginImg1}>WELCOME</Text>
                <Text style={styles.blockUnderLoginImg2}>Sign in to continue to Domino's</Text>
            </View>

            <View style={styles.loginBg}>
                <TextInput
                    style={styles.input}
                    placeholder={"Mobile No.*"}
                />
                <TextInput
                    style={styles.input}
                    placeholder={"Domino's Password"}
                />
                <GreenBtn value="SUBMIT"/>
                <TouchableOpacity>
                    <Text style={styles.forget}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => { navigation.navigate('SignUp') }}>
                <Text>Signup</Text>
            </TouchableOpacity>

        </View>
    );
}

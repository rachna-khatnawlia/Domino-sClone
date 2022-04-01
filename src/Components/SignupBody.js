import React from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import GreenBtn from './GreenBtn';

export default function SignupBody({ navigation, value }) {
    return (
        <View style={styles.signupBody}>

            <Image
                source={require('../assets/images/login/signupBg.jpeg')}
                style={styles.signupBgImg}
            />

            <View style={styles.loginBg}>
                <TextInput style={styles.input} placeholder={"Full Name"} />
                <TextInput style={styles.input} placeholder={"Mobile No.*"} />
                <TextInput style={styles.input} placeholder={"Password"} />
                <TextInput style={styles.input} placeholder={"Repeat Password"} />

                <GreenBtn value="SUBMIT"/>
                
                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.forget}>Already Have an Account? LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

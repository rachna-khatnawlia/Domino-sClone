import React, { useState } from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

import GreenBtn from './GreenBtn';

export default function SignupBody({ navigation, value }) {
    const [name, setName] = useState('')
    const [mob, setMob] = useState('')
    const [pass, setPass] = useState('')

    return (
        <View style={styles.signupBody}>

            <Image
                source={require('../assets/images/login/signupBg.jpeg')}
                style={styles.signupBgImg}
            />

            <View style={styles.loginBg}>
                <PhoneInput placeholder={"Mobile No.*"}
                    containerStyle={{ height: 48, width: '92%', borderRadius: 3 }}
                    onChangeText={(value) => setMob(value)} />
                <TextInput style={styles.input} placeholder={"Full Name"}
                    onChangeText={(value) => setName(value)} />
                <TextInput style={styles.input} placeholder={"Password"}
                    onChangeText={(value) => setPass(value)}
                    secureTextEntry={true} />
                <TextInput style={styles.input} placeholder={"Repeat Password"} secureTextEntry={true} />

                <Text>Your name is {name}, Mobile no. is {mob}, and password is {pass}</Text>

                <GreenBtn value="SUBMIT" />

                <TouchableOpacity onPress={() => { navigation.navigate('Login') }}>
                    <Text style={styles.forget}>Already Have an Account? LOGIN</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

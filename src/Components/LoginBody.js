import React, { useState } from 'react';
import styles from '../styles/styles';
import { View, Text, TouchableOpacity, Image, TextInput, Pressable } from 'react-native';
import PhoneInput from "react-native-phone-number-input";

import GreenBtn from './GreenBtn';

export default function LoginBody({ navigation, value }) {
    const [pass, setPass] = useState('')
    const [mob, setMob] = useState('')

    const [passwordVisible, setPasswordVisible] = useState(true)
    function handlePasswordEye() {
        if (passwordVisible) {
            setPasswordVisible(false)
        } else {
            setPasswordVisible(true)
        }
    }
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
                {/* 
                    <TextInput
                        style={styles.input}
                        placeholder={"Mobile No.*"}
                    /> 
                */}


                {/* Mobile Input */}
                <PhoneInput
                    placeholder={"Mobile No.*"}
                    containerStyle={{ height: 50, width: '98%', borderRadius: 3 }}
                    onChangeText={(value) => setMob(value)}
                />
                {/* Password */}
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        onChangeText={(value) => setPass(value)}
                        secureTextEntry={passwordVisible}
                    />
                    <TouchableOpacity onPress={handlePasswordEye} style={{ position: 'absolute', right: 20, top: 21 }}>
                        <Image
                            // source={(passwordVisible)?require('../assets/images/login/hidePass.png'):require('../assets/images/login/showPass.png')}
                            source={(passwordVisible) ? require('../assets/images/login/hidePass.png') : require('../assets/images/login/showPass.png')}
                            style={{ height: 15, width: 20 }}
                        />
                    </TouchableOpacity>
                </View>
                <GreenBtn value="SUBMIT" />

                <TouchableOpacity>
                    <Text style={styles.forget}>FORGOT PASSWORD?</Text>
                </TouchableOpacity>
            </View>

            
            <TouchableOpacity style={{ position: 'absolute', bottom: 155, left: 70 }} onPress={() => { navigation.navigate('SignUp') }}>
                <Text style={styles.forget}>Don't Have an Account? Create Now</Text>
            </TouchableOpacity>

        </View>
    );
}
